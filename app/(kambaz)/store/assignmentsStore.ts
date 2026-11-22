"use client";

import { create } from "zustand";
import assignmentsJson from "../database/assignments.json";

export type CourseAssignment = {
    _id: string;
    title: string;
    course: string;
    description: string;
    points: number;
    due: string;
    available: string;
    until?: string;
    editing?: boolean;
};

type AssignmentsStore = {
    assignments: CourseAssignment[];
    addAssignment: (assignment: CourseAssignment) => void;
    deleteAssignment: (assignmentId: string) => void;
    updateAssignment: (assignment: CourseAssignment) => void;
    editAssignment: (assignmentId: string) => void;
    setAssignments: (assignments: CourseAssignment[]) => void;
};

export const useAssignmentsStore = create<AssignmentsStore>((set) => ({
    assignments: assignmentsJson as CourseAssignment[],
    addAssignment: (assignment) =>
        set((state) => ({
            assignments: [...state.assignments, assignment],
        })),
    deleteAssignment: (assignmentId) =>
        set((state) => ({
            assignments: state.assignments.filter((a) => a._id !== assignmentId),
        })),
    updateAssignment: (assignment) =>
        set((state) => ({
            assignments: state.assignments.map((a) => (a._id === assignment._id ? assignment : a)),
        })),
    editAssignment: (assignmentId) =>
        set((state) => ({
            assignments: state.assignments.map((a) =>
                a._id === assignmentId ? { ...a, editing: true } : a,
            ),
        })),
    setAssignments: (assignments) => set({ assignments }),
}));