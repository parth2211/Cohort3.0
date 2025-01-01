import React, { Component, useState } from 'react'
import "../utils/validation"
import "../myApp.css"

const AdoptionData = (props) => {
    const formData = props.adoptionData
    console.log("Inside Table : " + formData);
    return (
        <table>
            <thead>
                <tr>
                    {Object.keys(formData[0]).map((key) => (
                        <th key={key}>{key}</th>
                    ))}
                </tr>
                <tbody>
                    {formData.map((item) => (
                        <tr key={item.email}>
                            {Object.values(item).map((val) => (
                                <td>{val}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </thead>
        </table>
    )
}

export default AdoptionData