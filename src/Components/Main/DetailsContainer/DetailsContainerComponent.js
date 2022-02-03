import styles from './styles.module.css'
import DetailsComponent from "./Details/DetailsComponent";
import {ProductsStoreContext} from "../../../App";
import {useContext} from "react";
import {observer} from "mobx-react";
const DetailsContainerComponent = () => {
    const {wrapper} = styles;
    const store = useContext(ProductsStoreContext);
    const {selectedProduct} = store;

    return (
        <div className={wrapper}>
            {selectedProduct && <DetailsComponent/>}
        </div>
    )
}
export default observer(DetailsContainerComponent);