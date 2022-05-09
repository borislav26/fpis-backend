import { FPISError } from "../../error/FPISError"

export interface Response {
    data: Object
    error: FPISError
}

export const formatResponse = (data: Object, err: FPISError) : Response => {
    return {
        data,
        error : err
    } 
}