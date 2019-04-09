import React from 'react';

function Topbar() {
    return (
        <section class="section-topbar">
            <div className="container">
                <div className="topbar">
                    <div className="topbar__section">
                        <span className="topbar__greeting">hi!</span>
                        &nbsp;

                            <span className="topbar__auth topbar__auth--login">Sign in</span>
                        &nbsp;
                        <span className="topbar__or">or</span>
                        &nbsp;
                        <span className="topbar__auth topbar__auth--reg">Register</span>
                    </div>


                    <div className="topbar__section">
                        <div className="topbar__nationale">
                            <div className="topbar__flag">
                                <span className="flag-icon flag-icon-gb">

                                </span>
                                &nbsp;
                        </div>
                            &#163;GBP
                    </div>

                        <div className="topbar__bag">
                            <span>
                                Your bag: &#163;3.99
                        </span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Topbar;