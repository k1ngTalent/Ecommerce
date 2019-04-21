import React from 'react';
function Contact() {
    return (
        <div>
            <form>
                <div className="contact-form__title">

                </div>
                <input type="text" required />
                <input type="email" required />
                <textarea></textarea>

                <button className="btn btn--lg btn--primary">send</button>
            </form>
        </div>
    )
}

export default Contact;