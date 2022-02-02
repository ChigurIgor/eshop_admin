import styles from './styles.module.css';

const ListItemComponent = () =>{
    const {wrapper} = styles;
    return(
        <div className={wrapper}>
            List item
        </div>
    )
}
export default ListItemComponent;