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

const Line_style = styled.div`
  border-top: #EFEFEF solid 1px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 15px;
  margin-top: 10px;
  margin-bottom: 10px;
`
const Select = styled.select`
  border: 1px solid silver;
  outline:none;
  width: 150px;
  height: 30px;
`


class SearchPage extends React.Component {
  inputSearch = this.props.location.state.inputSearch;
  constructor(props){
    super(props);
    this.state = {
      reviews: [],
      restaurants: [],
      filteredReviews:[]
    }
  }
  getRecentReviews = async (inputSearch) => {
    try{
      const url="https://www.matzipmajor.com/api/reviews?query="+Object.values({inputSearch}).toString()+"&sort=-created-date";
      const {data: reviews} = await axios.get(url, {httpsAgent: agent});
      this.setState({ reviews });
    }
    catch(e){
      console.log("getRecentReviews error");
    }
  }
  getScoreReviews = async (inputSearch) => {
    try{
      const url="https://www.matzipmajor.com/api/reviews?query="+Object.values({inputSearch}).toString()+"&sort=-score";
      const {data: reviews} = await axios.get(url, {httpsAgent: agent});
      this.setState({ reviews });
    }
    catch(e){
      console.log("getScoreReviews error");
    }
  }
  getLikeReviews = async (inputSearch) => {
    try{
      const url="https://www.matzipmajor.com/api/reviews?query="+Object.values({inputSearch}).toString()+"&sort=-liked-cnt";
      const {data: reviews} = await axios.get(url, {httpsAgent: agent});
      this.setState({ reviews });
    }
    catch(e){
      console.log("getLikeReviews error");
    }
  }
  getRestaurants= async (inputSearch) => {
    try{
      const url="https://www.matzipmajor.com/api/search?q="+Object.values({inputSearch}).toString();
      const {data: restaurants} = await axios.get(url, {httpsAgent: agent});
      this.setState({ restaurants });
    }
    catch(e){
      console.log("getRestaurants error");
    }
  }

  selectChange=(event,inputSearch)=>{
    const selectValue=event.target.value;
    if (selectValue ==='별점순'){this.getScoreReviews(inputSearch)}
    else if (selectValue ==='인기순'){this.getLikeReviews(inputSearch)}
    else {this.getRecentReviews(inputSearch)}
  }

  render(){
  const inputSearch = this.props.location.state.inputSearch;
  this.getRecentReviews(inputSearch);
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
        <Line_style>
        <Select onChange={(event)=>this.selectChange(event,this.inputSearch)}>
            <option selected value="최신순">최신순으로</option>
            <option value="별점순">별점순으로</option>
            <option value="인기순">인기순으로</option>
        </Select>
      </Line_style>
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
            {Object.values(this.state.reviews).map((review) =>
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