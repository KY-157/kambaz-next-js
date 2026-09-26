import CourseCard from "./CourseCard";

export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (3)</h2> <hr />
            <div id="wd-dashboard-courses">
                <CourseCard
                    id="6200"
                    title="CY6200 IT Security Gov"
                    subtitle="Special Topics in IT Security Governance, Risk, and Compliance"
                    image="/images/CY6200.jpg"
                />
                <CourseCard
                    id="5610"
                    title="CS5610 Web Dev"
                    subtitle="Web Development using Node JS"
                    image="/images/CS5610.jpg"
                />
                <CourseCard
                    id="1234"
                    title="1234 Risk Management"
                    subtitle="Security Risk Management and Assessment"
                    image="/images/CY5200.jpg"
                />
            </div>
        </div>
    );
}