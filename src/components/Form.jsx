import React from "react"

export class Form extends React.Component {
    state = {
        message: ""
    }

    ChangeMessage = (ev) => {
        this.setState({ message: ev.target.value })
    }

    render() {
        return <form >
            <p style={{ fontFamily: 'sans-serif', backgroundColor: 'black', color: 'white' }}>Message: {this.state.message}</p>
            <input type="text" onChange={this.ChangeMessage} style={{ borderColor: 'gray' }} />
        </form>
    }
} 