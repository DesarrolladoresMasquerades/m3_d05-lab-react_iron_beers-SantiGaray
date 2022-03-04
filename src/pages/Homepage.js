import beersImg from '../assets/beers.png'
import randomBeerImg from '../assets/random-beer.png'
import newBeerImg from '../assets/new-beer.png'
import {Link} from 'react-router-dom'

export default function Homepage(){

    return(
        <div>
            <Link to='/beers'><h1>BEERS</h1><img src={beersImg} alt="pic"/></Link>
            <Link to='/random-beer'><h1>RANDOM BEERS</h1><img src={randomBeerImg} alt="pic"/></Link>
            <Link to='/new-beer'><h1>NEW BEER</h1><img src={newBeerImg} alt="pic"/></Link>
        </div>
    )
}