import React from 'react';
import { Containers } from '../../main/containers/containers.component';

export class Content extends React.Component {

    componentDidMount() {
        // TODO: listen to change in menu and update the active component
    }

    render() {
        return (
            <div className="p-10">
                <Containers />
            </div>
        );
    }
}