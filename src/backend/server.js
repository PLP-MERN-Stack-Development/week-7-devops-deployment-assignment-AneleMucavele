import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/users.js';
import postRoutes from './routes/posts.js';

const app = express();

app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use('/api/users', userRoutes);

app.listen(process.env.PORT || 3001, () => {
  console.log(`Server running on port ${process.env.PORT || 3001}`);

// Basic health check
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'UP',
    timestamp: new Date(),
    dbStatus: mongoose.connection.readyState === 1 ? 'CONNECTED' : 'DISCONNECTED'
  });
});

// Advanced health check (with dependencies)
app.get('/health/deep', async (req, res) => {
  const checks = {
    database: mongoose.connection.readyState === 1,
    thirdPartyAPI: await checkThirdPartyAPI() // Implement this
  };
  res.status(Object.values(checks).every(v => v) ? 200 : 503).json(checks);
});
});