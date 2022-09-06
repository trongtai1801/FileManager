import Entry from "./Entry"

class File extends Entry {
    private _content: string
    private _ets: string

    get content() {
        return this._content
    } 
    set content(c: string) {
        this._content = c
    }

    get ets() {
        return this._ets
    } 
    set ets(e: string) {
        this._ets = e
    }

    constructor(name: string, ets?: string, content?: string) {
        super(name)
        this._content = content || 'New file'
        this._ets = ets || 'txt'
    }
}

export default File