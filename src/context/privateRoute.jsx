import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth';

function IsAutenticaded(user) {
    if (user.id == undefined) {
        return false
    } else {
        return true
    }
}

export function IsAdm (id){
    if(id == "NcQk9SluoHVyXxiCoU1mv0Nhhu12" || id == "tJvqdQVT0FS1BHAqI85ZZWJfgXM2"){
        return true 
    }else {
        return false 
    }
}



export  const  PrivateRoute = ({ component: RouteComponent, ...rest }) => {
    const { user } = useAuth();

    return (
        <Route
            {...rest}
              render ={ routeProps => 
                IsAutenticaded(user)? (
                    <RouteComponent {...routeProps} />
                ) : (
                    <Redirect to={"/"} />
                )
            }
        />
    );
};









