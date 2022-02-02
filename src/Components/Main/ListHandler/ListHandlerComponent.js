import ListManagerComponent from "./ListManager/ListManagerComponent";
import ListWrapperComponent from "./ListWrapper/ListWrapperComponent";
import styles from './styles.module.css';
import PaginationComponent from "./Pagination/PaginationComponent";

const ListHandlerComponent = () =>{
    const {wrapper} = styles;
    return(
        <div className={wrapper}>
           <ListManagerComponent/>
           <ListWrapperComponent/>
           <PaginationComponent/>
        </div>
    )
}
export default ListHandlerComponent;