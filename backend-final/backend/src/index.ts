import { Hono } from 'hono'
import userRouter from './routes/user'
import { cors } from 'hono/cors'

const app = new Hono<{
  Bindings : {
    DATABASE_URL : string;
    JWT_SECRET : string;
  };
}>()

app.use('/*', cors({
  origin : "*"
}));

app.route("/api/v1/user", userRouter)

export default app
