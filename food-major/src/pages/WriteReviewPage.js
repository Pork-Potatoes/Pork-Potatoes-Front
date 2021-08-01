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

const Input = styled.div`
    display:flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 4px;
    box-shadow: 0px 4px 4px rgba(51, 51, 51, 0.08), 0px 4px 16px rgba(51, 51, 51, 0.08);
    width:35vw;
    height:5vh;
    border: none;
    margin-bottom: 23px;
`
const InputConsol = styled.input`
    border: none;
    outline: none;
    width: 35vw;
    height: 5vh;
` 

const InputContent = styled.input`
    border: gray;
    outline: none;
    background-color: #F4F4F4;
    width: 35vw;
    height: 30vh;
    margin-top:16px;
` 
const Button = styled.button`
    background-color: white;
    border: none;
    width: 24px;
    height: 24px;
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
  height:8vh;
  margin-top: 10px;
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
    const restaurantObject=getRestaurant();
    const userObject=getUser();
    console.log(typeof(restaurantObject))
    console.log(typeof(userObject))
    console.log(typeof(Object.values(inputContent).toString()))
    console.log(typeof(parseFloat(Object.values(score).toString())))
    console.log(typeof(true))
    console.log(typeof(Object.values(inputMenu).toString()))
    console.log(typeof(new Date()))

    try{
      const response = await axios.post('https://www.matzipmajor.com/api/reviews',
      {
        "restaurant":restaurantObject,
        "user":userObject,
        "content":Object.values(inputContent).toString(),
        "score":parseFloat(Object.values(score).toString()),
        "anonymousFlag":true,
        "menuName":Object.values(inputMenu).toString(),
        "tagFood":'분식',
        "tagMood":'회식',
        "createdDate":new Date()
      
      });
      console.log(response)
      response.status===200 ? alert('리뷰 업로드 완료!') : alert('다시 시도해주세요');
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
              <img src={logo} height='40px'></img>
              <button className="close" onClick={closeModal}></button>
            </header>
            <main>
              <Input>
                <Button><img src={search} alt="search" height="15px"/></Button>
                <InputConsol placeholder="맛집 이름을 입력해 주세요"
                onChange={inputRestaurantChange}/>
              </Input>
              <Input>
                <Button><img src={search} alt="search" height="15px"/></Button>
                <InputConsol placeholder="메뉴를 입력해 주세요"
                onChange={inputMenuChange}/>
              </Input>
              <text style={{color:"rgb(17,17,17,0.48)", fontSize:"18px",marginTop:"11px"}}>선택하세요</text>
              <ReactStars
                count={5}
                onChange={ratingChanged}
                size={24}
                isHalf={true}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#ffd700"
              />
              <hr size="10px" width="600vw" color="#D7D7D7" />
              <text style={{fontSize:"20px",marginTop:"20px"}}>어떤 점이 좋았나요?</text>
              <InputContent placeholder="최소 10자 이상 입력해주세요." 
              onChange={inputContentChange}/>
              <UploadButton>사진/동영상 첨부하기</UploadButton>
              <RegisterButton onClick={addReview} >리뷰 등록</RegisterButton>
            </main>
          </section>
        </div>
    ):null}
    </>
  );
}

export default WriteReviewPage;