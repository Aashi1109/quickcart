import { useMediaQuery } from "@/hooks";
import { getProviders, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import DesktopAuthActions from "./DesktopAuthActions";
import MobileAuthActions from "./MobileAuthActions";

const AuthActions = () => {
  const { data: session } = useSession();

  const [providers, setProviders] = useState<any>(null);

  useEffect(() => {
    const providersSet = async () => {
      const resp = await getProviders();
      setProviders(resp);
    };

    providersSet();
  }, []);

  if (!session) {
    return null;
  }

  return (
    <>
      <DesktopAuthActions session={session} providers={providers} />
      <MobileAuthActions session={session} providers={providers} />
    </>
  );
};

export default AuthActions;
