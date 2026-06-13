import type { Metadata } from "next";
import React from "react";
import Profile from "./Profile";

export const metadata: Metadata = {
    title: "Profile",
}


function ProfilePage() {
  return <Profile />;
}

export default ProfilePage;