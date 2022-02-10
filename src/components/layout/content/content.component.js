import React from 'react';
import axios from 'axios';
import { Containers } from '../../main/containers/containers.component';

export class Content extends React.Component {
    data = {
        containers: [], 
        branches: [], 
        tasks: []
    }
    async getContainerList() {
        // const url = 'todo';
        // const response = await axios.get(url);
        // const containers = response?.data;
        // if (!containers) return; 
        this.data.containers = [{}];
    }

    componentDidMount() {
        this.getContainerList();
    }

    render() {
        return (
            <div className="p-10">
                <h2 className="text-2xl mb-3">Container list: </h2>
                <Containers />
            </div>
        );
    }
}