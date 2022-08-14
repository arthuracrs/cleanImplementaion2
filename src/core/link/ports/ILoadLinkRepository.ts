import { Link } from "../entities/link/Link";

export interface ILoadLinkRepository {
    load(id: string): Link | boolean
}