import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function useEnsureAuth() {
  const router = useRouter();

  const { data: session } = useSession();
  useEffect(() => {
    if (process.env.NODE_ENV !== "development" && !session) {
      router.push("/SignIn");
    }
  }, [session]);
}
