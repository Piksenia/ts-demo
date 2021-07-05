import { Field } from "sparkson";

export class ResponseResult{
    constructor();
    constructor(@Field("message") public message?: string){}
}