import { IUseCase } from '../../../common/IUseCase';
import { Link } from '../../entities/link/Link';
import { ILoadLinkRepository } from '../../ports/loadLinkRepository'

export class LoadLink implements IUseCase {
    constructor(private loadLinkRepository: ILoadLinkRepository) { }

    execute(id: string): Link {
        return this.loadLinkRepository.load(id);
    }
}