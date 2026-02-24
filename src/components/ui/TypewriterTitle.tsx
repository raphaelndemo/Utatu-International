"use client";

import Typewriter from "typewriter-effect";

export function TypewriterTitle() {
    return (
        <span className="inline-block text-secondary min-h-[1.5em]">
            <Typewriter
                options={{
                    strings: ["Education Redefined", "Flexible Hybrid Learning Program","Ignite Your Potential"],
                    autoStart: true,
                    loop: true,
                    delay: 75,
                }}
            />
        </span>
    );
}
