import React, { useState } from "react";
import styled from "styled-components";

type TabKey = "deposit" | "withdraw";

const Staked = () => {
  const [tab, setTab] = useState<TabKey>("deposit");

  return (
    <StyledContainer>
      <StyledTabs>
        <StyledTab
          flag={tab === "deposit"}
          onClick={() => {
            setTab("deposit");
          }}
        >
          deposit
        </StyledTab>
        <StyledTab
          flag={tab === "withdraw"}
          onClick={() => {
            setTab("withdraw");
          }}
        >
          withdraw
        </StyledTab>
      </StyledTabs>
      <StyledContent>
        {tab === "deposit" && (
          <StyledStakedBox>
            <p>
              <span>deposit</span>
              <label>available: 3.19</label>
            </p>
            <StyledInputBox>
              <img src="" alt="" />
              <input type="text" />
            </StyledInputBox>
            <p>
              <span>Total Token deposit</span>

              <label>
                2.88 token
                <p>$300000</p>
              </label>
            </p>
          </StyledStakedBox>
        )}
        {tab === "withdraw" && (
          <StyledStakedBox>
            <p>
              <span>withdraw</span>
              <label>available: 2.88</label>
            </p>
            <StyledInputBox>
              <img src="" alt="" />
              <input type="text" />
            </StyledInputBox>
            <p>
              <span>Total Token withdraw</span>

              <label>
                2.88 token
                <p>$300000</p>
              </label>
            </p>
          </StyledStakedBox>
        )}
      </StyledContent>
    </StyledContainer>
  );
};

export default Staked;

const StyledInputBox = styled.div`
  width: 100%;
  height: 2.2rem;
  border: 1px solid white;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  img{
    width: 1.6rem;
    height: 1.6rem;
    margin-right: 0.5rem;
  }

  input {
    background: none;
    border: 0;
    outline: none;
  }
`;

const StyledStakedBox = styled.div`
  > p {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    label {
      p {
        margin: 0cqmax;
      }
    }
  }
`;

const StyledContent = styled.div``;

const StyledTab = styled.div<{ flag: boolean }>`
  border: 1px solid white;
  padding: 0 1rem;
  cursor: pointer;

  background: ${(props) => (props.flag ? "#777777" : "unset")};
`;

const StyledTabs = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

const StyledContainer = styled.div`
  width: 40%;
`;
