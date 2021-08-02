import React from "react"

class Detail extends React.Component{

    componentDidMount(){
        const {location, history} = this.props
        console.log(this.props)
        if(location.state === undefined){
            history.goBack()
            //history.push("/")
        }
    }
    render(){
        const {location} = this.props
        if(location.state){
            return (
                <div>
                    <h1>title is {location.state.title}</h1>
                    <img src={location.state.poster} alt={location.state.title} title={location.state.title}></img>
                </div>
            )
        }else{
            return null
        }
    }
}


export default Detail