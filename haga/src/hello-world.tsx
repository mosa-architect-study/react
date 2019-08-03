import * as React from "react"
import {render} from "react-dom"

export default (elm:HTMLElement) => {
    render(<App />,elm);
}

const App = () => <div>HelloWorld</div>