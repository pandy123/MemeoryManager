/**
 * 对象消费池
 * @author Y.HUANG
 */
export declare class ObjectPool {
    private _members;
    private _remainCount;
    private _createCount;
    private _allocateCount;
    private _releaseCount;
    private _type;
    constructor(type: any);
    /**
     * return a object of type
     */
    allocObject(): any;
    /**
     * 释放一个对象，进入存储栈
     */
    releaseObject(object: any): void;
    /**
     * 未被释放的对象数量
     */
    unReleaseCount(): number;
    /**
     * 释放所有实例
     */
    dispose(): void;
}
