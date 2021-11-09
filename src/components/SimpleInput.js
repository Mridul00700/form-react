import { useRef, useState } from 'react';


// Two ways to take user input... 1- From state 2- Using refs 

const SimpleInput = (props) => {

  const [enteredName, setEnteredName] = useState('');
  const nameRef = useRef();

  const changeNameHandler = event => {
    setEnteredName(event.target.value);
  }


  const handlerFormSubmit = event => {
    event.preventDefault();
    console.log(enteredName);

    console.log(nameRef.current.value);
  }
  return (
    <form onSubmit={handlerFormSubmit}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input ref={nameRef} type='text' id='name' onChange={changeNameHandler} />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
