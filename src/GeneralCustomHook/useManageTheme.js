import { useEffect } from "react";
import { useSelector } from "react-redux";

const useManageTheme = () => {
  const themeSelected = useSelector((state) => state.theme.themeselected);

  useEffect(() => {
    if (themeSelected === "light") {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    } else {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    }
  }, [themeSelected]);
};

export { useManageTheme };
