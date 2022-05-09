import { DeleteResult } from "typeorm"
import { FPISError } from "../../error/FPISError"

interface CRUDInterface<T, S> {
    findAll() : Promise<T[]>
    Save(object: S): Promise<T | FPISError>
    Delete(id: string): Promise<DeleteResult>
    Update(object: S): Promise<T | FPISError>
}

export default CRUDInterface