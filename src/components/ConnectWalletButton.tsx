import { useAccount } from "wagmi";
import useConnectWalletModal from "../hooks/useConnectWalletModal";

const ConnectWallet = () => {
  const account = useAccount();
  const { component, setOpen } = useConnectWalletModal();

  return (
    <>
      {account && account.address ? (
        <span>{account.address}</span>
      ) : (
        <button
          onClick={() => {
            setOpen(true);
          }}
        >
          connect
        </button>
      )}
      {component}
    </>
  );
};

export default ConnectWallet;
