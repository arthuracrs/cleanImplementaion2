import { Link } from "../../entities/link/Link";
import { ICreateLinkRepository } from "../../ports/createLinkRepository";

export class CreateLink {
   constructor(private linkRepository: ICreateLinkRepository) { }

   exec(link: Link): boolean {
      return this.linkRepository.save(link)
   }
}