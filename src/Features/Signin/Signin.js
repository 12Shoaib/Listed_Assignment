import { useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../AuthenticationSetup/Firebase";
import signin from "./signin.module.css";
import Dialog from "../../Components/Dialog/Dialog";

const Signin = () => {
  const navigate = useNavigate();

  const handleSigninWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((user) => {
        sessionStorage.setItem("userAuth", JSON.stringify(user));
        navigate("/dashboard");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className={signin.container}>
      <div className={signin.section_one}>
        <h1 className={signin.section_one_heading}>Board.</h1>
      </div>
      <div className={signin.section_two}>
        <h1 className={signin.mobile_heading}>BOARD.</h1>
        <div className={signin.wrapper}>
          <h1 className={signin.section_two_heading}>Sign in</h1>
          <h2 className={signin.section_two_sub_heading}>
            Sign in to your account
          </h2>
          <Dialog handleSigninWithGoogle={handleSigninWithGoogle} />
        </div>
      </div>
    </div>
  );
};

export default Signin;
