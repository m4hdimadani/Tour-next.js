"use client";
import styles from "@/app/styles/profile.module.css";
import ButtonInfo from "@/components/atoms/ButtonInfo";
import EditProfile from "@/components/molcules/EditProfile";
import { useGetUserData } from "@/core/service/queries";
import { useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";

function Profile() {
  const [email, setEmail] = useState("");
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "",
    gender: "",
    nationalCode: "",
    birthDate: "",
  });
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const { data } = useGetUserData();
  const mobile = data?.data?.mobile;
  useEffect(() => {
    if (data?.data) {
      setEmail(data?.data?.email || "");
      setPersonalInfo({
        fullName: `${data?.data?.firstName || ""} ${
          data?.data?.lastName || ""
        }`.trim(),
        gender: data?.data?.gender || "",
        nationalCode: data?.data?.nationalCode || "",
        birthDate: data?.data?.birthDate || "",
      });
    }
  }, [data]);

  const handleEditModalClose = () => {
    setIsEditModalOpen(false);
  };
  
  const handleModalClose = () => {
    setIsOpenModal(false);
  };
  return (
    <div className={styles.container}>
      <div className={styles.boxOne}>
        <div className={styles.account}>
          <h2>اطلاعات حساب کاربری</h2>
        </div>
        <div className={styles.inBoxOne}>
          <div className={styles.number}>
            <p>شماره موبایل</p>
            <h4>{mobile}</h4>
          </div>
          <div className={styles.email}>
            <p>ایمیل</p>
            <h4> {email || "---"} </h4>
          </div>
          <div className={styles.edit} onClick={() => setIsOpenModal(true)}>
            {" "}
            {isOpenModal && (
              <div className={styles.modalWrapper} onClick={handleModalClose}>
                <div className={styles.modalBackdrop}></div>
                <div>
                  <EditProfile
                    email={email}
                    setEmail={setEmail}
                    mobile={mobile}
                    onClose={handleModalClose}
                    className={styles.modalContent}
                  />
                </div>
              </div>
            )}
            <CiEdit className={styles.CiEdit} />
            افزودن
          </div>
        </div>
      </div>
      <div className={styles.boxTow}>
        <div className={styles.account}>
          <h2> اطلاعات شخصی </h2>
        </div>
        <div className={styles.inBoxTow}>
          <div className={styles.Right}>
            <div className={styles.name}>
              <p>نام و نام خانوادگی</p>
              <h4>{personalInfo.fullName || "--"}</h4>
            </div>
            <div className={styles.male}>
              <p>جنسیت</p>
              <h4>{personalInfo.gender || "--"}</h4>
            </div>
          </div>
          <div className={styles.left}>
            <div className={styles.codeMale}>
              <p>کدملی</p>
              <h4>{personalInfo.nationalCode || "--"}</h4>
            </div>
            <div className={styles.bd}>
              <p>تاریخ تولد</p>
              <h4>{personalInfo.birthDate || "--"}</h4>
            </div>
          </div>
          <div
            className={styles.editTow}
            onClick={() => setIsEditModalOpen(true)}
          >
            <CiEdit className={styles.CiEdit} />
            ویرایش اطلاعات
          </div>
        </div>
        {isEditModalOpen && (
          <div className={styles.modalWrapper}>
            <div className={styles.modalBackdrop}></div>
            <ButtonInfo
              personalInfo={personalInfo}
              setPersonalInfo={setPersonalInfo}
              onClose={handleEditModalClose}
              className={styles.modalContent}
            />
          </div>
        )}
      </div>
      <div className={styles.boxThree}>
        <div className={styles.account}>
          <h2> اطلاعات شخصی </h2>
        </div>
        <div className={styles.inBoxThree}>
          <div className={styles.Right}>
            <div className={styles.bankShaba}>
              <p>شماره شبا</p>
              <h4>---</h4>
            </div>
            <div className={styles.bankCode}>
              <p>شماره حساب</p>
              <h4>---</h4>
            </div>
          </div>
          <div className={styles.left}>
            <div className={styles.numberBank}>
              <p>شماره کارت</p>
              <h4>---</h4>
            </div>
          </div>
          <div className={styles.editTow}>
            <CiEdit className={styles.CiEdit} />
            ویرایش اطلاعات
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
