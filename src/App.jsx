import './App.css'
import Header from './Components/Header/Header'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Blogs from './Components/Blogs/Blogs'
import { useState } from 'react'

function App() {
  const [bookmarks, setBookMarks] = useState([])
  const handelAddToBookmark = blog =>{
    console.log('bookmark adding soon');
  }
  return (
    <>

      <Header></Header>
      <div className='md:flex max-w-6xl mx-auto gap-5'>
        <Blogs handelAddToBookmark={handelAddToBookmark}></Blogs>
        <Bookmarks></Bookmarks>
      </div>

    </>
  )
}

export default App
