import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';

const User2 = ({load}) => {
    const usersData = use(load)
    // console.log(usersData)
    const style ={
      border : '2px solid red',
      padding :'30px',
      borderRadius:'12px',
      margin:"30px"
    }

    // navigation on react router
    let navigation = useNavigate();
    // console.log(navigation)

    // const handleNavigate = () =>{
    //     navigation(`/users`)
    // }
    return (
        <div>
         {usersData.map(data => (<div style={style} key={data.id}>
            <h2>Name:{data.name}</h2>
            <h4>Email:{data.email}</h4>
            <p><small>Phone :{data.phone}</small></p>
            {/* <Link to={`/users/${data.id}`}>Details</Link> */}
            <Link to={`/users2/${data.id}`}>Details</Link>

            <button onClick={() => navigation(`/users2/${data.id}`)}>
                user2
            </button>
         </div>))}
        </div>
    );
};

export default User2;