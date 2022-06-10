import { task, series, parallel, watch } from "gulp";
import { paths } from "./config/paths";
import { clean } from "./tasks/clean";
import { lintScss } from "./tasks/lintScss";
import { compileScss } from "./tasks/compileScss";
// import { minifyCss } from "./tasks/minifyCss";

task("clean", clean);

task("lint:styles", lintScss);
task("lint", parallel("lint:styles"));

task("compile:styles",  compileScss);
task("compile", series("clean", parallel("compile:styles")));

// task("minify:styles", series(minifyCss));
// task("minify", series(parallel("minify:styles")));

// task("compile", series("clean", "lint", "build", "minify"));

task("watch:styles", () => {
  watch(paths.src.styles.scssFiles, series("lint:styles", "compile:styles"));
});

task("watch:poc", () => {
  watch(paths.src.styles.scssFiles, series("lint:styles", "compile:styles"));
});