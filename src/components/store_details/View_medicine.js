import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux";
import Navbar from "../Navbar";
import checkAuth from "../auth/checkAuth"

function ViewPost() {
    const user = useSelector((store) => store.auth.user);
    var {postId} = useParams()
    var [post,setPost] = useState({name:'',company:'',expiry_date:''})
    useEffect(() => {
        axios.get(`https://medicalstore.mashupstack.com/api/medicine/${postId}`, {
            headers: { 'Authorization':"Bearer "+ user.token }, 
        })
        .then(response => {
            setPost(response.data);
        })
        .catch(error => {
            console.error("Error fetching post:", error);
        });
    }, [postId, user.token]);
    return <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-header"><h3>Medicine Name:{post.name}</h3></div>
                        <div className="card-body">Company Name:{post.company}</div>
                        <div className="card-body">Expiry Date:{post.expiry_date}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default checkAuth(ViewPost);