import React, { Component } from "react";
import './SettingModal.css';
import axios from "axios";

class NameChangeModal extends Component {
  state = {
    name: ""
  }

  handleChange = ({target: {value}}) => this.setState({name:value});

  nameChange = async (event) => {
    event.preventDefault()
    try{
      const response = await axios.patch("http://ec2-3-37-228-150.ap-northeast-2.compute.amazonaws.com:8080/api/users/7/nickname", {"nickname":this.state.name});
      response.status===200 ? alert("변경되었습니다!") : alert("다시 시도해주세요");
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
                    <input type="text" value={this.name} onChange={this.handleChange} placeholder="새 닉네임"/>
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
export default NameChangeModal;