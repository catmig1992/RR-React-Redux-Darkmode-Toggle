import "./App.css";
import Nav from "./components/Nav";
import ContentWrapper from "./components/ContentWrapper";
import Footer from "./components/Footer";
import { useSelector, useDispatch } from "react-redux";
import { setDarkMode, setLightMode } from "./features/modeSlice";

function App() {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.mode);

  const toggleMode = () => {
    mode.darkMode ? dispatch(setLightMode()) : dispatch(setDarkMode());
  };

  return (
    <div
      style={{ backgroundColor: mode.color1, color: "black" }}
      className="App"
    >
      <Nav />
      <button onClick={toggleMode}>
        {mode.darkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <ContentWrapper />
      <Footer />
    </div>
  );
}

export default App;
