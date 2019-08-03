import * as React from "react"
import {css} from "emotion"

const panelCss = css`
    width:250px;
    height:1.2em;
    font-size:16px;
    margin:0 10px;
    background-color:gray;
    user-select: none;
    &:hover {
        background-color:blue;
    }
    &:active {
        background-color:blanchedalmond;
    }
`

interface Option {
    value:string,
    label:string
}


export interface Props {
    list:Option[]
}

const styleContainer : React.CSSProperties = {
    zIndex:100,
    position:"absolute"
}

export default ({list}:Props) => {
    return <div style={styleContainer}>
        {list.map((e,i )=> <div key={i} className={panelCss}>{e.label}</div>)}
    </div>
}