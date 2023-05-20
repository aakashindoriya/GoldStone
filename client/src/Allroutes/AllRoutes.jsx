import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import UserForm from "./UpdateUser";
export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<UserForm />} />
      <Route path="*" element={<h1>Page Not Found</h1>} />
    </Routes>
  );
}
