"use client";

import { ThemeProvider } from "next-themes";


const ThemeProviderNext = ({children}) => {
    return (
      <ThemeProvider>
        {children}
      </ThemeProvider>
    );
};

export default ThemeProviderNext;