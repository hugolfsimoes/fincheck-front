import { Routes, Route, BrowserRouter } from "react-router";
import { AuthGuard } from "./AuthGuard";
import { Login } from "../view/pages/Login";
import { Dashboard } from "../view/pages/Dashboard";
import { Register } from "../view/pages/Register";
import { AuthLayout } from "../view/pages/layouts/AuthLayout";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthGuard isPrivate={false} />}>
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
        </Route>

        <Route element={<AuthGuard isPrivate={true} />}>
          <Route path="/" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
