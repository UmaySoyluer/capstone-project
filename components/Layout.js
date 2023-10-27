import useWindowDimensions from "@/hooks/useWindowDimensions";
import NavigationDesktop from "./desktop/NavigationDesktop";
import NavigationMobile from "./mobile/NavigationMobile";

export default function Layout({ children }) {
  const { width } = useWindowDimensions();
  return (
    <>
      {width <= 810 && <NavigationMobile />}
      {width > 810 && <NavigationDesktop />}
      {children}
    </>
  );
}
