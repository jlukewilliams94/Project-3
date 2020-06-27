import React, {useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import vContext from '../context/ageContext'
const PrivateRoute = ({ component: Component, ...rest }) => {
    const VerifiedContext = useContext(vContext)
    return (
        <Route {...rest}

            render={props =>
                VerifiedContext.verified === true ? (
                    <Component {...props} />
                ) : (
                        VerifiedContext.verified === false ? (
                            <Redirect
                                to={{ pathname: "/" }} />
                        ) : (null))
            } />

    )
}

export default PrivateRoute