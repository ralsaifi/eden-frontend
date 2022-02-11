import React from 'react';
import overviewData from './overview.json';

export class Overview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: {}
        }
    }

    componentDidMount() {
        this.setState({projects: this.overviewData});
    }

    render() {
        return (
            <div className="bg-indigo-500 text-white p-10 flex justify-evenly">
                <div className="flex flex-col items-center gap-1">
                    <span className="text-4xl">Genisys</span>
                    <span>Frontend Containers: 6</span>
                    <span>Backend Containers: 12</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <span className="text-4xl">Customer Portal</span>
                    <span>Frontend Containers: 6</span>
                    <span>Backend Containers: 12</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <span className="text-4xl">Receiving</span>
                    <span>Frontend Containers: 6</span>
                    <span>Backend Containers: 12</span>
                </div>
            </div>
        );
    }
}