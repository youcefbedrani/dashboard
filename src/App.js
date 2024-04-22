import './App.scss'
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { NavBar } from "./components/navBar/NavBar";
import { LeftBar } from "./components/leftBar/LeftBar";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { Customer } from "./pages/customer/Customer";
import { Drivers } from './pages/Drivers/Drivers';
import { CustomerUpdate } from './pages/customerUpdate/CustomerUpdate';
import { DriversUpdate } from './pages/driversUpdate/DriversUpdate';
import { NavPages } from './components/NavPages/NavPages';
import Login from "./pages/Login/Login"
import Aproved_Trucker from './pages/Aproved/Aproved_Trucker';


function App() {
  const Layout = () => {
    return (
      <div>
        <NavBar />
        <NavPages/>
        <div style={{ display: "flex" }}>
          <LeftBar />
          <div style={{ flex: 7 }}>
            <Outlet />
          </div>
        </div>
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/dashboard",
      element: <Layout />,
      children: [
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/dashboard/customers",
          element: <Customer />,
        },
        {
          path: "/dashboard/drivers",
          element: <Drivers />,
        },
        {
          path: "/dashboard/customerUpdate",
          element: <CustomerUpdate />,
        },
        {
          path: "/dashboard/driverUpdate",
          element: <DriversUpdate />,
        },
        {
          path: "/dashboard/aprovedtrucker",
          element: <Aproved_Trucker />,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
