import ListManagerComponent from "./ListManager/ListManagerComponent";
import ListWrapperComponent from "./ListWrapper/ListWrapperComponent";
import styles from './styles.module.css';

const ListHandlerComponent = () =>{
    const {wrapper} = styles;
    return(
        <div className={wrapper}>
           <ListManagerComponent/>
           <ListWrapperComponent/>
        </div>
    )
}
export default ListHandlerComponent;