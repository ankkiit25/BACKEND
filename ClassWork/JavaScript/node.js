const fs = require("fs")

setTimeout(() => console.log("Hello from timer 1"), 0)

setImmediate(() => console.log("Hello from Immediate fn 1"))

