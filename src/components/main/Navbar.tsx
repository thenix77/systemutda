import React,{Fragment} from 'react'
import Aside from './Aside'
import Nav from './Nav'

export default function Navbar() {
  return (
    <Fragment>
        <Nav />
        <Aside />
    </Fragment>
  )
}
