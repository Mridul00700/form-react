import { useRef, useState } from 'react';


// Two ways to take user input... 1- From state 2- Using refs 

const SimpleInput = (props) => {

  const [enteredName, setEnteredName] = useState('');
  const [enteredNameIsvalid, setenteredNameIsvalid] = useState(true);
  const [nameIsTouched, setNameIsTouched] = useState(false);

  const nameRef = useRef();

  const changeNameHandler = event => {
    setEnteredName(event.target.value);

    if (event.target.value !== '') {
      setenteredNameIsvalid(true);
    }
  }


  const blurHandler = event => {
    setNameIsTouched(true);
    if (enteredName === '') {
      setenteredNameIsvalid(false);
    }
  }
  const handlerFormSubmit = event => {

    event.preventDefault();

    setNameIsTouched(true);

    if (enteredName === '') {
      setenteredNameIsvalid(false);
      return
    }

    setenteredNameIsvalid(true)

    console.log(enteredName);

    console.log(nameRef.current.value);
  }



  const enterNameIsInvalid = !enteredNameIsvalid && nameIsTouched

  const nameClass = !enterNameIsInvalid ? 'form-control' : 'form-control invalid';

  return (
    <form onSubmit={handlerFormSubmit}>
      <div className={nameClass}>
        <label htmlFor='name'>Your Name</label>
        <input ref={nameRef}
          type='text'
          id='name'
          onChange={changeNameHandler}
          onBlur={blurHandler}
        />
        {enterNameIsInvalid && <p className="error-text">Name must not be empty!</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
