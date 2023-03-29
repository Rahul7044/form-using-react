import React from "react";


const AddUser = (props) =>{
    return(
        <div>
            <form>
                <label htmlFor="username">Username</label>
                <input type="text" id="username"></input>
                <label htmlFor="years">Age(years)</label>
                <input type="number" id="years"></input>
                <button type="submit">Add User</button>
            </form>
        </div>
    );


};
export default AddUser;