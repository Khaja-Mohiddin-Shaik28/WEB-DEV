import React from 'react'
import {useParams} from 'react-router-dom';


function Books() {

const {id} = useParams();
  return (
    <>
      <h1>Book {id}</h1>
    </>
  )
}

export default Books;
