import React from 'react'
import styles from '../header/index.module.css'

function navBar(){
    return(
        <>
            <div className={styles.container} >
                    <div>   
                    <ul className={styles.navBar}>
                    <h1>SHOP.CO</h1>
                    <h3>Shop</h3>
                    <h3>On Sale</h3>
                    <h3>New Arrival</h3>
                    <h3>Brands</h3>
                    </ul>
                    </div>
                    <input type='text' placeholder='Search for products'></input>

            </div> 
        </>    
    );
}
export default navBar   