import React, { createContext, useState, useContext } from "react";

type ProfileImageContextType = {
  profileImage: { uri: string } | number;
  setProfileImage: React.Dispatch<React.SetStateAction<{ uri: string } | number>>;
};

const ProfileImageContext = createContext<ProfileImageContextType | undefined>(undefined);

export const ProfileImageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const defaultIcon = require("../assets/images/user_icon.png");
  const [profileImage, setProfileImage] = useState<{ uri: string } | number>(defaultIcon);

  return (
    <ProfileImageContext.Provider value={{ profileImage, setProfileImage }}>
      {children}
    </ProfileImageContext.Provider>
  );
};

export const useProfileImage = () => {
  const context = useContext(ProfileImageContext);
  if (!context) {
    throw new Error("useProfileImage debe usarse dentro de un ProfileImageProvider");
  }
  return context;
};