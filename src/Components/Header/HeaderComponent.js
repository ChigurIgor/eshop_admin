import styles  from './styles.module.css'
const HeaderComponent = () =>{
    const {wrapper, title} = styles
    return(
        <div className={wrapper}>
            <h1 className={title}>
                My Store
            </h1>
        </div>
    )
}
export default HeaderComponent;