import React, { Component } from "react";
import './SettingModal.css';
import axios from "axios";
import swal from "sweetalert";

class AuthModal extends Component {
  state = {
    email: ""
  }

  handleChange = ({target: {value}}) => this.setState({email:value});
    render() {
      const { open, close } = this.props;
      const success = () => {
        swal("변경되었습니다", {
          buttons: false,
          timer: 1000,
        });
        close()
      }
      const auth = async (event) => {
        event.preventDefault()
        try{
          const response = await axios.post("https://www.matzipmajor.com/api/users/9/authenticate", {"university":"ewha", "email":this.state.email});
          console.log(response)
          //   success()
        }
        catch(e){
          alert("다시 새도해주세요");
        }
      }
      return (
        <>
          {open ? (  
            <div className="settingmodal">
              <section>
                <h3>학교 인증</h3>
                    <input type="text" value={this.email} onChange={this.handleChange} placeholder="인증받을 학교 메일"/>
                  <div>
                    <button onClick={auth} style={{color:"#d57358"}}>인증 메일 전송</button>
                    <button onClick={close}>닫기</button>
                  </div>
              </section>
            </div>
          ) : null}
        </>
      );
    }
  }
export default AuthModal;