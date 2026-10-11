"use client";
import { useParams, useRouter } from "next/navigation";

export default function AssignmentEditor() {
    const { cid } = useParams<{ cid: string }>();
    const router = useRouter();
    return (
        <div id="wd-assignments-editor">
            <form 
                id="wd-assignments-editor"
                className="flex flex-col gap-4"
                onSubmit={(event) => {
                    event.preventDefault();
                    router.push(`/courses/${cid}/assignments`);
                }}
            >
                <div className="flex flex-col gap-1">
                    <label htmlFor="wd-name" className="text-lg">
                        Assignment Name
                    </label>
                    <input 
                        id="wd-name" 
                        defaultValue="A1 - ENV + HTML" 
                        className="block w-full rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm"
                    />
                </div>
                <textarea
                    id="wd-description"
                    onInput={(e) => {
                        const target = e.currentTarget;
                        target.style.height = 'auto';
                        target.style.height = `${target.scrollHeight}px`;
                    }}
                    placeholder="The assignment is available online. Submit a link to the landing page of your Web application running on Vercel."
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
                                    defaultValue={100} 
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
                                    type="datetime-local"
                                    className="block rounded border border-neutral-300 w-full bg-white px-3 py-1.5 text-sm"
                                    defaultValue="2026-09-27T23:59"
                                    min="1900-01-01T24:00"
                                    max="2100-01-01T24:00"
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
                                            type="datetime-local"
                                            className="block w-full inline-flex gap-1 rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm"
                                            defaultValue="2026-09-14T23:59"
                                            min="1900-01-01T24:00"
                                            max="2100-01-01T24:00"
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
                                            type="datetime-local"
                                            className="block w-full inline-flex gap-1 rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm"
                                            defaultValue="2026-12-15T23:59"
                                            min="1900-01-01T24:00"
                                            max="2100-01-01T24:00"
                                            id="wd-available-until"
                                        />
                                    </div>
                                </div>
                                <br />
                            </td>
                        </tr>    
                    </tbody>
                </table>
                <div className="flex flex-col gap-1">
                    <label htmlFor="wd-ai-editor-notes" className="text-lg">
                        Sample notes
                    </label>
                    <textarea
                        id="wd-ai-editor-notes"
                        className="block w-full min-h-[40px] rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm"
                    />
                </div>
                <div className="flex gap-2 justify-end">
                    <button 
                        id="wd-cancel" 
                        type="button"
                        className="inline-flex gap-1 rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm"
                        onClick={() => router.push(`/courses/${cid}/assignments`)}
                    >
                        Cancel
                    </button>
                    <button 
                        id="wd-save" 
                        type="submit"
                        className="inline-flex gap-1 rounded border border-red-600 bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
}