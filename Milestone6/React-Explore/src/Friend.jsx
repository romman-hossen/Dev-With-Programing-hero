export default function Friend ({friend}){
    const {id,name,company} = friend;
    console.log(id,name,company.name)
    // console.log(friend)
    return(
      <div className="friends">
        {/* <li>Name : {friend.address.city}</li> */}
        <li>Name : {name}</li>
        {/* <p></p> */}
      </div>
    )

}