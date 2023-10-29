import "./pagesGlobal.css";
import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
const Works = () => {
  const [rev, setRev] = useState(null);
  useEffect(() => {
    axios
        .get("http://localhost:3000/")
        .then((response) => {
          if (response.data) {
            console.log(response.data);
            setRev(response.data);
          } else {
            setRev(["No message to display"]);
          }
        })
  }, [])
  const updateEntry = (id) => {
    console.log(id);
  }
  const deleteEntry = (id) => {
    console.log(id);
  }
  return (
    <>
      <h2 className="h2 text-center mb-3 ">Our Reviews</h2>
      <div className="d-flex p-4 m-3">
      {rev && rev.map((rev) =>{
        return (
          <div className="card mx-2" style={{ width: "12rem" }}  key={rev._id}>
            <div className="card-body">
              <h5 className="card-title">{rev.name}</h5>
              <p className="card-text">{rev.message}</p>
              <p style={{fontSize: "10px",marginBottom: "10px"}}>{moment((rev.createdAt)).fromNow()}</p>
              <div className="d-flex justify-content-between" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-outline-success btn-sm px-2" onClick={()=>{updateEntry(rev._id)}}>update</button>
                <button type="button" className="btn btn-danger btn-sm px-2" onClick={()=>{deleteEntry(rev._id)}}>delete</button>
              </div>
            </div>
          </div>
        )
      })}</div>
    </>
  );
};

export default Works;
