import fastify from "fastify";
import { Kindle } from "kindle-api";
import { env } from "./env";

export const app = fastify()

const kindle = await Kindle.fromConfig({
  cookies: env.UBID_MAIN,
  deviceToken: env.DEVICE_TOKEN,
  tlsServer: {
    url: env.API_URL,
    apiKey: env.API_KEY,
  },
});

console.log(kindle.defaultBooks);