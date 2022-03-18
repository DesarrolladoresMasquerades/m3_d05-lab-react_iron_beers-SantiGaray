import Header from '../components/Header'
import {useState, useEffect} from "react"
import axios from 'axios'
import {Link} from 'react-router-dom'
export default function Beers(){
    const [beers, setBeers] = useState([])

    const apiURL = "https://ih-beers-api2.herokuapp.com/beers"

    useEffect(()=>{
        axios
        .get(apiURL)
        .then(response=>setBeers(response.data))
    }, [])
    return (
        <div>
            <Header/>
            {beers.map((beer) =>(
                <Link to= {`/beers/${beer._id}`} key={beer._id}>
                    <div key={beer._id} >
                        <img src={beer.image_url} alt="pic"/>
                        <h3>Name: {beer.name} </h3>
                        <h4>Tagline: {beer.tagline}</h4>
                        <h5>Contributed By {beer.contributed_by}</h5>
                    </div>
                </Link>
            ))}
        </div>
    )
}