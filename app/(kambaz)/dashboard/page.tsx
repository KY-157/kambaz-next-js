"use client";

import { useEffect, useState } from "react";
import { useAccountContext } from "../account/AccountContext";
import * as client from "../courses/client";
import { type Course, emptyCourse } from "../store/coursesStore";
import CourseCard from "./CourseCard";

export default function Dashboard() {
    const { currentUser } = useAccountContext();
    const [courses, setCourses] = useState<Course[]>([]);
    const [course, setCourse] = useState<Course>(emptyCourse);
    const [enrolledCourseIds, setEnrolledCourseIds] = useState<string[]>([]);
    const [showAllCourses, setShowAllCourses] = useState(false);

    const onEnroll = async (courseId: string) => {
        if (!currentUser) return;
        await client.enrollIntoCourse(currentUser._id, courseId);
        setEnrolledCourseIds((prev: string[]) => [...prev, courseId]);
    };
    const onUnenroll = async (courseId: string) => {
        if (!currentUser) return;
        await client.unenrollFromCourse(currentUser._id, courseId);
        setEnrolledCourseIds((prev: string[]) => prev.filter((id: string) => id !== courseId));
    };

    async function loadCourses() {
        try {
            const list = showAllCourses
                ? await client.fetchAllCourses()
                : await client.findMyCourses();
            setCourses(list);
        } catch {
            setCourses([]);
        }
    }

    async function loadEnrollments() {
        if (!currentUser) {
            setEnrolledCourseIds([]);
            return;
        }
        try {
            const myCourses = await client.findMyCourses();
            setEnrolledCourseIds(myCourses.map((c: Course) => c._id));
        } catch {
            setEnrolledCourseIds([]);
        }
    }

    useEffect(() => {
        // The published list lives on Express, so the first paint requests it.
        // eslint-disable-next-line react-hooks/set-state-in-effect -- load replaces the empty list
        void loadCourses();
        void loadEnrollments();
    }, [currentUser, showAllCourses]);

    async function addCourse() {
        try {
            await client.createCourse(course);
            await loadCourses();
        } catch {
            /* companion server may be down */
        }
    }

    async function updateCourse() {
        await client.updateCourse(course);
        await loadCourses();
    }

    async function deleteCourse(courseId: string) {
        await client.deleteCourse(courseId);
        await loadCourses();
    }

    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1>
            <hr />
            <h5 className="flex flex-wrap items-center gap-2">
                New Course
                <button
                    type="button"
                    className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
                    id="wd-add-new-course-click"
                    onClick={addCourse}
                >
                    Add
                </button>
                <button
                    type="button"
                    className="rounded bg-yellow-400 px-3 py-1.5 text-sm font-medium"
                    id="wd-update-course-click"
                    onClick={updateCourse}
                >
                    Update
                </button>
            </h5>
            <input
                className="mb-2 mt-2 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
                value={course.name}
                onChange={(e) => setCourse({ ...course, name: e.target.value })}
                id="wd-course-name"
            />
            <textarea
                className="mb-3 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
                rows={3}
                value={course.description}
                onChange={(e) =>
                    setCourse({ ...course, description: e.target.value })
                }
                id="wd-course-description"
            />
            <hr />
            <button
                type="button"
                id="wd-toggle-enrollments"
                className="mb-3 rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
                onClick={() => setShowAllCourses((v) => !v)}
            >
                {showAllCourses ? "My Courses" : "All Courses"}
            </button>
            <h2 id="wd-dashboard-published">{showAllCourses ? "All Courses" : "Published Courses"} ({courses.length})</h2>
            <hr />
            <div
                id="wd-dashboard-courses"
                className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
            >
                {courses.map((c) => (
                    <CourseCard
                        key={c._id}
                        course={c}
                        onEdit={() => setCourse(c)}
                        onDelete={() => deleteCourse(c._id)}
                        showEnrollment={showAllCourses}
                        enrolled={enrolledCourseIds.includes(c._id)}
                        onEnroll={() => onEnroll(c._id)}
                        onUnenroll={() => onUnenroll(c._id)}
                    />
                ))}
            </div>
        </div>
    );
}