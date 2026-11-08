"use client";

import { useState } from "react";
import Link from "next/link";
import { FaFileAlt, FaTrash } from "react-icons/fa";
import { useAssignmentsStore } from "../../../store/assignmentsStore";

export default function AssignmentItem({
    cid,
    canEdit,
    aid,
    title,
    details,
}: {
    cid: string;
    canEdit: boolean;
    aid: string;
    title: string;
    details: string;
}) {
    const deleteAssignment = useAssignmentsStore((state) => state.deleteAssignment);
    const [confirming, setConfirming] = useState(false);

    return (
        <li className="wd-assignment-list-item mb-3 flex items-start gap-3 border border-neutral-300 border-l-[3px] border-l-green-600 bg-white p-3">
            <FaFileAlt className="mt-1 shrink-0 text-xl text-green-700" />
            <div className="grow">
                <Link
                    href={`/courses/${cid}/assignments/${aid}`}
                    className="wd-assignment-link font-semibold text-neutral-900 no-underline"
                >
                    {title}
                </Link>
                <div className="mt-1 text-sm text-neutral-600">{details}</div>
            </div>
            {canEdit && (
                <FaTrash
                    className="wd-delete-assignment mt-1 shrink-0 cursor-pointer text-red-600"
                    title="Delete assignment"
                    onClick={() => setConfirming(true)}
                />
            )}
            {canEdit && confirming && (
                <div
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby={`wd-delete-title-${aid}`}
                    className="wd-delete-dialog fixed inset-0 z-50 flex items-center justify-center bg-black/40"
                >
                    <div className="w-full max-w-sm rounded bg-white p-5 shadow-lg">
                        <h4 id={`wd-delete-title-${aid}`} className="mb-2 text-lg font-semibold">
                            Delete assignment
                        </h4>
                        <p className="mb-4 text-sm">
                            Are you sure you want to remove the assignment &quot;{title}&quot;?
                        </p>
                        <div className="flex justify-end gap-2">
                            <button
                                type="button"
                                id="wd-delete-no"
                                onClick={() => setConfirming(false)}
                                className="rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm"
                            >
                                No
                            </button>
                            <button
                                type="button"
                                id="wd-delete-yes"
                                onClick={() => {
                                    deleteAssignment(aid);
                                    setConfirming(false);
                                }}
                                className="rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
                            >
                                Yes
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </li>
    );
}
