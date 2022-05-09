export type ErrorCode = string

export type FPISError = {
    message: string
    errorCode: ErrorCode
}

export const formatFPISError = (message: string, errorCode: ErrorCode) : FPISError => {
    return {
        message,
        errorCode
    }
}

export * as ERROR_CODES from './error_codes'