import React from "react";
import styled from "styled-components";
import profile from "../assets/user.png";

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`
const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  padding-left: 20px;
  padding-bottom: 20px;
  width: 700px;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  margin: 10px;
`
const Line = styled.div`
  display: flex;
  height: 30px;
  flex-direction: row;
  justify-content: space-between;
`
const Button = styled.button`
  background: transparent;
  color: #d57358;
  border: none;
  outline: none
`
const Text = styled.h4`
  margin: 0px;
`
const Profile = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 100%;
  margin-bottom: 15px;
  margin-right: 50px;
  margin-left: 10px;
`
class SettingPage extends React.Component {
  render() {
    return(
      <Contents>
        <Container>
          <h1 style={{margin:"15px"}}>설정</h1>
          <Box>
            <h3>내 프로필</h3>
            <div style={{display:"flex", alignItems:"center"}}>
              <Profile src={profile}></Profile>
              <div>
                <Line style={{width:"530px"}}>
                  <div style={{display:"flex"}}>
                    <Text>프로필 사진</Text>
                  </div>
                  <Button>변경</Button>
                </Line>
                <Line style={{width:"530px"}}>
                  <div style={{display:"flex"}}>
                    <Text>닉네임</Text>
                    <Text style={{marginLeft: "80px", color:"gray"}}>돼지감자</Text>
                  </div>
                  <Button>변경</Button>
                </Line>
              </div>
            </div>
          </Box>
          <Box>
            <h3>코인</h3>
            <Line style={{width:"680px"}}>
              <div style={{display:"flex"}}>
                <Text>모은 코인 수</Text>
                <Text style={{marginLeft: "80px", color:"gray"}}>360</Text>
              </div>
              <Button>환전</Button>
            </Line>
          </Box>
          <Box>
            <h3>계정</h3>
            <Line style={{width:"680px"}}>
              <div style={{display:"flex"}}>
                <Text>이메일</Text>
                <Text style={{marginLeft: "118px", color:"gray"}}>lhr519@naver.com</Text>
              </div>
            </Line>
            <Line style={{width:"680px"}}>
              <div style={{display:"flex"}}>
                <Text>학교 인증</Text>
                <Text style={{marginLeft: "100px", color:"gray"}}>이화여자대학교</Text>
              </div>
              <Button>인증</Button>
            </Line>
            <Line style={{width:"680px"}}>
              <div style={{display:"flex"}}>
                <Text>비밀번호 변경</Text>
                <Text style={{marginLeft: "72px", color:"gray"}}>a********</Text>
              </div>
              <Button>변경</Button>
            </Line>
            <Line style={{width:"680px"}}>
              <Text>회원 탈퇴</Text>
              <Button>탈퇴</Button>
            </Line>
          </Box>
        </Container>
      </Contents>
    );
  }
}

export default SettingPage;