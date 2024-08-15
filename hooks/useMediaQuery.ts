import { useState, useEffect, useMemo } from "react";

function useMediaQuery(query: string) {
  // Check if window is available (i.e., the hook is running on the client side)
  const isClient = typeof window !== "undefined";

  // Create a mediaQueryList only if window is available
  const mediaQueryList = useMemo(() => {
    return isClient ? window.matchMedia(query) : null;
  }, [query, isClient]);

  // Initialize matches state only on the client side
  const [matches, setMatches] = useState<boolean>(() => {
    return mediaQueryList?.matches ?? false;
  });

  useEffect(() => {
    if (!mediaQueryList) return;

    const updateMatches = () => {
      setMatches(mediaQueryList.matches);
    };

    updateMatches(); // Set the initial value
    mediaQueryList.addEventListener("change", updateMatches);

    return () => {
      mediaQueryList.removeEventListener("change", updateMatches);
    };
  }, [mediaQueryList]);

  return matches;
}

export default useMediaQuery;
