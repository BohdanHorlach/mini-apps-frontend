import {
    LinkToLoginPage,
    LinkToPhotosPage,
    LinkToSubscriptionPage,
    LinkToSubscriptionAdminPage,
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
        <br />
        <LinkToPhotosPage />
        <br />
        <br />
        <LinkToSubscriptionPage />
        <br />
        <br />
        <LinkToSubscriptionAdminPage />
        <br />
        <br />
        <GoToBasePageAndClearErrorContext />
        <br />
        <br />
        <LinkToVideoFromCameraPage />
        <br />
        <br />
        <LinkToErrorPage />
        <br />
        <br />
        <LinkToGoogleUserPage />
        <br />
        <br />
        <LinkToTelegramUserPage />
    </>
}

export default Temp;