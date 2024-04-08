
import TableForm from './TableForm'
import { Stack, Switch } from '@mui/material'
import React, { useState } from 'react'

// import ProductCard from '../../../../components/ProductCards'
import CardsForm from '../AllCards'
import Header from '../Navbar'
import Footer from '../Footer'

const Dashboard = () => {
    const [table, setTable] = useState(false)
    return (
        <>
        <Header/>
        <Stack p={0} gap={2} height={"83vh"} >

            {table ? <TableForm /> : <CardsForm />}
          <Switch sx={{position:"absolute", top:"105px",left:"350px"}} onChange={(event) => {
                setTable(event.target.checked)
                }} />
    
        </Stack>
        
        </>
    )
}

export default Dashboard
