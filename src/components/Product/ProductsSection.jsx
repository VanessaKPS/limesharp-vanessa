import React from 'react'
import ProductsHeader from './ProductsHeader'
import ProductsContainer from './ProductsContainer'
import styles from './Product.module.css'

const ProductsSection = () => {
    return (
        <div className={styles.Section}>
            <ProductsHeader />
            <ProductsContainer />
        </div>
    )
}

export default ProductsSection
