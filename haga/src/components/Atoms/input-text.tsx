import * as React from "react"
import { ChangeEvent} from "react"
import {css} from "emotion"

const className = css`
    height:1.2em;
    width:250px;
    font-size:20px;
    border-radius:3px;
    margin:20px 10px 0 10px;
`

interface Props {
    attrs?:React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>,HTMLInputElement>,
    onChange?:(value:string)=>void,
    value:string
}

const toChangeListener = (onChange?:(value:string)=>void) => ((e:ChangeEvent<HTMLInputElement>)=> onChange && onChange(e.currentTarget.value))

export default ({attrs,onChange,value}:Props) => <input {...attrs} type="text" value={value} className={className} onChange={toChangeListener(onChange)}/>