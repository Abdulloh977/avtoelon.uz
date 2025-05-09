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
      <div className='logen-home'>
        <img src={Img} width={50} height={50} alt="Logo" />
        <div>
          <h1 className="logen-h1">AVTOELON</h1>
          <p className="logen-p">Explore with WEBSTAR IT ACADEMY</p>
        </div>
        <form onSubmit={onSubmit} className="logen-div">
          <h1 className="login">Signup</h1>
          <input
            name="firstname"
            className='input'
            type="text"
            placeholder='Enter your firstname'
          />
          <input
            name="lastname"
            className='input'
            type="text"
            placeholder='Enter your lastname'
          />
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
          <input
            name="confirmPassword"
            className='input'
            type="password"
            placeholder='Confirm your password'
          />
          <div className="logen-div-div">
            <Link className="logen-link" to="/login">Already have an account? Login</Link>
            <button className='button' type="submit">Signup</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
