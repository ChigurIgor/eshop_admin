import styles from './styles.module.css';
const ListManagerComponent = () =>{
    const {wrapper} = styles;
    return(
        <div className={wrapper}>
            <button onClick={ ()=>{}}>+Add</button>
            <span>Search By</span>
            <select name="cars" id="cars">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
            </select>
            <input type='text' placeholder={'Search ...'}/>
        </div>
    )
}
export default ListManagerComponent;