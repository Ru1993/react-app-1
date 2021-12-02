import React from "react";
import stile from '../Profile.module.css'

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    activeEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deActiveEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.setUpdateStatus(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState){
        if(prevProps.status !== this.props.status){
            this.setState({status: this.props.status});
        }
    }

    render() {
        return (
            <div>
                <div>{!this.state.editMode &&
                    <span onDoubleClick={this.activeEditMode} > {this.props.status|| '-----'} </span>
                }
                </div>
                <div>{this.state.editMode &&
                    <input onChange={this.onStatusChange}
                    autoFocus={true} onBlur={this.deActiveEditMode} value={this.state.status} />
                }
                </div>
            </div>
        )
    }
}

export default ProfileStatus;