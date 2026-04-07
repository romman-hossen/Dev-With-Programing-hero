import React from 'react';
// e.target.[name of the input field].value
const SimpleForm = () => {
    const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(e.target.name.value)
    console.log(e.target.email.value)

  }
  return (
    <>    
      <div className="ticks">
        <h3>get started</h3>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" name='name' placeholder='Enter your name' required/>
          <br />
          <input type="email" name="email" id="" />
          <br />
          <input type="submit" value="submit" />
        </form>
      </div>
    </>
    );
};

export default SimpleForm;