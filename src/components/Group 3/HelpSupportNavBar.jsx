import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import { RxHamburgerMenu } from "react-icons/rx";


const HelpSupportNavBar = () => {
      const [open, setOpen] = React.useState(false);

      const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
      };

      const DrawerList = (
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
        >
          <List className="flex flex-col justify-center items-center gap-10">
            <div className="mt-15 flex flex-col text-[#014433] items-center gap-10  text-[16px] font-medium ">
              <div className="flex flex-col justify-between items-center gap-8 text-[14px] font-medium leading-5 tracking-[-0.35px] text-[#56615F]">
                <p>Landing</p>
                <p>About</p>
                <p>Services</p>
                <p>Contact</p>
              </div>
              <div className="flex justify-center items-center w-23.5 h-9 rounded-[9999px] px-6 py-2 bg-linear-to-r from-[#1d6a63] to-[#075d57]">
                <button className="w-full h-full text-[14px] font-bold text-[#e2fffa] text-center leading-5 ">
                  Sign In
                </button>
              </div>
            </div>
          </List>
        </Box>
      );
  return (
    <div>
      <div className="max-w-7xl mx-auto p-5 bg-[#F6FAF8] flex justify-between items-center">
        <div>
          <h1 className="text-[#1D6A63] font-bold text-[24px] leading-9 tracking-[-1.2px]">
            The Commons
          </h1>
        </div>
        <div className="hidden md:flex justify-between items-center gap-8 text-[14px] font-medium leading-5 tracking-[-0.35px] text-[#56615F]">
          <p>Landing</p>
          <p>About</p>
          <p>Services</p>
          <p>Contact</p>
        </div>
        <div className="hidden md:flex justify-center items-center w-23.5 h-9 rounded-[9999px] px-6 py-2 bg-linear-to-r from-[#1d6a63] to-[#075d57]">
          <button className="w-full h-full text-[14px] font-bold text-[#e2fffa] text-center leading-5 ">
            Sign In
          </button>
        </div>
        <div className="md:hidden">
          <Button onClick={toggleDrawer(true)}>
            <RxHamburgerMenu size={35} color="#075d57" />
          </Button>
          <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
            {DrawerList}
          </Drawer>
        </div>
      </div>
    </div>
  );
};

export default HelpSupportNavBar;
