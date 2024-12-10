import { createClient, RedisClientType, SetOptions } from 'redis'

class CacheClient {
    private static instance: CacheClient
    public client: RedisClientType

    constructor() {
        this.client = createClient({
            url: process.env.REDIS_URL
        })
    }

    async connect(): Promise<void> {
        this.client.connect()
    }
    async getCache<T>(key: string): Promise<T | undefined> {
        const cache = await this.client.get(key)

        if (cache) return JSON.parse(cache) as T
    }
    async setCache(key: string, value: unknown, options?: SetOptions): Promise<void> {
        await this.client.set(key, JSON.stringify(value), options)
    }

    static getInstance(): CacheClient {
        if (this.instance === undefined) {
            this.instance = new CacheClient()
        }
        return this.instance
    }
}

export default CacheClient