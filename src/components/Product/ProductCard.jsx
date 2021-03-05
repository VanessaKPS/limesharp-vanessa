import React, { useState } from 'react'
import Info from '../../assets/images/info.svg'
import Hide from '../../assets/images/hide.svg'
import Show from '../../assets/images/show.svg'
import styles from './Product.module.css'

const ProductCard = (props) => {
    const { info } = props

    const [isClicked, setIsClicked] = useState(false)

    const handleClick = () => {
        setIsClicked((prevValue) => !prevValue)
    }
    return (
        <div className={styles.Card}>
            <div className={styles.header}>
                <img src={Info} alt='info icon' />
            </div>
            <div className={styles.content}>
                <h3 className={styles.title}>{info.name}</h3>
                <p className={styles.description}>
                    {isClicked
                        ? info.description
                        : info.description.slice(0, 56)}
                </p>
                <div className={styles.button} onClick={handleClick}>
                    <img
                        className={styles.icon}
                        src={isClicked ? Hide : Show}
                        alt='button icon'
                    />
                </div>
            </div>
        </div>
    )
}

export default ProductCard
