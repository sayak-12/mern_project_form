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
              <p style={{fontSize: "10px",float: "right", marginBottom: "0", marginTop: "5px"}}>{moment((rev.createdAt)).fromNow()}</p>
            </div>
          </div>
        )
      })}</div>
    </>
  );
};

export default Works;
