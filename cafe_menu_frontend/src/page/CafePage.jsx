import React from 'react';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const Cafe = () => {
  // Örnek veriler
  const cafes = [
    { id: 1, name: 'Cafe One', address: '123 Main St', contact: '123-456-7890' },
    { id: 2, name: 'Cafe Two', address: '456 Elm St', contact: '987-654-3210' },
    { id: 3, name: 'Cafe Three', address: '789 Oak St', contact: '555-555-5555' },
    // Diğer veriler burada eklenebilir
  ];

  return (
    <div>
      <h1>Cafe Page</h1>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Contact</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cafes.map((cafe) => (
              <TableRow key={cafe.id}>
                <TableCell>{cafe.id}</TableCell>
                <TableCell>{cafe.name}</TableCell>
                <TableCell>{cafe.address}</TableCell>
                <TableCell>{cafe.contact}</TableCell>
                <TableCell>
                  <Button variant="contained" color="primary" sx={{ marginRight: 1 }}>
                    View
                  </Button>
                  <Button variant="contained" color="warning" sx={{ marginRight: 1 }}>
                    Edit
                  </Button>
                  <Button variant="contained" color="error">
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Cafe;
