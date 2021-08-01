import {useState, useEffect} from 'react';
import axios from 'axios';
import styled from "styled-components";
import Review from "../components/Review";
import RestuarantInfo from '../components/RestuarantInfo';
import image from "../assets/reviewImg.png";
import React from "react";
import {useLocation} from "react-router";

const Contents = styled.div`
  display:flex;
  flex-direction: row;
  flex-wrap: wrap;
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`

const NewReview = styled.div`
  height: 560px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 150px;
`


const DetailPage = () => {
  const location = useLocation();
  const {restaurantNum, restaurantName,address,phoneNum,businessHour,snsAccount,avgScore}=location.state;

  const [data,setData] = useState();

    useEffect(async() => {
        try{
            const response = await axios.get(`https://www.matzipmajor.com/api/restaurants/${restaurantNum}/reviews?sort=-created-date`);
            setData(response.data);
        } catch (e) {
            console.log("error");
        }
    },[]);

  return (
    <div>
      <RestuarantInfo 
        restaurantName={restaurantName}
        address={address}
        phoneNum={phoneNum}
        businessHour={businessHour}
        snsAccount={snsAccount} 
        avgScore={avgScore}
        scrap="true"/>
      <NewReview>
        <h3 style={{marginBottom:0, marginLeft:15}}>최신 리뷰</h3>
            <Contents>
              <Grid>
                {data?.map((review) =>
                  <Review reviewNum={review.reviewNum}
                    image={review.filePath}
                    content={review.content}
                    restaurantName={review.restaurant.restaurantName}
                    menuName={review.menuName}
                    tagFood={review.tagFood}
                    tagMood={review.tagMood}
                    score={review.score}
                    createdDate={review.createdDate}
                    likedCnt={review.likedCnt}
                    />
                )}
              </Grid>
            </Contents>
      </NewReview>
    </div>
  );
};

export default DetailPage;