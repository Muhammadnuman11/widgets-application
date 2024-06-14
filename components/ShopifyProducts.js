'use client'
// components/ShopifyProducts.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ShopifyProducts = ({ shopifyStore, apiKey }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(
                    `https://${shopifyStore}.myshopify.com/admin/api/2021-01/products.json`,
                    {
                        headers: {
                            'X-Shopify-Access-Token': apiKey,
                        },
                    }
                );
                setProducts(response.data.products);
            } catch (error) {
                console.error('Error fetching Shopify products:', error);
            }
        };

        fetchProducts();
    }, [shopifyStore, apiKey]);

    return (
        <div className="w-96 h-full text-center p-4 border rounded-lg shadow-sm">
            {/* {products.map((product) => (
                <div key={product.id} className="mb-4">
                    <h3 className="text-lg font-semibold">{product.title}</h3>
                    <img
                        src={product.images[0]?.src}
                        alt={product.title}
                        className="w-full h-auto rounded-lg mt-2"
                    />
                    <div
                        dangerouslySetInnerHTML={{ __html: product.body_html }}
                        className="mt-2"
                    />
                </div>
            ))} */}
            <h1 className='font-bold text-xl'>Shopify Products</h1>
        </div>
    );
};

export default ShopifyProducts;
