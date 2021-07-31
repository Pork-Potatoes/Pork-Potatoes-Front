import { Restaurant } from '@material-ui/icons';
import React,{useState} from 'react';
import styled from "styled-components";
import restaurantIcon from "../assets/restaurantIcon.png";
import reviewIcon from "../assets/reviewIcon.png";
import Review from "../components/Review";
import image from "../assets/reviewImg.png";
import NewRestaurant from '../components/NewRestaurant';
import Sort from '../components/Sort.js';
import axios from 'axios';
import https from "https";


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
  z-index:99;
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
  text-align: center;
  margin-left:8px;
  margin-right:8px;
  padding-left: 28px;
  padding-right: 28px;
  border-radius: 38px;
  border:none;
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
  height:450px;
  padding-top:10px;
`

const SearchReview = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
  min-height: 900px;
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
  max-height: 500px;
  overflow-y: auto;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`

const agent = new https.Agent({
  rejectUnauthorized: false
});

class SearchPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      reviews: [],
      restaurants: [],
      filteredReviews:[]
    }
  }
  getReviews = async () => {
    try{
      const {data: reviews} = await axios.get("https://www.matzipmajor.com/api/reviews/recent", {httpsAgent: agent});
      this.setState({ reviews });
    }
    catch(e){
      console.log("getReviews error");
    }
  }
  getRestaurants= async (inputSearch) => {
    try{
      const url="https://www.matzipmajor.com/api/search?q="+Object.values({inputSearch}).toString();
      const {data: restaurants} = await axios.get(url, {httpsAgent: agent});
      this.setState({ restaurants });
    }
    catch(e){
      console.log("getReviews error");
    }
  }



  render(){
  const inputSearch = this.props.location.state.inputSearch;
  this.state.filteredReviews=this.state.reviews.filter((review)=>{
    if(review.restaurant.restaurantName.toLowerCase().includes(Object.values({inputSearch}).toString())
    || review.menuName.toLowerCase().includes(Object.values({inputSearch}).toString())
    || review.tagFood.toLowerCase().includes(Object.values({inputSearch}).toString())
    ){
      return review
      }
  });
  this.getReviews();
  this.getRestaurants(inputSearch);
  return ( 
    <div>
    <Filtering>
      <TagBox>
        <TagButton className='eatTogether'>회식</TagButton>
        <TagButton className='eatAlone'>혼밥</TagButton>
        <TagButton className='eatPromise'>밥약</TagButton>
        <TagButton className='eatDate'>데이트</TagButton>
        <TagButton className='eatFamily'>가족</TagButton>
      </TagBox>
    </Filtering>
    <Main>
      <Result>
        <h2>{inputSearch} 검색결과</h2>
        <Sort />
      </Result>
      <SearchRestaurant>
        <div>
          <img src={restaurantIcon} alt="restaurant" height="40rem" width="40rem"/>
          <Text>식당</Text>
          <hr size="10px" width="100%" color="#D1D1D1" />
        </div>
        <Contents>
          {Object.values(this.state.restaurants).map((restaurant) =>
            <NewRestaurant 
            restaurantNum={restaurant.restaurantNum}
            restaurantName={restaurant.restaurantName} 
            address={restaurant.address} 
            avgScore={restaurant.avgScore} 
            />
          )}
        </Contents>
      </SearchRestaurant>
      <SearchReview>
        <div>
          <img src={reviewIcon} alt="review" height="40rem" width="40rem"/>
          <Text>리뷰</Text>
          <hr size="10px" width="100%" color="#D1D1D1" />
        </div>
        <Grid>
            {Object.values(this.state.filteredReviews).map((review) =>
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
      </SearchReview>
    </Main>
    </div>
  );
  }
};

export default SearchPage;