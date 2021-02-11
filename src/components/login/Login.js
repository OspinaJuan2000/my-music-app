import { Link } from "react-router-dom";
import logo from "../../img/logo.svg";

const Login = () => {
  return (
    <>
      <header className="login">
        <div className="login__debut">
          <h1 className="login__heading">MyMusicApp</h1>
          <img className="login__logo" src={logo} alt="logo spotify" />
        </div>
        <Link to="/" className="btn btn--green btn--animated">
          Login with Spotify
        </Link>
      </header>
    </>
  );
};

export default Login;
