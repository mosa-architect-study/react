export const get = (url:string):Promise<unknown> => {
    return window.fetch(url,{
        method:"GET"
    }).then(e => e.json())
}

export const put = (url:string,body?:any,headers?:Record<string,string>):Promise<unknown> => {
    return window.fetch(url,{
        method:"PUT",
        body:body ? JSON.stringify(body) : undefined,
        headers
    }).then(e => e.json())
}