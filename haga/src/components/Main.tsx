import * as React from "react"
import Input from "./Atoms/input-text"
import Button from "./Atoms/button"
import {useBinder} from "./util/useBinder"

const style : React.CSSProperties = {
    margin:"auto",
    width:"1000px",
    height:"600px",
    backgroundColor:"red"
}

interface Invitation {
    username:string,
    reponame:string,
    token:string
}

interface Props {
    submit:(inv:Invitation) => void
}

const Main = ({submit}:Props) => {

    const [state,bind] = useBinder<Invitation>({username:"",reponame:"",token:""}) 
    
    return <main style={style}>
        <div>
            <div>
                <Input {...bind("reponame")}/>
            </div>
            <div>
                <Input {...bind("username")}/>
            </div>
            <div>
                <Input {...bind("token")}/>
            </div>
            <div>
                <Button onClick={()=>submit(state)} text="クリック"/>
            </div>
        </div>
    </main>
}

export default Main