import { Redis } from '@upstash/redis'

export const redis = new Redis({
  url: 'https://evident-drake-53611.upstash.io',
  token: process.env.REDIS_KEY,
})
