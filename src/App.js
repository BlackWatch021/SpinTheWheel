import "./App.css";

function App() {
  return (
    <div className="main_container">
      <div className="main_wrapper">
        <div className="tablet_background">
          <img src="./Assets/Images/background.png" alt="" />
        </div>
        <div className="main_body">
          <img
            className="desktop_back"
            src="./Assets/Others/desktopBack.svg"
            alt=""
          />
          <img
            className="desktop_back"
            src="./Assets/Others/desktopBackBottom.svg"
            alt=""
          />
          <img
            className="tablet_back"
            src="./Assets/Others/tabletBack.svg"
            alt=""
          />
          <img
            className="tablet_back"
            src="./Assets/Others/tabletBackBottom.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default App;
