const BookData = ({ data }) => {
  return (
    <div className="card bg-gray-800 text-base">
      <div className="card-body items-center text-center">
        <h2 className="card-title">{data.author}</h2>
        <p>{data.title}</p>
        <div className="card-actions ">
          <button className="btn btn-primary">Details</button>
          <button className="btn btn-ghost">{data.genre}</button>
        </div>
      </div>
    </div>
  );
};

export default BookData;
