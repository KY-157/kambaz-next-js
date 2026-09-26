export default function CourseStatus() {
    return (
        <div id="wd-course-status">
            <h2>Course Status</h2>
            <button>Unpublish</button> <button>Publish</button>
            <br />
            <button id="wd-course-status-import-existing-button">
                Import Existing Content
            </button>
            <br />
            <button id="wd-course-status-import-commons-button">
                Import from Commons
            </button>
            <br />
            <button id="wd-course-status-home-button">
                Choose Home Page
            </button>
            <br />
            <button id="wd-course-status-course-stream-button">
                View Course Stream
            </button>
            <br />
            <button id="wd-course-status-announcement-button">
                New Announcement
            </button>
            <br />
            <button id="wd-course-status-analytics-button">
                New Analytics
            </button>
            <br />
            {/* Complete the remaining status actions on your own */}
            <button>View Course Notifications</button>
        </div>
    );
}