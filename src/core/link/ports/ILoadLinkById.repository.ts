import { Link } from "../../entities/link/Link";

export interface ILoadLinkByIdRepository {
    load(id: string): Link 
}