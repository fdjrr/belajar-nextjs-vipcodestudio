"use client";

import { useState } from "react";

function AdminProductPage() {
    const [status, setStatus] = useState("");

    const revalidate = async () => {
        const req = await fetch("http://localhost:3000/api/revalidate?tag=products&secret=@Next2024", {
            method: "POST",
        });

        if (!req.ok) {
            setStatus("Failed to revalidate");
        } else {
            const res = await req.json();
            if (res.revalidate) {
                setStatus("Revalidated!");
            }
        }
    };

    return (
        <div>
            <h1>{status}</h1>

            <button
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                onClick={() => revalidate()}
            >
                Revalidate
            </button>
        </div>
    );
}

export default AdminProductPage;
