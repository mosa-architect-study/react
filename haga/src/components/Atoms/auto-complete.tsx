import * as React from "react"
import Input from "./input-text"
import Panels from "./select-panel"

interface Option {
    value:string,
    label:string
}

interface Props {
    options:Option[]
}

interface State {
    open:boolean
}


type Action= {
    type:"Focus" | "Blur"
}

export default ({options}:Props) => {

    const reducer : (state:State,action:Action)=> State = (state,action) => {
        switch (action.type) {
            case "Focus":
                return {
                    open:true
                }
            case "Blur":
                return {
                    open:false
                }
            }
        return state
    }

    const [{open},dispatch] = React.useReducer(reducer,{open:false})

    return <React.Fragment>
        <Input value="hogehogehoge" attrs={{onFocus:()=>dispatch({type:"Focus"}),onBlur:()=>dispatch({type:"Blur"})}} onChange={console.log}></Input>
        {open && <Panels list={options}></Panels>}
    </React.Fragment> 

}