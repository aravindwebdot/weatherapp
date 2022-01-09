import { React } from "react";
import './info.css';

export default function Infopage(props) {
  
  return (
    <div className="info text-center pt-08">
         <h2 className="text-white">Aravind Weather App</h2>
   
      <h4 className="text-white">{props.cloud}</h4>
      <h2 className="text-white"><b>{props.temp}<sup>o</sup>C</b></h2>
      <img src={props.img} alt="hello" />
    </div>
  );
}
