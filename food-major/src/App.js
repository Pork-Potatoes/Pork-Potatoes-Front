import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Review from "./components/Review";

import image from "./assets/reviewImg.png";

class App extends React.Component {
  render() {
    return(
      <div>
        <Header/>
        <Review image={image} content="이곳에 리뷰 내용이 들어갑니다" restaurantName="산타비" university="이대" tags={['TV 방영', '비건', '연예인 맛집']} score='4'/>
      </div>
    );
  }
}

export default App;