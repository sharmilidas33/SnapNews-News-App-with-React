import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
 
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      darkMode: false,
    };
  }
  toggleDarkMode = () => {
    this.setState((prevState) => ({
      darkMode: !prevState.darkMode,
    }));
  };
  apiKey= process.env.REACT_APP_NEWS_API
  render() {
    return (
      <BrowserRouter>
      <div className={`App ${this.state.darkMode ? 'dark-mode' : ''}`}>
        <Navbar toggleDarkMode={this.toggleDarkMode}/>
        <LoadingBar
        color='#f11946'
        progress={100}
        />
        <Routes>
        <Route exact path="/" element={<News apiKey={this.apiKey} key="general" pageSize={6} country="in" category="General" toggleDarkMode={this.toggleDarkMode}/>}></Route>
        <Route exact path="/sports" element={<News apiKey={this.apiKey} key="sports" pageSize={6} country="in" category="Sports" toggleDarkMode={this.toggleDarkMode}/>}></Route>
        <Route exact path="/entertainment" element={<News apiKey={this.apiKey} key="entertainment" pageSize={6} country="in" category="Entertainment" toggleDarkMode={this.toggleDarkMode}/>}></Route>
        <Route exact path="/science" element={<News apiKey={this.apiKey} key="science" pageSize={6} country="in" category="Science" toggleDarkMode={this.toggleDarkMode}/>}></Route>
        <Route exact path="/health" element={<News apiKey={this.apiKey} key="health" pageSize={6} country="in" category="Health" toggleDarkMode={this.toggleDarkMode}/>}></Route>
        <Route exact path="/technology" element={<News apiKey={this.apiKey} key="technology" pageSize={6} country="in" category="Technology" toggleDarkMode={this.toggleDarkMode}/>}></Route>
        </Routes>
      </div>
      </BrowserRouter>
    )
  }
}

