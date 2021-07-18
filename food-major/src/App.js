import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

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
          <Route path="/mypage" component={MyPage} />
          <Route path="/listpage" component={ListPage} />
          <Route path="/detail" component={DetailPage} />
          <Route path="/searchpage" component={SearchPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;