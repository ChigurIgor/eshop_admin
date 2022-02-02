import styles from './styles.module.css';
import ListItemComponent from "./ListItem/ListItemComponent";
const ListWrapperComponent = () =>{
    const {wrapper} = styles;
    return(
        <div className={wrapper}>
            <ListItemComponent/>
            <ListItemComponent/>
            <ListItemComponent/>
        </div>
    )
}
export default ListWrapperComponent;