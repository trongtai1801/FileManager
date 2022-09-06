class Entry {
    protected _name: string
    protected _created: number
    protected _parent: Entry

    get name() {
        return this._name
    } 
    set name(n: string) {
        this._name = n
    }

    get created() {
        return this._created
    }
    set created(time: number) {
        this._created = time
    }

    get parent() {
        return this._parent
    }
    set parent(p: Entry) {
        this._parent = p
    }

    constructor(name: string) {
        this._name = name
        this._created = new Date().getTime()
        this._parent = null
    }

    public countParent(node: Entry) {
        if (node.parent === null) {
            return 0
        }
        let count = 0
        let p = node.parent
        do {
            count++
            p = p.parent
        } while (p !== null)
        return count
    }
}

export default Entry