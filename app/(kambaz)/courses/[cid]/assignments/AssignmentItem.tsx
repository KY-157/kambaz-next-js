import Link from "next/link";

export default function AssignmentItem({
    cid,
    aid,
    title,
    details,
}: {
    cid: string;
    aid: string;
    title: string;
    details: string;
}) {
    return (
        <li className="wd-assignment-list-item">
            <Link href={`/courses/${cid}/assignments/${aid}`} id="wd-assignment-link">
                {title} 
            </Link>
            <ul className="wd-details">{details}</ul>
            {/* Link the title to /courses/${cid}/assignments/${aid}
            (className wd-assignment-link), then show details underneath */}
        </li>
    );
}