import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductTable from './components/ProductTable';
import ProductForm from './components/ProductForm';
import SearchBar from './components/SearchBar';
import { Container, Box } from '@mui/material';
import './App.css';

const App = () => {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const addProduct = (product) => {
        setProducts([...products, product]);
    };

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <Header />
            <Container>
                <Box sx={{ mt: 5 }}>
                    <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                    <ProductForm addProduct={addProduct} />
                    <ProductTable products={filteredProducts} />
                </Box>
            </Container>
            <Footer />
        </div>
    );
};

export default App;
