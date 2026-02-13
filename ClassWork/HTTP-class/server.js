const user = {
    name: "Ankit",
    age: 20
};

const http = require("http");
const fs = require("fs")
const server = http.createServer((req, res) => {
    const method = req.method;
    const url = req.url;
    // const url = new URL(req.url,`http:// ${}`)
    

    if (method == "GET" && url == "/user") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(user));
    }
    if(method == "POST" && url == "/user"){
        let body = ""
        req.on("data" , (chunk) =>{
            body += chunk;
        })

        req.on("end", () => {
            fs.writeFile("./file.txt" , body , () => {
                res.writeHead(201, "Data written")
                res.end("Data Written");
            })
        })
    }
    // else {
    //     res.writeHead(404, { "Content-Type": "text/plain" });
    //     res.end("Route not found");
    // }
});

server.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});


