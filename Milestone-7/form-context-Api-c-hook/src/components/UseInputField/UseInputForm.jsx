import React from 'react';
import UseInputField from './UseInputField';
// Hook from 
const UseInputForm = () => {
    const [name,nameOnChange] = UseInputField('');
    const handleSubmit = e => {
        e.preventDefault();
        console.log(e.target.name.value)
        setName(e.target.name.value)     
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name='text' onChange={} defaultValue={name} placeholder='name' />
                <br />
                <input type="submit" value="Submit" />
            </form>
            <p>{name}</p>
            
        </div>
    );
};

export default UseInputForm;