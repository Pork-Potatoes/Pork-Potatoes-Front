import React, { Component } from "react";
import styled from "styled-components";
import KaKaoLogin from "react-kakao-login";
import "../components/Modal.css";
import logo from '../assets/logo.png';

const BtnWrapper = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin-top: 27px;
`;

const KaKaoBtn = styled(KaKaoLogin)`
    padding: 0;
    width: 300px;
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

const NaverBtn =styled.button`
  padding: 0;
    width: 222px;
    height: 44px;
    line-height: 44px;
    color: black;
    background-color: #36D168;
    border: 1px solid transparent;
    border-radius: 3px;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    cursor: pointer;
    margin-top: 19px;
    &:hover{
        box-shadow: 0 0px 15px 0 rgba(0, 0, 0, 0.2)
    }
`;

const GoogleBtn =styled.button`
    padding: 0;
    width: 222px;
    height: 44px;
    line-height: 44px;
    color: black;
    background-color: white;
    border: 1px solid;
    border-radius: 3px;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    cursor: pointer;
    margin-top: 19px;
    &:hover{
        box-shadow: 0 0px 15px 0 rgba(0, 0, 0, 0.2)
    }
`;

class SignIn extends Component {

  render() {
    const { isOpen, close } = this.props;
    return (
      <>
        {isOpen ? (  
          <div className="modal">
            <section>
              <header>
                <button className="close" onClick={close} />
              </header>
              <main onClick={isOpen}>
                <text style={{fontSize:"37px"}}>신촌대 맛집전공 원서 제출</text>
                <text style={{fontSize:"24px",marginTop:"32px"}}>응시 방법을 선택하세요.</text>
                <BtnWrapper>
                  <KaKaoBtn
                    jsKey={'315c8c3d577b20ffac6705a2b365e750'}
                    buttonText="KaKao"
                    onSuccess={console.log}
                    onFailure={console.error}
                    onLogout={console.info}
                    getProfile={true}
                    />
                  <NaverBtn><a href="http://localhost:8080/oauth2/authorization/naver">네이버로 로그인하기</a></NaverBtn>
                  <GoogleBtn><a href="http://localhost:8080/oauth2/authorization/google?redirect_uri=<http://localhost:3000>">구글로 로그인하기</a></GoogleBtn>
                </BtnWrapper>
              </main>
              <footer>
                <img src={logo} width="80px" height='26px'></img>
              </footer>
            </section>
          </div>
        ) : null}
      </>
    );
  }
}

export default SignIn;

