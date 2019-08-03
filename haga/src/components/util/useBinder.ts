import * as React from "react"

type Bind<S extends {}> = <K extends keyof S>(name:K) => {
    value:S[K],
    onChange:(value:S[K])=>void
}

export const useBinder = <S extends Record<string,any>>(initState:S):[S,Bind<S> ] =>{

    const [state,setState] = React.useState(initState)
    const bind = <K extends keyof S>(name:K) => {
        return {
            value:state[name],
            onChange:(value:S[K]) => {
                setState(state => Object.assign({},state,{[name]:value}))
            }
        }
    }

    return [state,bind]

}