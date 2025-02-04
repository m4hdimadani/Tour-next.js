import { MdModeEditOutline } from "react-icons/md";
import styles from "../../app/styles/UserAccount.module.css";
import { convertToPersianNumber } from "../../core/utils/engToPersianNumber";

const UserAccount = ({
  userData,
  isEditing,
  setIsEditing,
  register,
  onSubmit,
}) => {
  return (
    <div className={styles.subContainer}>
      <div className={styles.topSide}>
        <div className={styles.rightSide}>
          <h2 className={styles.header}>اطلاعات حساب کاربری</h2>
          <div className={styles.fields}>
            <div className={styles.field}>
              {isEditing.index == 1 && !userData.mobile ? (
                <input
                  className={styles.input}
                  type="text"
                  {...register("mobile")}
                  placeholder="شماره موبایل"
                />
              ) : (
                <div className={styles.valueBox}>
                  <span className={styles.label}>شماره موبایل</span>
                  <span className={styles.value}>
                    {convertToPersianNumber(userData?.mobile)}
                  </span>
                </div>
              )}
            </div>
            <div className={styles.field}>
              {isEditing.index == 1 && !userData.email ? (
                <input
                  className={styles.input}
                  type="text"
                  {...register("email")}
                  placeholder=" ایمیل"
                />
              ) : (
                <div className={styles.valueBox}>
                  <span className={styles.label}>ایمیل </span>

                  <span className={styles.value}>
                    {convertToPersianNumber(userData?.email) || "-"}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className={styles.leftSide}>
          {isEditing.index != 1 && (
            <div className={styles.edit}>
              <MdModeEditOutline />
              <p onClick={() => setIsEditing({ index: 1 })}>افزودن </p>
            </div>
          )}
        </div>
      </div>
      {isEditing.index == 1 && (
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

export default UserAccount;
