import styles from './styles.module.css'
import DetailsComponent from "./Details/DetailsComponent";
const DetailsContainerComponent = () => {
    const {wrapper} = styles;
    return (
        <div className={wrapper}>
            <DetailsComponent/>
        </div>
    )
}
export default DetailsContainerComponent;