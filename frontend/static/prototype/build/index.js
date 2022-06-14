import { task, series, parallel, watch } from "gulp";
import { paths } from "./config/paths";
import { clean } from "./tasks/clean";
import { lintScss } from "./tasks/lintScss";
import { lintHtml } from "./tasks/lintHtml";
import { processHtml } from "./tasks/processHtml";
import { compileScssPages } from "./tasks/compileScssPages";
import { compileScssLayers } from "./tasks/compileScssLayers";
import { compileScssComponents } from "./tasks/compileScssComponents";
// import { minifyCss } from "./tasks/minifyCss";

task("clean", clean);

task("lint:html", lintHtml);
task("lint:styles", lintScss);
// task("lint:scripts", lintScripts);
task("lint", parallel("lint:html", "lint:styles"));

// task("test:scss", testScss);
// task("test:scripts", testsScripts);
// task("test", parallel("test:scss", "test:scripts"));

task("process:html", processHtml);
task("compile:styles",  series("lint:styles", compileScssPages, compileScssLayers, compileScssComponents));
// task("transpile:scripts",  series("lint:scripts", transpileScripts));
task("build:assets",  parallel("process:html", "compile:styles"));

// task("minify:styles", minifyCss);
// task("minify:javaScript", minifyJavaScript)
// task("minify", parallel("minify:styles", "minify:javaScript"));

task("build", series("clean", "build:assets"));

task("watch:styles", () => {
  watch(paths.src.styles.scssFiles, series("lint:styles", "compile:styles"));
});

task("watch:prototype", () => {
  watch(paths.src.html.htmlFiles, series("lint:html", "process:html"));
  watch(paths.src.styles.scssFiles, series("lint:styles", "compile:styles"));
});