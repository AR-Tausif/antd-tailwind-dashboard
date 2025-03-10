import { Button } from "antd";
import { Layout } from "antd";
import { AlignJustify } from "lucide-react";
import { Link } from "react-router-dom";
import "./header.css";
// import { useGetProfileQuery } from "@/redux/api/userApi";
const { Header } = Layout;

export const HeaderContainer = ({ collapsed, setCollapsed }) => {
  //   const pathname = usePathname();
  // const navbarTitle = pathname.split("/admin")[1];
  const navbarTitle = "admin";
  //   const router = useRouter();
  //   const userId = useSelector((state) => state.auth?.user?._id);

  // if (!userId) {
  //   router.push("/login");
  // }
  // Get user info
  //   const { data: userRes } = useGetProfileQuery();

  //   const user = userRes?.data || {};

  return (
    <Header
      style={{
        backgroundColor: "white",
        height: "80px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingInline: 0,
        paddingRight: "40px",
      }}
    >
      {/* Collapse Icon */}
      <div className="flex items-center gap-x-2">
        <Button
          type="text"
          icon={<AlignJustify strokeWidth={3} size={25} />}
          onClick={() => setCollapsed(!collapsed)}
        />
        <h1 className="text-xl font-semibold capitalize font-dmSans">
          {/* {navbarTitle.length > 1
            ? navbarTitle.replaceAll("/", " ").replaceAll("-", " ")
            : "dashboard"} */}
          coded
        </h1>
      </div>

      {/* Right --- notification, user profile */}
      <div className="flex items-center gap-x-6">
        {/* <button>
          <Search color="#1C1B1F" size={22} strokeWidth={2.5} />
        </button> */}

        {/* <Link href="/admin/notification" className="relative !leading-none">
          <Badge count={notificationData?.data?.length || 0} overflowCount={10}>
            <Bell
              className="rounded-full cursor-pointer text-orange"
              fill="#1C1B1F"
              stroke="#1C1B1F"
              size={22}
            />
          </Badge>

          <div className="bg-[#64B445] absolute -top-1.5 -right-1 size-3 rounded-full" />
        </Link> */}

        {/* User */}
        <Link
          to={"/admin/profile"}
          className="flex items-center text-black group gap-x-2 hover:text-primary-blue"
        >
          {/* {user.image ? (
            <Image
              src={user?.image}
              alt="Admin avatar"
              width={52}
              height={52}
              className="h-[50px] w-[50px] rounded-full border-2 border-primary-green p-0.5 group-hover:border"
            />
          ) : (
            <div className="flex items-center justify-center text-white bg-black rounded-full font-500 size-10">
              <p className="text-16">
                {user?.email?.slice(0, 2)?.toUpperCase()}
              </p>
            </div>
          )} */}
          <img
            src="https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659652_640.png"
            alt="Admin avatar"
            width={52}
            height={52}
            className="h-[50px] w-[50px] rounded-full border-2 border-primary-green p-0.5 group-hover:border"
          />

          <h4 className="text-lg font-semibold">Tausif Ahmed</h4>
        </Link>
      </div>
    </Header>
  );
};
