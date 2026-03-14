import Book from "./Book";
export default function Library ({books}){
    return(
        <div>
            <h2>My national Central Library </h2>
            <p>book collection {books.length}</p>
            <p>address : </p>
            <ul>
                {
                    books.map(book => <Book book = {book} key={book.id}></Book>)
                }
            </ul>
        </div>
    )
}