import React, { useState } from 'react'
import "../myApp.css"
import AdopterData from "./AdopterData"

const PetAdoptionForm = () => {

    const [formData, setFormData] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [data, setData] = useState({
        petName: "",
        petType: "",
        breed: "",
        ownerName: "",
        email: "",
        mobile: ""
    });

    const {petName, petType, breed, ownerName, email, mobile} = data;

    function handleChange(event) {
        
        const name = event.target.name;
        const value = event.target.value;
    
        setData((data) => ({
            ...data,
            [name]: value
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();
        const data = {petName, petType, breed, ownerName, email, mobile};
        setFormData((prevData) => [...prevData, data])
        console.log(data); //data is populating here correctly
        setShowForm(true);
        setData({
            petName: "",
            petType: "",
            breed: "",
            ownerName: "",
            email: "",
            mobile: ""
        })
    }

    if(!showForm) {
        return (
            <form onSubmit={handleSubmit}>
                <label htmlFor="pet-name">Pet Name</label>
                <input className="form-input-box" type="text" name="petName" value={petName} onChange={handleChange} />

                <label htmlFor="pet-type">Pet Type</label>
                <select className="form-select-dropdown" name="petType" value={petType} onChange={handleChange}>
                    <option value="dog">Dog</option>
                    <option value="cat">Cat</option>
                    <option value="rabbit">Rabbit</option>
                </select>
                
                <label htmlFor="pet-breed">Breed</label>
                <input className="form-input-box" type="text" name="breed" value={breed} onChange={handleChange}/>

                <label htmlFor="owner-name">Your Name</label>
                <input className="form-input-box" type="text" name="ownerName" value={ownerName} onChange={handleChange}/>

                <label htmlFor="email">Email</label>
                <input className="form-input-box" type="text" name="email" value={email} onChange={handleChange}/>

                <label htmlFor="phone">Phone</label>
                <input className="form-input-box" type="number" name="mobile" value={mobile} onChange={handleChange}/>

                <button type="submit">Submit</button>
            </form>
        )
    } else {
        console.log(formData);
        return <AdopterData adoptionData={formData}></AdopterData>
    }
}

export default PetAdoptionForm