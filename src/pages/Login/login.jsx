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
      <div className='logen-home'>
        <img src={Img} width={50} height={50} alt="Logo" />
        <div>
          <h1 className="logen-h1">AVTOELON</h1>
          <p className="logen-p">Explore with WEBSTAR IT ACADEMY</p>
        </div>
        <form onSubmit={onSubmit} className="logen-div">
          <h1 className="login">Login</h1>
          <input
            name="email"
            className='input'
            type="text"
            placeholder='Enter your email'
          />
          <input
            name="password"
            className='input'
            type="password"
            placeholder='Enter your password'
          />
          <div className="logen-div-div">
            <Link className="logen-link" to="/signup">Don't have an account? Signup</Link>
            <button className='button' type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Logen;
