"use client";

import * as client from "../client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAccountContext, type User } from "../AccountContext";

export default function Profile() {
    const [profile, setProfile] = useState<User | null>(null);
    const { currentUser, setCurrentUser } = useAccountContext();
    const router = useRouter();

    const updateProfile = async () => {
        if (!profile) return;
        const user = await client.updateUser(profile);
        setCurrentUser(user);
    };
    useEffect(() => {
        if (!currentUser) {
            router.push("/account/signin");
            return;
        }
        setProfile(currentUser);
    }, [currentUser, router]);

    const signout = () => {
        setCurrentUser(null);
        router.push("/account/signin");
    };

    if (!profile) return null;
    return (
        <div id="wd-profile-screen">
            <h3>Profile</h3>
            <input
                id="wd-username"
                value={profile.username}
                onChange={(e) => setProfile({ ...profile, username: e.target.value })}
                className="mb-2 w-full rounded border border-neutral-300 px-3 py-2"
            />
            <input
                id="wd-password"
                type="password"
                value={profile.password}
                onChange={(e) => setProfile({ ...profile, password: e.target.value })}
                className="mb-2 w-full rounded border border-neutral-300 px-3 py-2"
            />
            <input
                id="wd-firstName"
                value={profile.firstName}
                onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
                className="mb-2 w-full rounded border border-neutral-300 px-3 py-2"
            />
            <input
                id="wd-lastName"
                value={profile.lastName}
                onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
                className="mb-2 w-full rounded border border-neutral-300 px-3 py-2"
            />
            <input
                id="wd-email"
                type="email"
                value={profile.email}
                onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                className="mb-2 w-full rounded border border-neutral-300 px-3 py-2"
            />
            <input
                id="wd-role"
                value={profile.role}
                onChange={(e) => setProfile({ ...profile, role: e.target.value })}
                className="mb-2 w-full rounded border border-neutral-300 px-3 py-2"
            />
            <button
                type="button"
                onClick={updateProfile} id="wd-update-btn"
                className="mb-2 block w-full rounded bg-blue-600 px-3 py-2 text-center text-white no-underline"
            >
                Update
            </button>
            <button
                type="button"
                onClick={signout} id="wd-signout-btn"
                className="mb-2 block w-full rounded bg-red-600 px-3 py-2 text-center text-white no-underline"
            >
                Sign out
            </button>
        </div>
    );
}