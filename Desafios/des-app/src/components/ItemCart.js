import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ItemCart (item) {
    const {deleteItemToCart, addItemToCart} = useContext(CartContext);

    return (
        <>
        <div>
            <p>{item.name}</p>
        </div>
        <div>
            <p>{item.amount}</p>
        </div>
        <div>
            <button onClick={() => addItemToCart(item)}>
                Agregar
            </button>
            <button onClick={() => deleteItemToCart(item)}>
                Sacar
            </button>
        </div>
        </>
    )
}

export default ItemCart;









// import styles from './ItemCart.module.css'
// import { useContext } from "react";
// import { CartContext } from "../context/CartContext";

// function ItemCart (item) {

//     const {deleteItemToCart} = useContext(CartContext);


//     return(
//         <>
//        <div className={styles.contProduct}>
//         <div className={styles.contImage}>
//             <img src={item.image} alt={item.name} />
//         </div>
//         <div className={styles.contInfo}>
//         <div className={styles.name}>
//             <p>{item.name}</p>
//         </div>
//         <div className={styles.amount}>
//             <p>Cantidad: {item.amount}</p>
//         </div>
//         <div className={styles.precio}>
//             <p>Subtotal: ${item.subprecio}</p>
//         </div>
//         </div>
        
//             <div className={styles.delete} onClick={() => {deleteItemToCart(item.id)}}>
//                 <div>
//                     <i class="material-icons">delete</i>
//                 </div>
//                 <div>
//                     Eliminar
//                 </div>
//             </div>
        
//        </div>
        
    
//         </>
//     )
// }

// export default ItemCart;

