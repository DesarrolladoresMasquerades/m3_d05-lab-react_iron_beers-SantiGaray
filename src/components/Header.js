import {Link} from 'react-router-dom'
import casita from '../assets/casita.png'
import './Header.css';

export default function Header (){
    return(
        <div className="header">
            <Link to="/" >
                <img src={casita} alt="" width="200" heigth="200"></img>
            </Link>
        </div>
    )
}