import { Request, Response } from 'express' 
import { IHttpRequest } from '../core/common/IHttpRequest'
import { IHttpResponse } from '../core/common/IHttpResponse'

export class ExpressControllerAdapter {
    static adapt(controller) {
        return (req: Request, res: Response) => {
            const httpRequest: IHttpRequest = {
                body: req.body,
                params: req.params,
                query: req.query
            }

            const httpResponse: IHttpResponse = controller(httpRequest)

            return res.status(httpResponse.status).json(httpResponse.body)
        }
    }
}