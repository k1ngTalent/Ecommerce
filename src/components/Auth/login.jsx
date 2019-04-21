function Login() {
    return (
        <div>
            <form>
                <div className="signin-form__title">

                </div>
                <input type="email" required />
                <input type="password" required />
                <input type="checkbox" />

                <button className="btn btn--lg btn--primary">sign in</button>
                <div className="signin-form__links">
                    Forgot password?
                    Have an account
               </div>
            </form>
        </div>
    )
}

export default Login;