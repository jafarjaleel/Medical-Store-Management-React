import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import checkAuth from "../auth/checkAuth";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from "react";


function PostListItem(props) {
  const user = useSelector((store) => store.auth.user);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function deletePost() {
    axios
      .delete(
        `https://medicalstore.mashupstack.com/api/medicine/${props.post.id}`,
        {
          headers: { Authorization: "Bearer " + user.token },
        }
      )
      .then((response) => {
        alert(response.data.message);
        handleShow();
        props.refresh();
      });
  }

  return (
    <div className="card">
      <div className="card-body">
        {props.post.name}
        <div>
          <Button variant="btn btn-primary float-right" onClick={handleShow}>
            Delete
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body>Do you want to delete</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={deletePost}>
                Delete
              </Button>
            </Modal.Footer>
          </Modal>
        </div>

        <Link
          to={"/stock/details/" + props.post.id + "/edit"}
          className="btn btn-primary float-right"
        >
          Edit
        </Link>
        <Link
          to={"/stock/details/" + props.post.id}
          className="btn btn-info float-right"
        >
          View
        </Link>
      </div>
    </div>
  );
}
export default checkAuth(PostListItem);
