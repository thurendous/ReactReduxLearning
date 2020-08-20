import React, { Component } from "react";
import Cardlist from "./Cardlist";
import SearchBox from "./SearchBox";
// import { robots } from "./robots";
import Scroll from "./Scroll";
import "./App.css"

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
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        if (this.state.robots.length === 0) {
            return <h1 className="tc" > Loading now!</h1 >;
        } else {
            return (
                <div className="tc">
                    <h1 className="f1">RoboFriends is Here</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <Cardlist robots={filteredRobots} />
                    </Scroll>
                </div>
            );
        }
    }
}


export default App;