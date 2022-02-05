import styles from './styles.module.css'
import Pagination from "./Pagination";
import {observer} from "mobx-react";
import {useContext} from "react";
import {ProductsStoreContext} from "../../../../App";

const PaginationComponent = () => {
    const {wrapper} = styles;
    const store = useContext(ProductsStoreContext);
    const {productsToShow, pageLimit} = store;

    return(
        <div>
            <Pagination totalRecords = {productsToShow.length} pageLimit = {pageLimit}  pageNeighbours = {0} />
        </div>
    )
}
export default observer(PaginationComponent);