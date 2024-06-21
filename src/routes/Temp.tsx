import {
    LinkToLoginPage,
    LinkToPhotosPage,
    LinkToSubscriptionPage,
    GoToBasePageAndClearErrorContext,
    LinkToVideoFromCameraPage,
    LinkToErrorPage,
    LinkToGoogleUserPage,
    LinkToTelegramUserPage
} from "../components/Links.tsx";


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
        <LinkToErrorPage />
        <br />
        <LinkToGoogleUserPage />
        <br />
        <LinkToTelegramUserPage />
    </>
}

export default Temp;