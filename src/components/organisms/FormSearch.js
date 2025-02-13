"use client";

import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import { LiaGlobeEuropeSolid } from "react-icons/lia";

import styles from "@/app/styles/FormSearch.module.css";
import { Controller, useForm } from "react-hook-form";
import { DatePicker } from "zaman";
import { useGetTours } from "@/core/service/queries";
import QueryString from "qs";
import { useEffect, useState } from "react";
import { DateToIso, flattenObject } from "@/core/utils/helpar";
import { useRouter } from "next/navigation";
import useQuery from "@/core/hook/query";

function FormSearch() {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const { getQuery } = useQuery();
  const { register, handleSubmit, control, reset } = useForm();
  const { data, isPending, refetch } = useGetTours(query);



  useEffect(() => {
    const originId = getQuery("originId");
    const destinationId = getQuery("destinationId");
    if (originId && destinationId) reset({ originId, destinationId });
  }, []);

  const submitHandler = (form) => {
    setQuery(flattenObject(form));
    const query = QueryString.stringify(flattenObject(form));
    router.push(`/?${query}`);
  };
  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit(submitHandler)}>
        <div className={styles.inForm}>
          <div style={{ position: "relative", flex: 1, marginRight: "10px" }}>
            <FaMapMarkerAlt />
            <select className={styles.selectOne} {...register("originId")}>
              <option>مبدا</option>
              <option value="1">تهران</option>
              <option value="2">سنندج</option>
              <option value="4">اصفهان</option>
            </select>
          </div>

          <div style={{ position: "relative", flex: 1, marginRight: "10px" }}>
            <LiaGlobeEuropeSolid />
            <select className={styles.selectTow} {...register("destinationId")}>
              <option className={styles.option}>مقصد</option>
              <option value="2">سنندج</option>
              <option value="3">مادرید</option>
              <option value="4">سلیمانیه</option>
              <option value="6">هولر</option>
              <option value="7">مازندران</option>
              <option value="8">تور افرود</option>
              <option value="9">ایتالیا</option>
            </select>
          </div>
          <div
            style={{
              position: "relative",
              flex: 1,
              marginRight: "10px",
            }}
          >
            <FaCalendarAlt />
            <Controller
              control={control}
              name="date"
              render={({ field: { onChange } }) => (
                <DatePicker
                  round="x2"
                  accentColor="#28A745"
                  onChange={(e) =>
                    onChange({
                      startDate: DateToIso(e.from),
                      endDate: DateToIso(e.to),
                    })
                  }
                  range
                />
              )}
            />
          </div>
          <div className={styles.button}>
            <input type="submit" value="جستوجو" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default FormSearch;
