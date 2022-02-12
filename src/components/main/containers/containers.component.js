import React from 'react';
import containerList from './containers.json';

// container statuses: 1 for running, 2 for warnings, 3 for errors

export class Containers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            containers: [], 
            statusElements: {
                1: <span className="material-icons animate-spin text-green-400">autorenew</span>, 
                2: <span className="material-icons text-yellow-400">report_problem</span>, 
                3: <span className="material-icons text-red-400">error</span>
            }
        };
    }

    async getContainerList() {
        // TODO: handle getting a list of containers
        this.setState({containers: containerList});
    }

    async stopContainer(containerToStop) {
        // TODO: handle stopping a container
    }

    async createContainer() {
        // TODO: handle creating a container
    }

    async restartAllContainers() {
        // TODO: handle restarting all containers
    }

    async stopAllContainers() {
        // TODO: handle stoping all containers
    }

    componentDidMount() {
        this.getContainerList();
    }

    render() {
        return (
            <div>
                <div className="flex mb-3.5 justify-content-start">
                    <h2 className="text-2xl">Container list</h2>
                    <button className="create-button ml-1.5 flex" onClick={this.createContainer}>
                        Create
                    </button>
                    <button className="stop-button flex ml-auto" onClick={this.restartAllContainers}>
                        Restart All
                    </button>
                    <button className="remove-button ml-1.5 flex" onClick={this.stopAllContainers}>
                        Stop All
                    </button>
                </div>
                <div className="overview bg-white shadow-xl">
                    <div className="flex justify-between bg-gray-200 text-gray-700 rounded-t">
                        <span className="table-header-cell w-72">Container Name</span>
                        <span className="table-header-cell w-full">Branch Name</span>
                        <span className="table-header-cell w-64">Project</span>
                        <span className="table-header-cell w-52">Status</span>
                        <span className="table-header-cell w-52">Port</span>
                        <span className="table-header-cell w-24"></span>
                    </div>
                    {this.state.containers.map((container, i) => {
                        return (
                            <div className="flex justify-between rounded-b border-t border-gray-200" key={i}>
                                <span className="table-cell w-72">{container.containerName}</span>
                                <span className="table-cell w-full">{container.branchName}</span>
                                <span className="table-cell w-64">{container.projectName}</span>
                                <span className="table-cell w-52">
                                    {this.state.statusElements[container.statusNumber]}
                                </span>
                                <span className="table-cell w-52">{container.port}</span>
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