import styles from "./indicators.module.css";
import logo from "/ico.png";

const Loading = () => {
    return (
        <div className="flex h-full items-center justify-center">
            <img className={styles.loaderlogo} src={logo} />
        </div>
    );
};

export default Loading;
