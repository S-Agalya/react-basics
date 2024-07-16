import React from "react"
class Apple extends React.Component{

    render(){
        const {appleInfo}=this.props
        const {type,color}=appleInfo
        return(
<>
        <h1> Class component</h1>
        <h1>It is a {color} color {type} apple</h1>
        </>
        )
        
    }
}
export default Apple