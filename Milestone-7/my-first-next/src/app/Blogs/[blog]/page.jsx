import Image from 'next/image';
import React from 'react';


 const blogs =[
  {
    "id": 1,
    "title": "Getting Started with React",
    "category": "Web Development",
    "description": "Learn the basics of React including components and props.",
    "image": "https://images.unsplash.com/photo-1633356122544-f134324a6cee"
  },
  {
    "id": 2,
    "title": "JavaScript Basics",
    "category": "Programming",
    "description": "Understand variables, functions, and loops in JavaScript.",
    "image": "https://images.unsplash.com/photo-1627398242454-45a1465c2479"
  },
  {
    "id": 3,
    "title": "CSS Flexbox Guide",
    "category": "Design",
    "description": "Master layout design using CSS Flexbox.",
    "image": "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2"
  },
  {
    "id": 4,
    "title": "Git & GitHub for Beginners",
    "category": "Tools",
    "description": "Learn version control and how to use GitHub.",
    "image": "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb"
  }
]

const Blog = async({params}) => {
    const {blog} = await(params)
    const blogId = blog;

    const findId = blogs.find(data => data.id == blogId);
    console.log(findId)
    return (
       <div>
         {findId ? <div className='flex justify-center items-center mt-10 min-h-[60vh] '>
            {/* <Image src='/next.svg' width={500} height={300} alt='nextImage'/> */}
            <div className='text-center space-y-4 border p-6 bg-blue-400 rounded-2xl shadow-2xl hover:shadow-blue-600'>
            <Image className='mx-auto rounded-2xl' src={findId.image} height={300} width={300} alt={findId.category}/>
            <h3 className='text-3xl font-bold'>{findId.title}</h3> 
            <h2 className='text-4xl font-extrabold text-primary'>{findId.category}</h2>
            <p>{findId.description}</p> 
            </div>   
        </div>: <div className='min-h-screen flex items-center justify-center text-error text-5xl'> Item not found make sure that you are in right ID</div>}  
       </div>
        );
};

export default Blog;