import React, { useState } from 'react';
import { TextField, Button, Paper, Typography } from '@mui/material';
import { addCafe } from '../services/CafeServices';

const AddCafe = () => {
    const [cafeName, setCafeName] = useState('');
    const [cafeAddress, setCafeAddress] = useState('');
    const [cafePhone, setCafePhone] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const cafeData = {
            name: cafeName,
            address: cafeAddress,
            phone: cafePhone
        };
        console.log(cafeData);
        // Backend'e bu verileri göndermek için bir API isteği yapılabilir.
        saveOrUpdateCafe(cafeData);
    };

    function saveOrUpdateCafe(cafeData) {
        addCafe(cafeData).then((response) => {
            console.log(response.data);
        });
    }

    return (
        <Paper elevation={3} style={{ padding: '20px', maxWidth: '500px', margin: '20px auto' }}>
            <Typography variant="h5" component="h1" align="center" gutterBottom>
                Add Cafe
            </Typography>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <TextField
                    label="Enter Cafe Name"
                    variant="outlined"
                    value={cafeName}
                    onChange={(e) => setCafeName(e.target.value)}
                    required
                />
                <TextField
                    label="Enter Cafe Address"
                    variant="outlined"
                    value={cafeAddress}
                    onChange={(e) => setCafeAddress(e.target.value)}
                    required
                />
                <TextField
                    label="Enter Cafe Number"
                    variant="outlined"
                    value={cafePhone}
                    onChange={(e) => setCafePhone(e.target.value)}
                    required
                    type="tel"
                />
                <Button type="submit" variant="contained" color="primary">
                    Add Cafe
                </Button>
            </form>
        </Paper>
    );
};

export default AddCafe;
