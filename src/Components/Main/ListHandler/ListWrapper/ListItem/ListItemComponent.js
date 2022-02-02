import styles from './styles.module.css';

const ListItemComponent = () =>{
    const {wrapper, image, subwrapper, title, description, button} = styles;
    return(
        <div className={wrapper}>
            <img
                className={image}
                src={'https://litb-cgis.rightinthebox.com/images/640x853/202109/bps/product/inc/fmmega1632724389946.jpg?fmt=webp&v=1'}
            />
            <div className={subwrapper}>
                <h3 className={title}>Title</h3>
                <p className={description}>Description</p>
            </div>
            <button
                className={button}
                onClick={()=>{}}
            >
                Delete
            </button>
        </div>
    )
}
export default ListItemComponent;