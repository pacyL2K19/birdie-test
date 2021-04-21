export enum Roles {
    ADMIN = "Admin",
    CARE_GIVER = "Care Giver",
    CARE_RECIPIENT = "Care Recipient"
}

export enum EventType {
    MOOD = "Mood Observation",
    HEALTH = "Health Check",
    SLEEP = "Sleep"
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
    event_type: EventType,
    visit_id: string,
    timestamp: string,
    caregiver_id: string,
    care_recipient_id: string,
    mood: string,
}
