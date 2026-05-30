# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


{isOpen && (
        <div className="md:hidden absolute top-[100px] left-0 w-full bg-black/100 backdrop-blur-md z-20 p-6 flex flex-col gap-6">
          {/* Page Links */}
          <NavLink
            to="/discover"
            onClick={() => setIsOpen(false)}
            className="flex justify-center items-center text-[#ffffff] font-bold text-lg w-full"
          >
            Discover Events
          </NavLink>
          <NavLink
            to="/about-us"
            onClick={() => setIsOpen(false)}
            className="flex justify-center items-center text-[#ffffff] font-bold text-lg w-full"
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact-us"
            onClick={() => setIsOpen(false)}
            className="flex justify-center items-center text-[#ffffff] font-bold text-lg w-full"
          >
            Contact
          </NavLink>
        </div>
      )}