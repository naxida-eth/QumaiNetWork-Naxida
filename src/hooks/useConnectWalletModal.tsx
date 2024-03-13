import { useState } from "react";
import styled from "styled-components";
import ConnectWallet from "../components/ConnectWallet";

function useConnectWalletModal() {
  const [open, setOpen] = useState(false);

  return {
    component: (
      <>
        {open && (
          <StyledContaner>
            <button
              onClick={() => {
                setOpen(false);
              }}
            >
              close
            </button>
            <ConnectWallet></ConnectWallet>
          </StyledContaner>
        )}
      </>
    ),
    open,
    setOpen,
  };
}

export default useConnectWalletModal;

const StyledContaner = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #000000;
  z-index: 9999;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;
