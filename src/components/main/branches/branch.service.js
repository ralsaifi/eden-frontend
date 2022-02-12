import axios from 'axios';

export class AppService {
    constructor() { }

    /**
     * Sends a request to get a list of branches
     * 
     * Takes an optional payload object which has only one property 
     * `projectName`. If passed, will only return a list of branches for that project.
     * Default to return all branches for all projects 
     * @param GetContainerListPayload payload
     * @returns Branch[] | undefined
     */
    async getBranchList(payload = {}) {
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
     * Sends a request to get branch details using the data in the payload provided
     * 
     * The payload includes only one property, `branchName`. The method return details of the branch 
     * including `branchName`, `commitHistory`, `projectName`
     * @param GetBranchdetailsPayload payload 
     * @returns BranchDetails | undefined
     */
    async getBranchDetails(payload) {
        if (!payload) { return undefined; }
        try {
            const url = 'TODO';
            const response = await axios.get(url, {params: payload});
            return response.data;
        } catch (err) { 
            return undefined;
        }
    }

    /**
     * Sends a request to create a branch using the data in the paylod provided
     * 
     * payload is an object includes `projectName`, `branchName`
     * @param CreateBranchPayload payload 
     * @returns string | undefined
     */
     async createBranch(payload) {
        if (!payload) { return undefined; }
        try {
            const url = 'TODO';
            const response = await axios.post(url, payload);
            return response?.data;
        } catch (err) {
            return undefined;
        }
    }
}