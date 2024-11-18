import React from 'react';
import "./globals.css";
import Navigation from "./components/Navigation";

interface NavLink {
  name: string;
  href: string;
}

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  const navLinks: NavLink[] = [
    {
      name: "Login",
      href: "/login"
    },
    {
      name: "Register",
      href: "/register"
    },
    {
      name: "Forgot Password",
      href: "/forgot-password"
    },
    {
      name: "Notes Page",
      href: "/notes-page"
    },
  ];

  const siteName = "Tec Notes"; // Add your site name here

  return (
    <html lang="en">
      <head>
        <title>{siteName}</title>
        <link rel="icon" href="/logo.png" /> 
      </head>
      <body>
        <Navigation navLinks={navLinks} />
        {children}
      </body>
    </html>
  );
}

export default RootLayout;