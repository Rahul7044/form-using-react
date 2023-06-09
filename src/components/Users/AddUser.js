import React, { useState } from "react";
import Card from "../UI/Card";
import Wrapper from "../Helpers/Wrapper";
import ErrorModal from '../UI/ErrorModal';
import Button from "../UI/Button";
import './AddUser.css'


const AddUser = (props) =>{
    const[enteredUsername, setEnteredUsername] = useState('');
    const[enteredAge, setEnteredAge] = useState('');
    const[enteredCollegename, setEnteredCollegename] = useState('');

    const [error, setError] = useState();
    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0 || enteredCollegename.trim().length === 0) {
          setError({
            title: 'Invalid input',
            message: 'Please enter a valid name and age (non-empty values).',
          });
          return;
        }
        if (+enteredAge < 1) {
          setError({
            title: 'Invalid age',
            message: 'Please enter a valid age (> 0).',
          });
          return;
        }
        props.onAddUser(enteredUsername, enteredAge, enteredCollegename);
        setEnteredUsername('');
        setEnteredAge('');
        setEnteredCollegename('');
      };
    
      const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
      };
    
      const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
      };
      const collegenameChangehandler = (event) =>{
        setEnteredCollegename(event.target.value);
      };
    
      const errorHandler = () => {
        setError(null);
      };
    

    
    return(
        <Wrapper>
        {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
         )}
        <Card >
            <form className="input" onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" value={enteredUsername} onChange={usernameChangeHandler}></input>
                <label htmlFor="years">Age(years)</label>
                <input type="number" id="years" value={enteredAge} onChange={ageChangeHandler}></input>
                <label htmlFor="collegename">CollegeName</label>
                <input type="text" id="collegename" value={enteredCollegename} onChange={collegenameChangehandler}></input>
                <Button type="submit">Add User</Button>
            </form>
        </Card>
        </Wrapper>
    );


};
export default AddUser;