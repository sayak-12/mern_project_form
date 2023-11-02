import "./pagesGlobal.css";
import { useEffect, useState } from "react";
import {Link, useNavigate } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import server_url from "../helpers/url.js";
const Works = () => {
  const navigate = useNavigate();
  const [rev, setRev] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
        .get(`${server_url}/`)
        .then((response) => {
          setLoading(false);
          if (response.data) {
            console.log(response.data);
            if (response.data.length == 0) {
              setRev(null);
              console.log("No data in messages");
            }
            setRev(response.data);
          } else {
            setRev(null);
          }
        })
  }, [])
  const deleteEntry = (id) => {
    axios.delete(`${server_url}/delete/${id}`).then((response) => {
      setRev(response.data.content)
      navigate("/works");
    })
    .catch((err) => {
      alert(err.message);
      navigate("/works");
    })
  }
  return (
    <>
      <h2 className="h2 text-center mb-3 ">Our Reviews</h2>
      {loading && <p className="text-center my-3">loading...</p>}
      <div className="d-flex p-4 m-3">
        
      {rev && rev.length === 0 ? (<h2 className="h2 text-center mb-3 w-100 text-secondary">No messages to show</h2>): (rev && rev.map((rev) =>{
        return (
          <div className="card mx-2" style={{ width: "12rem" }}  key={rev._id}>
            <div className="card-body">
              <h5 className="card-title">{rev.name}</h5>
              <p className="card-text">{rev.message}</p>
              <p style={{fontSize: "10px",marginBottom: "10px"}}>{moment((rev.createdAt)).fromNow()}</p>
              <div className="d-flex justify-content-between" role="group" aria-label="Basic example">
                <Link to={`/edit/${rev._id}`}><button type="button" className="btn btn-outline-success btn-sm px-2">update</button></Link>
                <button type="button" className="btn btn-danger btn-sm px-2" onClick={()=>{deleteEntry(rev._id)}}>delete</button>
              </div>
            </div>
          </div>
        )
      }))}</div>
    </>
  );
};

export default Works;
