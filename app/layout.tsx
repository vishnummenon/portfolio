import { FC, ReactNode, useState } from 'react';
import Navbar from './components/Navbar';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {

  return (
     <html lang="en" suppressHydrationWarning>
     <body>
      <Navbar />
       <main>{children}</main>
     </body>
   </html>
  );
};

export default Layout;
