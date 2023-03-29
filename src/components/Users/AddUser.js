import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import './AddUser.css'


const AddUser = (props) =>{
    const[enteredUsername, setEnteredUsername] = useState('');
    const[ageUsername, setEnteredAge] = useState('');
    const addUserHandler = (event) =>{
        event.preventDefault();
        console.log(enteredUsername, ageUsername)
    }
    const usernameChangeHandler = (event) =>{
        setEnteredUsername(event.target.value);
         
    }
    const ageChangeHandler = (event) =>{
        setEnteredAge(event.target.value);

    }
    return(
        <Card >
            <form className="input" onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" onChange={usernameChangeHandler}></input>
                <label htmlFor="years">Age(years)</label>
                <input type="number" id="years" onChange={ageChangeHandler}></input>
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    );


};
export default AddUser;