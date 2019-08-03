import {Invitation} from "../entity/Invitation"

export interface RequestAddContributersUsecase {
    (inv:Invitation):Promise<boolean>
}