import { Introduction } from "./introduction";
import { ProfileHeader } from "./profileHeader";

export const ProfileContent = (): JSX.Element => {
  return (
    <>
      <ProfileHeader />
      <Introduction />
    </>
  );
};
