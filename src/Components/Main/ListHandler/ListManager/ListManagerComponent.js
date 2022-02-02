import styles from './styles.module.css';
const ListManagerComponent = () =>{
    const {wrapper} = styles;
    return(
        <div className={wrapper}>
            <button onClick={ ()=>{}}>+Add</button>
            <span>Search By</span>
            <select name="cars" id="cars">
                <option value="price">Price</option>

            </select>
            <input type='text' placeholder={'Search ...'}/>
        </div>
    )
}
export default ListManagerComponent;