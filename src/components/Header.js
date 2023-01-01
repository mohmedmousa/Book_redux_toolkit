import React, { Fragment } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { isloginout } from '../store/authSlice';

export default function Header() {
  const dispatch=useDispatch()
  const {reject}=useSelector(state=>state.books)
  const {islogin}=useSelector(state=>state.auth)
  return (
    
      <>
      <div className='header'>
     {reject&&(<div className="alert alert-danger  mt-5" role='alert'>
          {reject}
      </div>)}

      <Navbar className='bg-dark p-2  fixed-top ' >
      
        <Navbar.Brand href="#home" className='text-light ' >My Books</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <a href="#login" className='text-light text-decoration-none border border-primary rounded p-1' onClick={()=>dispatch(isloginout())} >{islogin?'logout':'login'}</a>
          </Navbar.Text>
        </Navbar.Collapse>
      
    </Navbar>
    </div>
    </>
  )
}
