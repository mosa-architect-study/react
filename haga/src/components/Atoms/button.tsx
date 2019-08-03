import * as React from "react"
import {css} from "emotion"

const buttonCss = css`
    width:250px;
    height:1.2em;
    font-size:20px;
    margin:20px 10px 0 10px;
    background-color:gray;
    user-select: none;
    line-height: 0;
    border-radius:3px;
    &:hover {
        background-color:blue;
    }
    &:active {
        background-color:blanchedalmond;
    }
`

export interface Props {
    text:string,
    onClick:() => void
}

export default (props:Props) => {
    return <button className={buttonCss} onClick={props.onClick}>
        {props.text}
    </button>
}