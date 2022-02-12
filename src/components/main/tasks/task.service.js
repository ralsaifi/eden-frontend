
export class TaskService {
    constructor() { }

    /**
     * Sends a request to get a list of tasks
     * 
     * Takes an optional payload object which has only one property 
     * `projectName`. If passed, will only return a list of tasks for that project.
     * Default to return all tasks for all projects 
     * @param GetContainerListPayload payload
     * @returns Task[]
     */
     async getTaskList(payload = {}) {
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
     * Sends a request to get task details using the data in the payload provided
     * 
     * The payload includes only one property, `taskName`. The method return details of the task 
     * including `taskName`, `description`, `priority`, `asignee`, `reporter`, `subtaskList`
     * @param GetTaskdetailsPayload payload 
     * @returns BranchDetails | undefined
     */
     async getTaskDetails(payload) {
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
     * Sends a request to update task details using the data in the payload provided 
     * 
     * payload includes a required `taskNumber` property and an optional `description`, `assignee`, `priority` properties
     * @param updateTaskDetailsPaylod payload 
     * @returns string | undefined
     */
     async updateTaskDetails(payload) {
        if (!payload) { return undefined; }
        try {
            const url = 'TODO';
            const response = await axios.post(url, payload); 
            return response.data;
        } catch (err) {
            return undefined;
        }
    }
}