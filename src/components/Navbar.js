import Link from "next/link";
import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export const Navbar = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  console.log(user);
  return (
    <nav className="">
      <div className="w-11/12 mx-auto flex justify-between items-center">
        <h2 className="text-2xl font-semibold uppercase py-4">Verse & Voice</h2>
        <div className="flex gap-2">
          <Link href="/">
            <button className="nav-btn">Home</button>
          </Link>
          <Link href="/">
            <button className="nav-btn">Profile</button>
          </Link>
        </div>
        <div>
          {user ? (
            <div className="flex gap-2 items-center">
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
