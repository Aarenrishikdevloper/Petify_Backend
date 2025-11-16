import NodeCache from "node-cache"; 
import { Store, IncrementResponse } from "express-rate-limit"; 
export class NodeCacheStore implements Store {   
    private cache :NodeCache;  
    constructor(ttlsecounds:number){
        this.cache = new NodeCache({stdTTL:ttlsecounds})
    }
    increment(key:string):IncrementResponse{
        const current = this.cache.get<number>(key) || 0; 
        const newCount = current + 1; 
        this.cache.set(key,newCount); 
        return{
            totalHits:newCount, 
            resetTime:new Date(Date.now() + this.cache.options.stdTTL! * 1000)
        }
    }
    decrement(key: string):void{
        const current = this.cache.get<number>(key); 
        if(current && current > 0){
            this.cache.set(key, current - 1)
        }
    }
    resetKey(key: string): void{
        this.cache.del(key)
    }

}