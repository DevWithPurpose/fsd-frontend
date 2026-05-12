import { MdOutlineManageAccounts } from "react-icons/md";
import { FaShieldHeart } from "react-icons/fa6";
import { BiCheckShield } from "react-icons/bi";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { HiArrowRight } from "react-icons/hi2";
import { MdOutlineSupportAgent } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
import { BsChatLeftText } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";

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
    icon: MdOutlineManageAccounts,
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

export const faq = [
  {
    question: "How do I offer my services to neighbors?",
    icon: MdKeyboardArrowDown,
  },
  {
    question: "Is there a cost to use The Commons?",
    icon: MdKeyboardArrowDown,
  },
  {
    question: "How are community members verified?",
    icon: MdKeyboardArrowDown,
  },
  {
    question: "What do I do if I feel unsafe?",
    icon: MdKeyboardArrowDown,
  },
];

export const needHelp = [
  {
    icon: MdOutlineSupportAgent,
    heading: "Still need a hand?",
    para: "If you couldn't find what you're looking for, our community advocates are here to help you personally. We typically respond within 24 hours.",
    btnTxt: "Contact Support",
    email: "support@thecommons.org",
    site: "Live Chat (Mon-Fri)",
    iconEmail: MdOutlineMailOutline,
    iconSite: BsChatLeftText,
  },
];
