import React from 'react'
import Table from './components/Table'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
export default function App() {
  return (
    <div className='container'>
    <Navbar/>
    <Table/>
    <Footer/>
    </div>
  )
}