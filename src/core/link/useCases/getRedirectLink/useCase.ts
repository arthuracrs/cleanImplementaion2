import { IUseCase } from '../../../common/IUseCase'
import { IGetRedirectLink } from '../../ports/IGetRedirectUrl.repository'

export class GetRedirectLink implements IUseCase {
    constructor(private getRetirectLinkRepository: IGetRedirectLink) {}

    execute(shortUrl: string): string {

        const redirectUrl = this.getRetirectLinkRepository.get(shortUrl)

        if (!redirectUrl) return ''

        return redirectUrl
    }
}