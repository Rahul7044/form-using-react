import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import './AddUser.css'


const AddUser = (props) =>{
    const[enteredUsername, setEnteredUsername] = useState('');
    const[enteredAge, setEnteredAge] = useState('');
    const addUserHandler = (event) =>{
        event.preventDefault();
        
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
            return;
        }
        if(enteredAge<1){
            return;
        }
        console.log(enteredUsername, enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
    };
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
                <input type="text" id="username" value={enteredUsername} onChange={usernameChangeHandler}></input>
                <label htmlFor="years">Age(years)</label>
                <input type="number" id="years" value={enteredAge} onChange={ageChangeHandler}></input>
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    );


};
export default AddUser;