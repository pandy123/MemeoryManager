import { ObjectPool } from './ObjectPool';
/**
 * 对象消费池管理器
 * @author Y.HUANG
 */
export class MemoryManger {
   /**对象池子 */
   private _pools: Array<ObjectPool>;

   /**
    * 构造函数
    */
   constructor() {
      this._pools = new Array<ObjectPool>();
   }

   /**
    * 根据类型获取内存池
    * @param clazz 
    */
   private _getPoolByClazz(clazz: Function): any {
      var prototype = clazz.prototype;
      var pool = prototype.__pool;
      if (!pool || pool.type !== clazz) {
         pool = new ObjectPool(clazz);
         prototype.__pool = pool;
         this._pools.push(pool);
      }
      return pool;
   }

   /**
    * 分配一个实例
    */
   public allocateObject(clazz: Function): any {
      var pool = this._getPoolByClazz(clazz) as ObjectPool;
      return pool.allocObject();
   }

   /**
    * 释放一个实例
    */
   public releaseObject(object: any) {
      if (object.__pool) {
         (object.__pool as ObjectPool).releaseObject(object);
      }
   }

   /**
    * 回收内存
    */
   public dispose() {
      var count = this._pools.length;
      for (var i = 0; i < count; i++) {
         this._pools[i].dispose();
      }
      this._pools = null as any;

   }
}