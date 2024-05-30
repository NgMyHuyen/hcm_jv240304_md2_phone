import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import Header from "../../../organism/Header/Header";
import { signUp } from "../../../store/Slices/signUpSlice";
import "./signUp.scss";

export default function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userStatus = useSelector((state) => state.signUp.status);
  const userError = useSelector((state) => state.signUp.error);
  // const state = useSelector((state) => state);
  // console.log(state, "aaa");
  const validationSchema = Yup.object().shape({
    // fullname: Yup.string().required("Fullname is required"),
    username: Yup.string()
      .required("Username is required")
      .min(6, "Username must be at least 6 characters")
      .max(20, "Username must not exceed 20 characters"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(40, "Password must not exceed 40 characters"),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password"), null], "Confirm Password does not match"),
    acceptTerms: Yup.bool().oneOf([true], "Accept Terms is required"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    dispatch(signUp(data));
  };
  if (userStatus === "succeeded") {
    navigate("/login");
    alert("Đăng ký thành công!");
  }

  return (
    <>
      <Header />
      <div className="sign-up-form-container">
        <form onSubmit={handleSubmit(onSubmit)} className="sign-up-form">
          <h2>Sign Up TINY</h2>
          <div className="form-group">
            <label htmlFor="userName">User's Name</label>
            <input
              name="username"
              type="text"
              {...register("username")}
              className={`form-control ${errors.username ? "is-invalid" : ""}`}
            />
          </div>
          <div className="invalid-feedback">{errors.username?.message}</div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              name="email"
              type="text"
              {...register("email")}
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
            />
            <div className="invalid-feedback">{errors.email?.message}</div>
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              name="password"
              type="password"
              {...register("password")}
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
            />
            <div className="invalid-feedback">{errors.password?.message}</div>
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              name="confirmPassword"
              type="password"
              {...register("confirmPassword")}
              className={`form-control ${
                errors.confirmPassword ? "is-invalid" : ""
              }`}
            />
            <div className="invalid-feedback">
              {errors.confirmPassword?.message}
            </div>
          </div>

          <div className="form-group form-check">
            <input
              id="input-checkbox"
              name="acceptTerms"
              type="checkbox"
              {...register("acceptTerms")}
              className={`form-check-input ${
                errors.acceptTerms ? "is-invalid" : ""
              }`}
            />
            <label htmlFor="acceptTerms" className="form-check-label">
              I have read and agree to the Terms
            </label>
            <div className="invalid-feedback">
              {errors.acceptTerms?.message}
            </div>
          </div>

          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
            {/* <button
              type="button"
              onClick={() => reset()}
              className="btn btn-secondary"
            >
              Reset
            </button> */}
          </div>
          <div className="text-center">
            <Link to="/login">Already have an account? Login</Link>
          </div>
        </form>
      </div>
      {userStatus === "loading" && <p>Đang đăng ký...</p>};
      {userStatus === "succeeded" && <p>Đăng ký thành công!</p>};
      {userStatus === "failed" && <p>Lỗi: {userError}</p>};
    </>
  );
}
