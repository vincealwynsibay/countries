module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: "class", // or 'media' or 'class'
    theme: {
        extend: {
            backgroundColor: {
                dg: "hsl(0, 0%, 52%)",
                db: "hsl(209, 23%, 22%)",
                vg: "#fafafa",
                vlg: "hsl(0, 0%, 98%)",
                vdb1: "hsl(207, 26%, 17%)",
                vdb2: "hsl(200, 15%, 8%)",
            },
            height: {
                v90: "90vh",
            },
        },
    },

    variants: {
        extend: {},
    },
    plugins: [],
};
