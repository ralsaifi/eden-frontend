import axios from 'axios';

export class ContainerService {
    constructor() {

    }

    /**
     * Sends a request to get a list of containers
     * 
     * Takes an optional payload object which has only one property 
     * `projectName`. If passed, will only return a list of containers for that project.
     * Default to return all containers for all projects 
     * @param GetContainerListPayload payload
     * @returns Container[]
     */
    async getContainerList(payload = {}) {
        try {
            const url = 'TODO';
            const response = await axios.get(url, {
                params: payload
            });
            return response.data;
        } catch (err) {
            return undefined;
        }
    }

    /**
     * Sends a request to create a new container using the data in the payload provided
     * 
     * payload is an object includes `port`, `containerName`, `projectName`, `branchName`
     * @param CreateContainerPayload payload 
     * @returns string | undefined
     */
    async createContainer(payload) {
        if (!payload) { return undefined; }
        try {
            const url = 'TODO';
            const response = await axios.post(url, payload);
            return response.data;
        } catch (err) {
            return undefined;
        }
    }

    /**
     * Sends a request to stop a container using the data in the payload provided
     * 
     * payload is an object includes `containerName` property 
     * @param StopContainerPayload payload 
     * @returns string | undefined
     */
    async stopContainer(payload) {
        if (!payload) { return undefined; }
        try {
            const url = 'TODO';
            const respnse = await axios.post(url, payload);
            return respnse.data;
        } catch (err) {
            return undefined;
        }
    }

    /**
     * Sends a request to restart the container using the payload provided
     * 
     * payload is an object includes `containerName` property
     * @param RestartContainerPayload pyalod 
     * @returns string | undefined
     */
    async restartContainer(pyalod) {
        if (!payload) { return undefined; }
        try {
            const url = 'TODO';
            const respnose = await axios.post(url, payload);
            return response.data;
        } catch (err) {
            return undefined;
        }
    }

    /**
     * Sends a request to rename a container
     * 
     * payload is an object includes the `currentContanerName` and `newContainerName` properties
     * @param RenameContainerPayload payload 
     * @returns string | undefined
     */
    async renameContainer(payload) {
        if (!payload) { return undefined; }
        try {
            const url = 'TODO';
            const response = await axios.post(url, payload);
            return respnse.data;
        } catch (err) {
            return undefined;
        }
    }

    /**
     * Sends a request to update running container port using the payload provided
     * 
     * payload includes `containerName`, `oldPort`, `newPort` properties
     * @param UpdateCotnainerPortPayload payload 
     * @returns string | undefined
     */
    async updateContainerPort(payload) {
        if (!payload) { return undefined; }
        try {
            const url = 'TODO';
            const response = await axios.post(url, payload);
            return response.data;
        } catch (err) {
            return undefined;
        }
    }

    /**
     * Sends a request to stop all containers
     * 
     * takes an optional payload object that has one property: `projectName` to stop all container 
     * for that project only. Default to stop all containers for all projects
     * @param StopAllContainersPayload payload 
     * @returns string | undefined
     */
    async stopAllContainers(payload = {}) {
        try {
            const url = 'TODO';
            const response = await axios.post(url, payload);
            return response.data;
        } catch (err) {
            return undefined;
        }
    }

    /**
     * Sends a request to restart all containers
     * 
     * takes an optional payload param which is an object that has one property 
     * `projectName`. If passed, will restart all containers for the projects only. 
     * Default to restart all containers for all projects
     * @param RestartAllContainersPayload payload 
     * @returns string | undefined
     */
    async restartAllContainers(payload = {}) {
        try {
            const url = 'TODO';
            const response = await axios.post(url, payload);
            return response.data;
        } catch (err) {
            return undefined;
        }
    }
}