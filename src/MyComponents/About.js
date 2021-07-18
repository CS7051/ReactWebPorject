import React, { useState } from "react";

const About = () => {

  let val = "Here we go."

  const [data, setData] = useState(val);
  const [name, setName] = useState("");
  const [tnc, setTnc] = useState(false);
  const [nifty, setNifty] = useState("");

  const updateData = () => {
    setData("I am a React Hacker.");
  }

  const getFormData = (e) => {
    e.preventDefault();
    console.log("Form data : ", name, nifty, tnc);

  }

  return (
    <div>
      This is an About Component and {data}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ipsa, totam
      </p>
      <button onClick={updateData}>About</button>
      <form onSubmit={getFormData}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Todo title</label>
          <input type="text" placeholder="Please enter your name" onChange={(e) => setName(e.target.value)} /> <br></br>
          <select onChange={(e) => setNifty(e.target.value)}>
            <option>Select option </option>
            <option>NIFTY will close above 16000</option>
            <option>NIFTY Will close  at 16000</option>
            <option>NIFTY Will close below 16000</option>
          </select> <br></br>
          <input type="checkbox" onChange={(e) => setTnc(e.target.checked)} /> <span>Accept Terms and Conditions</span>
          <br></br>
          <br></br>
          <button type="submit" className="btn btn-sm btn-success">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default About;
