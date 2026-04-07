import React from 'react';
// use form action and formData in the action handler.formData.get('name of the input field ')
const FormAction = () => {
    const handleAction = (formData) => {
        // formData.get
        console.log(formData.get('name'))
        console.log(formData.get('email'))

    }
    return (
        <div>
            <form action={handleAction}>
                <input type="text" placeholder='name' name='name' />
                <br />
                <input type="email" name="email" placeholder='email' />
                <br />
                <input type="submit" value="Submit" />
            </form>
            
        </div>
    );
};

export default FormAction;