import React from 'react'
import CarouselCompnt from '../../components/carousel/'
import Header from '../../components/Navbar'
// import AllCards from '../../components/AllCards'
import Footer from '../../components/Footer'

import FormDialog from '../../components/AddProduct'
import AddBook from '../../components/AddProduct/AddProduct'
// import { Button, Stack } from 'react-bootstrap'

const Home = () => {
  return (
    <div>
      <Header />
      {/* <AddBook /> */}
      <CarouselCompnt />
      <Footer/>
    </div>
  )
}

export default Home
