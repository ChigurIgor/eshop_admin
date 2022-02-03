import ListHandlerComponent from "./ListHandler/ListHandlerComponent";
import styles from './styles.module.css';
import DetailsContainerComponent from "./DetailsContainer/DetailsContainerComponent";
const MainComponent = () =>{
    const {wrapper} = styles;
    return(
        <div className={wrapper}>
            <ListHandlerComponent/>
            <DetailsContainerComponent/>
        </div>
    )
}
export default MainComponent;