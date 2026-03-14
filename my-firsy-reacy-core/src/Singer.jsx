import "./App.css"
export default function Singer ({singer}){
    return(
        <div className="singer">
            <ul style={{listStyle:"none",textAlign :'left'}}>
            <li>name : {singer.name}</li>
            <li>age : {singer.age}</li>
            <li>language : {singer.language}</li>
            </ul>
        </div>
    )
}