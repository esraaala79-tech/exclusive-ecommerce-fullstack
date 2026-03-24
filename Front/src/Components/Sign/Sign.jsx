import side from "../images/Side Image.png";
import icon from "../images/Icon-Google.png";
import { useState } from "react";

export const Sign = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      <div className="container-fluid">
        <div className="row min-vh-100 align-items-center">
          <div className="col-lg-7 d-none d-lg-block p-0">
            <img src={side} alt="" className="w-100 h-100 object-fit-cover" />
          </div>

          <div className="col-lg-5 d-flex justify-content-center">
            <div className="w-75">
              <h4 className="mb-3">
                {isLogin ? "Login" : "Create an account"}
              </h4>

              <p className="mb-3">Enter your details below</p>

              {!isLogin && (
                <input
                  type="text"
                  className="form-control mb-4 p-3 border-0 border-bottom"
                  placeholder="Name"
                />
              )}

              <input
                type="email"
                className="form-control mb-4 p-3 border-0 border-bottom"
                placeholder="Email or Phone Number"
              />

              <input
                type="password"
                className="form-control mb-4 p-3 border-0 border-bottom"
                placeholder="Password"
              />

              {isLogin ? (
                <div className="d-flex justify-content-between align-items-center">
                  <button className="btn btn-danger w-50 p-3"> Login</button>
                  <p className="text-danger">Forget Password</p>
                </div>
              ) : (
                <button className="btn btn-danger w-100 p-3">
                  {" "}
                  Create Account
                </button>
              )}
              {!isLogin && (
                <button className="btn border mt-4 w-100 p-3">
                  <img src={icon} alt="" className="pe-2" />
                  Sign up with Google
                </button>
              )}

              <p className="text-center mt-3">
                {isLogin
                  ? "Don't have an account?"
                  : "Already have an account?"}

                <span
                  className="ms-2 text-dark"
                  style={{ cursor: "pointer" }}
                  onClick={() => setIsLogin(!isLogin)}
                >
                  {isLogin ? "Sign Up" : "Login"}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
