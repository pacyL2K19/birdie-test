export enum Roles {
    ADMIN = "admin",
    CARE_GIVER = "care_giver",
    CARE_RECIPIENT = "care_recipient"
}

interface IUser {
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

interface ICareRecipient {
    names: string,
    famillyMembers: [IUser],
    observations: [IObservation]
}

interface IObservation {
    id: string,
    event_type: string,
    visit_id: string,
    timestamp: string,
    caregiver_id: string,
    care_recipient_id: string,
    mood: string,
}
