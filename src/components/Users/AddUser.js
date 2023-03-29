import React from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import './AddUser.css'


const AddUser = (props) =>{
    const addUserHandler = (event) =>{
        event.preventDefault();
    }
    return(
        <Card >
            <form className="input" onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input type="text" id="username"></input>
                <label htmlFor="years">Age(years)</label>
                <input type="number" id="years"></input>
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    );


};
export default AddUser;