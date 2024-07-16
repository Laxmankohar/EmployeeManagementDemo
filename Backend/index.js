import express from 'express';
import { connectDB } from './DB/db.js';

const app = express();

app.use(express.json());

connectDB()

.then(() => {
  app.listen(process.env.PORT || 8000, () => {
    console.log(`Server is running on port ${process.env.PORT}`|| 8000);
  });
})
.catch((err) => console.log("MongoDB connection failed: ", err));



// import routes
import employeeRoutes from './Routes/employee.routes.js';
app.use('/api/v1/employees', employeeRoutes);