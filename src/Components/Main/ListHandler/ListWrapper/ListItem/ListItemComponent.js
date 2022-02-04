import styles from './styles.module.css';
import {ProductsStoreContext} from "../../../../../App";
import {useContext} from "react";
import {observer} from "mobx-react";

const ListItemComponent = ({id, creationDate, name, price, description, image:imageUrl}) =>{
    const {wrapper, img, subwrapper, title, descr, btn} = styles;
    const store = useContext(ProductsStoreContext);
    return(
        <div className={wrapper} onClick={()=>{store?.setSelectedProduct(id)}}>
            <img
                className={img}
                src={imageUrl}
            />
            <div className={subwrapper}>
                <h3 className={title}>{name}</h3>
                <p className={descr}>{description}</p>
            </div>
            <button
                className={btn}
                onClick={(event)=>{ event.stopPropagation();store.deleteProduct(id)}}
            >
                Delete
            </button>
        </div>
    )
}
export default observer(ListItemComponent);