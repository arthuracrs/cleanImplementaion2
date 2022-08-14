import { IHttpResponse } from "./IHttpResponse";
import { IHttpRequest } from "./IHttpRequest";

export interface IController {
    execute(httpRequest: IHttpRequest): IHttpResponse
}