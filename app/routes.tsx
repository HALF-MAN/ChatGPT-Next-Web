// routes.tsx
"use client";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { HashRouter as Router } from "react-router-dom";
import { Login } from "./components/Login";
import { Chat } from "./components/chat";
import { NewChat } from "./components/new-chat";
import { MaskPage } from "./components/mask";
import { Settings } from "./components/settings";
import { Path } from "./constant";
import { Home } from "./components/home";

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path={Path.Login} element={<Login />} />
        <Route path={Path.Home} element={<Home />} />
        <Route path={Path.NewChat} element={<NewChat />} />
        <Route path={Path.Masks} element={<MaskPage />} />
        <Route path={Path.Chat} element={<Chat />} />
        <Route path={Path.Settings} element={<Settings />} />
      </Routes>
    </Router>
  );
}
