import { Link } from "../../entities/link/Link";
import { CreateLinkInputPort } from "../useCases/createLink/inputPort";

export interface ICreateLinkRepository {
   save(link: CreateLinkInputPort): Link 
}