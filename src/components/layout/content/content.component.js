import React from 'react';
import { Branches } from '../../main/branches/branches.component';
import { Containers } from '../../main/containers/containers.component';
import { Error404 } from '../../main/errors/error-404.component';

export class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            components: {
                containers: <Containers />, 
                branches: <Branches />, 
                // tasks: <Tasks />
            }
        };
    }
    componentDidMount() {
        // TODO: listen to change in menu and update the active component
    }

    render() {
        return (
            <div className="p-10 flex-grow">
                {this.state.components[this.props.activeLink?.componentName] ?? <Error404 />}
            </div>
        );
    }
}