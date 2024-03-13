import { Config, UseAccountReturnType, useBalance } from "wagmi";

const useMyBalance = ({
  account,
}: {
  account: UseAccountReturnType<Config>["address"];
}) => {
  const balance = useBalance({
    address: account,
  });

  return balance;
};

export default useMyBalance;
