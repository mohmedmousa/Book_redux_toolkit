import React from 'react'

export default function Bookinfo(props) {
  
  return (
    <div>
        <h1>Book Details</h1>
        {props.show && props.books.find((book)=>book.id===props.show.id) ?
        <>
        <div className='bg-secondary p-1'>
        <p>Title : {props.show.title}</p>
        <p>ID : {props.show.id}</p>
        
        <p>description : {props.show.description}</p>
        <p>price : {props.show.price}</p>
        <p>Auth : {props.show.username}</p>
        </div>
        </>
         :
        <p className='bg-secondary p-4'>There is no books selected yet. Please select!</p>}
        
    </div>
  )
}
