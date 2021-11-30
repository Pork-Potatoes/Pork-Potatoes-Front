import React, { Component } from "react";
import './SettingModal.css';
import axios from "axios";
import https from "https";
import swal from "sweetalert";

const agent = new https.Agent({
  rejectUnauthorized: false
});

class UserDeleteModal extends Component {
  render() {
    const { open, close } = this.props;
    const success = () => {
      window.href.location = "/"
      swal("[탈퇴 완료] 메인 화면으로 돌아갑니다.", {
        buttons: false,
        timer: 2000,
      });
    }
    const userDelete = async (event) => {
      event.preventDefault();
      try {
        await axios.delete("https://www.matzipmajor.com/api/users/9", { httpsAgent: agent });
        success()
      }
      catch (e) {
        alert("다시 시도해주세요")
      }
    }
    return (
      <>
        {open ? (
          <div className="settingmodal">
            <section>
              <h3>탈퇴하시겠습니까? </h3>
              <div>
                <button onClick={userDelete} style={{ color: "#d57358" }}>탈퇴</button>
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