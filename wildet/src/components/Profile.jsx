import React, { useState } from "react";
import { authService } from "../api/firebase";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

export default () => {
  const navigate = useNavigate();
  const onLogOutClick = () => {
    authService.signOut();
    navigate("/");
  };
  return (
    <>
      <button onClick={onLogOutClick}>Log Out</button>
    </>
  );
};
