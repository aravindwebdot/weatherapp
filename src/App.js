
import './App.css';
import Homepage from './pages/Homepage';
import {useState,useEffect} from 'react';
import Infopage from './pages/Infopage';
import axios from 'axios';
import Template from './pages/Template';
import Card from './pages/Card';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import image from './assets/bg.jpg';
import image1 from './assets/bg1.jpg';
import image2 from './assets/bg2.jpg';

function App() {
const [citydata,setCitydata]=useState("hyderabad");
const [city, setcity] = useState(0);
const [text, settext] = useState(0);
const [temp, settemp] = useState(0);
const [img,setimg]=useState(null);


  const inputdata=(data)=>{
    setCitydata(data);
}


const [resdata,setresdata]=useState([0]);

useEffect(()=>{
  axios
  .get(
    `https://api.weatherapi.com/v1/current.json?key=7396e3a3d8594762b92120201220501&q=${citydata}&aqi=no`
  )
  .then((response) => {
  
    setresdata(response.data);
    setcity(response.data.location.name);
    settext(response.data.current.condition.text);
    settemp(response.data.current.temp_c);
    setimg(response.data.current.condition.icon);
  
  });
},[citydata]);


console.log(resdata);

const settings = {

  fade:true,
 arrows:false,
  infinite: true,
  autoplay:true,
  autoplaySpeed:5000,
  slidesToShow: 1,
  slidesToScroll: 1
};


// console.log(citydata);
  return (
    
    <div className="bg">
          <Slider className='slick_slider' {...settings} >
          <div >
           <img className='w-100' src={image}/> 
          </div>
          <div>
            <img className='w-100' src={image1}/> 
           </div>
           <div>
            <img className='w-100' src={image2}/> 
           </div>
        
          
        </Slider>
       <Infopage cloud={city} text={text} temp={temp} img={img}></Infopage>
      <Homepage icity={inputdata}>
    
      </Homepage>
    
                
                <div className='container'>
            <div className='row'>
            <div className='col-lg-12 col-md-12 col-sm-12 text-center mb-4 mt-4'>
                    <h6>weather at major cities india</h6>
                </div>
              
    <Card ncity="Delhi" ></Card>
    <Card ncity="Mumbai"></Card>
    <Card ncity="Bengaluru"></Card>
    <Card ncity="Chennai"></Card>
    <Card ncity="Ranchi"></Card>
    <Card ncity="Hyderabad"></Card>

  
    
    
            </div>
            
        </div>

     
   
    </div>
  );
}

export default App;
