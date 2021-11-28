import { connect } from "react-redux"
import { Redirect } from "react-router"

let mapStateToPropsRedirect = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export const withAuthRedirect = (Content) => {

    let RiderectContent = (props) => {
        if (!props.isAuth) return <Redirect to='/login' />
        return <Content {...props} />
    }
    
    let withRouterContainer = connect(mapStateToPropsRedirect)(RiderectContent);
    return withRouterContainer;
}