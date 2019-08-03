import {createContext} from  "react"
import {RequestAddContributersUsecase} from "../../usecases/requestAddContributersUsecase"
import createRequestAddContributersUsecaseImpl from "../../usecases/requestAddContributersUsecaseImpl"
import createRequestAddContributersService from "../../services/requestAddContributersService"
import {put} from "../../adaptors/restClient"

interface Usecases {
    requestAddContributers:RequestAddContributersUsecase
}


const service = createRequestAddContributersService((url,header) => put(url,undefined,header))
const usecase = createRequestAddContributersUsecaseImpl(service)

export const usecases : Usecases = {
    requestAddContributers:usecase
}

const Context = createContext<Usecases>(usecases)

export const UsecasesProvider = Context.Provider

export const UsecasesConsumer = Context.Consumer

