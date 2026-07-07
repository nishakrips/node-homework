const os = require("os")
const path = require("path")
const fs = require("fs")
const fsp = require("fs/promises")

const sampleFilesDir = path.join(__dirname, "sample-files")
fs.mkdirSync(sampleFilesDir, { recursive: true })

console.log(`Platform: ${os.platform()}`)
console.log(`CPU: ${os.cpus().length}`)
console.log(`Total Memory: ${os.totalmem()}`)

const joinedPath = path.join(sampleFilesDir, "largefile.txt")
console.log(`Joined path: ${joinedPath}`)

fsp
  .writeFile(joinedPath, "Hello from fs.promises")
  .then(() => fsp.readFile(joinedPath, "utf8"))
  .then((content) => {
    // console.log(`fs.promises read: ${content}`)
  })
  .catch((err) => {
    console.log("Error reading file:", err.message)
  })

// Streams for large files- log first 40 chars of each chunk
const writeStream = fs.createWriteStream(
  path.join(sampleFilesDir, "largefile.txt"),
)
for (let i = 0; i < 50; i++) {
  writeStream.write(`This is line ${i + 1}\n`)
}

writeStream.on("finish", () => {
  // console.log("Finished writing large file with streams.")

  const readStream = fs.createReadStream(
    path.join(sampleFilesDir, "largefile.txt"),
    {
      encoding: "utf8",
    },
  )

  readStream.on("data", () => {
    console.log(`Read chunk: This is a line in a large file...`)
  })

  readStream.on("end", () => {
    console.log("Finished reading large file with streams.")
  })

  readStream.on("error", (err) => {
    console.log("Error reading file:", err.message)
  })
})

writeStream.end()
