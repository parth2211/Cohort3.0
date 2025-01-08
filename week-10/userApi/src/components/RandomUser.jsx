import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Button } from './Button';
import RandomUserComp from './RandomUserComp';

const RandomUser = () => {

    const [randeomUserList, setRanmdomUserList] = useState([]);
    const [numberOfUsers, setNumberOfUsers] = useState(1);

    const randomUserComp = randeomUserList.map((e) =>
        <RandomUserComp
            firstName={e.name.first}
            picAddress={e.picture.large}
            key={e.id.value}
        />
    )

    useEffect(() => {
        axios.get(`https://randomuser.me/api?results=${numberOfUsers}`)
            .then((response) => {
                setRanmdomUserList([...randeomUserList, ...response.data.results]);
                console.log(response.data.results)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [numberOfUsers]);

    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <div style={{
                    display: "flex",
                    flexWrap: "wrap", // Optional: Allow wrapping to a new row if space is limited
                    gap: "16px", // Add space between cards
                    justifyContent: "center", // Center the cards horizontally
                }}>
                {randomUserComp}
            </div>
            <Button setNumberOfUsers={setNumberOfUsers}/>    
        </div>
    )
}

export default RandomUser