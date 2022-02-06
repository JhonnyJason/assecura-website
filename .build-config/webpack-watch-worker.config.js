module.exports = {
    "mode": "development",
    "devtool": "none",
    "context": "/home/lenny/thingies/assecura-website",
    "watch": true,
    "entry": {},
    "output": {
        "filename": "[name].js",
        "path": "/home/lenny/thingies/assecura-website/toolset/build/bundles/dev"
    },
    "resolve": {
        "fallback": {
            "buffer": false,
            "fs": false,
            "tls": false,
            "net": false,
            "path": false,
            "zlib": false,
            "http": false,
            "https": false,
            "stream": false,
            "crypto": false
        }
    }
}