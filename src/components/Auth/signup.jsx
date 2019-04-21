function SignUp() {
    return (
        <div>
            <form>
                <div className="signup-form__title">

                </div>
                <input type="email" required />
                <input type="password" required />
                <input type="password" required />

                <button className="btn btn--lg btn--primary">sign up</button>
                <div className="signup-form__links">
                    Already a member?
                    Sign in
                </div>
            </form>
        </div>
    )
}

export default SignUp;