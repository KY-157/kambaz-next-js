"use client";
import { redirect } from "next/navigation";

export default function AssignmentEditor({ cid }: { cid: string }){
    return (
        <div id="wd-assignments-editor">
            <form 
                id="wd-assignments-editor"
                onSubmit={(event) => {
                    event.preventDefault();
                    redirect(`/courses/${cid}/assignments`);
                }}
                onClick={(event) => {
                    event.preventDefault();
                    redirect(`/courses/${cid}/assignments`);
                }}
            >
            <label htmlFor="wd-name">Assignment Name</label>
            <input id="wd-name" defaultValue="A1 - ENV + HTML" />
            <br />
            <br />
            <textarea 
                id="wd-description"
                defaultValue="The assignment is available online Submit a link to the landing page of"
            />
            <br />
            <table>
                <tbody>
                    <tr>
                        <td align="right" valign="top">
                            <label htmlFor="wd-points">Points</label>
                        </td>
                        <td>
                            <input id="wd-points" defaultValue={100} />
                        </td>
                    </tr>
                    {/* Complete on your own — see checklist below */}
                    <tr>
                        <td align="right" valign="top">
                            <label htmlFor="wd-group">Assignment Group</label>
                        </td>
                        <td>
                            <select id="wd-group" defaultValue="ASSIGNMENTS">
                                <option value="ASSIGNMENTS">Assignments</option>
                                <option value="QUIZZES">Quizzes</option>
                                <option value="EXAMS">Exams</option>
                                <option value="PROJECT">Project</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td align="right" valign="top">
                            <label htmlFor="wd-display-grade-as">Display Grade as</label>
                        </td>
                        <td>
                            <select id="wd-display-grade-as" defaultValue="PERCENTAGE">
                                <option value="PERCENTAGE">Percentage</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td align="right" valign="top">
                            <label htmlFor="wd-submission-type">Submission Type</label>
                        </td>
                        <td>
                            <select id="wd-submission-type" defaultValue="ONLINE">
                                <option value="ONLINE">Online</option>
                            </select>
                            <br />
                            <label>Online Entry Options</label>
                            <br />
                            <input type="checkbox" name="online-entry-options" id="wd-text-entry" />
                            <label htmlFor="wd-text-entry">Text Entry</label>
                            <br />
                            <input type="checkbox" name="online-entry-options" id="wd-website-url" />
                            <label htmlFor="wd-website-url">Website URL</label>
                            <br />
                            <input type="checkbox" name="online-entry-options" id="wd-media-recordings" />
                            <label htmlFor="wd-media-recordings">Media Recordings</label>
                            <br />
                            <input type="checkbox" name="online-entry-options" id="wd-student-annotation" />
                            <label htmlFor="wd-student-annotation">Student Annotation</label>
                            <br />
                            <input type="checkbox" name="online-entry-options" id="wd-file-upload" />
                            <label htmlFor="wd-file-upload">File Uploads</label>
                            <br />
                        </td>
                    </tr>
                    <tr>
                        <td align="right" valign="top">
                            <label>Assign</label>
                        </td>
                        <td>
                            <label htmlFor="wd-assign-to">Assign to</label>
                            <br />
                            <input id="wd-assign-to" defaultValue="Everyone" />
                            <br />
                            <label htmlFor="wd-due-date">Due</label>
                            <br />
                            <input 
                                type="datetime-local"
                                defaultValue="2026-09-27T23:59"
                                min="1900-01-01T24:00"
                                max="2100-01-01T24:00"
                                id="wd-due-date"
                            />
                            <br />
                            <label htmlFor="wd-available-from">Available from</label>
                            <br />
                            <input 
                                type="datetime-local"
                                defaultValue="2026-09-14T23:59"
                                min="1900-01-01T24:00"
                                max="2100-01-01T24:00"
                                id="wd-available-from"
                            />
                            <br />
                            <label htmlFor="wd-available-until">Until</label>
                            <br />
                            <input 
                                type="datetime-local"
                                defaultValue="2026-12-15T23:59"
                                min="1900-01-01T24:00"
                                max="2100-01-01T24:00"
                                id="wd-available-until"
                            />
                        </td>
                    </tr>    
                </tbody>
            </table>
            <button id="wd-cancel" type="button">
                Cancel
            </button>
            <button id="wd-save" type="submit">
                Save
            </button>
            </form>
        </div>
    );
}