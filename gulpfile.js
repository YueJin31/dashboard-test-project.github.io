import gulp from "gulp";
import browserSync from "browser-sync";
import { filePaths } from "./gulp/config/paths.js";

import { copy } from "./gulp/tasks/copy.js";
import { copyRootFiles } from "./gulp/tasks/copy-root-files.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { javascript } from "./gulp/tasks/javascript.js";
import { images } from "./gulp/tasks/images.js";
import { otfToTtf, ttfToWoff, fontStyle } from "./gulp/tasks/fonts.js";
import { zip } from "./gulp/tasks/zip.js";
import { ftpDeploy } from "./gulp/tasks/ftp-deploy.js";

const isBuild = process.argv.includes("--build");
const browserSyncInstance = browserSync.create();

const handleServer = server.bind(null, browserSyncInstance);
const handleHTML = html.bind(null, isBuild, browserSyncInstance);
const handleSCSS = scss.bind(null, isBuild, browserSyncInstance);
const handleJS = javascript.bind(null, !isBuild, browserSyncInstance);
const handleImages = images.bind(null, isBuild, browserSyncInstance);

function watcher() {
	gulp.watch(filePaths.watch.static, copy);
	gulp.watch(filePaths.watch.html, handleHTML);
	gulp.watch(filePaths.watch.scss, handleSCSS);
	gulp.watch(filePaths.watch.js, handleJS);
	gulp.watch(filePaths.watch.images, handleImages);
}

const fonts = gulp.series(otfToTtf, ttfToWoff, fontStyle);

const devTasks = gulp.parallel(copy, copyRootFiles, handleHTML, handleSCSS, handleJS, handleImages);

const mainTasks = gulp.series(fonts, devTasks);

const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, handleServer));
const build = gulp.series(reset, mainTasks);
const deployZIP = gulp.series(reset, mainTasks, zip);
const deployFTP = gulp.series(reset, mainTasks, ftpDeploy);

gulp.task("default", dev);

export { dev, build, deployZIP, deployFTP };
