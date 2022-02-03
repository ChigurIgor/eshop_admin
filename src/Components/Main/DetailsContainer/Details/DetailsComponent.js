import styles from './styles.module.css';
const DetailsComponent = () =>{
    const {wrapper, img, imgUrl, mainTitle, title, description, price, btn, priceWrapper, text } = styles;
    return(
        <div className={wrapper}>
            <h3 className={mainTitle}> Title Details</h3>
            <img
                className={img}
                src={'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/19748bd0-5a80-4583-9c3f-e29a24044a58/air-max-270-g-golf-shoe-gTpCFg.png'}
            />
            <p className={text}>Image Url</p>
            <input
                className={imgUrl}
                type={"text"}
                // placeholder={'Title'}
            />
            <p className={text}>Name</p>
            <input
                className={title}
                type={"text"}
                // placeholder={'Title'}
            />
            <p className={text}>Description</p>
            <textarea
                className={description}
                // placeholder={'description'}
            />
            <p className={text}>Price</p>
            <div className={priceWrapper}>
                <input
                    className={price}
                    type={'number'}
                    placeholder={0}
                />
                <span>$</span>
            </div>

            <button
                className={btn}
                onClick={() => {}}
            >
                Save
            </button>
        </div>
    )
}
export default DetailsComponent;