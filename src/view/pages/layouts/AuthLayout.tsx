import { Outlet } from 'react-router';

export function AuthLayout() {
  return (
    <div>
      <h1>AuthLayout</h1>
      <Outlet />
    </div>
  );
}
