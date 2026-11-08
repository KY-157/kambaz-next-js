"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useAssignmentsStore } from "../../../store/assignmentsStore";
import { useAccountContext } from "../../../account/AccountContext";

const inputClass =
    "block w-full rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm";

export default function AssignmentEditor() {
    const { cid, aid } = useParams();
    const router = useRouter();
    const isNew = aid === "new";
    const existing = useAssignmentsStore((state) =>
        state.assignments.find((a) => a._id === aid && a.course === cid),
    );
    const addAssignment = useAssignmentsStore((state) => state.addAssignment);
    const updateAssignment = useAssignmentsStore((state) => state.updateAssignment);

    const [title, setTitle] = useState(existing?.title ?? "");
    const [description, setDescription] = useState(existing?.description ?? "");
    const [points, setPoints] = useState(String(existing?.points ?? 100));
    const [due, setDue] = useState(existing?.due ?? "");
    const [available, setAvailable] = useState(existing?.available ?? "");
    const [until, setUntil] = useState(existing?.until ?? "");

    const back = `/courses/${cid}/assignments`;

    const { currentUser } = useAccountContext();
    const isFaculty = currentUser?.role === "FACULTY";

    const save = () => {
        if (!isFaculty) return;
        const pts = Number(points) || 0;
        if (isNew) {
            addAssignment({
                title: title.trim() || "New Assignment",
                course: String(cid),
                description,
                points: pts,
                due,
                available,
                until,
            });
        } else if (existing) {
            updateAssignment({
                ...existing,
                course: String(cid),
                title,
                description,
                points: pts,
                due,
                available,
                until,
            });
        }
        router.push(back);
    };

    return (
        <fieldset id="wd-assignments-editor" disabled={!isFaculty} className="border-0 p-0">
            <label htmlFor="wd-name" className="text-lg">
                Assignment Name
            </label>
            <input
                id="wd-name"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className={inputClass}
            />
            <textarea
                id="wd-description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={8}
                className={`${inputClass} mt-3 font-sans`}
            />
            <div className="mt-4 ml-auto grid max-w-xl grid-cols-[auto_1fr] items-center gap-x-4 gap-y-4">
                <label htmlFor="wd-points" className="text-right text-sm">
                    Points
                </label>
                <input
                    id="wd-points"
                    type="number"
                    min={0}
                    value={points}
                    onChange={(e) => setPoints(e.target.value)}
                    className={inputClass}
                />
                <label htmlFor="wd-due-date" className="text-right text-sm">
                    Due
                </label>
                <input
                    id="wd-due-date"
                    type="date"
                    value={due}
                    onChange={(e) => setDue(e.target.value)}
                    className={inputClass}
                />
                <label htmlFor="wd-available-from" className="text-right text-sm">
                    Available from
                </label>
                <input
                    id="wd-available-from"
                    type="date"
                    value={available}
                    onChange={(e) => setAvailable(e.target.value)}
                    className={inputClass}
                />
                <label htmlFor="wd-available-until" className="text-right text-sm">
                    Available until
                </label>
                <input
                    id="wd-available-until"
                    type="date"
                    value={until}
                    onChange={(e) => setUntil(e.target.value)}
                    className={inputClass}
                />
            </div>
            <div className="mt-6 flex justify-end gap-2">
                <Link
                    href={back}
                    id="wd-cancel"
                    className="rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm no-underline"
                >
                    Cancel
                </Link>
                {isFaculty && (
                    <button
                        type="button"
                        id="wd-save"
                        onClick={save}
                        className="rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
                    >
                        Save
                    </button>
                )}
            </div>
        </fieldset>
    );
}
