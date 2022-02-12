import React from "react";
import { Toolbar } from "./layout/toolbar/toolbar.component";
import { Content } from "./layout/content/content.component";
import { Overview } from "./main/overview/overview.component";

/* CreateType: 1 for container, 2 for branch, 3 for task*/

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            toolbarLinks: [
                {value: 'containers', displayValue: 'Container', iconName: 'widgets'}, 
                {value: 'branches', displayValue: 'Branches', iconName: 'mediation'}, 
                {value: 'tasks', displayValue: 'Tasks', iconName: 'view_list'}
            ], 
            activeLink: undefined
        };
    }

    toolbarLinkClick(linkClicked) {
        const activeLink = this.state.toolbarLinks.find(link => link.value === linkClicked);
        if (!activeLink) return; 
        this.setState({activeLink: activeLink});
    }

    createHandler(createType) {
        if (!createType) { return; }
        switch (createType) {
            case 1: 
                // TODO: handle create container 
                break;
            case 2: 
                // TODO: handle create branch
                break;
            case 3:
                // TODO: handle create task
                break;
        }
    }

    componentDidMount() {
        const activeLink = this.state.toolbarLinks[0];
        this.setState({activeLink: activeLink});
    }

    render() {
        return (
            <div className="bg-gray-100 w-screen h-screen flex flex-col">
                <Toolbar links={this.state.toolbarLinks} 
                         activeLink={this.state.activeLink} 
                         menuClick={this.toolbarLinkClick.bind(this)} 
                         createHandler={this.createHandler}/>
                <Overview activeLink={this.state.activeLink}/>
                <Content activeLink={this.state.activeLink}/>
            </div>
        );
    }
}