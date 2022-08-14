import { container } from "../../../../di/dependencyContainer";
import { IHttpRequest } from "../common/IHttpRequest";
import { IHttpResponse } from "../common/IHttpResponse";

export class CreateLinkController {
    static execute(httpRequest: IHttpRequest): IHttpResponse {

        const {
            originalLink,
            redirectLink,
            creationDate
        } = httpRequest.body

        return {
            body: container.createLink.execute({
                originalLink,
                redirectLink,
                creationDate
            }),
            status: 200
        }
    }
}