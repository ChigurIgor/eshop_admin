import styles from './styles.module.css';
import ListItemComponent from "./ListItem/ListItemComponent";
import {ProductsStoreContext} from "../../../../App";
import {useContext} from "react";
import {observer} from "mobx-react";
const ListWrapperComponent = () =>{
    const {wrapper} = styles;
    const store = useContext(ProductsStoreContext);
    const {products} = store;
    return(
        <div className={wrapper}>
            {products && products.map(({id, creationDate, name, price, description, image})=> <ListItemComponent
                key={id}
                id={id}
                creationDate={creationDate}
                name={name}
                price={price}
                description={description}
                image={image}
            />)}
        </div>
    )
}
export default observer(ListWrapperComponent);