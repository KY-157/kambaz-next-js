"use client";

import { create } from "zustand";
import enrollmentsJson from "../database/enrollments.json";

export type Enrollment = {
    _id: string;
    user: string;
    course: string;
};

type EnrollmentsStore = {
    enrollments: Enrollment[];
    enroll: (enrollment: { user: string; course: string }) => void;
    unenroll: (enrollmentId: string) => void;
};

export const useEnrollmentsStore = create<EnrollmentsStore>((set) => ({
    enrollments: enrollmentsJson as Enrollment[],
    enroll: (enrollment) =>
        set((state) => ({
            enrollments: [
                ...state.enrollments,
                {
                _id: crypto.randomUUID(),
                user: enrollment.user,
                course: enrollment.course,
                },
            ],
        })),
    unenroll: (enrollmentId) =>
        set((state) => ({
            enrollments: state.enrollments.filter((e) => e._id !== enrollmentId),
        })),

}));