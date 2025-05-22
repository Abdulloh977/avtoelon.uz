import { Link } from "react-router-dom";
import Img from "../../assets/avtologo.png";
import './login.css';
import { useLoginContext } from "../../context/loginContaxt";

const Logen = () => {
  const { postLogin } = useLoginContext();

  const onSubmit = (evt) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);

    const loginData = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    postLogin(loginData); 
  };

  return (
    <div className="container">
      <div className="login-container">
        <img src={Img} width={50} height={50} alt="Logo" />
        <div className="login-text">
          <h1 className="login-title">AVTOELON</h1>
          <p className="login-subtitle">Explore with WEBSTAR IT ACADEMY</p>
        </div>
        <form onSubmit={onSubmit} className="login-form">
          <h1 className="login-header">Login</h1>
          <input name="email" className="login-input" type="text" placeholder="Enter your email" />
          <input name="password" className="login-input" type="password" placeholder="Enter your password" />
          <div className="login-form-footer">
            <Link className="login-link" to="/signup">Don't have an account? Signup</Link>
            <button className="login-button" onClick={onSubmit} type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Logen;
