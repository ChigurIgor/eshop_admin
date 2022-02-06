import styles from './styles.module.css'
import DetailsComponent from "./Details/DetailsComponent";
import {useContext} from "react";
import {observer} from "mobx-react";
import {ProductsStoreContext} from "../../../index";
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