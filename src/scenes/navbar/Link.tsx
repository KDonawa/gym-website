import AnchorLink from "react-anchor-link-smooth-scroll";
import { NavbarOptions, SelectedPage } from "@/shared/types";

type Props = {
  to: NavbarOptions;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

function Link({ to, selectedPage, setSelectedPage }: Props) {
  let id: SelectedPage;
  switch (to) {
    case "Home":
      id = SelectedPage.HOME;
      break;
    case "Contact Us":
      id = SelectedPage.CONTACT_US;
      break;
    case "Benefits":
      id = SelectedPage.BENEFITS;
      break;
    case "Our Classes":
      id = SelectedPage.OUR_CLASSES;
      break;
    default:
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _exhaustiveCheck: never = to;
      return null;
  }

  return (
    <AnchorLink
      className={`${
        selectedPage === id ? "text-primary-500" : ""
      } transition duration-500 hover:text-primary-300`}
      href={`#${id}`}
      onClick={() => setSelectedPage(id)}
    >
      {to}
    </AnchorLink>
  );
}

export default Link;
