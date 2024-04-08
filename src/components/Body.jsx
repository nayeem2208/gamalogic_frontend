import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useUserState } from "../context/userContext";

function Body() {
  let navigate = useNavigate();
  let { setUserDetails, userDetails } = useUserState();
  useEffect(() => {
    if (!userDetails) {
      const storedToken = localStorage.getItem("token");
      if (storedToken) {
        let parsedToken;
        try {
          parsedToken = JSON.parse(storedToken);
        } catch (error) {
          parsedToken = storedToken;
        }
        setUserDetails(parsedToken);
      } else {
        navigate("/signin");
      }
    }
  }, []);
  return (
    <div className="w-full h-screen overflow-y-auto pb-12">
      {userDetails && <Outlet />}
    </div>
  );
}

export default Body;
