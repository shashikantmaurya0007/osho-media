import { useEffect } from "react";
import { useLocation } from "react-router-dom";
const useDocumentTitle = () => {
  const location = useLocation();
  const title_ = location.pathname
    .split("/")
    .reduce((acc, curr) => acc + curr + "|", "");

  useEffect(() => {
    window.document.title = `oshoshare${title_}`;
  }, [location]);
};

export { useDocumentTitle };
