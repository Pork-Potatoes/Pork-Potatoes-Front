import React, { Component } from "react";
import styled from "styled-components";
import './SettingModal.css';
import axios from "axios";
import profile from "../../assets/icon.png";

const Profile = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 100%;
  object-fit: cover;
  border: 0.5px solid #e0e0e0;
`

class NameChangeModal extends Component {
    state = {
        imageUrl: profile
    }

    processImage = (event) => {
        const imageFile = event.target.files[0];
        const url = URL.createObjectURL(imageFile);
        this.setState({ imageUrl : url })
    }
    nameChange = async (event) => {
    event.preventDefault()
        try{
            const response = await axios.patch("http://ec2-3-37-228-150.ap-northeast-2.compute.amazonaws.com:8080/api/users/7/image", {"nickname":this.state.imageUrl});
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
                <h3>프로필 사진 변경</h3>
                <Profile src={this.state.imageUrl}></Profile>
                <label className="input-file-button" for="input-file">
                    업로드
                </label>
                <input type="file" accept="image/*" onChange={this.processImage} id="input-file" style={{display:"none"}}/> 
                <div>
                    <button onClick={this.nameChange} style={{color:"#d57358"}}>변경</button>
                    <button onClick={() => {
                        this.setState({imageUrl:profile});
                        close();
                    }}>닫기</button>
                </div>
              </section>
            </div>
          ) : null}
        </>
      );
    }
  }
export default NameChangeModal;