var bs = require("browser-sync").create();

bs.init({
    watch: true,
    files: ["examples/**/*", "dist/**/*"],
    server: {
        baseDir: "./examples",
        routes: {
            "/grid": "./dist"
        }
    }
});
