import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Container, Button } from 'react-floating-action-button';
import { HiPencil } from "react-icons/hi";
import Header from "./components/Header";
import MainPage from './pages/MainPage';
import MyPage from './pages/MyPage';
import ListPage from './pages/ListPage';
import DetailPage from './pages/DetailPage';
import SearchPage from './pages/SearchPage';

class App extends React.Component {
  render() {
    return(
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route path="/" component={MainPage} exact={true} />
          <Route path="/mypage/myreview" component={MyPage} />
          <Route path="/listpage" component={ListPage} />
          <Route path="/detailpage" component={DetailPage} />
          <Route path="/searchpage" component={SearchPage} />
        </Switch>
        <Container styles={{bottom:'3vh', right: '3vw'}}>
            <Button
              styles={{
                backgroundColor:'#F06D58',
                width: '63px',
                height: '63px',
                cursor: 'pointer'
              }}
              onClick={() => alert('리뷰작성')}>
                <HiPencil size="40px" color="white"/>
            </Button>
        </Container>
      </BrowserRouter>
    );
  }
}

export default App;