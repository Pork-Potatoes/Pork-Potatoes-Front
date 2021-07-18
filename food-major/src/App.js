import React from 'react';
import { Route } from 'react-router-dom';
import { Container, Button } from 'react-floating-action-button';
import { HiPencil } from "react-icons/hi";
import MainPage from './pages/MainPage';
import MyPage from './pages/MyPage';
import ListPage from './pages/ListPage';
import DetailPage from './pages/DetailPage';
import SearchPage from './pages/SearchPage';

class App extends React.Component {
  render() {
    return(
      <div>
        <Route path="/" component={MainPage} exact={true} />
        <Route path="/mypage" component={MyPage} />
        <Route path="/listpage" component={ListPage} />
        <Route path="/detail" component={DetailPage} />
        <Route path="/searchpage" component={SearchPage} />
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
      </div>
    );
  }
}

export default App;