"use client";

import { useGetUserData } from "@/core/service/queries";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Circles } from "react-loader-spinner";

function AuthProvider({ children }) {
  const router = useRouter();
  const { isPending, data } = useGetUserData();

  useEffect(() => {
    if (!isPending && !data?.data) router.push("/");
  }, [isPending]);

  if (isPending)
    return (
      <div>
        {" "}
        <Circles
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="circles-loading"
          wrapperStyle={{
            position: "relative",
            right: "900px",
            marginBottom: "100px",
          }}
          wrapperClass=""
          visible={true}
        />
      </div>
    );

  return children;
}

export default AuthProvider;
