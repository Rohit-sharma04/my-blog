import Header from "./Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <main>
      <Header />
      <div style={{ paddingTop: '100px' }}>
        <Outlet />
      </div>
    </main>
  );
}