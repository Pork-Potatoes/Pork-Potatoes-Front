import React, { Component } from "react";
import './SettingModal.css';
import axios from "axios";
import https from "https";

const agent = new https.Agent({
  rejectUnauthorized: false
});

class UserDeleteModal extends Component {
    userDelete = async (event) => {
      event.preventDefault();
      try{
        const response = await axios.delete("http://ec2-3-37-228-150.ap-northeast-2.compute.amazonaws.com:8080/api/users/6", {httpsAgent: agent});
        response.status===200
        ? alert("[탈퇴 완료] 메인 화면으로 돌아갑니다.")
        : alert("다시 시도해주세요")
        // window.location.href("http://localhost:3000");
      }
      catch(e){
        console.log("userDelete error");
      }
    }
    render() {
      const { open, close } = this.props;
      return (
        <>
          {open ? (  
            <div className="modal">
              <section>
                <h3>탈퇴하시겠습니까?</h3>
                <div>
                    <button onClick={this.userDelete} style={{color:"#d57358"}}>탈퇴</button>
                    <button onClick={close}>닫기</button>
                </div>
              </section>
            </div>
          ) : null}
        </>
      );
    }
  }
export default UserDeleteModal;