import React, { Component } from "react";
import './SettingModal.css';
import axios from "axios";
import https from "https";

const agent = new https.Agent({
  rejectUnauthorized: false
});

class ReviewPage extends Component {
    userDelete = async () => {
      try{
        const response = await axios.delete("http://matzipmajor.com:8080/api/users/1", {httpsAgent: agent});
        console.log(response);
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
export default ReviewPage;