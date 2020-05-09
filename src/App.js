import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import HomeMenu from "./HomeMenu";
import AboutMenu from "./AboutMenu";
import HorizontalMenu from "./NavBar";
import ContactMenu from "./ContactMenu";
import Table from "./Table";
import Movies from "./Movies";
import Home from "./Home";
// import About from './AboutMenu'
import movieData from "./data/top5MoviesAssessement.json";
import Menu from "./Menu";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      menuItems: ["Home", "Movie", "Channel", "About", "Setting"],
      tableDatas: [],
      showComponent: "",
      movieData,
      imageDatToBeSent: "",
    };
  }

  componentDidMount() {
    this.setState({ movieData });
    // this.setState({menuItems})
  }

  componentDidUpdate() {
    console.error("APP UPDATED");
    if (this.state.showComponent !== "contact")
      this.setState({ showComponent: "contact" });
  }

  render() {
    const onAboutMenuClick = () => {
      // this.setState({ aboutMenu: "welocome ot about" });
    };

    const onClickTable = (item) => {
      let newState;
      for (let i = 0; i < this.state.tableDatas.length; i += 1) {
        if (this.state.tableDatas[i].id === item.id - 1) {
          newState = this.state.tableDatas;
          newState.splice(i + 1, 1);
        }
      }
      this.setState({ tableDatas: newState });
    };

    const onClickOfImage = (item) => {
      console.log(item);
      this.setState({ imageDatToBeSent: item });
    };

    const onMenuClick = () => {
      // let menus=['Home' , 'Movie' , 'Channel' , 'About' , 'Setting'];
      // this.setState({menuItems})
    };

    let MainComponent = null;
    switch (this.state.showComponent) {
      case "Home":
        MainComponent = <HomeMenu data="HomeMenu page loaded" />;
        break;
      case "About":
        MainComponent = (
          <AboutMenu data="AboutMenu page loaded" onClick={onAboutMenuClick} />
        );
        break;
      case "Contact":
        MainComponent = <ContactMenu data="ContactMenu page loaded" />;
        break;
      default:
        MainComponent = null;
        break;
    }
    if (this.state.tableDatas) {
      return (
        <div className="App">
          <div className="tilteApp">
            <b> MY SUPER YOUTUBE APP</b>
          </div>{" "}
          <Router>
            <div className="App">
              <Menu data={this.state.menuItems} onMenuClick={onMenuClick}>
                <Switch>
                  <Route exact path="/" component={Home}>
                    Home
                  </Route>
                  <Route exact path="/about" component={AboutMenu}>
                    AboutMenu
                  </Route>
                  <Route exact path="/contact" component={ContactMenu}>
                    Contact
                  </Route>
                </Switch>
              </Menu>
              {/* <ul className="App-header"> 
              <li> 
                <Link to="/">Home</Link> 
              </li> 
              <li> 
                <Link to="/about">About Us</Link> 
              </li> 
              <li> 
                <Link to="/contact">Contact Us</Link> 
              </li> 
            </ul> */}
            </div>
          </Router>
          {/* <Home title={this.state.title}/> */}
          <Movies data={this.state.movieData} onClickOfImage={onClickOfImage} />
          <HorizontalMenu data={this.state.imageDatToBeSent} /> {MainComponent}
          <Table data={this.state.tableDatas} onClickTable={onClickTable} />
        </div>
      );
    }
    return null;
  }
}

export default App;
