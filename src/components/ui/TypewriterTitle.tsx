"use client";

import Typewriter from "typewriter-effect";

export function TypewriterTitle() {
    return (
        <span className="inline-block text-secondary">
            <Typewriter
                options={{
                    strings: ["Education Redefined", "Ignite Your Potential", ""],
                    autoStart: true,
                    loop: true,
                    delay: 75,
                }}
            />
        </span>
    );
}
