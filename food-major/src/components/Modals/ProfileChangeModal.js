import React, { Component } from "react";
import styled from "styled-components";
import './SettingModal.css';
import axios from "axios";
import swal from "sweetalert";
import profile from "../../assets/icon.png";

const Profile = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 100%;
  object-fit: cover;
  border: 0.5px solid #e0e0e0;
`

class ProfileChangeModal extends Component {
    state = {
        imageUrl: profile,
        file: null
    }
    processImage = (event) => {
      const imageFile = event.target.files[0];
      const url = URL.createObjectURL(imageFile);
      this.setState({ imageUrl : url })
      this.setState({ file: imageFile })
    }

    render() {
      const { open, close } = this.props;
      const success = () => {
        swal("변경되었습니다", {
          buttons: false,
          timer: 1000,
        });
        close()
      }
      const profileChange = async (event) => {
        event.preventDefault()
            try{
              const frm = new FormData();
              frm.append("uploadFile", this.state.file);
              await axios.patch("https://www.matzipmajor.com/api/users/9/image", frm, {headers: {'Content-Type':'multipart/form-data'}});
              success();
            }
            catch(e){
                alert("다시 시도해 주세요");
            }
        }
      return (
        <>
          {open ? (  
            <div className="settingmodal">
              <section>
                <h3>프로필 사진 변경</h3>
                <Profile src={this.state.imageUrl}></Profile>
                <label className="input-file-button" for="input-file">
                    업로드
                </label>
                <input type="file" accept="image/*" onChange={this.processImage} id="input-file" style={{display:"none"}}/> 
                <div>
                    <button onClick={profileChange} style={{color:"#d57358"}}>변경</button>
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
export default ProfileChangeModal;

