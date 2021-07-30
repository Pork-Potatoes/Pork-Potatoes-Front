import { Restaurant } from '@material-ui/icons';
import React from 'react';
import styled from "styled-components";
import restaurantIcon from "../assets/restaurantIcon.png";
import reviewIcon from "../assets/reviewIcon.png";
import Review from "../components/Review";
import image from "../assets/reviewImg.png";
import NewRestaurant from '../components/NewRestaurant';

const Filtering = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width:100%;
  height:70px;
  margin-top: 70px;
  position: fixed;
  background-color: white;
  box-shadow: 0px 2px 10px 0px silver;
`

const TagBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: fixed;
  height:60px;
  width: 80%;
  padding-top:10px;
  padding-left: 363px;
  padding-right: 363px;
  background-color: white;

`

const TagButton = styled.button`
  background: #ED6C54;
  color:white;
  font-size: 1rem;
  height: 48px;
  margin-left:8px;
  margin-right:8px;
  padding-left: 28px;
  padding-right: 28px;
  border-radius: 38px;
`

const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
  height: 900px;
  padding-top:140px;
`

const Result = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
  height: 70px;
  padding-top:0px;
`

const SearchRestaurant = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
  height: 900px;
  padding-top:10px;
`

const SearchReview = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
  height: 900px;
  padding-top:20px;
`

const Text = styled.text`
  font-size: 2.5rem;
  padding-left: 10px;
  font-weight: bold;
`

const Contents = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px;
`

const SearchPage = () => {
  const tags = ['비건', '연예인 맛집']
  return (
    <div>
    <Filtering>
      <TagBox>
        <TagButton>회식</TagButton>
        <TagButton>혼밥</TagButton>
        <TagButton>밥약</TagButton>
        <TagButton>데이트</TagButton>
        <TagButton>가족</TagButton>
      </TagBox>
    </Filtering>
    <Main>
      <Result>
        <h2>떡볶이 검색결과</h2>
      </Result>
      <SearchRestaurant>
        <div>
          <img src={restaurantIcon} alt="restaurant" height="40rem" width="40rem"/>
          <Text>식당</Text>
          <hr size="10px" width="100%" color="#D1D1D1" />
        </div>
        <Contents>
        <NewRestaurant restaurantName="산타비" university="이대" tags={tags} score='4' number='12' like="false"/>
        <NewRestaurant restaurantName="산타비" university="이대" tags={tags} score='4' number='12' like="true"/>
        <NewRestaurant restaurantName="산타비" university="이대" tags={tags} score='4' number='12' like="false"/>
        <NewRestaurant restaurantName="산타비" university="이대" tags={tags} score='4' number='12' like="true"/>
        </Contents>
      </SearchRestaurant>
      <SearchReview>
        <div>
          <img src={reviewIcon} alt="review" height="40rem" width="40rem"/>
          <Text>리뷰</Text>
          <hr size="10px" width="100%" color="#D1D1D1" />
        </div>
        <Contents>
          <Review image={image} content="이곳에 리뷰 내용이 들어갑니다" restaurantName="산타비" menuName="차돌떡볶이" university="이대" tags={['TV 방영', '비건', '연예인 맛집']} score='4'/> 
          <Review image={image} content="이곳에 리뷰 내용이 들어갑니다" restaurantName="산타비" menuName="차돌떡볶이" university="이대" tags={['TV 방영', '비건', '연예인 맛집']} score='4'/> 
          <Review image={image} content="이곳에 리뷰 내용이 들어갑니다" restaurantName="산타비" menuName="차돌떡볶이" university="이대" tags={['TV 방영', '비건', '연예인 맛집']} score='4'/> 
          <Review image={image} content="이곳에 리뷰 내용이 들어갑니다" restaurantName="산타비" menuName="차돌떡볶이" university="이대" tags={['TV 방영', '비건', '연예인 맛집']} score='4'/> 
          <Review image={image} content="이곳에 리뷰 내용이 들어갑니다" restaurantName="산타비" menuName="차돌떡볶이" university="이대" tags={['TV 방영', '비건', '연예인 맛집']} score='4'/> 
          <Review image={image} content="이곳에 리뷰 내용이 들어갑니다" restaurantName="산타비" menuName="차돌떡볶이" university="이대" tags={['TV 방영', '비건', '연예인 맛집']} score='4'/> 
        </Contents>
      </SearchReview>
    </Main>
    </div>
  );
};

export default SearchPage;