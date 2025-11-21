"use client";
import { ToastContainer } from "react-toastify";
import Register from "../register/Register";
import useLogin from "@/hooks/auth/useLogin";
import LoadingCard from "../../LoadingCard";
import Link from "next/link";
import LoginWithSocial from "./LoginWithSocial";

const LoginPopup = () => {
  const { email, setEmail, password, setPassword, isLoading, error, submit } =
    useLogin();

  if (isLoading) return <LoadingCard />;
  return (
    <>
      <div className="modal fade" id="loginPopupModal">
        <div className="modal-dialog modal-lg modal-dialog-centered login-modal modal-dialog-scrollable">
          <div className="modal-content">
            <button
              type="button"
              className="closed-modal"
              data-bs-dismiss="modal"
            ></button>

            <div className="modal-body">
              <div id="login-modal">
                <div className="login-form default-form">
                  <div className="form-inner">
                    <h3>Login to LinkedOut</h3>

                    <form method="post">
                      <div className="form-group">
                        <label>Email address</label>
                        <input
                          type="text"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          name="username"
                          placeholder="Email address"
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label>Password</label>
                        <input
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          type="password"
                          name="password"
                          placeholder="Password"
                          required
                        />
                      </div>

                      <div className="form-group">
                        <div className="field-outer">
                          <div className="input-group checkboxes square">
                            <input
                              type="checkbox"
                              name="remember-me"
                              id="remember"
                            />
                            <label htmlFor="remember" className="remember">
                              <span className="custom-checkbox"></span> Remember
                              me
                            </label>
                          </div>
                          <a href="#" className="pwd">
                            Forgot password?
                          </a>
                        </div>
                      </div>

                      <div className="form-group">
                        <button
                          className="theme-btn btn-style-one"
                          type="button"
                          onClick={submit}
                          name="log-in"
                        >
                          Log In
                        </button>
                      </div>
                    </form>

                    <div className="bottom-box">
                      <div className="text">
                        Don&apos;t have an account?{" "}
                        <Link
                          href="#"
                          className="call-modal signup"
                          data-bs-toggle="modal"
                          data-bs-target="#registerModal"
                        >
                          Signup
                        </Link>
                      </div>

                      <div className="divider">
                        <span>or</span>
                      </div>

                      <LoginWithSocial />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="registerModal">
        <div className="modal-dialog modal-lg modal-dialog-centered login-modal modal-dialog-scrollable">
          <div className="modal-content">
            <button
              type="button"
              className="closed-modal"
              data-bs-dismiss="modal"
            ></button>

            <div className="modal-body">
              <div id="login-modal">
                <div className="login-form default-form">
                  <Register />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default LoginPopup;
