import React, { Component } from "react";
import './SettingModal.css';
import axios from "axios";
import swal from "sweetalert";

class NameChangeModal extends Component {
  state = {
    name: ""
  }

  handleChange = ({target: {value}}) => this.setState({name:value});
    render() {
      const { open, close } = this.props;
      const success = () => {
        swal("변경되었습니다", {
          buttons: false,
          timer: 1000,
        });
        close()
      }
      const nameChange = async (event) => {
        event.preventDefault()
        try{
          await axios.patch("https://www.matzipmajor.com/api/users/9/nickname", {"nickname":this.state.name});
          success()
        }
        catch(e){
          alert("다시 시도해주세요");
        }
      }
      return (
        <>
          {open ? (  
            <div className="settingmodal">
              <section>
                <h3>닉네임 변경</h3>
                    <input type="text" value={this.name} onChange={this.handleChange} placeholder="새 닉네임"/>
                  <div>
                    <button onClick={nameChange} style={{color:"#d57358"}}>변경</button>
                    <button onClick={close}>닫기</button>
                  </div>
              </section>
            </div>
          ) : null}
        </>
      );
    }
  }
export default NameChangeModal;