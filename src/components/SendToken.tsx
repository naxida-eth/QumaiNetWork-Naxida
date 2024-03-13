import { useEffect, useState } from "react";
import styled from "styled-components";
import { parseEther } from "viem";
import { useAccount, useSendTransaction, useTransaction } from "wagmi";
import useMyBalance from "../hooks/useMyBalance";

const SendToken = () => {
  const [amount, setAmount] = useState<number>();
  const [address, setAddress] = useState<`0x${string}`>();

  const [hash, setHash] = useState<`0x${string}`>();
  const { sendTransaction } = useSendTransaction();
  const hashResult = useTransaction({ hash });

  const account = useAccount();

  const balance = useMyBalance({ account: account.address });

  useEffect(() => {
    if (hashResult && hashResult.data)
      console.log({
        hashResult,
      });
  }, [hashResult, balance]);

  return (
    <StyledContainer>
      <StyledItem>
        <h3 style={{ width: "100%" }}>Amount</h3>
        <input
          onChange={(e) => {
            setAmount(Number(e.target.value));
          }}
          value={amount}
          type="number"
        />
        ETH
        <p
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <span>balance:</span>
          <span>
            {" "}
            {balance.data && account
              ? balance.data.formatted
              : "connect wallet"}{" "}
          </span>
        </p>
      </StyledItem>
      <StyledItem>
        <h3>Address</h3>
        <input
          onChange={(e) => {
            setAddress(e.target.value as `0x${string}`);
          }}
          value={address}
          type="text"
        />
      </StyledItem>
      <button
        onClick={() => {
          if (address && amount) {
            sendTransaction(
              {
                to: address,
                value: parseEther(String(amount)),
              },
              {
                onSuccess: (hash) => {
                  if (hash) {
                    setHash(hash);
                    console.log({
                      hash,
                    });
                  }
                },
              }
            );
          }
        }}
      >
        send
      </button>
    </StyledContainer>
  );
};

export default SendToken;

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;

const StyledItem = styled.div`
  width: 100%;
`;
