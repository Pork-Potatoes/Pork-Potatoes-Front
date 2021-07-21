import React from "react";
import styled from "styled-components";
import List from "../components/List";

import image1 from "../assets/reviewImg.png";
import image2 from "../assets/test1.png";
import image3 from "../assets/test2.png";
import image4 from "../assets/test3.png";
import image5 from "../assets/test4.png";

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

class MyListPage extends React.Component {
  render() {
    return(
      <Contents>
        <Container>
          <h1 style={{margin:"15px"}}>내가 만든 맛집 리스트</h1>
          <Grid>
            <List image={image1} content="집앞 가성비 맛집" url="http://www.naver.com"></List>
            <List image={image2} content="안주 맛집" url="http://www.naver.com"></List>
            <List image={image3} content="내 최애" url="http://www.naver.com"></List>
            <List image={image4} content="밀크티 맛집" url="http://www.naver.com"></List>
            <List image={image5} content="혼밥하기 좋음" url="http://www.naver.com"></List>
          </Grid>
        </Container>
      </Contents>
    );
  }
}

export default MyListPage;