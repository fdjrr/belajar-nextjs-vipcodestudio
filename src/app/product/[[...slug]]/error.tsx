"use client";

import { useEffect } from "react";

function Error({ error, reset }: { error: Error; reset: () => void }) {
    useEffect(() => {
        console.log(error);
    }, [error]);

    return (
        <div>
            <h2>Something when wrong!</h2>
            <button
                onClick={() => reset()}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
                Try Again
            </button>
        </div>
    );
}

export default Error;
