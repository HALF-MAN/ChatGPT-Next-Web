// components/Login.tsx
"use client";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import { Path } from "../constant";

function validatePassword(password: string): boolean {
  // 检查密码长度是否大于等于 8 个字符
  return password === "hooke";
}

export function Login() {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 在这里处理密码验证和登录逻辑
    console.log("用户输入的密码：", password);
    // 假设您有一个名为 `validatePassword` 的函数来验证密码
    if (validatePassword(password)) {
      // 如果密码验证通过，导航到 Home 组件
      navigate(Path.Home);
    } else {
      // 如果密码验证失败，显示错误消息或执行其他操作
      navigate(Path.Login);
    }
  };

  return (
    <div className={styles.login}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor="password" className={styles.label}>
          密码
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.includes}
        />
        <button type="submit" className={styles.button}>
          登录
        </button>
      </form>
    </div>
  );
}
