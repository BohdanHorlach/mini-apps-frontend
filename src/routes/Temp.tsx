import { Link } from "react-router-dom";
import {
    LinkToLoginPage,
    LinkToPhotosPage,
    LinkToSubscriptionPage,
    GoToBasePageAndClearErrorContext,
    LinkToVideoFromCameraPage
} from "../components/Links.tsx";
import {
    TELEGRAM_USER_ROUTE,
    GOOGLE_USER_ROUTE,
    ERROR_ROUTE,
} from "../static/routes.tsx";


const Temp = () => {
    return <>
        <div>
            Temp page
        </div>
        <LinkToLoginPage />
        <br />
        <LinkToPhotosPage />
        <br />
        <LinkToSubscriptionPage />
        <br />
        <GoToBasePageAndClearErrorContext />
        <br />
        <LinkToVideoFromCameraPage />
        <br />
        <Link to={TELEGRAM_USER_ROUTE} replace={true}>
            Go to Telegram User
        </Link>
        <Link to={GOOGLE_USER_ROUTE} replace={true}>
            Go to Google User
        </Link>
        <Link to={ERROR_ROUTE} replace={true}>
            Go to Error page
        </Link>
    </>
}

export default Temp;