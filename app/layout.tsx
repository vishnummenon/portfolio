"use client"

import { FC, ReactNode, useCallback, useEffect, useState } from 'react';
import Navbar from './components/Navbar';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {

  const [isVisible, setIsVisible] = useState(true);

  const handleScroll = useCallback(() => {
    const scroll = window.scrollY;
    
    const shouldBeVisible = scroll <= 40;

    setIsVisible(shouldBeVisible);
}, [isVisible]);


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
     <html lang="en" suppressHydrationWarning>
     <body>
      {isVisible && <Navbar />}
       <main>{children}</main>
     </body>
   </html>
  );
};

export default Layout;
