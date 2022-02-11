import React from 'react';
import axios from 'axios';
import branchList from './branches.json';

export class Branches extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            branches: []
        };
    }

    componentDidMount() {
        // TODO: Get list of branches
        // const response = await axios.get('todo');
        // if (!response.data) return; 
        // this.setState({branches: response.data});
        this.setState({branches: branchList});
    }

    render() {
        return (
            <div>
                <div className="flex mb-3.5 justify-content-start">
                    <h2 className="text-2xl">Branch list</h2>
                    <button className="create-button ml-1.5 flex">
                        Create
                    </button>
                </div>
                <div className="overview bg-white shadow-xl">
                    <div className="flex justify-between bg-gray-200 text-gray-700 rounded-t">
                        <span className="table-header-cell w-72">Repository</span>
                        <span className="table-header-cell w-full">Branch</span>
                        <span className="table-header-cell w-24"></span>
                    </div>
                    {this.state.branches.map((branch, i) => {
                        return (
                            <div className="flex justify-between rounded-b border-t border-gray-200" key={i}>
                                <span className="table-cell w-72">{branch.repoName}</span>
                                <span className="table-cell w-full">{branch.branchName}</span>
                                <span className="table-cell w-24">
                                    <span className="material-icons cursor-pointer">settings</span>
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}