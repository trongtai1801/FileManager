"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Entry = /** @class */ (function () {
    function Entry(name) {
        this._name = name;
        this._created = new Date().getTime();
        this._parent = null;
    }
    Object.defineProperty(Entry.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (n) {
            this._name = n;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Entry.prototype, "created", {
        get: function () {
            return this._created;
        },
        set: function (time) {
            this._created = time;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Entry.prototype, "parent", {
        get: function () {
            return this._parent;
        },
        set: function (p) {
            this._parent = p;
        },
        enumerable: false,
        configurable: true
    });
    Entry.prototype.countParent = function (node) {
        if (node.parent === null) {
            return 0;
        }
        var count = 0;
        var p = node.parent;
        do {
            count++;
            p = p.parent;
        } while (p !== null);
        return count;
    };
    return Entry;
}());
exports.default = Entry;
