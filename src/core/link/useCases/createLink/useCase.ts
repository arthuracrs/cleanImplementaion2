import { IUseCase } from "../../../common/IUseCase";
import { Link } from "../../entities/link/Link";
import { ICreateLinkRepository } from "../../ports/ICreateLinkRepository";
import { CreateLinkInputPort } from "./inputPort";

export class CreateLink implements IUseCase {
   constructor(private linkRepository: ICreateLinkRepository) { }

   execute(link: CreateLinkInputPort): Link | boolean {

      const newLink = {
         originalLink: link.originalLink,
         redirectLink: link.redirectLink,
         creationDate: link.creationDate,
         linkId: 'link01',
      }

      return this.linkRepository.save(newLink)
   }
}