import * as React from "react"
import {render} from "react-dom"
import Main from "./components/Main"
import {usecases} from "./components/context/usecasesContext"

export default (elm:HTMLElement) => {
    render(<App />,elm);
}

const App = () => <Main submit={inv => usecases.requestAddContributers(inv)}/>