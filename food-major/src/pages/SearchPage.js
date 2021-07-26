import { Restaurant } from '@material-ui/icons';
import React from 'react';
import styled from "styled-components";
import restaurantIcon from "../assets/restaurantIcon.png";
import reviewIcon from "../assets/reviewIcon.png";
import Review from "../components/Review";
import image from "../assets/reviewImg.png";
import NewRestaurant from '../components/NewRestaurant';
import Sort from '../components/Sort.js';

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
  z-index:100;
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
  font-size: 20px;
  height: 52px;
  margin-left:8px;
  margin-right:8px;
  padding-top: 12px;
  padding-bottom: 12px;
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
  justify-content: space-between;
  align-content: center;
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
  font-size: 40px;
  padding-left: 10px;
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
        <Sort />
      </Result>
      <SearchRestaurant>
        <div>
          <img src={restaurantIcon} alt="restaurant" height="40px" width="40px"/>
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
          <img src={reviewIcon} alt="review" height="40px" width="40px"/>
          <Text>리뷰</Text>
          <hr size="10px" width="100%" color="#D1D1D1" />
        </div>
        <Contents>
          <Review image={image} menuName="떡볶이" content="이곳에 리뷰 내용이 들어갑니다" restaurantName="산타비" university="이대" tags={['분식', '연예인 맛집']} score='4'/> 
          <Review image={image} menuName="떡볶이" content="이곳에 리뷰 내용이 들어갑니다" restaurantName="산타비" university="이대" tags={['분식', '연예인 맛집']} score='4'/> 
          <Review image={image} menuName="떡볶이" content="이곳에 리뷰 내용이 들어갑니다" restaurantName="산타비" university="이대" tags={['분식', '연예인 맛집']} score='4'/> 
          <Review image={image} menuName="떡볶이" content="이곳에 리뷰 내용이 들어갑니다" restaurantName="산타비" university="이대" tags={['분식', '연예인 맛집']} score='4'/> 
          <Review image={image} menuName="떡볶이" content="이곳에 리뷰 내용이 들어갑니다" restaurantName="산타비" university="이대" tags={['분식', '연예인 맛집']} score='4'/> 
          <Review image={image} menuName="떡볶이" content="이곳에 리뷰 내용이 들어갑니다" restaurantName="산타비" university="이대" tags={['분식', '연예인 맛집']} score='4'/> 
        </Contents>
      </SearchReview>
    </Main>
    </div>
  );
};

export default SearchPage;