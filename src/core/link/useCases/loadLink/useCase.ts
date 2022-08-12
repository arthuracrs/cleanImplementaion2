import { IUseCase } from '../../../common/IUseCase';
import { Link } from '../../entities/link/Link';
import { ILoadLinkRepository } from '../../ports/ILoadLinkRepository'

export class LoadLink implements IUseCase {
    constructor(private loadLinkRepository: ILoadLinkRepository) { }

    execute(id: string): Link | boolean {
        return this.loadLinkRepository.load(id);
    }
}