import React, { useEffect, useState } from 'react';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { deleteCafe, listCafes } from '../services/CafeServices';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; // useNavigate'ı import et

const Cafe = () => {

  const [cafes, setCafes] = useState([])
  const navigate = useNavigate(); // useNavigate hook'u

  useEffect(() => {
    getAllCafes();
  }, [])

  function getAllCafes() {
    listCafes().then((response) => {
      setCafes(response.data);
    }).catch(erorr => {
      console.error(erorr);
    })
  }

  function removeCafe(id){
    console.log(id)

    deleteCafe(id).then((response)=> {
      getAllCafes();
    }).catch(error => {
      console.error(error)
    })

  }



  function updateCafe(id){
    navigate(`/edit-cafe/${id}`); // navigate fonksiyonunu kullan
    console.log("burak", id)
  }

  return (
    <div className='container' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div  >
        <h1>All Cafes</h1>

        <TableContainer component={Paper} >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Update</TableCell>
                <TableCell>Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              
              {
                cafes.map((cafe) => (
                  <TableRow key={cafe.id}>
                    <TableCell>{cafe.id}</TableCell>
                    <TableCell>{cafe.name}</TableCell>
                    <TableCell>{cafe.address}</TableCell>
                    <TableCell>{cafe.phone}</TableCell>
                    <TableCell>
                      <Button variant="contained" 
                      color="primary" 
                      sx={{ marginRight: 1 }}
                      onClick={() => updateCafe(cafe.id)} 
                   
                      >
                        Update
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Button variant="contained" 
                      color="error"
                      onClick={() => removeCafe(cafe.id) }
                      >

                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              }
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default Cafe;
