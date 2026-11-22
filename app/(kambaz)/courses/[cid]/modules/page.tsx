"use client"

import * as client from "../../client";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import Module from "./Module";
import Lesson from "./Lesson";
import ModulesControls from "./ModulesControls";
import { useModulesStore } from "../../../store/modulesStore";

export default function Modules() {
    const { cid } = useParams();
    const courseId = cid as string;
    const modules = useModulesStore((state) => state.modules);
    const updateModule = useModulesStore((state) => state.updateModule);
    const setModules = useModulesStore((state) => state.setModules);
    const addModule = useModulesStore((state) => state.addModule);
    const deleteModule = useModulesStore((state) => state.deleteModule);
    const onUpdateModule = async (module: any) => {
        const saved = await client.updateModule(module);
        updateModule(saved);
    };
    const onAddModule = async (name: string) => {
        const created = await client.createModuleForCourse(courseId, { name });
        addModule(created);
    };
    const onRemoveModule = async (moduleId: string) => {
        await client.deleteModule(moduleId);
        deleteModule(moduleId);
    };
    useEffect(() => {
        const load = async () => {
            setModules(await client.findModulesForCourse(courseId));
        };
        load();
    }, [courseId]);
    return (
        <div>
            <ModulesControls onAddModule={onAddModule} />
            <ul id="wd-modules" className="m-0 list-none p-0">
                {modules.map((module) => (
                    <Module
                        key={module._id}
                        moduleId={module._id}
                        onRemoveModule={onRemoveModule}
                        title={
                            module.editing ? (
                                <input
                                    className="w-1/2 rounded border border-neutral-300 px-2 py-1 text-base"
                                    defaultValue={module.name}
                                    onChange={(e) =>
                                        updateModule({ ...module, name: e.target.value })
                                    }
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            onUpdateModule({ ...module, editing: false });
                                        }
                                    }}
                                />
                            ) : (
                                module.name
                            )
                        }
                    >
                        {module.lessons?.map((lesson) => (
                            <Lesson key={lesson._id} title={lesson.name} />
                        ))}
                    </Module>
                ))}
            </ul>
        </div>
    );
}
