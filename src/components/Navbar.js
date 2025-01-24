import Link from "next/link";
import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export const Navbar = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <nav className="bg-gray-800 bg-opacity-50">
      <div className="w-11/12 mx-auto flex justify-between items-center">
        <h2 className="text-2xl font-semibold uppercase py-4 text-center md:hidden">
          Verse <br /> & <br /> Voice
        </h2>
        <h2 className="text-2xl font-semibold uppercase py-4 text-center hidden md:block">
          Verse & Voice
        </h2>
        <div className="flex gap-2">
          <Link href="/">
            <button className="nav-btn">Home</button>
          </Link>
          <Link href="/profile">
            <button className="nav-btn">Profile</button>
          </Link>
        </div>
        <div>
          {user ? (
            <div className="flex gap-2 items-center flex-col md:flex-row">
              <p className="font-semibold">{user?.given_name}</p>{" "}
              <LogoutLink className="nav-btn">Log out</LogoutLink>
            </div>
          ) : (
            <LoginLink>Sign in</LoginLink>
          )}
        </div>
      </div>
    </nav>
  );
};
