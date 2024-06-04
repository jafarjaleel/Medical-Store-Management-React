import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import checkAuth from "../auth/checkAuth";
import { useSelector } from "react-redux";

function EditPost() {
    const user = useSelector((store) => store.auth.user);
    const {postId} = useParams();
    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [expiry_date,setDate ] = useState('');
    var navigate = useNavigate();
    useEffect(() => {
        axios.get(`https://medicalstore.mashupstack.com/api/medicine/${postId}`, {
            headers: { 'Authorization':"Bearer "+ user.token }, 
        }).then(response => {
            setName(response.data.name);
            setCompany(response.data.company);
            setDate(response.data.expiry_date);
        }).catch(error => {
            console.error("Error fetching medicine:", error);
        });
    }, [postId, user.token]);
    function updatePost() {
        axios.post(`https://medicalstore.mashupstack.com/api/medicine/${postId}`, {
            name: name,
            company: company,
            expiry_date: expiry_date
        }, {
            headers: { 'Authorization':"Bearer "+ user.token }, 
        })
        .then(response => {
            alert(response.data.message);
            navigate('/stock/details/');
        })
        .catch(error => {
            console.error("Error updating post:", error);
        });
    }
    return <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col-8 offset-2">
                    <h1 className="text-center">Edit Medicine Details</h1>
                    <div className="form-group">
                        <label>name:</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        value={name} 
                        onChange={(event)=>{setName(event.target.value)}}
                        />
                    </div>
                    <div className="form-group">
                        <label>Company:</label>
                        <input
                        type="text"
                        className="form-control" 
                        value={company} 
                        onChange={(event)=>{setCompany(event.target.value)}}
                        />
                    </div>
                    <div className="form-group">
                        <label>Expiry_date:</label>
                        <input 
                        type="date"
                        className="form-control" 
                        value={expiry_date} 
                        onChange={(event)=>{setDate(event.target.value)}}
                        />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary float-right" onClick={updatePost}>Submit</button>
                    </div>                    
                </div>
            </div>
        </div>
    </div>
}

export default checkAuth(EditPost);