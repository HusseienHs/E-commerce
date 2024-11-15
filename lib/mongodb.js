import { MongoClient, ServerApiVersion } from "mongodb";

if (!process.env.MONGODB_URI) {
    throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const uri = process.env.MONGODB_URI;
const options = {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
};

let client;

if (process.env.NODE_ENV === "development") {
    // Use global._mongoClient to store the client in development to avoid multiple instances.
    if (!global._mongoClient) {
        global._mongoClient = new MongoClient(uri, options);
    }
    client = global._mongoClient;
} else {
    // In production mode, create a new client for each instance.
    client = new MongoClient(uri, options);
}

// Export a module-scoped MongoClient. By doing this in a
// separate module, the client can be shared across functions.
export default client;
