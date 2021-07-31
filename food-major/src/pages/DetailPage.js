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

const NewReview = styled.div`
  height: 560px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 150px;
`

const DetailPage = () => {
  const location = useLocation();
  const {restaurantName,address,phoneNum,businessHour,snsAccount,avgScore}=location.state;
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
              <Review image={image} content="이곳에 리뷰 내용이 들어갑니다" restaurantName="산타비" menuName="떡볶이" university="이대" tags={['TV 방영', '비건', '연예인 맛집']} score='4'/> 
              <Review image={image} content="이곳에 리뷰 내용이 들어갑니다" restaurantName="산타비" menuName="떡볶이" university="이대" tags={['TV 방영', '비건', '연예인 맛집']} score='4'/> 
              <Review image={image} content="이곳에 리뷰 내용이 들어갑니다" restaurantName="산타비" menuName="떡볶이" university="이대" tags={['TV 방영', '비건', '연예인 맛집']} score='4'/> 
              <Review image={image} content="이곳에 리뷰 내용이 들어갑니다" restaurantName="산타비" menuName="떡볶이" university="이대" tags={['TV 방영', '비건', '연예인 맛집']} score='4'/> 
              <Review image={image} content="이곳에 리뷰 내용이 들어갑니다" restaurantName="산타비" menuName="떡볶이" university="이대" tags={['TV 방영', '비건', '연예인 맛집']} score='4'/> 
              <Review image={image} content="이곳에 리뷰 내용이 들어갑니다" restaurantName="산타비" menuName="떡볶이" university="이대" tags={['TV 방영', '비건', '연예인 맛집']} score='4'/> 
            </Contents>
      </NewReview>
    </div>
  );
};

export default DetailPage;