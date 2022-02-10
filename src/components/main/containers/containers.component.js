import React from 'react';
import axios from 'axios';
import containerList from './containers.json';

export class Containers extends React.Component {
    state = {
        containers: []
    }

    async getContainerList() {
        // const response = await axios.get('todo');
        // if (!response.data) return; 
        // this.setState({containers: response.data});
        this.setState({containers: containerList});
    }

    async stopContainer(containerToStop) {
        // const response = await axios.post('todo', {containerName: containerToStop.containerName});
        // if (!response.data) return;
        // this.data.containers = this.data.containers.filter(container => container.containerName !== containerToStop.containerName);
        console.log('TODO: stop container ', containerToStop)
    }

    componentDidMount() {
        this.getContainerList();
    }

    render() {
        return (
            <div>
                <div class="flex mb-3.5 justify-content-start">
                    <h2 class="text-2xl">Container list</h2>
                    <button className="create-button ml-1.5">Create</button>
                </div>
                <div className="overview bg-white shadow-xl">
                    <div className="flex justify-between bg-gray-200 text-gray-700 rounded-t">
                        <span className="table-header-cell w-72">Container Name</span>
                        <span className="table-header-cell w-full">Branch Name</span>
                        <span className="table-header-cell w-64">Project</span>
                        <span className="table-header-cell w-52">Status</span>
                        <span className="table-header-cell w-52">Port</span>
                        <span className="table-header-cell w-40">Action</span>
                    </div>
                    {this.state.containers.map((container, i) => {
                        return (
                            <div className="flex justify-between rounded-b border-t border-gray-200" key={i}>
                                <span className="table-cell w-72">{container.containerName}</span>
                                <span className="table-cell w-full">{container.branchName}</span>
                                <span className="table-cell w-64">{container.projectName}</span>
                                <span className="table-cell w-52">{container.status}</span>
                                <span className="table-cell w-52">{container.port}</span>
                                <span className="table-cell w-40">Menu</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}