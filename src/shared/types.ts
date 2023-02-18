export type NavbarOptions = "Home" | "Benefits" | "Our Classes" | "Contact Us";

export enum SelectedPage {
  HOME = "home",
  BENEFITS = "benefits",
  OUR_CLASSES = "our-classes",
  CONTACT_US = "contact-us",
}

export type BenefitType = {
  icon: JSX.Element;
  title: string;
  description: string;
};
