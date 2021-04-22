export interface IBasicCareRecipient {
    id?: string
}

export interface ICareRecipient extends IBasicCareRecipient {
    familly_members?: string,
    visits?: string
}
