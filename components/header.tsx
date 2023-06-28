import { TNavbar } from "./tnavbar";

export const Header = (): JSX.Element => {
  return (
    <header className="big-teal-200 sticky top-0 z-50 shadow-md">
      {/*   <Navbar /> */}
      <TNavbar />
    </header>
  );
};
