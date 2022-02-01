import DetailsComponent from "./Details/DetailsComponent";
import ListHandlerComponent from "./ListHandler/ListHandlerComponent";
import styles from './styles.module.css';
const MainComponent = () =>{
    const {wrapper} = styles;
    return(
        <div className={wrapper}>
            <ListHandlerComponent/>
            <DetailsComponent/>
        </div>
    )
}
export default MainComponent;