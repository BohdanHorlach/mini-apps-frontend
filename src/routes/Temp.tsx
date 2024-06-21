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
        <LinkToPhotosPage />
        <br />
        <LinkToSubscriptionPage />
        <br />
        <LinkToSubscriptionAdminPage />
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