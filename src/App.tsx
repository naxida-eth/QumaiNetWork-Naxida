import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { config } from "./config";
import SendToken from "./components/SendToken";
import Vaults from "./components/Vaults";
import Airdrop from "./components/Airdrop";
import styled from "styled-components";
import ConnectWalletButton from "./components/ConnectWalletButton";

import {
  useLocation,
  useNavigate,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

import React, { useCallback } from "react";

const queryClient = new QueryClient();

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const toTab = useCallback(
    (url: string) => {
      navigate.push(url);
    },
    [navigate]
  );

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <StyledContainer>
          <StyledContainerTop>
            <NavLink to="/sendToken">sendToken</NavLink>
            <NavLink to="/vaults">Vaults</NavLink>
            <NavLink to="/airdrop">Airdrop</NavLink>
            <ConnectWalletButton />
          </StyledContainerTop>
          <StyledContainerBody>
            <Routes>
              <Route
                path="sendToken"
                element={
                  <>
                    <h2 style={{ width: "100%", textAlign: "center" }}>
                      Send ETH
                    </h2>
                    <SendToken></SendToken>
                  </>
                }
              ></Route>
              <Route path="vaults" element={<Vaults></Vaults>}></Route>
              <Route path="airdrop" element={<Airdrop></Airdrop>}></Route>
            </Routes>
          </StyledContainerBody>
        </StyledContainer>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;

const StyledContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
`;

const StyledContainerTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid white;
  width: 100%;
`;

const StyledContainerBody = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;

  box-sizing: border-box;
  overflow: auto;
  overflow-x: hidden;
`;
