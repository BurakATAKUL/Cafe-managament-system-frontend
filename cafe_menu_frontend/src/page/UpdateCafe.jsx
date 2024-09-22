import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // useParams hook'unu import ediyoruz
import { TextField, Button, Paper, Typography } from '@mui/material';
import { getCafeById, updateCafe } from '../services/CafeServices'; // Update ve get fonksiyonlarını ekleyebilirsiniz

const UpdateCafe = () => {
    const { id } = useParams(); // URL'deki id'yi alıyoruz
    const [cafeName, setCafeName] = useState('');
    const [cafeAddress, setCafeAddress] = useState('');
    const [cafePhone, setCafePhone] = useState('');

    useEffect(() => {
        // Backend'den gelen cafe bilgilerini burada alabiliriz
        getCafeById(id).then(response => {
            setCafeName(response.data.name);
            setCafeAddress(response.data.address);
            setCafePhone(response.data.phone);
        });
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const cafeData = {
            name: cafeName,
            address: cafeAddress,
            phone: cafePhone
        };
        updateCafe(id, cafeData).then(() => {
            // Güncelleme işlemi başarılı olduğunda yapılacak işlemler
            console.log('Cafe updated successfully');
        });
    };

    return (
        <Paper elevation={3} style={{ padding: '20px', maxWidth: '500px', margin: '20px auto' }}>
            <Typography variant="h5" component="h1" align="center" gutterBottom>
                Update Cafe
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
                    Update
                </Button>
            </form>
        </Paper>
    );
};

export default UpdateCafe;
