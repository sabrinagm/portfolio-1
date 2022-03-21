import React from "react"
import MenuItem from "../MenuItem"

export default class Menu extends React.Component {
    render() {
        return (
            <div>
                <h1 className="menuName">{this.props.menuName} Menu</h1>
                {this.props.menuItems.map((elem,index) => {
                //console.log(elem)

                return(
                    <MenuItem key={index} {...elem}></MenuItem>
                )
                }
                )
                }
            </div>
        )
    }
}