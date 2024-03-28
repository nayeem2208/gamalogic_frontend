import { useLocation } from "react-router-dom";
import "./App.css";
import Router from "./Routers/Router";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";

function App() {
  const location = useLocation();
  console.log(location, "location");
  return (
    <div>
      <div
        className="lg:flex h-full"
        style={{ fontFamily: "Raleway,sans-serif;" }}
      >
        {location.pathname !== "/login" && location.pathname !== "/signup" && (
          <>
            <SideBar />
            <Header />
          </>
        )}

        <Router />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
