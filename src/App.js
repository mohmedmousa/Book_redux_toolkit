import './App.css';
import Addform from './components/form';
import Header from './components/Header';
import Container from 'react-bootstrap/Container';
import Bookinfo from './components/book/Bookinfo';
import Bookslist from './components/book/bookslist';
import { useSelector } from 'react-redux';
import { Fragment, useState } from 'react';

function App() {
  //this usestate for put the description of book in book var and use getid fun for 
  //find this book appending to its id
  const [book,setbook]= useState()
  const getid=(id)=>{
    const showbook=books.find((book)=>book.id===id)
    setbook(showbook)
    
  }
  const {loading,books}=useSelector(state=>state.books)
  const {islogin}=useSelector(state=>state.auth)

  return (
    <>
    
    <Header/>
    <Container>
      <Addform/>
      <div className='row mt-4'>
        <div className='col'>
          <Bookslist loading={loading} books={books} islogin={islogin} getid={getid}/>
        </div>
        <div className='col'>
          <Bookinfo books={books} show={book}/>
        </div>
      </div>
    </Container>
    
    </>
  );
}

export default App;
