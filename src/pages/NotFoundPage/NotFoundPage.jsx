import {Link} from "react-router-dom";
import {PageContent} from "./Styles.jsx";

export const NotFoundPage = () => {
    return (
        <PageContent>
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <p><
                Link to="/login"/>
            </p>
        </PageContent>
    )
}

