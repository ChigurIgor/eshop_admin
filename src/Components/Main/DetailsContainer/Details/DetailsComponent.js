import styles from './styles.module.css';
import {useContext} from "react";
import {observer} from "mobx-react";
import {validateDescription, validateImageUrl, validateName, validatePrice} from "../../../../Utils/Validators";
import classNames from "classnames";
import {ProductsStoreContext} from "../../../../index";
const DetailsComponent = () =>{
    const {wrapper, img, imgUrl, mainTitle, title, description, price, btn, priceWrapper, text, invalid } = styles;
    const store = useContext(ProductsStoreContext);
    const {selectedProduct, selectedProduct:{id, name, price:productPrice, description: productDescription, image}} = store;
    const validName = validateName(name);
    const validDescription = validateDescription(productDescription);
    const validImageUrl = validateImageUrl(image);
    const validPrice = validatePrice(productPrice);

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
                        src={image || ''}
                    />
                    <p className={text}>Image Url</p>
                    <input
                        className={classNames(imgUrl,!validImageUrl && invalid )}
                        type={"text"}
                        value={image || ''}
                        onChange={changeHandler}
                        name={'image'}
                    />
                    <p className={text}>Name</p>
                    <input
                        className={classNames(title,!validName && invalid )}
                        type={"text"}
                        value={name || ''}
                        name={'name'}
                        onChange={changeHandler}
                    />
                    <p className={text}>Description</p>
                    <textarea
                        className={classNames(description,!validDescription && invalid )}
                        value={productDescription || ''}
                        name={'description'}
                        onChange={changeHandler}
                    />
                    <p className={text}>Price</p>
                    <div className={priceWrapper}>
                        <input
                            className={classNames(price,!validPrice && invalid )}
                            type={'number'}
                            placeholder={0}
                            min={0}
                            value={productPrice || ''}
                            onChange={changeHandler}
                            name={'price'}
                        />
                        <span>$</span>
                    </div>

                    <button
                        className={btn}
                        disabled={
                            !validPrice
                            || !validDescription
                            || !validName
                            || !validImageUrl
                        }
                        onClick={() => {store.saveProduct(selectedProduct)}}
                    >
                        Save
                    </button>
                </div>
    )
}
export default observer(DetailsComponent);