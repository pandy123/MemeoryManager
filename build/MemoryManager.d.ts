/**
 * 对象消费池管理器
 * @author Y.HUANG
 */
export declare class MemoryManger {
    /**对象池子 */
    private _pools;
    /**
     * 构造函数
     */
    constructor();
    /**
     * 根据类型获取内存池
     * @param clazz
     */
    private _getPoolByClazz(clazz);
    /**
     * 分配一个实例
     */
    allocateObject(clazz: Function): any;
    /**
     * 释放一个实例
     */
    releaseObject(object: any): void;
    /**
     * 回收内存
     */
    dispose(): void;
}
