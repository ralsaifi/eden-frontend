import React from 'react';
import axios from 'axios';
import overviewData from './overview.json';

export class Overview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: {}
        }
    }

    componentDidMount() {
        // const response = axios.get('TODO');
        // if (!response.data) return;
        // this.setState({projects: response.data});
        this.setState({projects: overviewData});
    }

    containersOverview(project) {
        return (
            <div className="flex flex-col">
                <span>Frontend Containers: {project.frontendContainers ?? 0}</span>
                <span>Backend Containers: {project.backendContainers ?? 0}</span>
            </div>
        );
    }

    branchesOverview(project) {
        return (
            <div className="flex flex-col">
                <span>Frontend Branches: {project.frontendBranches ?? 0}</span>
                <span>Backend Branches: {project.backendBranches ?? 0}</span>
            </div>
        );
    }

    tasksOverview(project) {
        return (
            <div className="flex flex-col">
                <span>Frontend Tasks: {project.frontendTasks ?? 0}</span>
                <span>Backend Tasks: {project.backendTasks ?? 0}</span>
            </div>
        );
    }

    render() {
        return (
            <div className="bg-indigo-500 text-white p-10 flex justify-evenly border-b border-bg-indigo-500">
                {Object.keys(this.state.projects).map((projectName, i) => {
                    return (
                        <div className="flex flex-col items-center gap-1" key={i}>
                            <h3 className="text-4xl">{projectName}</h3>
                            {this.props.activeLink.value === 'containers' ? this.containersOverview(this.state.projects[projectName]) : ''}
                            {this.props.activeLink.value === 'branches' ? this.branchesOverview(this.state.projects[projectName]) : ''}
                            {this.props.activeLink.value === 'tasks' ? this.tasksOverview(this.state.projects[projectName]) : ''}
                        </div>
                    )
                })}
                {
                    Object.keys(this.state.projects).length ? '' : 
                        <div className="text-4xl">No projects</div>
                }
            </div>
        );
    }
}