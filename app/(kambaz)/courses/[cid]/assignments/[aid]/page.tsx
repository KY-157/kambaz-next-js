import AssignmentEditor from "../AssignmentEditor";

export default async function AssignmentEditorPage({
    params,
}: {
    params: Promise<{ cid: string; aid: string }>;
}) {
    const { aid } = await params;
    return <AssignmentEditor key={aid} />;
}
