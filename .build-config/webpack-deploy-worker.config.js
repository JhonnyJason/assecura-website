module.exports = {
    "mode": "production",
    "context": "/home/lenny/thingies/assecura-website",
    "entry": {},
    "output": {
        "filename": "[name].js",
        "path": "/home/lenny/thingies/assecura-website/toolset/build/bundles/deploy"
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