import { Introduction } from "./introduction";
import { ProfileHeader } from "./profileHeader";
import Image from "next/image";
import { SkillSummary } from "./skillSummary";

export const ProfileContent = (): JSX.Element => {
  return (
    <>
      <div className="flex flex-col space-y-4">
        <div className="ml-10 mr-10">
          <ProfileHeader />
        </div>
        <div className="flex flex-row items-start justify-between">
          <div className=" flex flex-col ml-10 mr-20">
            <Introduction />
            <SkillSummary />
          </div>

          <div className="mr-10">
            <Image
              src="/images/person.jpg"
              width={600}
              height={700}
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>
    </>
  );
};
