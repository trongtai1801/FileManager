import Entry from "./model/Entry"
import File from "./model/File"
import Folder from "./model/Folder"

// npx tsc && node out/index.js

function main(): void {
    const root = new Folder('Root')

    const file1 = new File('File1', 'md')
    const file2 = new File('File2', 'txt')
    const file3 = new File('File3', 'js')
    const file4= new File('File4')
    const file5 = new File('File5')

    const folder1 = new Folder('Folder1')
    const folder2 = new Folder('Folder2')
    const folder3 = new Folder('Folder3')
    const folder4 = new Folder('Folder4')

    folder2.addChildren(file2)
    folder2.addChildren(file3)
    folder2.addChildren(file4)
    folder2.addChildren(file5)

    folder1.addChildren(file1)
    folder1.addChildren(folder2)
    folder1.addChildren(folder3)

    root.addChildren(folder1)
    root.addChildren(folder4)

    root.list()
}

main()