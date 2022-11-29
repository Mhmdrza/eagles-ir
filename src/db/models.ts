type DbDocument = {
    ref: string
    ts: number
    data: object
}

type NewsLetterData = {
    data: {
        email: string
    }
}

export type NewsLetterDoc = DbDocument & NewsLetterData;

export type FaunaSuccessResponse = {
    data: any[]
}