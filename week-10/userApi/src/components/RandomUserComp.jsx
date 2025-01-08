import { Card } from "./Card";

export default function RandomUserComp({firstName, picAddress, id}) {
    console.log(firstName);
    return (
        <div className="randomUserComp">
            <Card>
                <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <img src={picAddress} alt="User"/>
                    <div style={{margin: 10, fontWeight: "bold"}}>{firstName}</div>
                </div>
            </Card>
        </div>
    )
}