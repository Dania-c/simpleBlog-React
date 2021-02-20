import {useState,useEffect} from 'react';
import BlogList from './BlogList';
const Home = () => {
   // let name = 'marim';
   
   const [blogs,setBlogs] = useState(null);
//   const handleDelete = (id) => {
//       const newBlogs = blogs.filter(blog => blog.id !==id);
//       setBlogs(newBlogs);
//   }

   useEffect(()=>{
    fetch('http://localhost:8000/blogs')
    .then(res=> {
        return res.json();
    })
    .then(data => {
        setBlogs(data);
      })
  }, []);

          
    return ( 
        <div className="home">
            { blogs && <BlogList blogs= {blogs} title="Allblogs!" />}
            
            
        </div>
     );
}
 
export default Home;