import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { config } from "./config";
import SendToken from "./components/SendToken";
import styled from "styled-components";
import ConnectWalletButton from "./components/ConnectWalletButton";

const queryClient = new QueryClient();

function App() {

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <StyledContainer>
          <StyledContainerTop>
            <h3>sendToken</h3>
            <ConnectWalletButton />
          </StyledContainerTop>
          <StyledContainerBody>
            <h2 style={{ width: "100%", textAlign: "center" }}>Send ETH</h2>
            <SendToken></SendToken>
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
`;
