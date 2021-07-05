import axios from 'axios'

export class RestController{
    
    constructor(url: string){
        axios.defaults.baseURL = url;
    }

    // Response: {"message" : "OK"}
    // Response: [{"message": "OK1"}, {"message": "OK2"}]
    getCall(postfixUrl: string): Promise<any>{
        return axios.get(postfixUrl)
    }
}