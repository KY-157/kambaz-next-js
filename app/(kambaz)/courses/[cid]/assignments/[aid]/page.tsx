import Link from "next/link";
import * as db from "../../../../database";

export default async function AssignmentEditor({
    params,
}: {
    params: Promise<{ cid: string; aid: string }>;
}) {
    const { cid, aid } = await params;
    const assignment = db.assignments.find((a) => a._id === aid);
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name" className="text-lg">
                Assignment Name
            </label>
            <input 
                id="wd-name" 
                defaultValue={assignment?.title ?? ""}
                className="block w-full rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm"
            />
            <p id="wd-assignment-id" className="text-sm text-neutral-600">
                Assignment id: {aid}
            </p>
            <textarea
                id="wd-description"
                defaultValue={assignment?.description ?? ""}
                rows={8}
                className="inline-flex gmin-win-0 font-sans w-full min-h-[40px] p-2 border border-gray-300 rounded bg-white px-3 py-1.5 text-sm">
            </textarea>
            <table className="ml-auto border-separate border-spacing-y-4">
                <tbody>
                    <tr>
                        <td align="right" valign="top" className="whitespace-nowrap pr-4">
                            <label 
                                htmlFor="wd-points"
                                className="inline-flex gap-1 text-sm"
                            >
                                Points
                            </label>
                        </td>
                        <td>
                            <input 
                                id="wd-points" 
                                className="inline-flex gap-1 rounded border border-neutral-300 w-full bg-white px-3 py-1.5 text-sm"
                                defaultValue={assignment?.points ?? 100} 
                            />
                        </td>
                    </tr>
                    <tr>
                        <td align="right" valign="top" className="whitespace-nowrap pr-4">
                            <label htmlFor="wd-group">Assignment Group</label>
                        </td>
                        <td>
                            <select 
                                id="wd-group" 
                                className="rounded border border-neutral-300 w-full bg-white px-3 py-1.5 text-sm"
                                defaultValue="ASSIGNMENTS"
                            >
                                <option value="ASSIGNMENTS">Assignments</option>
                                <option value="QUIZZES">Quizzes</option>
                                <option value="EXAMS">Exams</option>
                                <option value="PROJECT">Project</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td align="right" valign="top" className="whitespace-nowrap pr-4">
                            <label htmlFor="wd-display-grade-as">Display Grade as</label>
                        </td>
                        <td>
                            <select 
                                id="wd-display-grade-as" 
                                className="rounded border border-neutral-300 w-full bg-white px-3 py-1.5 text-sm"
                                defaultValue="PERCENTAGE"
                            >
                                <option value="PERCENTAGE">Percentage</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td align="right" valign="top" className="whitespace-nowrap pr-4">
                            <label htmlFor="wd-submission-type">Submission Type</label>
                        </td>
                        <td className="rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm">
                            <div className="flex flex-col gap-3">
                                <select 
                                    id="wd-submission-type" 
                                    className="rounded border border-neutral-300 w-full bg-white px-3 py-1.5 text-sm"
                                    defaultValue="ONLINE"
                                >
                                    <option value="ONLINE">Online</option>
                                </select>
                                <label className="text-lg font-semibold">Online Entry Options</label>
                                <div className="flex items-center gap-2">
                                    <input type="checkbox" name="online-entry-options" id="wd-text-entry" />
                                    <label htmlFor="wd-text-entry">Text Entry</label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <input type="checkbox" name="online-entry-options" id="wd-website-url" />
                                    <label htmlFor="wd-website-url">Website URL</label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <input type="checkbox" name="online-entry-options" id="wd-media-recordings" />
                                    <label htmlFor="wd-media-recordings">Media Recordings</label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <input type="checkbox" name="online-entry-options" id="wd-student-annotation" />
                                    <label htmlFor="wd-student-annotation">Student Annotation</label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <input type="checkbox" name="online-entry-options" id="wd-file-upload" />
                                    <label htmlFor="wd-file-upload">File Uploads</label>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td align="right" valign="top" className="whitespace-nowrap pr-4">
                            <label>Assign</label>
                        </td>
                        <td
                            className="rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm"
                        >
                            <label 
                                htmlFor="wd-assign-to"
                                className="text-lg font-semibold"
                            >
                                Assign to
                            </label>
                            <input 
                                id="wd-assign-to" 
                                className="block rounded border border-neutral-300 w-full bg-white px-3 py-1.5 text-sm"
                                defaultValue="Everyone" 
                            />
                            <br />
                            <label 
                                htmlFor="wd-due-date"
                                className="text-sm font-semibold"
                            >
                                Due
                            </label>
                            <input 
                                type="date"
                                className="block rounded border border-neutral-300 w-full bg-white px-3 py-1.5 text-sm"
                                defaultValue={assignment?.due}
                                min="1900-01-01"
                                max="2100-01-01"
                                id="wd-due-date"
                            />
                            <br />
                            <div className="flex gap-4 items-end">
                                <div className="flex-1">
                                    <label 
                                        htmlFor="wd-available-from"
                                        className="text-sm font-semibold"
                                    >
                                        Available from
                                    </label>
                                    <input 
                                        type="date"
                                        className="block w-full inline-flex gap-1 rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm"
                                        defaultValue={assignment?.available}
                                        min="1900-01-01"
                                        max="2100-01-01"
                                        id="wd-available-from"
                                    />
                                </div>
                                <div className="flex-1">
                                    <label 
                                        htmlFor="wd-available-until"
                                        className="text-sm font-semibold"
                                    >
                                        Until
                                    </label>
                                    <input 
                                        type="date"
                                        className="block w-full inline-flex gap-1 rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm"
                                        defaultValue="2026-12-15"
                                        min="1900-01-01"
                                        max="2100-01-01"
                                        id="wd-available-until"
                                    />
                                </div>
                            </div>
                            <br />
                        </td>
                    </tr>    
                </tbody>
            </table>
            <br />
            <Link href={`/courses/${cid}/assignments`} id="wd-cancel">
                Cancel
            </Link>{" "}
            <Link href={`/courses/${cid}/assignments`} id="wd-save">
                Save
            </Link>
        </div>
    );
}