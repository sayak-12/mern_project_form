import "./pagesGlobal.css";
const Form = () => {

  const handleSubmit = (event)=>{
    event.preventDefault();
    const emailInput = document.getElementById("exampleInputEmail1").value;
    const commentInput = document.getElementById("exampleInputPassword1").value;
    const checkboxInput = document.getElementById("exampleCheck1").value;
    console.log("Email: ", emailInput.value);
    console.log("Password: ", commentInput.value);
    console.log("Checked: ", checkboxInput.checked);
    console.log("form submitted");

  }
  return (
    <>
      <form className="form">
        <div className="mb-3 w-50">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We&apos;ll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3  w-50">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Your message:
          </label>
          <textarea name="" cols="30" rows="10" className="form-control" id="exampleInputPassword1"></textarea>
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
        <button type="submit" className="btn btn-primary  w-50" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;
