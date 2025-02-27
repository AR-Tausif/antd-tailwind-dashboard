import "./sidebar.css";
import logo from "../../../public/favicon1.svg";
import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { CircleDollarSign, ContactRound } from "lucide-react";
import { ScrollText } from "lucide-react";
import { LayoutDashboard } from "lucide-react";
import { LogOut } from "lucide-react";
import { SlidersVertical } from "lucide-react";
import { Podcast } from "lucide-react";
import { CircleUser } from "lucide-react";
import { useDispatch } from "react-redux";
import { Drawer } from "antd";
import { FaCarOn } from "react-icons/fa6";
import { TbBrandAsana } from "react-icons/tb";
import { IoCarSport } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../redux/features/authSlice";

const SidebarContainer = ({ collapsed, openDrawer, setOpenDrawer }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Logout handler
  const onClick = (e) => {
    if (e.key === "logout") {
      dispatch(logout());

      navigate("/");
    } else {
      if (openDrawer) {
        setOpenDrawer((prev) => !prev);
      }
    }
  };

  const navLinks = [
    {
      key: "dashboard",
      icon: <LayoutDashboard size={21} strokeWidth={2} />,
      label: <Link to={"/admin/dashboard"}>Dashboard</Link>,
    },
    {
      key: "earnings",
      icon: <CircleDollarSign size={21} strokeWidth={2} />,
      label: <Link to={"/admin/earnings"}>Earnings</Link>,
    },
    {
      key: "User",
      icon: <CircleUser size={21} strokeWidth={2} />,
      label: <Link to={"/admin/users"}>Users</Link>,
    },
    {
      key: "dealers",
      icon: <ContactRound size={21} strokeWidth={2} />,
      label: <Link to={"/admin/dealers"}>Dealers</Link>,
    },
    {
      key: "manage-subscription",
      icon: <Podcast size={21} strokeWidth={2} />,
      label: (
        <Link to={"/admin/manage-subscription"}>Manage Subscriptions</Link>
      ),
    },

    // {
    //   key: "orders",
    //   icon: <Table size={21} strokeWidth={2} />,
    //   label: <Link to={"/admin/orders"}>Orders</Link>,
    // },
    {
      key: "Manage Cars",
      icon: <FaCarOn size={21} strokeWidth={2} />,
      label: "Manage Cars",
      children: [
        {
          key: "Cars",
          icon: <IoCarSport size={21} strokeWidth={2} />,
          label: <Link to={"/admin/cars"}>All Cars</Link>,
        },
        {
          key: "Brands",
          icon: <TbBrandAsana size={21} strokeWidth={2} />,
          label: <Link to="/admin/brands">Brands</Link>,
        },
        {
          key: "Models",
          icon: <ScrollText size={21} strokeWidth={2} />,
          label: <Link to="/admin/models">Models</Link>,
        },
      ],
    },
    {
      key: "settings",
      icon: <SlidersVertical size={21} strokeWidth={2} />,
      label: "Settings",
      children: [
        {
          key: "privacy-policy",
          icon: <ScrollText size={21} strokeWidth={2} />,
          label: <Link to="/admin/privacy-policy">Privacy Policy</Link>,
        },
        {
          key: "terms-conditions",
          icon: <ScrollText size={21} strokeWidth={2} />,
          label: <Link to="/admin/terms">Terms & Conditions</Link>,
        },
        {
          key: "about-us",
          icon: <ScrollText size={21} strokeWidth={2} />,
          label: <Link to="/admin/about-us">About Us</Link>,
        },
      ],
    },
    {
      key: "logout",
      icon: <LogOut size={21} strokeWidth={2} />,
      label: <Link to="/login">Logout</Link>,
    },
  ];

  // Get current path for sidebar menu item `key`
  //   const currentPathname = usePathname()?.replace("/admin/", "")?.split(" ")[0];
  const currentPathname = "/admin/about-us";

  return (
    <div className="bg-[#FFFFFF] min-h-screen">
      <div className="md:hidden">
        <Drawer
          title="Basic Drawer"
          open={openDrawer}
          onClose={() => setOpenDrawer(false)}
        >
          <div className="mb-6 flex flex-col items-center justify-center gap-y-5">
            <Link to={"/"}>
              {collapsed ? (
                <img
                  src={logo}
                  alt="Logo Of aristocar"
                  className="h-16 w-auto"
                />
              ) : (
                <img
                  src={logo}
                  alt="Logo Of aristocar"
                  className="h-16 w-auto"
                />
              )}
            </Link>
          </div>

          <Menu
            onClick={onClick}
            defaultSelectedKeys={[currentPathname]}
            mode="inline"
            className="sidebar-menu space-y-2.5 !border-none !bg-transparent"
            items={navLinks}
          />
        </Drawer>
      </div>

      <div className="hidden md:block">
        <Sider
          width={320}
          theme="light"
          trigger={null}
          collapsible
          collapsed={collapsed}
          style={{
            paddingInline: `${!collapsed ? "10px" : "4px"}`,
            paddingBlock: "30px",
            backgroundColor: "white",
            maxHeight: "100vh",
            overflow: "auto",
          }}
          className="scroll-hide"
        >
          <div className="mb-6 flex flex-col items-center justify-center gap-y-5">
            <Link to={"/"}>
              {collapsed ? (
                <img
                  src={logo}
                  alt="Logo Of aristocar"
                  className="h-16 w-auto"
                />
              ) : (
                <div>
                  <img
                    src={logo}
                    alt="Logo Of aristocar"
                    className="h-16 w-auto"
                  />
                </div>
              )}
            </Link>
          </div>

          <Menu
            onClick={onClick}
            defaultSelectedKeys={[currentPathname]}
            mode="inline"
            className="sidebar-menu space-y-2.5 !border-none !bg-transparent"
            items={navLinks}
          />
        </Sider>
      </div>
    </div>
  );
};

export default SidebarContainer;
