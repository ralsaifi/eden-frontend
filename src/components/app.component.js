import React from "react";
import { Toolbar } from "./layout/toolbar/toolbar.component";
import { Content } from "./layout/content/content.component";

export default class App extends React.Component {
    state = {
        toolbarLinks: [
            {value: 'containers', displayValue: 'Container', iconName: 'widgets'}, 
            {value: 'branches', displayValue: 'Branches', iconName: 'mediation'}, 
            {value: 'tasks', displayValue: 'Tasks', iconName: 'view_list'}
        ]
    };

    toolbarLinkClick(linkClicked) {
        // const activeLink = this.state.toolbarLinks.find(link => link.value === linkClicked);
        // if (!activeLink) return; 
        // TODO: Use new active link to notify Content component
    }

    render() {
        return (
            <div className="bg-gray-100 w-screen h-screen">
                <Toolbar links={this.state.toolbarLinks} activeLink={this.state.toolbarLinks[0]} menuClick={this.toolbarLinkClick}/>
                <Content activeLink={this.state.toolbarLinks[0]}/>
            </div>
        );
    }
}