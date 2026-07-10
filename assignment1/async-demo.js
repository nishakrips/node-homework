const fs = require("fs")
const fspromise = require("fs/promises")
const path = require("path")

const sampleDir = path.join(__dirname, "sample-files")
const sampleFilePath = path.join(sampleDir, "sample.txt")

fs.mkdirSync(sampleDir, { recursive: true })

// 1. Callback style
fs.writeFile(sampleFilePath, "Hello, async world!", (err) => {
  if (err) {
    console.log("File write failed:", err.message)
    return
  }

  fs.readFile(sampleFilePath, "utf8", (readErr, content) => {
    if (readErr) {
      console.log("File read failed:", readErr.message)
      return
    }

    console.log(`Callback read: ${content}`)
  })
})

// 2. Promise style
fspromise
  .writeFile(sampleFilePath, "Hello, async world!")
  .then(() => fspromise.readFile(sampleFilePath, "utf8"))
  .then((content) => {
    console.log(`Promise read: ${content}`)
  })
  .catch((err) => {
    console.log("File read failed:", err.message)
  })

// 3. Async/Await style
async function run() {
  try {
    await fspromise.writeFile(sampleFilePath, "Hello, async world!")
    const content = await fspromise.readFile(sampleFilePath, "utf8")

    console.log(`Async/Await read: ${content}`)
  } catch (err) {
    console.log("File operation failed:", err.message)
  }
}
run()
