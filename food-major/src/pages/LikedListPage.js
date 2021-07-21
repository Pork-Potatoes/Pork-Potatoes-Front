import React from "react";
import styled from "styled-components";
import List from "../components/List";

import image from "../assets/reviewImg.png";

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`

class LikedListPage extends React.Component {
  render() {
    return(
      <Contents>
        <Container>
          <h1 style={{margin:"15px"}}>좋아요 한 맛집 리스트</h1>
          <Grid>
            <List image={image} content="윤지 님의 이대 앞 맛집" url="http://www.naver.com"></List>
            <List image={image} content="혼밥하기 좋은 맛집" url="http://www.naver.com"></List>
            <List></List>
            <List></List>
            <List></List>
            <List></List>
          </Grid>
        </Container>
      </Contents>
    );
  }
}

export default LikedListPage;