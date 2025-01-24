import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function Profile() {

   const { getUser,isAuthenticated } = getKindeServerSession();
    
    const isUserAuthenticated = await isAuthenticated();

    if(!isUserAuthenticated){
      redirect("/api/auth/login?")
    }

    const user = await getUser();
    
    return (
      <div className="profile-page-container">
        <p className="md:text-2xl text-xl">
          Hello {user?.given_name} {user?.family_name}, Welcome to Your Profile
        </p>
      </div>
    )
    
}