import {useState,useEffect} from 'react';
import BlogList from './BlogList';
const Home = () => {
   // let name = 'marim';
    const [blogs,setBlogs] = useState([
        {title:'web 1', body:'this is the body of web1 ...',author:'author1',id: 1},
        {title:'web 2', body:'this is the body of web2 ...',author:'author2',id: 2},
        {title:'web 3', body:'this is the body of web3 ...',author:'author3',id: 3}
    ]);
  const handleDelete = (id) => {
      const newBlogs = blogs.filter(blog => blog.id !==id);
      setBlogs(newBlogs);
  }

   useEffect(()=>{console.log('use Efect running')});

       
    return ( 
        <div className="home">
            <BlogList blogs= {blogs} title="Allblogs!" handleDelete={handleDelete}/>
            
            
        </div>
     );
}
 
export default Home;