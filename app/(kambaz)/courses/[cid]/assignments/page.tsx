import AssignmentItem from "./AssignmentItem";

export default async function Assignments({
    params,
}: {
    params: Promise<{ cid: string }>;
}) {
    const { cid } = await params;
    return (
        <div id="wd-assignments">
            {/* search input, + Group, + Assignment */}
            <input
                type="text"
                placeholder="Search for Assignments"
                title="search input"
                id="wd-assignments-search-input"
            />
            <button>+ Group</button>
            <button>+ Assignment</button>
            {/* h3 wd-assignments-title */}
            <h3 id="wd-assignments-title">ASSIGNMENTS</h3>
            <ul id="wd-assignment-list">
                {/* at least three AssignmentItems using cid */}
                <AssignmentItem 
                    cid={cid} 
                    aid="A1" 
                    title="A1 - ENV + HTML"
                    details="Multiple Modules | Not available until September 14 at 12:00am 
                    | Due September 27 at 11:59pm | 100 pts"
                />  
                <AssignmentItem 
                    cid={cid} 
                    aid="A2" 
                    title="A2 - CSS + TAILWIND"
                    details="Multiple Modules | Not available until September 27 at 12:00am 
                    | Due October 11 at 11:59pm | 100 pts"
                />  
                <AssignmentItem 
                    cid={cid} 
                    aid="A3" 
                    title="A3 - JAVASCRIPT + REACT"
                    details="Multiple Modules | Not available until October 11 at 12:00am 
                    | Due October 25 at 11:59pm | 100 pts"
                />  
            </ul>    
                
        </div>
    );
}