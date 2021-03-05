import React from 'react'
import styles from './Product.module.css'

const ProductsHeader = () => {
    return (
        <div className={styles.Header}>
            <h1 className={styles.title}>Experienced & Multi-Talented</h1>
            <div className={styles.divider}></div>
            <p className={styles.subtitle}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                quis felis mauris. Pellentesque tempor efficitur felis at
                tincidunt. Donec fermentum vulputate.
            </p>
        </div>
    )
}

export default ProductsHeader
