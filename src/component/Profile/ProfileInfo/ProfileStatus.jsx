import React from "react";
import stile from '../Profile.module.css'

class ProfileStatus extends React.Component {

    state = {
        editMode: false
    }

    activeEditMode() {
        this.setState({
            editMode: true
        })
    }

    deActiveEditMode() {
        this.setState({
            editMode: false
        })
    }


    render() {
        return (
            <div>
                <div>{!this.state.editMode &&
                    <span onDoubleClick={this.activeEditMode.bind(this)} > {this.props.status} </span>
                }
                </div>
                <div>{this.state.editMode &&
                    <input autoFocus={true} onBlur={this.deActiveEditMode.bind(this)} value={this.props.status} />
                }
                </div>
            </div>
        )
    }
}

export default ProfileStatus;