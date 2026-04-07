import React, { useState } from 'react';

// controlled component .one per each field.use state on change of the field. useful to dynamically handles error
const ControledField = () => {
    const [name,setName] = useState('')
    const [wname,setWname] = useState('')
    const [password,setPassword] = useState('');
    const [error ,setError] = useState('')
    const handleSubmit = (e) => {
        // e.preventDefault()
         e.preventDefault();
        console.log('submited')
    }
    const handlePasswordChange = e =>{
        console.log(e.target.value)
        setPassword(e.target.value)
        if(password.length < 6){
            setError('your password should be atleast 6 number')
        }
        else{
            setError('')
        }

    }
    const handleNameChange = e =>{
        const tname = e.target.value;
        console.log(e.target.value)
        setName(e.target.value)
        if(typeof tname !== String){
            setWname('Number is not Allowed');
        }
        else{
            setWname('jhg')
        }
    }
    return (
        <div>
           <form onSubmit={handleSubmit}>
            <input onChange={handleNameChange} type="text" placeholder='name' defaultValue={name} name='name' required />
             <br />
             <input type="password" onChange={handlePasswordChange} name="password" defaultValue={password} placeholder='password' required />
             <br />
             <input type="submit" value="submit" />          
            </form> 
            <p><small style={{color:'red'}}>{wname}</small></p>
            <p style={{color:'pink'}}><small>{error}</small></p>
            <p>{password}</p>
        </div>
    );
};

export default ControledField;