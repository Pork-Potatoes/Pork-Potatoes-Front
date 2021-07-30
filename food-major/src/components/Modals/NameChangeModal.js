import React, { Component } from "react";
import './SettingModal.css';
import axios from "axios";

class ReviewPage extends Component {
    nameChange = async () => {
        try{
          const response = await axios.patch("http://matzipmajor.com:8080/api/users/1", {nickname:"d"});
          console.log(response);
        }
        catch(e){
          console.log("nameChange error");
        }
      }
    render() {
      const { open, close } = this.props;
      return (
        <>
          {open ? (  
            <div className="modal">
              <section>
                <h3>닉네임 변경</h3>
                <form>
                    <input type="text" placeholder="새 닉네임"/>
                </form>
                <div>
                    <button onClick={this.nameChange} style={{color:"#d57358"}}>변경</button>
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