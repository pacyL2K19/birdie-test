import { IBasicCareRecipient, ICareRecipient } from "./careRecipient";
import { IBasicUser, IUser } from "./user";

export interface IBasicVisit {
    care_giver_id?: IBasicUser | string,
    care_recipient_id?: IBasicCareRecipient | string
}

export interface IVisit extends IBasicVisit {
    id?: string,
    note: string,
    date: Date,
    event_type: string
}

export interface IVisitWithDetails extends IVisit {
    careGiver: IUser,
    careRecipient: ICareRecipient,
}
