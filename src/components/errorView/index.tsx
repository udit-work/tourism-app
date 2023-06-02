import { Link } from "react-router-dom";
import { ErrorViewLayout } from "./assets/style";

const ErrorComponent = () => {
    return (
        <ErrorViewLayout>
            <div>
                Something Went Wrong
            </div>
            <div>
                Kindly navigate to the <Link to="/">Home Page</Link>
            </div>
        </ErrorViewLayout>
    )
};

export default ErrorComponent;