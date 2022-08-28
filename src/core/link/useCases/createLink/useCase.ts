import { IUseCase } from "../../../common/IUseCase";
import { Link } from "../../../entities/link/Link";
import { ICreateLinkRepository } from "../../ports/ICreateLinkRepository";
import { CreateLinkInputPort } from "./inputPort";

export class CreateLink implements IUseCase {
   constructor(private linkRepository: ICreateLinkRepository) { }

   execute(link: CreateLinkInputPort): Link {
      const { originalLink, redirectLink, creationDate, idLink } = link

      const newLink = { originalLink, redirectLink, creationDate, idLink }

      return this.linkRepository.save(newLink)
   }
}