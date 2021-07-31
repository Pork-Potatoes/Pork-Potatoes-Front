import React, { Component } from "react";
import styled from "styled-components";
import "../components/Modals/Modal.css";
import logo from '../assets/logo.png';
import loginKakao from '../assets/loginKakao.png';
import loginNaver from '../assets/loginNaver.png';
import loginGoogle from '../assets/loginGoogle.png';

const BtnWrapper = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin-top: 27px;
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
                  <a href='https://matzipmajor.com/oauth2/authorization/kakao'>
                    <img src={loginKakao} style={{margin:'10px'}}/>
                  </a>
                  <a href='https://matzipmajor.com/oauth2/authorization/naver'>
                    <img src={loginNaver} style={{margin:'10px'}}/>
                  </a>
                  <a href='https://matzipmajor.com/oauth2/authorization/google'>
                  <img src={loginGoogle} style={{margin:'10px'}}/>
                  </a>
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

