import {RequestAddContributersService,RequestAddContributersServiceResult} from "../usecases/requestAddContributersUsecaseImpl"

export type Put = (url:string,headers:Record<string,string>) => Promise<unknown>

export default (put:Put):RequestAddContributersService => {
    return async ({reponame,username}) => {
        try  {
            const res = await put(`https://api.github.com/repos/mosa-architect-study/${reponame}/collaborators/${username}?permission=push`,{
                "Authorization":"token "//Tokenを入れられるように
            })
            console.log(res)
            return {
                result:true
            }
        } catch (e) {
            return {
                result:false
            }
        } 
        

        

    }
}