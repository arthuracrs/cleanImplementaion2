import { Link } from "../entities/link/Link";

export interface ICreateLinkRepository {
   save(link: Link): boolean
}