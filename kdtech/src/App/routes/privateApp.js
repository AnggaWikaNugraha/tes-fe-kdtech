import React, { useEffect } from 'react'
import {
  useSelector,
} from 'react-redux'
import {
  Route,
  Redirect,
} from 'react-router-dom'

const PrivateApp = ({
  children,
  ...rest
}) => {
  const StatusPageReducer = useSelector((state) => (state.StatusPageReducer));
  
  useEffect(() => {
    if (StatusPageReducer.isAuthenticated) {
    }
  }, [StatusPageReducer]);
  
  return (
    <Route
      {...rest}
      render={() => (StatusPageReducer.isAuthenticated ? (
        children
      ) : (
          <Redirect
            to={{
              pathname: '/login',
            }}
          />
      ))
      }
    />
  )
}

export default PrivateApp