import { Link } from "react-router-dom";
import Img from "../../assets/avtologo.png";
import './login.css';
import { useLoginContext } from "../../context/loginContaxt";

const Signup = () => {
  const { postSignup } = useLoginContext();

  const onSubmit = (evt) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);

    const userData = {
      firstname: formData.get("firstname"),
      lastname: formData.get("lastname"),
      email: formData.get("email"),
      password: formData.get("password"),
    };

    postSignup(userData);
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
          <h1 className="login-header">Signup</h1>
          <input
            name="firstname"
            className="login-input"
            type="text"
            placeholder="Enter your firstname"
          />
          <input
            name="lastname"
            className="login-input"
            type="text"
            placeholder="Enter your lastname"
          />
          <input
            name="email"
            className="login-input"
            type="text"
            placeholder="Enter your email"
          />
          <input
            name="password"
            className="login-input"
            type="password"
            placeholder="Enter your password"
          />
          <input
            name="confirmPassword"
            className="login-input"
            type="password"
            placeholder="Confirm your password"
          />
          <div className="login-form-footer">
            <Link className="login-link" to="/login">
              Already have an account? Login
            </Link>
            <button className="login-button" type="submit">
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
