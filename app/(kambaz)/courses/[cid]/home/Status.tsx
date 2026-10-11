import { FaCheckCircle } from "react-icons/fa";
import { MdDoNotDisturbAlt } from "react-icons/md";
import { FaFileImport } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { IoAnalytics } from "react-icons/io5";
import { MdOutlineAnnouncement } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";
import { FaBolt } from "react-icons/fa";

export default function CourseStatus() {
    return (
        <div id="wd-course-status">
            <h2 className="mb-3 text-xl font-semibold">Course Status</h2>
            <div className="flex gap-1">
                <button
                    type="button"
                    className="inline-flex min-w-0 flex-1 items-center justify-center rounded border border-neutral-300 bg-white px-1.5 py-1.5 text-xs"
                >
                    <MdDoNotDisturbAlt className="me-1 shrink-0 text-base" /> Unpublish
                </button>
                <button
                    type="button"
                    className="inline-flex min-w-0 flex-1 items-center justify-center rounded bg-green-600 px-1.5 py-2 text-white hover:bg-green-700"
                >
                    <FaCheckCircle className="me-1 shrink-0 text-base" /> Publish
                </button>
            </div>
            <button 
                type="button"
                className="mb-1 flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm"
            >
                <FaFileImport className="me-1 shrink-0 text-base" /> Import Existing Content
            </button>
            <br />
            <button 
                type="button"
                className="mb-1 flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm"
            >
                <FaFileImport className="me-1 shrink-0 text-base" /> Import from Commons
            </button>
            <br />
            <button 
                type="button"
                className="mb-1 flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm"
            >
                <FaHome className="me-1 shrink-0 text-base" /> Choose Home Page
            </button>
            <br />
            <button 
                type="button"
                className="mb-1 flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm"
            >
                <IoAnalytics className="me-1 shrink-0 text-base" /> View Course Stream
            </button>
            <br />
            <button 
                type="button"
                className="mb-1 flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm"
            >
                <MdOutlineAnnouncement className="me-1 shrink-0 text-base" /> New Announcement
            </button>
            <br />
            <button 
                type="button"
                className="mb-1 flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm"
            >
                <IoAnalytics className="me-1 shrink-0 text-base" /> New Analytics
            </button>
            <br />
            <button 
                type="button"
                className="mb-1 flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm"
            >
                <FaRegBell className="me-1 shrink-0 text-base" /> View Course Notifications
            </button>
            <br />
            <button
                id="wd-ai-status"
                type="button"
                className="mb-1 flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm"
            >
                <FaBolt className="me-1 shrink-0 text-base" /> Sample action
            </button>
        </div>
    );
}