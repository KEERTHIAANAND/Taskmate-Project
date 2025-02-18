import Logo from "../assets/new logo.jpg";

export const Header = () => {
  return (
    <header>
        <div className="logo">
            <img src={Logo} alt="Taskmate logo" />
            <span>TASKMATE</span>
        </div>
        <div className="themeSelector">
            <span className="light"></span>
            <span className="medium"></span>
            <span className="dark"></span>
            <span className="gOne activeTheme"></span>
            <span className="gTwo"></span>
            <span className="gThree"></span>
        </div>
    </header>
  )
}
