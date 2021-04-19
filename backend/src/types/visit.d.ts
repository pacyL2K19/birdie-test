export interface IBasicVisit {
    id: string
}

export interface Visit extends IBasicVisit {
    date: Date,
    careGiverId: string,
    careRecipientId: string,
    note: string,
    eventType: string
}
