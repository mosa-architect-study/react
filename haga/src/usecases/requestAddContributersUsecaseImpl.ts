import {RequestAddContributersUsecase} from "./requestAddContributersUsecase"
import {Invitation} from "../entity/Invitation"

export interface RequestAddContributersService {
    (inv:Invitation):Promise<RequestAddContributersServiceResult>
}

export interface RequestAddContributersServiceResult {
    result:boolean
}

const createRequestAddContributeUsecase : (service:RequestAddContributersService) => RequestAddContributersUsecase = (service) => (inv) => {
    return service(inv).then(e => e.result)
}

export default createRequestAddContributeUsecase


