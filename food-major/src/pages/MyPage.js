import React from "react";
import styled from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import MyReview from "./MyReviewPage";
import MyList from "./MyListPage";
import LikedList from "./LikedListPage";
import Setting from "./SettingPage";

const Center = styled.div`
  height: 91vh;
  display: flex;
  flex-direction: row;
  padding-top: 70px;
`

function MyPage() {
    return(
      <BrowserRouter>
        <Center>
          <Sidebar/>
          <Switch>
            <Route exact path="/mypage/myreview" component={MyReview} />
            <Route path="/mypage/mylist" component={MyList} />
            <Route path="/mypage/likedlist" component={LikedList} />
            <Route path="/mypage/setting" component={Setting} />
          </Switch>
        </Center>
      </BrowserRouter>
    );
}

export default MyPage;