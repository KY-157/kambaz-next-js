import type { ReactNode } from "react";
import ModuleControlButtons from "./ModuleControlButtons";

export default function Module({
    moduleId,
    title,
    onRemoveModule,
    children,
}: {
    moduleId: string;
    title: ReactNode;
    onRemoveModule: (moduleId: string) => void;
    children?: ReactNode;
}) {
    return (
        <li className="wd-module mb-5 overflow-hidden border border-neutral-400 p-0 text-xl">
            <div className="wd-title flex items-center justify-between bg-neutral-200 p-3 ps-2">
                <span className="w-full">{title}</span>
                <ModuleControlButtons 
                    moduleId={moduleId} 
                    onRemoveModule={onRemoveModule}
                />
            </div>
            <ul className="wd-lessons m-0 list-none p-0">{children}</ul>
        </li>
    );
}
