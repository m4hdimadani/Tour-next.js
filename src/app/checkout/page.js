"use client";

import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import Footer from "@/components/organisms/Footer";
import Header from "@/components/organisms/Header";
import { useGetBasket } from "@/core/service/queries";
import styles from "@/app/styles/checkout.module.css";


import { useCheckout } from "@/core/service/mutations";
import EmptyCart from "@/components/molcules/Emptycart";
import PassengerInfo from "@/components/organisms/PassengerInfo";
import TourInfo from "@/components/organisms/TourInfo";
import { useRouter } from "next/navigation";

function CheckOut() {
  const router= useRouter()
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm();
  const { mutate } = useCheckout();
  const { data, isLoading, isError } = useGetBasket();

  if (!data) return <EmptyCart />;

  const onSubmit = (data) => {
    mutate(data, {
      onSuccess: (response) => {
        toast.success(response.data.message);
        router.push("/");
      },
    });
  };

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.content}>
          <PassengerInfo
            register={register}
            control={control}
            setValue={setValue}
          />
          <TourInfo
            data={data?.data}
            isError={isError}
            isLoading={isLoading}
            onSubmit={handleSubmit(onSubmit)}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CheckOut;
