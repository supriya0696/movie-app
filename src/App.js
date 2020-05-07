import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './Menu';
import Home from './Home';
import HomeMenu from './HomeMenu';
import AboutMenu from './AboutMenu';
import HorizontalMenu from './NavBar';
import ContactMenu from './ContactMenu';
import Table from './Table';
import Movies from './Movies'
import movieData from './data/top5MoviesAssessement.json'
var menuItems = [1, 2, 3, 5, 6];
var information = ['Home', 'About', 'Contact', 'signUp']

class App extends React.Component {
    constructor() {
        super()
        this.state = {
                tableDatas: [],
                showComponent: '',
                movieData: movieData,

            }
            // this.setState({movies:[movieData]})
        console.log(this.state.movieData)
    }


    componentDidMount() {
        //   console.error('APP MOUNTED')
        //   fetch('https://jsonplaceholder.typicode.com/todos')
        //   .then(response => response.json())
        //  .then(json => {console.log(json)
        //   this.setState({tableDatas:json})})      
        console.log(this.state.tableDatas);
        this.setState({ movieData: movieData })
        console.log(this.state.movieData);
    }

    componentDidUpdate() {
        console.error('APP UPDATED')
        if (this.state.showComponent !== 'contact')
            this.setState({ showComponent: 'contact' })
    }

    render() {

        //   if (!this.state.tableDatas){
        //     return <div>Loading...</div>
        // }
        const onHomeMenuClick = (item) => {
            console.log(item)
            this.setState({ showComponent: item })
        }
        const onAboutMenuClick = () => {
            this.setState({ aboutMenu: "welocome ot about" });
        }

        const onClickTable = (item) => {
            console.log(item)

            for (let i = 0; i < this.state.tableDatas.length; i++) {
                if (this.state.tableDatas[i].id === (item.id - 1)) {
                    var newState = this.state.tableDatas
                    newState.splice(i + 1, 1);
                }
            }
            this.setState({ tableDatas: newState })
        }

        const onMoviesClick = () => {
            console.log("inot movie details")
        }

        const displayQuestion = () => {
            this.setState({
                displayQuestions: !this.state.displayQuestions
            })
        }
        let MainComponent = null
        switch (this.state.showComponent) {
            case 'Home':
                MainComponent = < HomeMenu data = { 'HomeMenu page loaded' }
                />
                break;
            case 'About':
                MainComponent = < AboutMenu data = { 'AboutMenu page loaded' }
                onClick = { onAboutMenuClick }
                />
                break;
            case 'Contact':
                MainComponent = < ContactMenu data = { 'ContactMenu page loaded' }
                />
                break;
        }
        if (this.state.tableDatas) {
            return (

                <div className = "App">

                <div > APP TITLE </div> {
                    /* <Menu data={this.state.menuItems} onClick={onMenuClick} />
                           <Home title={this.state.title}/> */
                }
                <Movies data = { this.state.movieData } onClick = { onMoviesClick }/> 
                <HorizontalMenu data = { information } onClick = { onHomeMenuClick }/> { MainComponent } 
                <Table data = { this.state.tableDatas } onClickTable = { onClickTable } />
                
                 </div>
            );
        }
    }

}

export default App;