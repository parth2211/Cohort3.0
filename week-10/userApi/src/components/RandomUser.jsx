import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Button } from './Button';
import RandomUserComp from './RandomUserComp';

const RandomUser = () => {

    const [randeomUserList, setRanmdomUserList] = useState([]);
    const [numberOfUsers, setNumberOfUsers] = useState(1);

    const randomUserComp = randeomUserList.map((e) =>
        <RandomUserComp
            firstName={e.name}
            picAddress={e.name}
            key={e.id}
        />
    )

    useEffect(() => {
        axios.get(`https://randomuser.me/api?results=${numberOfUsers}`)
            .then((response) => {
                setRanmdomUserList([...randeomUserList, response.data.results]);
                console.log(response.data.results)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [numberOfUsers]);

    return (
        <div>
            {randomUserComp}
            <Button setNumberOfUsers={setNumberOfUsers}/>
        </div>
    )
}

export default RandomUser