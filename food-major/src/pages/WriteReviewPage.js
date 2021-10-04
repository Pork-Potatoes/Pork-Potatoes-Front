import React, { Component,useState } from "react";
import styled from "styled-components";
import '../components/Modals/Modal.css';
import logo from '../assets/logo.png';
import search from '../assets/search.png';
import { fontSize } from "@material-ui/system";
import Rating from '@material-ui/lab/Rating';
import ReactStars from "react-rating-stars-component";
import { makeStyles } from '@material-ui/core/styles';
import axios from "axios";
import https from "https";
import swal from "sweetalert";

const Input = styled.div`
    display:flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 4px;
    box-shadow: 0px 4px 4px rgba(51, 51, 51, 0.08), 0px 4px 16px rgba(51, 51, 51, 0.08);
    width:33vw;
    height:5vh;
    border: none;
    margin-bottom: 1.5vh;
`
const InputConsol = styled.input`
    border: none;
    outline: none;
    width: 30vw;
    height: 4vh;
` 

const Button = styled.button`
    background-color: white;
    border: none;
    width: 4vh;
    height: 4vh;
`

const InputContent = styled.input`
    border: gray;
    outline: none;
    background-color: #F4F4F4;
    width: 33vw;
    height: 25vh;
    margin-top:1vh;
    margin-bottom: 1vh;
` 


const UploadButton = styled.button`
  width:35vw;
  height:8vh;
  margin-top: 10px;
  background-color: white;
  border: dashed 1px #999999;
  text-align: center;
`

const RegisterButton = styled.button`
  width:25vw;
  min-height: 4vh;
  max-height:8vh;
  margin-top: 1vh;
  background-color: white;
  border:solid 1px #BABABA;
  border-radius: 32px;
  text-align: center;
  color:#F06D58;
`
const agent = new https.Agent({
  rejectUnauthorized: false
});

function WriteReviewPage (props) {
  const {open,closeModal}=props;
  const [inputRestaurant,setInputRestaurant]=useState('');
  const [inputMenu,setInputMenu]=useState('');
  const [inputContent,setInputContent]=useState('');
  const [score,setScore]=useState(5);
  const [imageUrl,setImageUrl]=useState(null);
  const [file,setFile]=useState(null);

  const processImage = (event) => {
    const imageFile = event.target.files[0];
    const url = URL.createObjectURL(imageFile);
    setImageUrl({url});
    setFile({imageFile});
  }
  const successAddReview = () => {
    swal("리뷰가 등록되었습니다.", {
      buttons: false,
      timer: 1000,
    });
    closeModal();
  }
  const failAddReview = () => {
    swal("리뷰 등록에 실패했습니다..", {
      buttons: false,
      timer: 1000,
    });
    closeModal();
  }
  const inputRestaurantChange=(event)=>{
    const keyword=event.target.value;
    setInputRestaurant({keyword})
  }
  const inputMenuChange=(event)=>{
    const keyword=event.target.value;
    setInputMenu({keyword})
  }
  const inputContentChange=(event)=>{
    const keyword=event.target.value;
    setInputContent({keyword})
  }
  const ratingChanged = (newRating) => {
    setScore({newRating});
  };
  const addReview = async () => {
    const restaurantObject=await getRestaurant();
    const userObject=await getUser();
    try{
      const formData=new FormData();
      formData.append('file',file);
      console.log('file ',file);
      console.log('formData ',formData);
      console.log('resobj',restaurantObject)
      console.log('userobj',userObject)
      console.log(Object.values(inputContent).toString())
      console.log(parseFloat(Object.values(score).toString()))
      console.log(new Date())
      const response = await axios.post('https://www.matzipmajor.com/api/reviews',
      {"image":formData,
        "requestDto":{
          "restaurant":restaurantObject,
          "user":userObject,
          "content":Object.values(inputContent).toString(),
          "score":parseFloat(Object.values(score).toString()),
          "anonymousFlag":true,
          "menuName":Object.values(inputMenu).toString(),
          "tagFood":'분식',
          "tagMood":'회식',
          "createdDate":new Date(),
        }
      });
      console.log(response)
      response.status===200 ? successAddReview() : failAddReview();
    }
    catch(e){
      console.log('reviewUpload error');
    }
  }
  const getRestaurant= async () => {
    try{
      const url="https://www.matzipmajor.com/api/search?q="+Object.values(inputRestaurant).toString();
      const restaurantdata = await axios.get(url, {httpsAgent: agent});
      const resNum = restaurantdata.data[0].restaurantNum;
      const url2="https://www.matzipmajor.com/api/restaurants/"+resNum;
      const restaurantObject = await axios.get(url2, {httpsAgent: agent});
      return restaurantObject.data;
    }
    catch(e){
      console.log("getRestaurant error");
    }
  }
  const getUser= async () => {
    try{
      const url="https://www.matzipmajor.com/api/users/"+1;
      const userObject = await axios.get(url, {httpsAgent: agent});
      return userObject.data;
    }
    catch(e){
      console.log("getUser error");
    }
  }


  return (
    <>
    {open?(
        <div className='modal'>
          <section>
            <header>
              <img src={logo} height='40vh'></img>
              <button className="close" onClick={closeModal}></button>
            </header>
            <main>
              <Input>
                <Button><img src={search} alt="search" /></Button>
                <InputConsol placeholder="맛집 이름을 입력해 주세요"
                onChange={inputRestaurantChange}/>
              </Input>
              <Input>
                <Button><img src={search} alt="search" /></Button>
                <InputConsol placeholder="메뉴를 입력해 주세요"
                onChange={inputMenuChange}/>
              </Input>
              <text style={{color:"rgb(17,17,17,0.48)", fontSize:"18px",marginTop:"11px"}}>선택하세요</text>
              <ReactStars
                count={5}
                onChange={ratingChanged}
                size={30}
                isHalf={true}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#ffd700"
              />
              <hr size="10px" width="300vw" color="#D7D7D7" />
              <text style={{fontSize:"20px",marginTop:"1vh"}}>어떤 점이 좋았나요?</text>
              <InputContent placeholder="최소 10자 이상 입력해주세요." 
              onChange={inputContentChange}/>
              <input type="file" accept="image/*" onChange={processImage} id="input-file"/> 
            </main>
            <footer>
              <RegisterButton onClick={addReview} >리뷰 등록</RegisterButton>
            </footer>
          </section>
        </div>
    ):null}
    </>
  );
}

export default WriteReviewPage;