import "../App.css"

export function Button ({setNumberOfUsers}) {

    function handleSubmit(event) {
        setNumberOfUsers(event.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="userInput">Number Of Users</label>
                <input type="text" name="petName" placeholder="Pet Name" />
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    )
}