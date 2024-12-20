import Link from "next/link";
import { FaUser } from "react-icons/fa6";
import { RiSunFoggyFill } from "react-icons/ri";
import { TbTransformFilled } from "react-icons/tb";

export default function ProfileLayout({ children }) {
  return (
    <div>
      <ul>
        <li>
          <FaUser />
          <p>پروفایل</p>
        </li>
        <li>
          <Link href="/profile/my-tours">
            <RiSunFoggyFill />
            <p>تور های من</p>
          </Link>
        </li>
        <li>
          <Link href="/profile/transactions">
            <TbTransformFilled />
            <p>تراکنش ها</p>
          </Link>
        </li>
      </ul>
      <main>{children}</main>
    </div>
  );
}
