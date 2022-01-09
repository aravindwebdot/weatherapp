import {React,useState,useEffect} from 'react';
import axios from 'axios';
import './Card.css';



export default function Card(props) {
    const [fcity,setfcity]=useState([0]);
    const [city, setcity] = useState(0);
const [text, settext] = useState(0);
const [temp, settemp] = useState(0);
const [img,setimg]=useState(null);
    useEffect(()=>{
        axios
        .get(
            `https://api.weatherapi.com/v1/current.json?key=7396e3a3d8594762b92120201220501&q=${props.ncity}&aqi=no`
        )
        .then((response) => {
        
          setfcity(response.data);
          setcity(response.data.location.name);
          settext(response.data.current.condition.text);
          settemp(response.data.current.temp_c);
          setimg(response.data.current.condition.icon);
          
        
        
        });
      },[props.ncity]);
    return (
        <div className='col-lg-2 col-md-2 col-sm-6'>
                    <div className='card text-center p-4'>
                        <h4>{city}</h4>
                        <img src={img} alt="hello" />
                        <h5><b>{temp}<sup>o</sup>C</b></h5>
                        <h6>{text}</h6>

                    </div>
                </div>
    )
}
