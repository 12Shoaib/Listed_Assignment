import dialog from './dialog.module.css'
import { FcGoogle } from 'react-icons/fc'
import { BsApple } from 'react-icons/bs'

const Dialog = ({ handleSigninWithGoogle }) => {
    return (
        <div className={dialog.container}>
            <div className={dialog.signin_options_wrapper}>
                <div onClick={handleSigninWithGoogle} className={dialog.signin_google}>
                    <FcGoogle className={dialog.logo} />  Sign in with Google
                </div>
                <div className={dialog.signin_apple}>
                    <BsApple className={dialog.logo} /> Sign in with Apple
                </div>
            </div>
            <div className={dialog.dialog_box}>
                <div className={dialog.dialog_container}>
                    <label className={dialog.email_label} htmlFor='email'>Email address</label>
                    <input type='email' className={dialog.input_box} placeholder='Email' id='email' />

                    <label className={dialog.password_label} htmlFor='password'>Password</label>
                    <input type='password' className={dialog.input_box} placeholder='Password' id='password' />
                    <a className={dialog.external_Link} href='#'>Forgot Password?</a>
                    <button className={dialog.button}>Sign in</button>
                </div>
            </div>
            <div className={dialog.footer}>Don't have an account? <a className={dialog.external_Link} href='#'>Register here</a> </div>
        </div>
    )
}

export default Dialog