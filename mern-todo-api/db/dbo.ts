import { MongoClient, Collection } from "mongodb";
import { ObjectId } from "mongodb";
import self from './dbo';

const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);

const connectToDatabase = async () => {
    try {
        await client.connect();

        await client.db("mern-todo").command({ ping: 1 });
        console.log("Database ping returned successful");
    } catch (err) {
		console.error(err);
	} finally {
        await client.close();
    }
}

const getManyByQuery = async (collection: Collection, query: any) => {
	try{
		return await collection.find(query).toArray();
	}
	catch(err){
		throw err;
	}
};

const getAll = async (databaseName: string, collectionName: string) => {
	let result = [];
	try {
		await client.connect();

		const database = client.db(databaseName);
		const collection = database.collection(collectionName);

		result = await self.getManyByQuery(collection, {});
	} catch(err){
		throw err
	}finally {
		await client.close();
	}
	return result;
}

const insertOne = async (databaseName: string, collectionName: string, document: any) => {
	let result;
	try {
		await client.connect();

		const database = client.db(databaseName);
		const collection = database.collection(collectionName);

		result = await collection.insertOne(document);
	} catch(err){
		throw err
	}finally {
		await client.close();
	}
	return result;
}

const deleteOne = async (databaseName: string, collectionName: string, _id: ObjectId) => {
	let result;
	try {
		await client.connect();

		const database = client.db(databaseName);
		const collection = database.collection(collectionName);
		const query = { _id: _id };
		result = await collection.deleteOne(query);
	} catch(err){
		throw err
	}finally {
		await client.close();
	}
	return result;
}

const updateOne = async (databaseName: string, collectionName: string, _id: ObjectId, document: any) => {
	let result;
	try {
		await client.connect();

		const database = client.db(databaseName);
		const collection = database.collection(collectionName);
		const query = { _id: _id };
		const update = { $set: document };
		result = await collection.updateOne(query, update);
	} catch(err){
		throw err
	}finally {
		await client.close();
	}
	return result;
}

export default {
	connectToDatabase,
	getManyByQuery,
	getAll,
	insertOne,
	deleteOne,
	updateOne
}