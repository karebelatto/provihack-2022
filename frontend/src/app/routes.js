import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const Home = React.lazy(async () =>
  import("../containers/Home").then((m) => ({ default: m.Home }))
);

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/home" />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}
