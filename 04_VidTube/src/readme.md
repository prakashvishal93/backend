### I’ve successfully connected my application to a MongoDB database and organized the file structure accordingly.

- In src/db/index.js, the MongoDB connection logic is defined. The connection string is securely stored in the .env file.

- Here's the code for src/db/index.js:
      
```
import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';
const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`\n MongoDB Connected! DB Host: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1); // Exits the process if the connection fails
    }
};
```

export default connectDB;
In the .env file, I've stored the MongoDB connection string as MONGODB_URI.

Additionally, in the constants.js file, I’ve defined the database name as:
```export const DB_NAME = 'vidtube'; ```


- Finally, in the main index.js file (located in the src directory), I import and execute the connectDB() function to establish the MongoDB connection when the application starts.

