import { IUseCase } from '../../../common/IUseCase';
import { Link } from '../../../entities/link/Link';
import { ILoadLinkByIdRepository } from '../../ports/ILoadLinkById.repository'

export class LoadLinkById implements IUseCase {
    constructor(private loadLinkRepository: ILoadLinkByIdRepository) { }

    execute(id: string): Link {
        return this.loadLinkRepository.load(id);
    }
}