import "../App.css"

export function Button ({setNumberOfUsers}) {

    function handleSubmit(event) {
        event.preventDefault(); // Prevent form reload
        const userInput = event.target.elements.userInput.value; // Access input value
        setNumberOfUsers(userInput);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="userInput">Number Of Users</label>
                <input type="text" id="userInput" name="userInput" placeholder="Enter number of users" />
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    )
}