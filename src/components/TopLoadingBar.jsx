import { useEffect } from "react";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { useLocation } from "react-router-dom";

// Configure NProgress
NProgress.configure({ showSpinner: false });

const TopLoadingBar = () => {
  const location = useLocation();

  useEffect(() => {
    NProgress.start();
    const timer = setTimeout(() => NProgress.done(), 500); // Delay for smooth effect
    return () => clearTimeout(timer);
  }, [location.pathname]); // Runs on route change

  return null; // This component doesn't render anything
};

export default TopLoadingBar;
