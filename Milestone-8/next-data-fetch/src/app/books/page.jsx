import BookData from "@/components/BookData";

const GetBooks = async() =>{
    const res = await fetch('http://localhost:5000/books',{ next: { revalidate: 5 } });
    return res.json();
}
const BooksPage =async () => {
    const BooksData = await GetBooks();
    // console.log(data)
    return (
        <div className="container mx-auto my-8">
            <h3 className="text-2xl font-bold text-center">Books Data</h3>
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
            {
             BooksData.map(data => <BookData key={data.id} data={data}/>)   
            }
           </div>
            
        </div>
    );
};

export default BooksPage;