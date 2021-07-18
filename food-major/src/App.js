import React from 'react';
import { Route } from 'react-router-dom';
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
        <Route path="/searchpage" component={SearchPage} /></div>
    );
  }
}

export default App;