import React from 'react';
import UseInputField from './UseInputField';
// Hook from 
const UseInputForm = () => {
    const [name,nameOnChange] = UseInputField('');
    const [email,emailOnChange] = UseInputField('')
    const handleSubmit = e => {
        e.preventDefault();
        console.log(name,email)
        // setName(e.target.name.value)     
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text"  onChange={nameOnChange} defaultValue={name} placeholder='name' />
                <br />
                <input type="email" onChange={emailOnChange} defaultValue={email} placeholder='email' />
                <br />  
                <input type="submit" value="Submit" />
            </form>
            <p>{name}</p>
            
        </div>
    );
};

export default UseInputForm;