import * as Loader from "react-loader-spinner";
import "./Loader.scss";

const LoaderComp = () => {
 
    return (
        <div className="loader">
        <Loader.ThreeDots
            color="#ddd"
            height={70}
            width={70}
        />
        </div>
    );
}
export default LoaderComp;