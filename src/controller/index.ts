// src/controllers/index.ts
import { Context } from 'hono'

export const healthController = (c: Context) => {
    return c.json({ status: 'ok' })
}


export const verificationController = async (c: Context) => {
  try {
    // ... Verification logic ...
  } catch (error) {
    // ... Error handling ...
  }
}
