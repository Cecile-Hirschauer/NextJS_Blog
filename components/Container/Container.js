import React from 'react'
import Navbar from '../Navbar/NavBar'

export default function Container(props) {
  return (
    <>
        <Navbar />
        {props.children}
    </>
  )
}