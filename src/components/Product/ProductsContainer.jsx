import React from 'react'
import productsData from '../../data'
import ProductCard from './ProductCard'
import styles from './Product.module.css'

const ProductsContainer = () => {
    return (
        <div className={styles.Container}>
            {productsData.map((product, id) => (
                <ProductCard info={product} key={id} />
            ))}
        </div>
    )
}

export default ProductsContainer
