import React from "react";
import https from "https"
import axios from "axios";
import styled from "styled-components";
import NameChangeModal from "../components/Modals/NameChangeModal"
import UserDeleteModal from "../components/Modals/UserDeleteModal"

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 2400px;
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
  margin-bottom: 3px;
`
const Button = styled.button`
  background: transparent;
  color: #d57358;
  border: none;
  outline: none;
  cursor: pointer;
  :hover{
    font-weight: bold;
  }
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
  object-fit: cover;
  border: 0.5px solid #e0e0e0;
`
const agent = new https.Agent({
  rejectUnauthorized: false
});

class SettingPage extends React.Component {
  state = {
      user: {},
      nameChangeOpen: false,
      userDeleteOpen: false
  }
  getUser = async () => {
    try{
      const {data: user} = await axios.get("http://matzipmajor.com:8080/api/users/1", {httpsAgent: agent});
      this.setState({ user });
    }
    catch(e){
      console.log("getUser error");
    }
  }
  componentDidMount() {
    this.getUser();
  }
  componentDidUpdate() {
    this.getUser();
  }

  render() {
    const user = this.state.user;
    const openNameChangeModal = () => {
      this.setState({nameChangeOpen: true});
    }
    const closeNameChangeModal = () => {
      this.setState({nameChangeOpen: false});
    }
    const openUserDeleteModal = () => {
      this.setState({userDeleteOpen: true});
    }
    const closeUserDeleteModal = () => {
      this.setState({userDeleteOpen: false});
    }
    return(
      <Contents>
        <Container>
          <h1 style={{margin:"15px"}}>설정</h1>
          <Box>
            <h3>내 프로필</h3>
            <div style={{display:"flex", alignItems:"center"}}>
              <Profile src={user.profileUrl}></Profile>
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
                    <Text style={{marginLeft: "80px", color:"gray"}}>{user.nickname}</Text>
                  </div>
                  <Button onClick={ openNameChangeModal }>변경</Button>
                </Line>
              </div>
            </div>
          </Box>
          <Box>
            <h3>코인</h3>
            <Line style={{width:"680px"}}>
              <div style={{display:"flex"}}>
                <Text>모은 코인 수</Text>
                <Text style={{marginLeft: "80px", color:"gray"}}>{user.coin}</Text>
              </div>
              <Button>환전</Button>
            </Line>
          </Box>
          <Box>
            <h3>계정</h3>
            <Line style={{width:"680px"}}>
              <div style={{display:"flex"}}>
                <Text>이메일</Text>
                <Text style={{marginLeft: "118px", color:"gray"}}>{user.email}</Text>
              </div>
            </Line>
            <Line style={{width:"680px"}}>
              <div style={{display:"flex"}}>
                <Text>학교 인증</Text>
                {
                    user.university===null
                    ? <Text style={{marginLeft: "100px", color:"gray"}}>학교 인증이 필요합니다</Text>
                    : <Text style={{marginLeft: "100px", color:"gray"}}>{user.university}</Text>
                }
                <Text style={{marginLeft: "100px", color:"gray"}}>{user.university}</Text>
              </div>
              <Button>인증</Button>
            </Line>
            <Line style={{width:"680px"}}>
              <Text>회원 탈퇴</Text>
              <Button onClick={ openUserDeleteModal }>탈퇴</Button>
            </Line>
          </Box>
          <NameChangeModal open={ this.state.nameChangeOpen } close={ closeNameChangeModal }></NameChangeModal>
          <UserDeleteModal open={ this.state.userDeleteOpen } close={ closeUserDeleteModal }></UserDeleteModal>
        </Container>
      </Contents>
    );
  }
}

export default SettingPage;