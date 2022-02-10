import React from 'react';
import axios from 'axios';
import containers from './containers.json';

export class Containers extends React.Component {
    state = {
        containers: []
    }

    async getContainerList() {
        // const response = await axios.get('todo');
        // if (!response.data) return; 
        // this.data.containers = response.data;
        this.setState({containers: containers});
        // this.data.containers = containers;
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
            <div className="overview bg-white shadow-xl">
                <div className="flex justify-between bg-gray-200 text-gray-700 rounded-t">
                    <span className="p-3 px-6 border-sm w-64 font-bold">Container Name</span>
                    <span className="p-3 px-6 border-sm w-full font-bold">Branch Name</span>
                    <span className="p-3 px-6 border-sm w-52 font-bold">Project</span>
                    <span className="p-3 px-6 border-sm w-52 font-bold">Status</span>
                    <span className="p-3 px-6 border-sm w-52 font-bold">Port</span>
                    <span className="p-3 px-6 border-sm w-40 font-bold">Action</span>
                </div>
                {[this.state.containers].map((container, i) => {
                    return (
                        <div className="flex justify-between rounded-b border-t border-gray-200" key="{i}">
                            <span className="p-3 px-6 border-sm w-64">{container.containerName}</span>
                            <span className="p-3 px-6 border-sm w-full">feature/2022-02-16_IT-2639_stock_transfer</span>
                            <span className="p-3 px-6 border-sm w-52">Genisys</span>
                            <span className="p-3 px-6 border-sm w-52">Running</span>
                            <span className="p-3 px-6 border-sm w-52">5002</span>
                            <span className="p-3 px-6 border-sm w-40">Menu</span>
                        </div>
                    );
                })}
            </div>
        );
    }
}