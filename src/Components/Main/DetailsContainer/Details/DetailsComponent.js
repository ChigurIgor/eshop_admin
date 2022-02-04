import styles from './styles.module.css';
import {ProductsStoreContext} from "../../../../App";
import {useContext} from "react";
import {observer} from "mobx-react";
const DetailsComponent = () =>{
    const {wrapper, img, imgUrl, mainTitle, title, description, price, btn, priceWrapper, text } = styles;
    const store = useContext(ProductsStoreContext);
    const {selectedProduct, selectedProduct:{id, name, price:productPrice, description: productDescription, image}} = store;
    const changeHandler = ({target:{name, value}}) => {
        switch (name){
            case "name":
                store?.updateSelectedProduct({...selectedProduct, name: value})
                break;
            case "description":
                store?.updateSelectedProduct({...selectedProduct, description: value})
                break
            case "price":
                store?.updateSelectedProduct({...selectedProduct, price: value})
                break
            case "image":
                store?.updateSelectedProduct({...selectedProduct, image: value})
                break
            default :
                break;
        }
    }

    return(
                <div className={wrapper}>
                    <h3 className={mainTitle}> {name} Details</h3>
                    <img
                        className={img}
                        src={image}
                    />
                    <p className={text}>Image Url</p>
                    <input
                        className={imgUrl}
                        type={"text"}
                        value={image}
                        onChange={changeHandler}
                        name={'image'}
                    />
                    <p className={text}>Name</p>
                    <input
                        className={title}
                        type={"text"}
                        value={name}
                        name={'name'}
                        onChange={changeHandler}
                    />
                    <p className={text}>Description</p>
                    <textarea
                        className={description}
                        value={productDescription}
                        name={'description'}
                        onChange={changeHandler}
                    />
                    <p className={text}>Price</p>
                    <div className={priceWrapper}>
                        <input
                            className={price}
                            type={'number'}
                            placeholder={0}
                            min={0}
                            value={productPrice}
                            onChange={changeHandler}
                            name={'price'}
                        />
                        <span>$</span>
                    </div>

                    <button
                        className={btn}
                        onClick={() => {store.saveProduct(selectedProduct)}}
                    >
                        Save
                    </button>
                </div>
    )
}
export default observer(DetailsComponent);