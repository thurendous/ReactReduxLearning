import React, { Component } from "react";
import Cardlist from "../components/Cardlist";
import SearchBox from "../components/SearchBox";
// import { robots } from "./robots";
import Scroll from "../components/Scroll";
import "./App.css"
import ErrorBoundry from "../components/ErrorBoundry";

class App extends Component {
    constructor() {
        super() // "this" is not allowed before super
        this.state = {
            robots: [],
            searchfield: ""
        }
    }

    // original react func is mounted when it is run
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => { return response.json(); })
            .then(users => { this.setState({ robots: users }) });
        // this.setState({ robots: robots });
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    }

    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return !robots.length ?
            <h1 className="tc" > Loading now!</h1 > :
            (
                <div className="tc">
                    <h1 className="f1">RoboFriends is Here</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <ErrorBoundry>
                            <Cardlist robots={filteredRobots} />
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );
    }
}



export default App;