import { task, series, parallel, watch } from "gulp";
import { paths } from "./config/paths";
import { clean } from "./tasks/clean";
import { lintScss } from "./tasks/lintScss";
import { compileScss } from "./tasks/compileScss";
// import { minifyCss } from "./tasks/minifyCss";

task("clean", clean);

task("lint:styles", lintScss);
// task("lint:scripts", lintScripts);
task("lint", parallel("lint:styles"));

// task("test:scss", testScss);
// task("test:scripts", testsScripts);
// task("test", parallel("test:scss", "test:scripts"));

task("compile:styles",  series("lint:styles", compileScss));
// task("transpile:scripts",  series("lint:scripts", transpileScripts));
task("build:assets",  parallel("compile:styles"));

// task("minify:styles", minifyCss);
// task("minify:javaScript", minifyJavaScript)
// task("minify", parallel("minify:styles", "minify:javaScript"));

task("build", series("clean", "build:assets"));

task("watch:styles", () => {
  watch(paths.src.styles.scssFiles, series("lint:styles", "compile:styles"));
});

task("watch:prototype", () => {
  watch(paths.src.styles.scssFiles, series("lint:styles", "compile:styles"));
});