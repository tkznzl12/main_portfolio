import { Route, Routes } from "react-router-dom";
import Main from "../pages/main";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" Component={Main} />
    </Routes>
  );
};
