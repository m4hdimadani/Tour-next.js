"use client";

import { FaUserAlt } from "react-icons/fa";
import { Calendar, CalendarProvider } from "zaman";
import { useState } from "react";
import Select from "react-select";

import styles from "../../app/styles/PassengerInfo.module.css";
import { Controller } from "react-hook-form";

import React from "react";

function PassengerInfo({ register, control, setValue }) {
  const [calendarValue, setCalendarValue] = useState();
  const [showCalendar, setShowCalendar] = useState(false);

  const genders = [
    { value: "man", label: "مرد" },
    { value: "woman", label: "زن" },
    { value: "other", label: "سایر" },
  ];

  const customStyles = {
    control: (provided) => ({
      ...provided,
      height: "50px",
      minHeight: "50px",
      width: "257px",
      marginTop: "23px",
      borderRadius: " 5px",
      color: "#00000080",
      fontSize: "14px",
      fontWeight: "400",
      borderColor: "#00000080",
      "&:hover": {
        borderColor: "#00000080",
      },
    }),
  };

  return (
    <div className={styles.passengerInfo}>
      <div className={styles.titleBox}>
        <FaUserAlt />
        <h2 className={styles.title}>مشخصات مسافر</h2>
      </div>
      <form className={styles.form}>
        <div className={styles.inputTop}>
          <input
            className={styles.input}
            type="text"
            {...register("fullName", { required: "ورود نام الزامی است" })}
            placeholder="نام و نام خانوادگی"
          />
          <input
            className={styles.input}
            type="text"
            {...register("nationalCode", {
              required: "کدملی خود را وارد کنید",
            })}
            placeholder="کدملی"
          />
          <input
            className={styles.input}
            type="text"
            {...register("birthDate", { required: "تاریخ تولد را وارد کنید" })}
            value={calendarValue?.toLocaleString("fa-IR") || ""}
            readOnly
            onClick={() => setShowCalendar((prev) => !prev)}
            placeholder="تاریخ تولد"
          />
          {showCalendar && (
            <div className={styles.calendarContainer}>
              <CalendarProvider
                locale="fa"
                direction="rtl"
                defaultValue={new Date()}
                onClick={(e) => e.preventDefault()}
              >
                <Calendar
                  defaultValue={calendarValue}
                  onChange={(e) => {
                    setCalendarValue(new Date(e.value));
                    setValue("birthDate", new Date(e.value).toISOString());
                    setShowCalendar(false);
                  }}
                />
              </CalendarProvider>
            </div>
          )}
        </div>
        <Controller
          control={control}
          name="gender"
          render={({ field: { onChange, value } }) => (
            <Select
              styles={customStyles}
              options={genders}
              onChange={(selectedOption) => {
                onChange(selectedOption);
              }}
              placeholder="جنسیت"
              components={{ IndicatorSeparator: null }}
              value={value}
            />
          )}
        />
      </form>
    </div>
  );
}

export default PassengerInfo;
