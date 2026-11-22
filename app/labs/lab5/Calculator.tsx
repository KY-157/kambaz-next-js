"use client";

import { useState } from "react";
import * as client from "./client";

export default function Calculator() {
    const [a, setA] = useState("3");
    const [b, setB] = useState("5"); 
    const [operation, setOperation] = useState("add");
    const [result, setResult] = useState("");
    const [error, setError] = useState("");
    const symbols: Record<string, string> = { add: "+", subtract: "-", multiply: "*", divide: "/" };
    const calculate = async (op = operation) => {
        try {
            setError("");
            const data = await client.fetchCalculator(a, b, op);
            setResult(`${a} ${symbols[op]} ${b} = ${data.result}`);
        } catch (e: any) {
            setResult("");
            setError(e.message);
        }
    };
    return(
        <div>
            <h4>Calculator (Next.js Web API)</h4>

            <label className="inline-block me-2">A: </label>
            <input
                type="number"
                value={a}
                onChange={(e) => setA(e.target.value)}
                className="inline-block mb-2 block rounded border border-neutral-300 px-3 py-1.5"
                id="wd-number-a"
            />
            <br />
            <label className="inline-block me-2">B: </label>
            <input
                type="number"
                value={b}
                onChange={(e) => setB(e.target.value)}
                className="inline-block mb-2 block rounded border border-neutral-300 px-3 py-1.5"
                id="wd-number-b"
            />
            <br />
            <label className="inline-block me-2">Operation: </label>
            <select className="inline-block mb-2 border rounded px-2 py-1" 
                value={operation}
                onChange={(e) => { setOperation(e.target.value); calculate(e.target.value); }}
            >
                <option value="add">+</option>
                <option value="subtract">-</option>
                <option value="multiply">*</option>
                <option value="divide">/</option>
            </select>
            <br />
            <button className="inline-block me-2 mb-2 bg-blue-600 text-white rounded px-3 py-1"
                onClick={() => calculate()}
            >
                Calculate
            </button>
            <input className="border rounded px-2 py-1 w-full" readOnly value={result} />
            {error && <p className="text-red-600">{error}</p>}
            <hr />
        </div>
    );
}