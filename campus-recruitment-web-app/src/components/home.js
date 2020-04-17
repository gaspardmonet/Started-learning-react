import { Component } from "react";
import * as React from 'react';



class Home extends Component {

    render() {

        return (
            <div>
                <h1> Campus Recruitment App</h1>
                <p> Here you find jobs and post jobs.</p>
                <form>
                    <label>
                        Name
                    <input type="text" />
                    </label><br />
                    <label>
                        password
                    <input type="password" />
                    </label>
                </form>
            </div>
        );
    }
}


export default Home;