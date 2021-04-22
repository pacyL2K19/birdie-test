import { IBasicCareRecipient, ICareRecipient } from "./careRecipient";
import { IBasicUser, IUser } from "./user";

export interface IBasicVisit {
    careGiverId: IBasicUser | string,
    careRecipientId: IBasicCareRecipient | string
}

export interface IVisit extends IBasicVisit {
    id?: string,
    note: string,
    date: Date,
    eventType: string
}

export interface IVisitWithDetails extends IVisit {
    careGiver: IUser,
    careRecipient: ICareRecipient,
}
