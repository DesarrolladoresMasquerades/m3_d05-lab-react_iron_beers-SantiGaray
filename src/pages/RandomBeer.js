import Header from '../components/Header'
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function RandomBeer(){
const [randomBeer, setRandomBeer] = useState({})

//const params = useParams()
//const navigate = useNavigate()

useEffect(() =>{
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
      .then((response)=>setRandomBeer(response.data))
      .catch((error) => console.log(error)
      )
}, [])

    return ( <div>
            <Header/>
    {randomBeer._id ? (
            <div key={randomBeer._id} >
                <img src={randomBeer.image_url} alt="pic"/>
                <h3>Name: {randomBeer.name} </h3>
                <h4>Tagline: {randomBeer.tagline}</h4>
                <h4>First Brewed: {randomBeer.tagline}</h4>
                <h4>Attenuation Level: </h4>
                <p>Description: </p>
                <h5>Contributed By: {randomBeer.contributed_by}</h5>
            </div>
            ) : (
                <img src="{casita}" alt="pic" />
         
    )}</div>)
       
    
}