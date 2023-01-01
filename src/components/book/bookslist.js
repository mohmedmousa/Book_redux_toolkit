import React  from 'react'
import { useDispatch } from 'react-redux'
import { deletebook, getbook } from '../../store/bookSlice'
import "./bookslist.css"
import { useEffect } from 'react'



export default function Bookslist(props) {

  const dispatch=useDispatch()


  useEffect(() => {
    dispatch(getbook())
  }, [dispatch])
  return (
    <>
    <h1>books list</h1>
    
    <div className='book'>
      {props.loading ?'loading...':
      
      props.books.length>0 ? props.books.map((book) =>{
      
        return(<div className='content' key={book.id}>
     
        <p>{book.title}</p>
        <div>
        <button className='read' onClick={()=>props.getid(book.id)}>Read</button>
        <button className='delete' disabled={!props.islogin}
         onClick={()=>dispatch(deletebook(book.id))}>Delete</button>
        </div>
      </div>)
      
})
      :'there is no books to show'}
      
    </div>
    
    </>
    
  )
}
