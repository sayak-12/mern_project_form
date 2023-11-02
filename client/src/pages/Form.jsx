import "./pagesGlobal.css";
import { useState } from "react";
import server_url from "../helpers/url";
import axios from "axios";
const Form = () => {
  const [msg, setMsg] = useState({
    name: "",
    message: "",
  });
  const [error, setError] = useState(null);
  const [res, setRes] = useState(null);

  const handlechange = (e) => {
    setMsg({ ...msg, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (msg.name === "" || msg.message === "") {
      setError("Please fill out all fields");
    } else {
      setError(null);
      axios
        .post(`${server_url}/contact`, msg)
        .then((response) => {
          if (response.data.feedback == "Message successfully sent!") {
            setRes(response.data.feedback);
          } else {
            setRes(null);
            setError(response.data.feedback);
          }
        })
    }
  };
  return (
    <>
      <form className="form">
        <div className="error" style={{ color: "red", fontWeight: "bold" }}>
          {error}
        </div>
        <div className="res" style={{ color: "green", fontWeight: "bold"  }}>
          {res}
        </div>
        <div className="mb-3 w-50">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            name="name"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={msg.name}
            onChange={handlechange}
          />
          <div id="emailHelp" className="form-text">
            We&apos;ll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3  w-50">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Your message:
          </label>
          <textarea
            cols="30"
            rows="10"
            className="form-control"
            id="exampleInputPassword1"
            name="message"
            defaultValue={msg.message}
            onChange={handlechange}
          ></textarea>
        </div>
        <div className="mb-3 form-check  w-50">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button
          type="submit"
          className="btn btn-primary  w-50"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;
