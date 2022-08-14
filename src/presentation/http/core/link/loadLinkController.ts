import { container } from "../../../../di/dependencyContainer";
import { IHttpRequest } from "../common/IHttpRequest";
import { IHttpResponse } from "../common/IHttpResponse";

export class LoadLinkController {
    static execute(httpRequest: IHttpRequest): IHttpResponse {

        const { id } = httpRequest.query

        return {
            body: container.loadLink.execute(id),
            status: 200
        }
    }
}