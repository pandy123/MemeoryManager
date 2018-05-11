# MemoryManger

#install
```js
npm install memoryutil
```

#use

```js
var MemoryManager = require('memoryutil').MemoryManger
var memeorypool = new MemoryManager()
var Point = function(x, y) {
    this.x = x
    this.y = y
}

var Line = function(point1, point2) {
    this.start = point1
    this.end = point2
}

var point1 = memeorypool.allocateObject(Point)
var point2 = memeorypool.allocateObject(Point)
var line = memeorypool.allocateObject(Line)
```
