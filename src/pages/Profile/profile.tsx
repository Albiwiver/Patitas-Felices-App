import { ProfileForm } from "./profileForm";

export const Profile: React.FC = () => {
  return (
    <section className=" w-full relative px-4 py-2 h-auto lg:min-h-screen flex justify-center items-center lg:justify-start xl:ml-8 ">
      <ProfileForm />
      <img
        className="hidden lg:absolute lg:block lg:w-1/2 lg:h-full lg:top-0 lg:right-0 lg:object-cover lg:object-center -z-10"
        src="assets/images/profile-dog-fingerprints.svg"
      ></img>
    </section>
  );
};
