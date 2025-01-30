"use client";

import { useAddToBasket } from "@/core/service/mutations";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import SendOtp from "./SendOtp";
import { getCookie } from "@/core/utils/cookie";
import { useState } from "react";
import Auth from "../organisms/Auth";
import CheckOtp from "./CheckOtp";

function ReserveButton({ id }) {
  const { mutate, isPending } = useAddToBasket();
  const router = useRouter();
  const [isOpenModal, setIsOpenModal] = useState(false);

  const cartHandler = () => {
    if (isPending) return;

    const cookie = getCookie("accessToken");
    if (!cookie) {
      setIsOpenModal(true);
      return;
    }

    mutate(id, {
      onSuccess: (data) => {
        toast.success(data?.data?.message);
        router.push("/checkout");
      },
      onError: () => {
        toast.error("لطفا ثبت نام یا ورود کنید");
        router.push("/");
      },
    });
  };

  return (
    <div>
      <button onClick={cartHandler}>رزرو و خرید</button>
    </div>
  );
}

export default ReserveButton;
