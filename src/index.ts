import { Hono } from 'hono'
import router from './routes' // Import the combined router
import { cors } from 'hono/cors';


const app = new Hono();
 
app.use(cors());

// Error handling middleware
app.onError((err, c) => {
  console.error('Error:', err)
  return c.json({ error: 'Internal Server Error' }, 500)
})


app.route('/', router) 



export default app
