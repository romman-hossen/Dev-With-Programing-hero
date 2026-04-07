import React, { useRef } from 'react';

//Uncontrolled using useRef
const UnControlled = () => {
    const nameRef = useRef('');
    const passRef = useRef('');
    const handleSubmit = e =>{
        e.preventDefault();
        console.log(nameRef.current.value);
        console.log(passRef.current.value)
        const email = nameRef.current.value;
        const password = passRef.current.value;
        console.log(email,password)

        // console.log(e.target.name.value)

    }
    return (
        <div onSubmit={handleSubmit}>
             <form>
            <input ref={nameRef} type="text" placeholder='name ' name='name' required />
             <br />
             <input ref={passRef} type="password" name="password"  placeholder='password' required />
             <br />
             <input type="submit" value="submit" />          
            </form>        
        </div>
    );
};

export default UnControlled;