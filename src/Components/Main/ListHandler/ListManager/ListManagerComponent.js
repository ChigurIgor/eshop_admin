import styles from './styles.module.css';
const ListManagerComponent = () =>{
    const {wrapper, btn, input, text, select, option} = styles;
    return(
        <div className={wrapper}>
            <button className={btn}
                    onClick={ ()=>{}}
            >
                Add
            </button>
            <input className={input}
                   type='text'
                   placeholder={'Search products ...'}
            />
            <span className={text}>Sort By</span>
            <select className={select}
                    name="sort"
                    id="sort"
            >
                <option className={option} value="price">Price</option>
                <option className={option} value="recently">Recently added</option>
            </select>
        </div>
    )
}
export default ListManagerComponent;