import React, { Fragment } from "react";
import styled from "styled-components";
import KakaoLogin from "react-kakao-login";

const ButtonWrapper = styled.div`
  background-color:white;
  display: flex;
  flex-direction: row;
  justify-content:center;
`

const KakaoBtn = styled(KakaoLogin)`
    padding: 0;
    width: 190px;
    height: 44px;
    line-height: 44px;
    color: #783c00;
    background-color: #FFEB00;
    border: 1px solid transparent;
    border-radius: 3px;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    cursor: pointer;
    &:hover{
        box-shadow: 0 0px 15px 0 rgba(0, 0, 0, 0.2)
    }
`


function socialLogin() {
  return (
    <div>
        <ButtonWrapper>
        <KakaoBtn
          jsKey={'315c8c3d577b20ffac6705a2b365e750'}
          buttonText="KaKao"
          onSuccess={console.log}
          onFailure={console.error}
          onLogout={console.info}
          getProfile={true}
        />

        </ButtonWrapper>
    </div>
  );
}

export default socialLogin;