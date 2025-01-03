import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Card } from './Card';
import { Button } from './Button';

function getNamePic(user) {
    const firstName = user.name.first;
    const picAddress = user.picture.large;
    return {firstName, picAddress};
}

const RandomUser = () => {

    const [randeomUserList, setRanmdomUserList] = useState([]);

    useEffect(() => {

        

        axios.get('https://randomuser.me/api?page=2')
            .then((response) => {
                const {firstName, picAddress} = getNamePic(response.data.results[0]);
                setRanmdomUserList({firstName, picAddress});
            })
            .catch((error) => {
                console.log(error)
            })
    }, [randeomUserList]);

    return (
        <div>
            <Card>
                <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <img src={randeomUserList.picAddress} alt="User"/>
                    <div style={{margin: 10, fontWeight: "bold"}}>{randeomUserList.firstName}</div>
                </div>
            </Card>
            <Button randeomUserList={randeomUserList} setRanmdomUserList={setRanmdomUserList}/>
        </div>
    )
}

export default RandomUser