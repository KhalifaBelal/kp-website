const compression = require("compression");
const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    if (
      req.headers["accept-encoding"]?.includes("gzip") &&
      req.url.endsWith(".js")
    ) {
      req.url = req.url + ".gz";
      res.setHeader("Content-Encoding", "gzip");
    }

    handle(req, res, parse(req.url, true));
  }).listen(443, (err) => {
    if (err) throw err;
    console.log("> Ready on https://www.khalifapartners.com/");
  });
});
