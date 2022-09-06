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
var File = /** @class */ (function (_super) {
    __extends(File, _super);
    function File(name, ets, content) {
        var _this = _super.call(this, name) || this;
        _this._content = content || 'New file';
        _this._ets = ets || 'txt';
        return _this;
    }
    Object.defineProperty(File.prototype, "content", {
        get: function () {
            return this._content;
        },
        set: function (c) {
            this._content = c;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(File.prototype, "ets", {
        get: function () {
            return this._ets;
        },
        set: function (e) {
            this._ets = e;
        },
        enumerable: false,
        configurable: true
    });
    return File;
}(Entry_1.default));
exports.default = File;
