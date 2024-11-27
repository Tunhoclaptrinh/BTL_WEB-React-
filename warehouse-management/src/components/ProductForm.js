import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';

const ProductForm = ({ addProduct }) => {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addProduct({ name, category, quantity, price });
        setName('');
        setCategory('');
        setQuantity('');
        setPrice('');
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3, mb: 3 }}>
            <TextField
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                fullWidth
                margin="normal"
            />
            <TextField
                label="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
                fullWidth
                margin="normal"
            />
            <TextField
                label="Quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                required
                fullWidth
                margin="normal"
                type="number"
            />
            <TextField
                label="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
                fullWidth
                margin="normal"
                type="number"
            />
            <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
                Add Product
            </Button>
        </Box>
    );
};

export default ProductForm;
