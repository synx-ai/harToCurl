# harToCurl snippet converter
![deprecated](https://img.shields.io/badge/deprecated-unmaintained-dd3354?style=flat-square)

> Convert webdev HTTP Archive Request files (.har) to curl requests.

This project was forked from [snoe/harToCurl](https://github.com/snoe/harToCurl) with the purpose of having a downloable script tha could help to test request from a larger project. 

It works with no more dependencies tan Python3, but there are several other tools better suited for this purpose like [Kong/httpsnippet](https://github.com/Kong/httpsnippet) which we are currently using.

## How to use 

Simply call this script with a har filename as argument:

```console
python harToCurl file.har
```

It will output the equivalente curl call for that request.
