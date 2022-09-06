"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Entry_1 = require("./Entry");
var File_1 = require("./File");
var Folder = /** @class */ (function (_super) {
    __extends(Folder, _super);
    function Folder(name) {
        var _this = _super.call(this, name) || this;
        _this._children = [];
        return _this;
    }
    Object.defineProperty(Folder.prototype, "children", {
        get: function () {
            return this._children;
        },
        enumerable: false,
        configurable: true
    });
    Folder.prototype.addChildren = function (entry) {
        if (this._children.length > 0) {
            for (var i = 0; i < this._children.length; i++) {
                if (this._children[i].name === entry.name) {
                    console.log("".concat(entry.name, " is already existed, skipped!"));
                    return;
                }
            }
        }
        entry.parent = this;
        this._children.push(entry);
    };
    Folder.prototype.removeChildren = function (name) {
        if (this._children.length > 0) {
            for (var i = 0; i < this._children.length; i++) {
                if (this._children[i].name === name) {
                    this._children.splice(i, 1);
                    return;
                }
            }
        }
    };
    Folder.prototype.clear = function () {
        this._children = [];
    };
    Folder.prototype.list = function () {
        if (this._children.length < 1) {
            return;
        }
        // log root
        if (this._parent === null) {
            console.log(this._name);
        }
        for (var i = 0; i < this._children.length; i++) {
            var parentCount = this.countParent(this._children[i]);
            var treeStr = ' ';
            for (var j = 1; j < parentCount; j++) {
                treeStr += '│ ';
            }
            if (this._children[i] instanceof File_1.default) {
                var file = this._children[i];
                console.log("".concat(treeStr).concat(i === this._children.length - 1 ? '└' : '├', "\u2500").concat(file.name, ".").concat(file.ets));
            }
            else {
                var folder = this._children[i];
                console.log("".concat(treeStr).concat(0 === folder._children.length ? '└' : '├', "\u2500").concat(this._children[i].name));
                folder.list();
            }
        }
    };
    return Folder;
}(Entry_1.default));
exports.default = Folder;
