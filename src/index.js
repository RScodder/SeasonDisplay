import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'
import Loading from './Loading'
class App extends React.Component{


    constructor(props) {
        super(props)
    
        this.state = {
             lat:null,
            errorMessage:''
        }
    }
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
           position=>this.setState({lat:position.coords.latitude}),
            (err)=>this.setState({errorMessage:"User Denied"})
        );
    }
    helperrender(){
        if(this.state.lat)
            return <SeasonDisplay lat={this.state.lat}/>

        if(!this.state.errorMessage)
            return <Loading message="Please Accept Location Request"/>

        return <h1>{this.state.errorMessage}</h1>
    }
    // react says we have to define render
    render() {
        return <div className="border red">{this.helperrender()}</div>
    }
}

ReactDOM.render(<App/>,document.querySelector('#root'))