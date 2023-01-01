import { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import {  insertbook } from '../store/bookSlice';


function Addform() {
  const {islogin}=useSelector(state=>state.auth)
  const dispatch= useDispatch()
  const Title=useRef(null)
  const price=useRef(null)
  const description=useRef(null)

  return (
  <>
    <h2 className='mt-2 pt-5'>Insert Book</h2>
    <Form onSubmit={(e)=>{
      e.preventDefault()
       const data={
        title:Title.current.value,
        price:price.current.value,
        description :description.current.value
      }
      dispatch(insertbook(data))
      Title.current.value=null
      price.current.value=null
      description.current.value=null
    }}>
      <Form.Group className="mb-3 mt-1" controlId="formBasicEmail">
        <Form.Label >Title</Form.Label>
        <Form.Control type="text" placeholder="Enter title" ref={Title}/>
        <Form.Label >Price</Form.Label>
        <Form.Control type="text" placeholder="Enter price" ref={price}/>
        
      </Form.Group>

      <Form.Label >Description</Form.Label>
        <Form.Control as="textarea" ref={description}/>
      <Button variant="primary" type="submit" className='mt-3'disabled={!islogin}>
        Submit
      </Button>
    </Form>
    </>
  );
}

export default Addform;