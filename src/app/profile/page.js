"use client";
import styles from "@/app/styles/profile.module.css";

import BankAccount from "@/components/molcules/BankAccount";
import PersonalInfo from "@/components/molcules/PersonalInfo";
import UserAccont from "@/components/molcules/UserAccont";
import { useAddProfile } from "@/core/service/mutations";
import { useGetUserData } from "@/core/service/queries";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

function Profile() {
  const { data } = useGetUserData();
  const [isEditing, setIsEditing] = useState({ index: 0 });
  const [userData, setUserData] = useState({
    mobile: data.data.mobile || "",
    email: data.data.email || "",
    firstName: data.data.firstName || "",
    lastName: data.data.lastName || "",
    gender: data.data.gender || "",
    birthDate: data.data.birthDate || "",
    nationalCode: data.data.nationalCode || "",
    payment: {
      shaba_code: data.data.shaba_code || "",
      debitCard_code: data.data.debitCard_code || "",
      accountIdentifier: data.data.accountIdentifier || "",
    },
  });

  const { mutate } = useAddProfile();
  useEffect(() => {
    mutate(userData, {
      onError: (error) => console.log(error.message),
    });
  }, [userData]);

  function onSubmit(formData) {
    setUserData((data) => ({ ...data, ...formData }));
    setIsEditing(false);
  }

  const { register, handleSubmit } = useForm();

  return (
    <div className={styles.container}>
      <UserAccont
        userData={userData}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        register={register}
        onSubmit={handleSubmit(onSubmit)}
      />
      <PersonalInfo
        userData={userData}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        register={register}
        onSubmit={handleSubmit(onSubmit)}
      />
      <BankAccount
        userData={userData}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        register={register}
        onSubmit={handleSubmit(onSubmit)}
      />
    </div>
  );
}

export default Profile;
