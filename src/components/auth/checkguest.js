import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const checkGuest = (Component) => {
  return function Wrapper(props) {
    const user = useSelector((store) => store.auth.user);
    const navigate = useNavigate();

    useEffect(() => {
      if (user) {
        navigate("/");
      }
    }, [user, navigate]);

    return <Component {...props} />;
  };
};

export default checkGuest;
