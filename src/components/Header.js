import Logo from "../assets/nba logo.png";

export const Header = () => {
  return (
    <header>
        <div className="logo">
            <img src={Logo} alt="Taskmate logo" />
            <span>TASKMATE</span>
        </div>
    </header>
  )
}
