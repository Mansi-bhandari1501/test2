import { Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../../Navbar'
import Footer from '../../Footer'
import { useNavigate } from 'react-router'
import { NavLink } from 'react-router-dom'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { deletePost } from '../../../features/product/productAction'




function TableForm() {
  const user = useSelector((state) => state.user);
  const token = user.userToken;
  const navigate = useNavigate()
  const dispatch =useDispatch()
  // const handleDelete = (_id) => {
  //   console.log(_id)
  //   dispatch(deletePost({token,_id}))
  //   // navigate(`/product/${key}`)
  // }
  const publications = [
    {
      "id": "1",
      "name": "Title"
    },
    {
      "id": "2",
      "name": "Description"
    },
    {
      "id": "3",
      "name": " "
    },
    // {
    //   "id": "4",
    //   "name": "Sale Price"
    // },
    // {
    //   "id": "5",
    //   "name": "Quantity"
    // },
    // {
    //   "id": "6",
    //   "name": "SKU"
    // }
  ]
  const publicationsData = useSelector(state => state.product.products)
  console.log(publicationsData)
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      
      <h1 style={{ font: "55px", fontWeight: "500", fontFamily: "system-ui", marginTop: "20px", marginLeft: "100px" }}>
        Test Provided
      </h1>
      <Paper sx={{ width: '80vw', height: "auto", margin: "5vw" }}>


        <TableContainer sx={{ width: "80vw" }} component={Paper}>
          <TableHead>
            <TableRow s>
              {publications.map((item) => (
                <TableCell key={item?._id} sx={{ width: "100px", fontFamily: "rubik", fontSize: "22px", fontWeight: 1000 }}>{item?.name}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody className='table' sx={{ width: "100px" }}>
            {publicationsData.map((publication) => (
              <div  key={publication._id} style={{width:"70vw"}}>

              <TableRow  sx={{width:"110vw"}} >
                  <TableCell sx={{ fontFamily: "rubik", fontSize: "18px", fontWeight: 800,width:"30vw" }}>{publication.quizTitle}</TableCell>
                  <TableCell sx={{ fontFamily: "rubik", fontSize: "18px", fontWeight: 300 ,width:"50vw"}}>{publication.description}</TableCell>
                  <TableCell sx={{ fontFamily: "rubik", fontSize: "18px", fontWeight: 300 ,width:"10vw"}}>{<DeleteIcon onClick={()=>{console.log("mhgsdjg",publication._id)}}/>}</TableCell>
                  <NavLink to={`/editTest/${publication._id}`} style={{width:"10px", textTransform:"NONE"}} >
                  <TableCell  sx={{ fontFamily: "rubik", fontSize: "18px", fontWeight: 300 ,width:"10vw"}}>{<EditIcon />}</TableCell>
                </NavLink>
               
                </TableRow>
              </div>
          ))}
              </TableBody>
      </TableContainer>
        <TablePagination sx={{ width: "60vw" }}
          rowsPerPageOptions={[10, 25, 100]}
          component="table"
          count={publicationsData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <Footer />
    </>
  )
}

export default TableForm