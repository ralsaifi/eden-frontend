import React from "react";
import { Toolbar } from "./layout/toolbar/toolbar.component";
import { Content } from "./layout/content/content.component";

export default class App extends React.Component {
    state = {
        toolbarLinks: [
            {value: 'containers', displayValue: 'Container'}, 
            {value: 'branches', displayValue: 'Branches'}, 
            {value: 'tasks', displayValue: 'Tasks'}
        ]
    };

    render() {
        return (
            <div className="bg-gray-100 w-screen h-screen">
                <Toolbar links={this.state.toolbarLinks} activeLink={this.state.toolbarLinks[0]}/>
                <Content />
            </div>
        );
    }
}