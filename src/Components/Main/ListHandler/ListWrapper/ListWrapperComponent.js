import styles from './styles.module.css';
import ListItemComponent from "./ListItem/ListItemComponent";
import {useContext} from "react";
import {observer} from "mobx-react";
import {ProductsStoreContext} from "../../../../index";
const ListWrapperComponent = () =>{
    const {wrapper} = styles;
    const store = useContext(ProductsStoreContext);
    const {productsToShow, currentPage, pageLimit} = store;
    const offset = (currentPage - 1) * pageLimit;
    const currentProducts = productsToShow.slice(offset, offset + pageLimit);

    return(
        <div className={wrapper}>
            {currentProducts && currentProducts.map(({id, creationDate, name, price, description, image})=> <ListItemComponent
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