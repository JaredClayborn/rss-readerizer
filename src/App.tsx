import React from 'react';
import logo from './logo.svg';
import './App.css';
import Axios from 'axios'

class App extends React.Component<{}, {}> {
    private getFeeds(callback: (...args: any) => any) {
        // var xmlHttp = new XMLHttpRequest();
        // const theUrl = 'http://www.wizards.com/rss.asp?x=magic'
        // xmlHttp.onreadystatechange = function() { 
        //     if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
        //         callback(xmlHttp.responseText);
        // }
        // xmlHttp.open("GET", theUrl, true); // true for asynchronous 
        // xmlHttp.setRequestHeader('Access-Control-Allow-Origin', '*')
        // xmlHttp.send(null);

        Axios.get('localhost:3000/back/feeds', {headers: {'Access-Control-Allow-Origin': '*'}})
            .then(res => {
                console.log('the res:', res)
            })
    }

    public render() {
        const x = (res: any) => {
            console.log('res:', res)
        }
        this.getFeeds(x)
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>Edit</p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        );
    }
}

export default App;
