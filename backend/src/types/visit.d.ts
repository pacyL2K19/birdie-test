import { IBasicCareRecipient, ICareRecipient } from "./careRecipient";
import { IBasicUser, IUser } from "./user";

export interface IBasicVisit {
    careGiver: IBasicUser,
    careRecipient: IBasicCareRecipient
}

export interface IVisit extends IBasicVisit {
    id: string
}

export interface IVisitWithDetails extends IVisit {
    date: Date,
    note: string,
    eventType: string,
    careGiver: IUser,
    careRecipient: ICareRecipient,
}
