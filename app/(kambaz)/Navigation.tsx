"use client";

import { AiOutlineDashboard } from "react-icons/ai";
import { FaRegCircleUser, FaCircleQuestion } from "react-icons/fa6";
import { GrBook } from "react-icons/gr";
import { BiCalendar } from "react-icons/bi";
import { CiInboxIn } from "react-icons/ci";
import { MdOutlineAssignment } from "react-icons/md";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function KambazNavigation() {
    const pathname = usePathname();
    const isActive = (prefix: string) =>
        pathname === prefix || pathname.startsWith(`${prefix}/`);

    return (
        <nav
            id="wd-kambaz-navigation"
            className="fixed bottom-0 top-0 z-20 hidden w-[120px] bg-black md:block"
        >
            <Link
                href="/account"
                id="wd-account-link"
                className={`block py-3 text-center text-sm no-underline ${
                    isActive("/account") ? "bg-white text-red-600" : "bg-black text-white"
                }`}
            >
                <FaRegCircleUser
                    className={`inline-block text-3xl ${
                        isActive("/account") ? "text-red-600" : "text-white"
                    }`}
                />
                <br />
                Account
            </Link>
            <Link
                href="/dashboard"
                id="wd-dashboard-link"
                className={`block py-3 text-center text-sm no-underline ${
                    isActive("/dashboard") ? "bg-white text-red-600" : "bg-black text-white"
                }`}
            >
                <AiOutlineDashboard className="inline-block text-3xl text-red-600" />
                <br />
                Dashboard
            </Link>
            <Link
                href="/dashboard"
                id="wd-course-link"
                className={`block py-3 text-center text-sm no-underline ${
                    isActive("/courses") ? "bg-white text-red-600" : "bg-black text-white"
                }`}
            >
                <GrBook className="inline-block text-3xl text-red-600" />
                <br />
                Courses
            </Link>
            <Link
                href="/calendar"
                id="wd-calendar-link"
                className={`block py-3 text-center text-sm no-underline ${
                    isActive("/calendar") ? "bg-white text-red-600" : "bg-black text-white"
                }`}
            >
                <BiCalendar className="inline-block text-3xl text-red-600" />
                <br />
                Calendar
            </Link>
            <Link
                href="/inbox"
                id="wd-inbox-link"
                className={`block py-3 text-center text-sm no-underline ${
                    isActive("/inbox") ? "bg-white text-red-600" : "bg-black text-white"
                }`}
            >
                <CiInboxIn className="inline-block text-3xl text-red-600" />
                <br />
                Inbox
            </Link>
            <Link
                href="/labs"
                id="wd-labs-link"
                className={`block py-3 text-center text-sm no-underline ${
                    isActive("/labs") ? "bg-white text-red-600" : "bg-black text-white"
                }`}
            >
                <MdOutlineAssignment className="inline-block text-3xl text-red-600" />
                <br />
                Labs
            </Link>
            <Link
                href="/labs"
                id="wd-ai-nav-help"
                className="block py-3 text-center text-sm no-underline bg-black text-white"
            >
                <FaCircleQuestion className="inline-block text-3xl text-red-600" />
                <br />
                Help
            </Link>
        </nav>
    );
}
