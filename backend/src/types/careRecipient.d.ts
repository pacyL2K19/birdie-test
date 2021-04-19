export interface IBasicCareRecipient {
    id: string
}

export interface ICareRecipient extends IBasicCareRecipient {
    famillyMembers: string,
    visits: string
}
