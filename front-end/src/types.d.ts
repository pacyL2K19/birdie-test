export enum Roles {
    ADMIN = 'Admin',
    CARE_GIVER = 'Care Giver',
    FAMILLY_MEMBER = 'Familly Member',
    CARE_RECIPIENT = 'Care Recipient'
}

export enum EventType {
    MOOD = "Mood Observation",
    HEALTH = "Health Check",
    SLEEP = "Sleep"
}
export interface IUser {
    id?: string,
    names: string,
    email: string,
    password?: string,
    token?: string,
    phone?: number,
    address?: string,
    visits?: string,
    role?: Roles
}

export interface ICareRecipient {
    names: string,
    famillyMembers?: [IUser],
    observations?: [IObservation]
}

export interface IObservation {
    id?: string,
    eventType: EventType,
    visitId: string,
    timestamp: string,
    careGiver: IUser,
    careRecipient: ICareRecipient,
    observation: string,
}
