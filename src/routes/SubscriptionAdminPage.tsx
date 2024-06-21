import { Button } from "@mui/material";
import { TonConnectButton, useTonAddress } from "@tonconnect/ui-react";
//import { /*useCallback,*/ useEffect, useState } from "react";
//import {
//  BACKEND_GET_ADMIN_CONFIG_REQUEST,
//  BACKEND_SET_ADMIN_CONFIG_REQUEST,
//} from "../static/url";
//import { backendAxios } from "../utils/axiosConfig";
//import { Loading } from "../components/Components";
//import { AdminConfigResponseDto } from "../types/adminConfigTypes";
//import { ERROR_ROUTE } from "../static/routes";
//import { useErrorContext } from "../contexts/useContext";
//import { useNavigate } from "react-router-dom";

//---------------------------------------------------------------------------------//

export const SubscriptionAdminPage = () => {
  //const [loading, setLoading] = useState(true);
  //const [tonConnectUI] = useTonConnectUI();
  const address = useTonAddress();

  // wallet from tonConnect
  //const [wallet, setWallet] = useState<Wallet | null>(tonConnectUI.wallet);
  //const [adminConfig, setAdminConfig] = useState<AdminConfigResponseDto | null>(
  //  null
  //);

  // error handling
  //const errorContext = useErrorContext();
  //const navigate = useNavigate();

  //const handleError = useCallback(
  //  (error: { message: string }) => {
  //    errorContext.setError(error.message);
  //    console.log(errorContext.errorMessage);
  //    navigate(ERROR_ROUTE, { replace: true });
  //  },
  //  [errorContext, navigate]
  //);

  // main part

  //useEffect(() => {
    // when page is loading fetch current admin wallet state
    //const getAdminConfig = async () => {
    //  try {
    //    const adminConfig = (
    //      await backendAxios.get(BACKEND_GET_ADMIN_CONFIG_REQUEST)
    //    ).data;
    //    setAdminConfig(adminConfig);
    //    setLoading(false);
    //  } catch (error) {
    //    setLoading(false);
    //    handleError(error as { message: string });
    //  }
    //};

    // // ton connection tracking
    // const unsubscribe = tonConnectUI.onStatusChange((wallet) => {
    //   setWallet(wallet);
    // });

  //  getAdminConfig();

    // return () => {
    //   unsubscribe();
    // };
  //}, [handleError]);

  // backend request to set new admin wallet
  //const doSetNewAdminWallet = async () => {
  //  return backendAxios.post(BACKEND_SET_ADMIN_CONFIG_REQUEST, {
  //    wallet: address, //wallet?.account.address,
  //  });
  //};

  //if (loading) return <Loading />;
  return (
    <div className="page">
      <h2>Subscription Admin Page</h2>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <TonConnectButton />
      </div>

      {/*adminConfig && adminConfig.walletFriendlyAddress !== "" ?*/ (
        <>
          <p>Current admin wallet: {/*adminConfig.walletFriendlyAddress*/ "0QAJdLJT1ZepY7AKZM8KF2zsCikiVviPan5lLfbw5GjFR2Uy"}</p>
          <p>
            Updated at:
            {" " +
              "01-01-2024"
              /*new Date(adminConfig.timestamp).toDateString()*/ +
              " " +
              "01-01-2024"
              /*new Date(adminConfig.timestamp).toLocaleTimeString()*/}
          </p>
        </>
      ) /*: (
        <>
          <p>Admin wallet is not set</p>
        </>
      )*/}

      {address && (
        <>
          <div>
            Connected wallet: {address} {/*{wallet.account.address} */}
          </div>
          <Button
            onClick={async () => {
              try {
                //const adminConfig = (await doSetNewAdminWallet()).data;
                //setAdminConfig(adminConfig);
              } catch (error) {
                //handleError(error as { message: string });
              }
            }}
            sx={{
              mt: 2,
              mb: 2,
              backgroundColor: "var(--tg-theme-section-bg-color)",
              color: "var(--tg-theme-button-text-color)",
              borderColor: "var(--tg-theme-button-color)",
              p: 2, // Add padding for spacing
              '&:hover': {
                backgroundColor: "var(--tg-theme-secondary-bg-color)",
                borderColor: "var(--tg-theme-link-color)",
                opacity: "0.7"
              },
            }}
          >
            Set admin wallet
          </Button>
        </>
      )}
    </div>
  );
};
