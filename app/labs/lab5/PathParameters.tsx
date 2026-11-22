"use client";

import { useState } from "react";
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
export default function PathParameters() {
    const [a, setA] = useState("34");
    const [b, setB] = useState("23");  
    return(
        <div>
            <h4>Path Parameters</h4>
            <input
                type="number"
                value={a}
                onChange={(e) => setA(e.target.value)}
                className="mb-2 block rounded border border-neutral-300 px-3 py-1.5"
                id="wd-path-parameter-a"
            />
            <input
                type="number"
                value={b}
                onChange={(e) => setB(e.target.value)}
                className="mb-2 block rounded border border-neutral-300 px-3 py-1.5"
                id="wd-path-parameter-b"
            />
            <a id="wd-path-parameter-add"
                href={`${HTTP_SERVER}/lab5/add/${a}/${b}`}
                className="me-2 rounded bg-blue-600 px-3 py-1.5 text-center text-sm font-medium text-white"
            >
                Add {a} + {b}
            </a>
            <a id="wd-path-parameter-subtract"
                href={`${HTTP_SERVER}/lab5/subtract/${a}/${b}`}
                className="me-2 rounded bg-red-600 px-3 py-1.5 text-center text-sm font-medium text-white"
            >
                Subtract {a} - {b}
            </a>
            <a id="wd-path-parameter-multiply"
                href={`${HTTP_SERVER}/lab5/multiply/${a}/${b}`}
                className="me-2 rounded bg-green-600 px-3 py-1.5 text-center text-sm font-medium text-white"
            >
                Multiply {a} * {b}
            </a>
            <a id="wd-path-parameter-divide"
                href={`${HTTP_SERVER}/lab5/divide/${a}/${b}`}
                className="me-2 rounded bg-orange-600 px-3 py-1.5 text-center text-sm font-medium text-white"
            >
                Divide {a} / {b}
            </a>
            <hr />
        </div>
    );  
}
