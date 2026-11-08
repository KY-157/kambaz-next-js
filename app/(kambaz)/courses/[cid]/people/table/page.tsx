"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { FaUserCircle } from "react-icons/fa";
import { useEnrollmentsStore } from "../../../../store/enrollmentsStore";
import * as db from "../../../../database";
import { emptyUser, type User } from "../../../../account/AccountContext";

export default function PeopleTable() {
    const { cid } = useParams<{ cid: string }>();
    const [addedUsers, setAddedUsers] = useState<User[]>([]);
    const [user, setUser] = useState<User>(emptyUser);
    const enrollments = useEnrollmentsStore((state) => state.enrollments);
    const enrolled = db.users.filter((usr) =>
        enrollments.some(
            (enrollment) => enrollment.user === usr._id && enrollment.course === cid,
        ),
    );
    const people = [...enrolled, ...addedUsers];
    const addPerson = () => {
        setAddedUsers([...addedUsers, { ...user, _id: crypto.randomUUID() }]);
        setUser(emptyUser);
    };
    return (
        <div id="wd-people-table" className="overflow-x-auto">
            <div className="mb-3 flex flex-wrap items-center gap-2">
                <input
                    id="wd-person-first-name"
                    placeholder="First name"
                    className="rounded border border-neutral-300 px-2 py-1"
                    value={user.firstName}
                    onChange={(e) => setUser({ ...user, firstName: e.target.value })}
                />
                <input
                    id="wd-person-last-name"
                    placeholder="Last name"
                    className="rounded border border-neutral-300 px-2 py-1"
                    value={user.lastName}
                    onChange={(e) => setUser({ ...user, lastName: e.target.value })}
                />
                <input
                    id="wd-person-login-id"
                    placeholder="Login ID"
                    className="rounded border border-neutral-300 px-2 py-1"
                    value={user.loginId}
                    onChange={(e) => setUser({ ...user, loginId: e.target.value })}
                />
                <select
                    id="wd-person-role"
                    className="rounded border border-neutral-300 px-2 py-1"
                    value={user.role}
                    onChange={(e) => setUser({ ...user, role: e.target.value })}
                >
                    <option value="STUDENT">Student</option>
                    <option value="TA">TA</option>
                    <option value="FACULTY">Faculty</option>
                </select>
                <button
                    type="button"
                    id="wd-add-person"
                    className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
                    onClick={addPerson}
                >
                    Add Person
                </button>
            </div>
            <table className="w-full border-collapse text-left text-sm">
                <thead>
                    <tr className="border-b border-neutral-300">
                        <th className="p-2">Name</th>
                        <th className="p-2">Login ID</th>
                        <th className="p-2">Section</th>
                        <th className="p-2">Role</th>
                        <th className="p-2">Last Activity</th>
                        <th className="p-2">Total Activity</th>
                    </tr>
                </thead>
                <tbody>
                    {people.map((user) => (
                        <tr key={user._id} className="odd:bg-neutral-50">
                            <td className="wd-full-name p-2 text-nowrap">
                                <FaUserCircle className="me-2 inline align-middle text-3xl text-neutral-500" />
                                <span className="wd-first-name">{user.firstName}</span>{" "}
                                <span className="wd-last-name">{user.lastName}</span>
                            </td>
                            <td className="wd-login-id p-2">{user.loginId}</td>
                            <td className="wd-section p-2">{user.section}</td>
                            <td className="wd-role p-2">{user.role}</td>
                            <td className="wd-last-activity p-2">{user.lastActivity}</td>
                            <td className="wd-total-activity p-2">{user.totalActivity}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}