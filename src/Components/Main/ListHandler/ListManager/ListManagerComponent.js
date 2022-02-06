import styles from './styles.module.css';
import {useContext, useEffect} from "react";
import {observer} from "mobx-react";
import {ProductsStoreContext} from "../../../../index";

const ListManagerComponent = () =>{
    const {wrapper, btn, input, text, select, option} = styles;
    const store = useContext(ProductsStoreContext);
    const {products, searchConditions, sortConditions} = store;

    useEffect(() => store.setCurrentPage(1), [sortConditions, searchConditions])
    useEffect(
        ()=> store.sortProducts(sortConditions),
        [sortConditions, products]
    );

    useEffect(
        ()=> store.searchProducts(searchConditions),
        [searchConditions, products]
    );

    const changeHandler = ({target:{name, value}}) =>{
        switch (name){
            case 'search':
                store.setSearchConditions(value);
                break;
            case 'sort':
                store.setSortConditions(value);
                break;
            default:
                break
        }
    }
    return(
        <div className={wrapper}>
            <button className={btn}
                    onClick={ ()=>store.setSelectedProduct(undefined)}
            >
                Add
            </button>
            <input className={input}
                   type='text'
                   placeholder={'Search products ...'}
                   value={searchConditions || ''}
                   name={'search'}
                   onChange={changeHandler}
            />
            <span className={text}>Sort By</span>
            <select className={select}
                    name="sort"
                    id="sort"
                    onChange={changeHandler}
            >
                <option className={option} value="price">Price</option>
                <option className={option} value="addingTime">Recently added</option>
            </select>
        </div>
    )
}
export default observer(ListManagerComponent);