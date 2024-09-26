'use client'
import Link from "next/link";
import NavItem from "../NavItem/NavItem";
import Btn from "../Btn/Btn";
import sadiAvatar from "../../../assets/images/sadi.png";
import Image from "next/image";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const pathName = usePathname()
  const authPage = pathName === '/sign-in' || pathName === '/sign-up'
  if(authPage) return ''
  return (
    <header className="bg-white">
      <div className="container mx-auto px-4 lg:px-0">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <a className="block text-teal-600" href="#">
              Echohed Dreams
            </a>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                <NavItem dLink="/" label="Home" />
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              {/* Login */}
              {/* <Link href='/create-post'>
         <Btn title=' Write a Blog'/>
         </Link> */}
              {/* Join */}
              <Link href="/sign-in">
                <Btn title="Join" />
              </Link>
              <Image
                src={sadiAvatar}
                width={100}
                height={100}
                alt="Hammad Sadi"
                className="w-10 h-10"
              />

              {/* <div className="hidden sm:flex">
            <a
              className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600"
              href="#"
            >
              Register
            </a>
          </div> */}
            </div>

            <div className="block md:hidden">
              <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
