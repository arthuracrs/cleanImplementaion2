import crypto from 'crypto'

export interface ICreateLinkInputPort {
    originalLink: string;
    redirectLink: string;
    creationDate: Date;
    idLink: string
}

export class CreateLinkInputPort implements ICreateLinkInputPort {
    originalLink: string;
    redirectLink: string;
    creationDate: Date;
    idLink: string;

    constructor(
        originalLink: string,
        redirectLink: string,
    ) {
        this.idLink = crypto.randomUUID()
        this.creationDate = new Date()
        this.originalLink = originalLink
        this.redirectLink = redirectLink
    }
}