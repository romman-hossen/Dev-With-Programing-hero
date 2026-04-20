import Link from 'next/link';
import React from 'react';

export const metadata = {
  title: ' New Blog',
  description: 'This is blog page ',
}

const BlogsPage = () => {
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
];
    return (
        <div className='grid grid-cols-2 md:grid-cols-4 gap-3 p-6 '>
           {blogs.map(blog => {return <div className='border text-center p-10 shadow-xl hover:shadow-green-300' key={blog.id} blog={blog}>
            <h3 className='text-3xl font-bold'>{blog.title}</h3>
           <Link href={`/Blogs/${blog.id}`} className='btn btn-warning mt-4'>Show Details</Link>

           </div>})}
        </div>
    );
};

export default BlogsPage;