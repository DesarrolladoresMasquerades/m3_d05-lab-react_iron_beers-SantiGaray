import Header from '../components/Header'
import axios from "axios";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function NewBeer(){
    const [formData, setFormData] = useState({
        name: "",
        tagline: "",
        description: "",
        first_brewed: "",
        brewers_tips: "",
        attenuation_level: 0,
        contributed_by: ""
    })

    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        axios
          .post(
            `https://ih-beers-api2.herokuapp.com/beers/new`,
            formData
          )
          .then((response) => navigate(`/beers`))
    
          .catch((error) => {navigate(`/new-beer`)})
      }

      function handleChange(event) {
        // event.preventDefault()
        const inputName = event.target.name;
        const value = event.target.value;
        setFormData((formData) => {
            console.log("FORMDATA!!!!:, ", formData)
          return { ...formData, [inputName]: value };
        });
      }

    return (
        <div>
            <Header/>
            <h2>Create A New Beer</h2>

      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={formData.name}
        />

        <label>Tagline</label>
        <input
          type="text"
          name="tagline"
          onChange={handleChange}
          value={formData.tagline}
        />
        
        <label>Description</label>
        <input
          type="text"
          name="description"
          onChange={handleChange}
          value={formData.description}
        />

        <label>First Brewed</label>
        <input
          type="text"
          name="first_brewed"
          onChange={handleChange}
          value={formData.first_brewed}
        />

        <label>Brewers Tips</label>
        <input
          type="text"
          name="brewers_tips"
          onChange={handleChange}
          value={formData.brewers_tips}
        />

        <label>Attenuation Level</label>
        <input
          type="number"
          name="attenuation_level"
          onChange={handleChange}
          value={formData.attenuation_level}
        />

        <label>Contributed By</label>
        <input
          type="text"
          name="contributed_by"
          onChange={handleChange}
          value={formData.contributed_by}
        />


        <button type="submit">Save Changes</button>
      </form>
        </div>
    )
}
