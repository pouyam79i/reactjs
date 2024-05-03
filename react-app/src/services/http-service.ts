import apiClient from "./api-client";

interface Entity {
    id: number
}

class HttpService {

    endpoint: string

    constructor(endpoint: string){
        this.endpoint = endpoint
    }

    getAll<T>(){
        const controller = new AbortController();
        const request = apiClient.get<T[]>(this.endpoint, {
            signal: controller.signal
        })
        return {request, cancel: ()=>controller.abort()}
    }

    add<T>(newUser: T){
        return apiClient.post(this.endpoint + "/", newUser)
    }

    delete(id: number) {
        return apiClient.delete(this.endpoint + "/" + id)
    }

    update<T extends Entity>(updatedUser: T){
        // or user .put() 
        return apiClient.patch(this.endpoint + "/" + updatedUser.id, updatedUser)
    }
}

const create = (endpoint: string) => new HttpService(endpoint)

export default create;
