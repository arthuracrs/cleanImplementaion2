export interface ICreateLinkInputPort {
    originalLink: string;
    redirectLink: string;
    creationDate: Date;
}

export class CreateLinkInputPort implements ICreateLinkInputPort {
    originalLink: string;
    redirectLink: string;
    creationDate: Date;

    constructor(
        originalLink: string,
        redirectLink: string,
        creationDate: Date,
    ) {
        this.creationDate = creationDate
        this.originalLink = originalLink
        this.redirectLink = redirectLink
    }
}