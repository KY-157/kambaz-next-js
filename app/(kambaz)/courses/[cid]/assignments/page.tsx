"use client";

import * as client from "../../client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { FaPlus, FaSearch } from "react-icons/fa";
import AssignmentItem from "./AssignmentItem";
import { useAssignmentsStore } from "@/app/(kambaz)/store/assignmentsStore";
import { useAccountContext } from "../../../account/AccountContext";

export default function Assignments() {
    const setAssignments = useAssignmentsStore((state) => state.setAssignments);
    const deleteAssignment = useAssignmentsStore((state) => state.deleteAssignment);
    const { cid } = useParams();
    const courseId = cid as string;
    const assignments = useAssignmentsStore((state) => state.assignments);
    const { currentUser } = useAccountContext();
    const isFaculty = currentUser?.role === "FACULTY";
    
    useEffect(() => {
        const load = async () => {
            setAssignments(await client.findAssignmentsForCourse(courseId));
        };
        load();
    }, [courseId, setAssignments]);
    const onDeleteAssignment = async (assignmentId: string) => {
        await client.deleteAssignment(assignmentId);
        deleteAssignment(assignmentId);
    };
    return (
        <div id="wd-assignments">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                <div className="relative">
                    <FaSearch className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-neutral-500" />
                    <input 
                        placeholder="Search for Assignments"
                        id="wd-assignments-search-input"
                        className="rounded border py-1.5 pr-3 pl-9 text-sm"
                    />
                </div>
                {isFaculty && (
                <div className="flex gap-2">
                    <button
                        id="wd-add-assignment-group"
                        type="button"
                        className="inline-flex items-center gap-1 rounded rounded border px-3 py-1.5 text-sm"
                    >
                        <FaPlus /> Group
                    </button>
                    <Link
                        id="wd-add-assignment"
                        href={`/courses/${cid}/assignments/new`}
                        className="inline-flex items-center gap-1 rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white no-underline"
                    >
                        <FaPlus /> Assignment
                    </Link>
                </div>
                )}
            </div>
            <h3 
                id="wd-assignments-title"
                className="mb-3 flex items-center justify-between rounded bg-neutral-200 p-3 text-lg"
            >
                <span>ASSIGNMENTS 40% of Total</span>
                <button type="button" className="rounded border bg-white px-2 py-0.5 text-sm">
                    <FaPlus />
                </button>
            </h3>
            <ul id="wd-assignment-list" className="m-0 list-none p-0">
                {assignments.map((assignment) => (
                    <AssignmentItem
                        key={assignment._id}
                        cid={courseId}
                        canEdit={isFaculty}
                        aid={assignment._id}
                        title={assignment.title}
                        onDeleteAssignment={onDeleteAssignment}
                        details={`Multiple Modules | Not available until ${assignment.available} | Due ${assignment.due} | ${assignment.points} pts`}
                    />
                ))}
            </ul>      
        </div>
    );
}