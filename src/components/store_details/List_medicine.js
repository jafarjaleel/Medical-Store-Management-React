import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import checkAuth from "../auth/checkAuth";
import Navbar from "../Navbar";
import PostListItem from "./PostListItem";
import { useSelector } from "react-redux";

function ListPosts() {
  
  const user = useSelector((store) => store.auth.user);
  const [allPosts, setAllPosts] = useState([]); 
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [SearchTerm, setSearchTerm] = useState("");
  const handleSearchInputChange = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.value);
  };
  useEffect(() => {
    
    var filteredItems = allPosts.filter((item) =>
      item.name.toLowerCase().startsWith(SearchTerm.toLowerCase())
    );
    setFilteredPosts(filteredItems);
  }, [SearchTerm, allPosts]);



  const handleSearch = (event) => {
    event.preventDefault();
    if (SearchTerm.trim() === "") {
      // If the search input is empty, reset the filteredPosts state.
      setFilteredPosts(allPosts);
    } else {
      // Otherwise, filter the posts based on the search term.
      var filteredItems = allPosts.filter((item) =>
        item.name.toLowerCase().startsWith(SearchTerm.toLowerCase())
      );
      setFilteredPosts(filteredItems);
    }
  };

    function fetchPosts() {
      if (user) {
        axios
          .get("https://medicalstore.mashupstack.com/api/medicine", {
            headers: { 'Authorization':"Bearer "+ user.token}, 
          })
          .then((response) => {
            setAllPosts(response.data);
            setFilteredPosts(response.data); 
          })
          .catch((error) => {
            console.error("Error fetching posts:", error);
          });
      }
    }
    
    useEffect(() => {
      fetchPosts();
    }, []);

  return (
    <div>
      <Navbar />
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <form>
              <label>Search : </label>
              <input
                type="text"
                value={SearchTerm}
                onChange={handleSearchInputChange}
              />{" "}
              &nbsp;
              <button
                className="btn btn-small btn-success"
                type="button"
                onClick={handleSearch}
              >
                Search
              </button>
              &nbsp;
            </form>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center my-4">MEDICINES</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-8 offset-2">
            <Link to="/stock/details/create/" className="btn btn-info mb-2">
              Add Medicines
            </Link>
            {filteredPosts.length === 0 ? (
              <p>No Medicines found.</p>
            ) : (
              filteredPosts.map((post) => (
                <PostListItem
                  key={post.id}
                  post={post}
                  refresh={fetchPosts}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default checkAuth(ListPosts);
