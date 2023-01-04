module.exports = {
    "mode": "development",
    "context": "/home/lenny/thingies/assecura-website",
    "watch": true,
    "entry": {
        "index": "/home/lenny/thingies/assecura-website/toolset/build/js/index.js"
    },
    "output": {
        "filename": "[name].js",
        "path": "/home/lenny/thingies/assecura-website/toolset/build/bundles/dev",
        "publicPath": ""
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