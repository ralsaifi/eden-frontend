import React from "react";
import { Toolbar } from "./toolbar/toolbar.component";
import { Content } from "./content/content.component";

export default class App extends React.Component {
    render() {
        return (
            <div className="bg-gray-100 w-screen h-screen">
                <Toolbar />
                <Content />
            </div>
        );
    }
}