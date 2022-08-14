import { IHttpRequest } from '../core/common/IHttpRequest'
import { IHttpResponse } from '../core/common/IHttpResponse'

export class HapiControllerAdapter {
    static adapt(controller) {
        return (request , h) => {
            const httpRequest: IHttpRequest = {
                body: request.payload,
                params: request.params,
                query: request.query
            }

            const httpResponse: IHttpResponse = controller(httpRequest)

            return httpResponse.body
        }
    }
}