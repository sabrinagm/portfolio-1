import React from "react";
import Menu from "../Menu";

function MenuApp(props) {
    let menu = props.data.map((m, index) =>
    <Menu key={index} {...m}></Menu>
    );

    return (
        <div className="App">{menu}</div>
    )
}

export default MenuApp

/*export default class MenuApp extends React.Component{
    render() {
        console.log(this.props.data)
        return 
    }
}*/
