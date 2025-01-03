import axios from "axios";

export function Button ({randeomUserList, setRanmdomUserList}) {

    const [numberOfUsers, setNumberOfUsers] = useState(0);

    function handleChange(event) {
        setNumberOfUsers(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        axios.get(`https://randomuser.me/api?results=${numberOfUsers}`)
            .then((response) => {
                setRanmdomUserList([...randeomUserList, response.data]);
            })
    }

    return (
    
        <form onSubmit={handleSubmit}>
            <label htmlFor="numberOfUsers">Number of User</label>
            <input className="form-input-box" type="number" name="numberOfUsers" value={numberOfUsers} onChange={handleChange} />
        </form>
    )
}