import { MdOutlineManageAccounts } from "react-icons/md";
import { FaShieldHeart } from "react-icons/fa6";
import { BiCheckShield } from "react-icons/bi";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { HiArrowRight } from "react-icons/hi2";

import img from "../assets/commguide.png";

export const gettingStarted = [
  {
    heading: "Getting Started",
    para: "New to The Commons? Learn how to navigate your local community hub, join groups, and post your first request.",
    icon: MdOutlineRocketLaunch,
    text: "Explore Basics",
    icon2: HiArrowRight,
  },
];

export const safety = [
  {
    heading: "Safety & Privacy",
    para: "Your trust is our priority. Discover how we protect your data and maintain a safe environment.",
    icon: FaShieldHeart,
    icon2: BiCheckShield,
  },
];

export const accountSet = [
  {
    headings: "Account Management",
    para: ["Reset Password", "Notification Settings", "Profile Verification"],
    icon:MdOutlineManageAccounts
  },
];

export const commGuidelines = [
  {
    image: img,
    heading: "Community Guidelines",
    para: "Help us maintain a respectful and vibrant community by following our shared values and conduct rules.",
    reltext: "The Standard",
    btnText: "Read Guidelines",
  },
];
