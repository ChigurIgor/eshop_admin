import styles from './styles.module.css'
import PaginationComponent from "./PaginationComponent";
import {observer} from "mobx-react";
import {useContext} from "react";
import {ProductsStoreContext} from "../../../../App";

const PaginationContainerComponent = () => {
    const {wrapper} = styles;

    return(
        <div>
            <PaginationComponent />
        </div>
    )
}
export default observer(PaginationContainerComponent);