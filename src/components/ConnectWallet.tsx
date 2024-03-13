import { useConnect } from "wagmi";

const ConnectWallet = () => {
  const { connectors, connect } = useConnect();
  
  return connectors.map((connector) => (
    <button
      key={connector.uid}
      onClick={() => {
        console.log({
          key: "connect wallet",
        });
        connect({ connector });
      }}
    >
      {connector.name}
    </button>
  ));
};

export default ConnectWallet;
