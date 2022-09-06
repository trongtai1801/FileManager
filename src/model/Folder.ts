import Entry from "./Entry";
import File from "./File";

class Folder extends Entry {
    private _children: Array<Entry>

    get children() {
        return this._children
    }

    constructor(name: string) {
        super(name)
        this._children = []
    }

    addChildren(entry: Entry) {
        if (this._children.length > 0) {
            for (let i = 0; i < this._children.length; i++) {
                if (this._children[i].name === entry.name) {
                    console.log(`${entry.name} is already existed, skipped!`)
                    return
                }
            }
        }
        entry.parent = this
        this._children.push(entry)
    }

    removeChildren(name: string) {
        if (this._children.length > 0) {
            for (let i = 0; i < this._children.length; i++) {
                if (this._children[i].name === name) {
                    this._children.splice(i, 1)
                    return
                }
            }
        } 
    }

    clear() {
        this._children = []
    }

    list() {
        if (this._children.length < 1) {
            return
        }
        // log root
        if (this._parent === null) {
            console.log(this._name)
        }
        for (let i = 0; i < this._children.length; i++) {
            let parentCount = this.countParent(this._children[i])
            let treeStr = ' '
            for (let j = 1; j < parentCount; j++) {
                treeStr += '│ '
            }
            if (this._children[i] instanceof File) {
                const file = this._children[i] as File
                console.log(`${treeStr}${i === this._children.length - 1 ? '└' : '├'}─${file.name}.${file.ets}`)
            } else {
                const folder = this._children[i] as Folder
                console.log(`${treeStr}${0 === folder._children.length ? '└' : '├'}─${this._children[i].name}`)
                folder.list()
            }
        }
    }
}

export default Folder