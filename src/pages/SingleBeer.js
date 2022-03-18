import Header from '../components/Header'
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';

export default function SingleBeer(){
const [singleBeer, setSingleBeer] = useState({})

const params = useParams()
const navigate = useNavigate()

useEffect(() =>{
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${params.beerId}`)
      .then((response)=>setSingleBeer(response.data))
      .catch((error) => console.log(error)
      )
}, [params.beerId])

    return ( <div>
            <Header/>
    {singleBeer._id ? (
            <div key={singleBeer._id} >
                <img src={singleBeer.image_url} alt="pic"/>
                <h3>Name: {singleBeer.name} </h3>
                <h4>Tagline: {singleBeer.tagline}</h4>
                <h4>First Brewed: {singleBeer.tagline}</h4>
                <h4>Attenuation Level: </h4>
                <p>Description: </p>
                <h5>Contributed By: {singleBeer.contributed_by}</h5>
            </div>
            ) : (
                <img src="{casita}" alt="pic" />
         
    )}</div>)
       
    
}


