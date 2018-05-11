"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ObjectPool_1 = require("./ObjectPool");
/**
 * 对象消费池管理器
 * @author Y.HUANG
 */
var MemoryManger = /** @class */ (function () {
    /**
     * 构造函数
     */
    function MemoryManger() {
        this._pools = new Array();
    }
    /**
     * 根据类型获取内存池
     * @param clazz
     */
    MemoryManger.prototype._getPoolByClazz = function (clazz) {
        var prototype = clazz.prototype;
        var pool = prototype.__pool;
        if (!pool || pool.type !== clazz) {
            pool = new ObjectPool_1.ObjectPool(clazz);
            prototype.__pool = pool;
            this._pools.push(pool);
        }
        return pool;
    };
    /**
     * 分配一个实例
     */
    MemoryManger.prototype.allocateObject = function (clazz) {
        var pool = this._getPoolByClazz(clazz);
        return pool.allocObject();
    };
    /**
     * 释放一个实例
     */
    MemoryManger.prototype.releaseObject = function (object) {
        if (object.__pool) {
            object.__pool.releaseObject(object);
        }
    };
    /**
     * 回收内存
     */
    MemoryManger.prototype.dispose = function () {
        var count = this._pools.length;
        for (var i = 0; i < count; i++) {
            this._pools[i].dispose();
        }
        this._pools = null;
    };
    return MemoryManger;
}());
exports.MemoryManger = MemoryManger;
//# sourceMappingURL=MemoryManager.js.map