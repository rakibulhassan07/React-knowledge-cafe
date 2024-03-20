
import { useState } from 'react'
import './App.css'
import Blogs from './component/Blogs/Blogs'
import Bookmarks from './component/Bookmarks/Bookmarks'
import Header from './component/Header/Header'

function App() {
const [bookmarks,setBookmarks]=useState([]);
const [times,setTime]=useState(0);

const handleAddToBookmark=blog=>{
 const newBook=[...bookmarks,blog]
 setBookmarks(newBook);
}
const handleAddToTime=time=>{
   const newTime=times+time;
   setTime(newTime);
 }
 
  return (
    <>
     <Header></Header>
     <div className='md:flex max-w-7xl mx-auto '>
     <Blogs handleAddToBookmark={handleAddToBookmark} handleAddToTime={handleAddToTime}></Blogs>
     <Bookmarks bookmarks={bookmarks} times={times}></Bookmarks>
     </div>
    </>
  )
}

export default App
