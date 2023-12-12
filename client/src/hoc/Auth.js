import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../_actions/user_action";

function Auth(SpecificComponent, option, adminRoute = null) {
  function AuthenticationCheck() {
    // const dispatch = useDispatch();

    useEffect(() => {
      // dispatch(auth()).then((res) => {
      //   console.log(res);
      // });
    }, []);
    return <SpecificComponent />;
  }
  return AuthenticationCheck;
}

export default Auth;
