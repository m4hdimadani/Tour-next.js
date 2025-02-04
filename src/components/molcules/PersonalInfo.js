import styles from "../../app/styles/PersonalInfo.module.css";
import { MdModeEditOutline } from "react-icons/md";

const PersonalInfo = ({
  userData,
  isEditing,
  setIsEditing,
  register,
  onSubmit,
}) => {
  const { firstName, nationalCode, gender, birthDate } = userData;
  return (
    <div className={styles.subContainer}>
      <div className={styles.topSide}>
        <div className={styles.rightSide}>
          <h2 className={styles.header}>اطلاعات شخصی</h2>
          <div className={styles.fields}>
            <div className={styles.field}>
              {isEditing.index == 2 && !firstName ? (
                <input
                  className={styles.input}
                  type="text"
                  {...register("firstName")}
                  placeholder="نام و نام خانوادگی"
                />
              ) : (
                <div className={styles.valueBox}>
                  <span className={styles.label}>نام و نام خانوادگی</span>

                  <span className={styles.value}>{firstName || "-"}</span>
                </div>
              )}
            </div>
            <div className={styles.field}>
              {isEditing.index == 2 && !nationalCode ? (
                <input
                  className={styles.input}
                  type="text"
                  {...register("nationalCode")}
                  placeholder="کدملی"
                />
              ) : (
                <div className={styles.valueBox}>
                  <span className={styles.label}>کدملی</span>
                  <span className={styles.value}>{nationalCode || "-"}</span>
                </div>
              )}
            </div>
            <div className={styles.field}>
              {isEditing.index == 2 && !gender ? (
                <input
                  className={styles.input}
                  type="text"
                  {...register("gender")}
                  placeholder="جنسیت"
                />
              ) : (
                <div className={styles.valueBox}>
                  <span className={styles.label}>جنسیت</span>
                  <span className={styles.value}>{gender || "-"}</span>
                </div>
              )}
            </div>
            <div className={styles.field}>
              {isEditing.index == 2 && !birthDate ? (
                <input
                  className={styles.input}
                  type="date"
                  {...register("birthDate")}
                />
              ) : (
                <div className={styles.valueBox}>
                  <span className={styles.label}>تاریخ تولد</span>

                  <span className={styles.value}>{birthDate || "-"}</span>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className={styles.leftSide}>
          {isEditing.index != 2 && (
            <div className={styles.edit}>
              <MdModeEditOutline />
              <p onClick={() => setIsEditing({ index: 2 })}>ویرایش اطلاعات</p>
            </div>
          )}
        </div>
      </div>
      {isEditing.index == 2 && (
        <div className={styles.buttons}>
          <button onClick={onSubmit} className={styles.button}>
            تایید
          </button>
          <button onClick={() => setIsEditing(false)} className={styles.button}>
            انصراف
          </button>
        </div>
      )}
    </div>
  );
};

export default PersonalInfo;
