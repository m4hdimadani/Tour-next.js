import styles from "../../app/styles/BankAccount.module.css";
import { MdModeEditOutline } from "react-icons/md";

const BankAccount = ({
  userData,
  isEditing,
  setIsEditing,
  register,
  onSubmit,
}) => {
  console.log("hiiii", userData);
  return (
    <div className={styles.subContainer}>
      <div className={styles.topSide}>
        <div className={styles.rightSide}>
          <h2 className={styles.header}>اطلاعات حساب بانکی</h2>

          <div className={styles.fields}>
            <div className={styles.field}>
              {isEditing.index == 3 && !userData.payment["shaba_code"] ? (
                <input
                  className={styles.input}
                  type="text"
                  {...register("payment.shaba_code")}
                  placeholder="شماره شبا"
                />
              ) : (
                <div className={styles.valueBox}>
                  <span className={styles.label}>شماره شبا</span>

                  <span className={styles.value}>
                    {userData?.payment["shaba_code"] || "-"}
                  </span>
                </div>
              )}
            </div>
            <div className={styles.field}>
              {isEditing.index == 3 && !userData.payment["debitCard_code"] ? (
                <input
                  className={styles.input}
                  type="text"
                  {...register("payment.debitCard_code")}
                  placeholder="شماره کارت"
                />
              ) : (
                <div className={styles.valueBox}>
                  <span className={styles.label}>شماره کارت</span>

                  <span className={styles.value}>
                    {userData?.payment["debitCard_code"] || "-"}
                  </span>
                </div>
              )}
            </div>
            <div className={styles.field}>
              {isEditing.index == 3 && !userData.payment.accountIdentifier ? (
                <input
                  className={styles.input}
                  type="text"
                  {...register("payment.accountIdentifier")}
                  placeholder="شماره حساب"
                />
              ) : (
                <div className={styles.valueBox}>
                  <span className={styles.label}>شماره حساب</span>

                  <span className={styles.value}>
                    {userData?.payment.accountIdentifier || "-"}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className={styles.leftSide}>
          {isEditing.index != 3 && (
            <div className={styles.edit}>
              <MdModeEditOutline />
              <p onClick={() => setIsEditing({ index: 3 })}>ویرایش اطلاعات</p>
            </div>
          )}
        </div>
      </div>

      {isEditing.index == 3 && (
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

export default BankAccount;
