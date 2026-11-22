"use client";

import { useState } from "react";
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
export default function QueryParameters() {
    const [a, setA] = useState("34");
    const [b, setB] = useState("23");  
    return(
        <div>
            <h4>Query Parameters</h4>
            <input
                type="number"
                value={a}
                onChange={(e) => setA(e.target.value)}
                className="mb-2 block rounded border border-neutral-300 px-3 py-1.5"
                id="wd-query-parameter-a"
            />
            <input
                type="number"
                value={b}
                onChange={(e) => setB(e.target.value)}
                className="mb-2 block rounded border border-neutral-300 px-3 py-1.5"
                id="wd-query-parameter-b"
            />
            <a id="wd-query-parameter-add"
                href={`${HTTP_SERVER}/lab5/calculator?operation=add&a=${a}&b=${b}`}
                className="me-2 rounded bg-blue-600 px-3 py-1.5 text-center text-sm font-medium text-white"
            >
                Add {a} + {b}
            </a>
            <a id="wd-query-parameter-subtract"
                href={`${HTTP_SERVER}/lab5/calculator?operation=subtract&a=${a}&b=${b}`}
                className="me-2 rounded bg-red-600 px-3 py-1.5 text-center text-sm font-medium text-white"
            >
                Subtract {a} - {b}
            </a>
            <a id="wd-query-parameter-multiply"
                href={`${HTTP_SERVER}/lab5/calculator?operation=multiply&a=${a}&b=${b}`}
                className="me-2 rounded bg-green-600 px-3 py-1.5 text-center text-sm font-medium text-white"
            >
                Multiply {a} * {b}
            </a>
            <a id="wd-query-parameter-divide"
                href={`${HTTP_SERVER}/lab5/calculator?operation=divide&a=${a}&b=${b}`}
                className="me-2 rounded bg-orange-600 px-3 py-1.5 text-center text-sm font-medium text-white"
            >
                Divide {a} / {b}
            </a>
            <hr />
        </div>
    );  
}