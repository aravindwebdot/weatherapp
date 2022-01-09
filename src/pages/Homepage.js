import { React, useState } from "react";
import "./home.css";



export default function Homepage(props) {
  const [input, setinput] = useState("hyderabad");
  const [citydata, setcitydata] = useState();

  const City = (e) => {
    setinput(e.target.value);
    // console.log(input);
  };


  const onSubmit = (e) => {
    e.preventDefault();
    props.icity(input);
  
  };





  return (
    <div className="">  
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 text-center offset-lg-3">
            <form onSubmit={onSubmit}>
              <div className="mb-3">
           

                <input
                  type="text"
                  className="form-control searchf"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  onChange={City}
                  placeholder="Enter City"
                />
              
              </div>

          
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
