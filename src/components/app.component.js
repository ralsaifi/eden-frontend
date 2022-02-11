import React from "react";
import { Toolbar } from "./layout/toolbar/toolbar.component";
import { Content } from "./layout/content/content.component";
import { Overview } from "./main/overview/overview.component";

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

    componentDidMount() {
        const activeLink = this.state.toolbarLinks[0];
        this.setState({activeLink: activeLink});
    }

    render() {
        return (
            <div className="bg-gray-100 w-screen h-screen flex flex-col">
                <Toolbar links={this.state.toolbarLinks} activeLink={this.state.activeLink} menuClick={this.toolbarLinkClick.bind(this)}/>
                <Overview activeLink={this.state.activeLink}/>
                <Content activeLink={this.state.activeLink}/>
            </div>
        );
    }
}