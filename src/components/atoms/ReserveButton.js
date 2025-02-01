"use client";

import { useAddToBasket } from "@/core/service/mutations";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

function ReserveButton({ id }) {
  const { mutate, isPending } = useAddToBasket();
  const router = useRouter();

  const cartHandler = () => {
    if (isPending) return;

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
