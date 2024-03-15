import React from "react";
import styled from "styled-components";
import Staked from './Staked'

const Airdrop = () => {
  return (
    <SytyledContainer>
      <StyledDetail>
        <StyledDetailLeft>
          <img src="" alt="" />
          <div>
            <h4>BTC Vault</h4>
            <span>avalon</span>
          </div>
        </StyledDetailLeft>
        <StyledDetailRight>
          <div>
            <h4>TVL</h4>
            <span>$17.4M</span>
          </div>{" "}
          <div>
            <h4>TVL</h4>
            <span>$17.4M</span>
          </div>{" "}
          <div>
            <h4>TVL</h4>
            <span>$17.4M</span>
          </div>
        </StyledDetailRight>
      </StyledDetail>

      <Staked>

      </Staked>
    </SytyledContainer>
  );
};

export default Airdrop;

const StyledDetailRight = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 4rem;

  div {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;

    h4 {
      width: 100%;
      margin: 0;
    }
    span {
      width: 100%;
    }
  }
`;

const StyledDetailLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-right: 4rem;
  border-right: 1px solid white;

  img {
    width: 80px;
    height: 80px;
  }

  div {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
    h4 {
      font-weight: 500;
      margin: 0;
    }

    span {
      width: 100%;
    }
  }
`;

const StyledDetail = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const SytyledContainer = styled.div`
  display: flex;
  width: 80%;
  flex-wrap: wrap;
  gap: 2rem;
`;
