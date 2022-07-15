import 'dotenv/config'
import {exec} from "child_process";
import util from 'util'
import fg from 'fast-glob'

const execAsync = util.promisify(exec)

const patterns: string = `${process.env.IMAGE_DIR}/**/**/*.jpg`

fg(patterns)
  .then(files => {
    const total: number = files.length
    files.forEach(async (file: string, index: number) => {
      const command: string = `identify -regard-warnings '${file}'`
      try {
        console.log(`${index}/${total}`)
        await execAsync(command)
      } catch {
        console.log(file)
      }
    })
  })

