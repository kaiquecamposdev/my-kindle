import { z } from "zod"

const envSchema = z.object({
  PORT: z.coerce.number().default(8000),
  UBID_MAIN: z.string(),
  AT_MAIN: z.string(),
  X_MAIN: z.string(),
  SESSION_ID: z.string(),
  DEVICE_TOKEN: z.string(),
  API_URL: z.string(),
  API_KEY: z.string()
})

console.log(process.env)

const _env = envSchema.safeParse(process.env)

if (_env.success !== true) {
  console.error('Invalid enviroment variables!', _env.error.format())

  throw new Error('Invalid environment variables.')
}

export const env = _env.data