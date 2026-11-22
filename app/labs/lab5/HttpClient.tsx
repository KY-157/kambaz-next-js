"use client";

import { useState, useEffect } from "react";
import * as client from "./client";
export default function HttpClient() {
    const [welcomeOnClick, setWelcomeOnClick] = useState("");
    const [welcomeOnLoad, setWelcomeOnLoad] = useState("");
    const fetchWelcomeOnClick = async () => {
        const message = await client.fetchWelcomeMessage();
        setWelcomeOnClick(message);
    };
    const fetchWelcomeOnLoad = async () => {
        const welcome = await client.fetchWelcomeMessage();
        setWelcomeOnLoad(welcome);
    };
    useEffect(() => {
        fetchWelcomeOnLoad();
    }, []);
    return (
        <div>
            <h4>Requesting on Click</h4>
            <button type="button" onClick={fetchWelcomeOnClick}>Fetch Welcome</button>
            <p>Response from server: <b>{welcomeOnClick}</b></p>
            <h4>Requesting on Load</h4>
            <p>Response from server: <b>{welcomeOnLoad}</b></p>
            <hr />
        </div>
    );
}