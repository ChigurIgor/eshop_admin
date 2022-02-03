import styles from './styles.module.css';
import {useContext} from "react";
import {ProductsStoreContext} from "../../../../App";
import {observer} from "mobx-react";

const ListManagerComponent = () =>{
    const {wrapper, btn, input, text, select, option} = styles;
    const store = useContext(ProductsStoreContext);
    const {products} = store;

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
export default observer(ListManagerComponent);