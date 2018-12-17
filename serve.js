var bs = require("browser-sync").create();

bs.init({
    watch: true,
    files: ["examples/**/*", "dist/grid-utils.css"],
    server: {
        baseDir: "./examples",
        routes: {
            "/grid": "./dist"
        }
    }
});
