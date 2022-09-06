"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var File_1 = require("./model/File");
var Folder_1 = require("./model/Folder");
// npx tsc && node out/index.js
function main() {
    var root = new Folder_1.default('Root');
    var file1 = new File_1.default('File1', 'md');
    var file2 = new File_1.default('File2', 'txt');
    var file3 = new File_1.default('File3', 'js');
    var file4 = new File_1.default('File4');
    var file5 = new File_1.default('File5');
    var folder1 = new Folder_1.default('Folder1');
    var folder2 = new Folder_1.default('Folder2');
    var folder3 = new Folder_1.default('Folder3');
    var folder4 = new Folder_1.default('Folder4');
    // root.addChildren(file1)
    // root.addChildren(file2)
    // root.addChildren(file3)
    folder2.addChildren(file2);
    folder2.addChildren(file3);
    folder2.addChildren(file4);
    folder2.addChildren(file5);
    folder1.addChildren(file1);
    folder1.addChildren(folder2);
    folder1.addChildren(folder3);
    root.addChildren(folder1);
    root.addChildren(folder4);
    root.list();
}
main();
