import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, title }) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`link ${
        pathname === href ? "active" : ""
      } block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-base rounded md:p-0 hover:text-white`}
      style={{
        borderBottom: pathname === href ? "2px solid #f9eb37" : "none",
        borderRadius: 0,
      }}
    >
      {title}
    </Link>
  );
};

export default NavLink;
