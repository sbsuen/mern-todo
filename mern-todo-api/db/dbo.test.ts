import { describe, expect, it, jest } from '@jest/globals';
import dbo from './dbo';
import { MongoClient, Db, Collection, ObjectId } from 'mongodb'

const connectSpy = jest.spyOn(MongoClient.prototype, 'connect');
const dbSpy = jest.spyOn(MongoClient.prototype, 'db');
const closeSpy = jest.spyOn(MongoClient.prototype, 'close');
const commandSpy = jest.spyOn(Db.prototype, 'command');
const collectionSpy = jest.spyOn(Db.prototype, 'collection');

describe('dbo', () => {
	describe('connectToDatabase', () => {
		it(`should console log "Database Ping Returned Successful if successful`, async () => {
			const consoleSpy = jest.spyOn(console, 'log');
			await dbo.connectToDatabase();
			expect(connectSpy).toBeCalled();
			expect(dbSpy).toBeCalledWith('mern-todo');
			expect(commandSpy).toBeCalledWith({ ping: 1 });
			expect(consoleSpy).toBeCalled();
			expect(closeSpy).toBeCalled();
		});
	});
	describe('getAll', () => {
		it('should return an array of documents', async () => {
			const dbName = 'my-database';
			const collectionName = 'my-collection';
			const expected = [
				{ _id: new ObjectId(), name: 'documentOne' },
				{ _id: new ObjectId(), name: 'documentTwo' },
				{ _id: new ObjectId(), name: 'documentThree'}
			];

			jest.spyOn(dbo, 'getManyByQuery').mockResolvedValue(expected);

			const result = await dbo.getAll(dbName, collectionName);
			expect(connectSpy).toBeCalled();
			expect(dbSpy).toBeCalledWith(dbName);
			expect(collectionSpy).toBeCalledWith(collectionName);
			expect(result).toEqual(expected);
			expect(closeSpy).toBeCalled();
		});
		it(`should throw an error if an error occurs`, async () => {
			const dbName = 'my-database';
			const collectionName = 'my-collection';
			
			jest.spyOn(dbo, 'getManyByQuery').mockRejectedValue(new Error('An error occurred'));

			await expect(dbo.getAll(dbName, collectionName)).rejects.toThrow('An error occurred');
		});
	});
	describe('insertOne', () => {
		it('should return an object with the id of the inserted object if successful', async () => {
			const dbName = 'my-database';
			const collectionName = 'my-collection';
			const document = { name: 'myDocument' };
			const expected = {
				"acknowledged": true,
				"insertedId": new ObjectId()
			};

			const insertOneSpy = jest.spyOn(Collection.prototype, 'insertOne').mockResolvedValue(expected);

			const result = await dbo.insertOne(dbName, collectionName, document);

			expect(connectSpy).toBeCalled();
			expect(dbSpy).toBeCalledWith(dbName);
			expect(collectionSpy).toBeCalledWith(collectionName);
			expect(insertOneSpy).toBeCalledWith(document)
			expect(result).toEqual(expected);
			expect(closeSpy).toBeCalled();
		});
		it(`should throw an error if an error occurs`, async () => {
			const dbName = 'my-database';
			const collectionName = 'my-collection';
			const document = { name: 'myDocument' };

			jest.spyOn(Collection.prototype, 'insertOne').mockRejectedValue(new Error('An error occurred'));

			await expect(dbo.insertOne(dbName, collectionName, document)).rejects.toThrow('An error occurred');
		});
	});
	describe('deleteOne', () => {
		it('should return an object specifying one document has been deleted if successful', async () => {
			const dbName = 'my-database';
			const collectionName = 'my-collection';
			const _id = new ObjectId();
			const expected = {
				"acknowledged": true,
				"deletedCount": 1
			};

			const deleteOneSpy = jest.spyOn(Collection.prototype, 'deleteOne').mockResolvedValue(expected);

			const result = await dbo.deleteOne(dbName, collectionName, _id);

			expect(connectSpy).toBeCalled();
			expect(dbSpy).toBeCalledWith(dbName);
			expect(collectionSpy).toBeCalledWith(collectionName);
			expect(deleteOneSpy).toBeCalledWith({ _id: _id });
			expect(result).toEqual(expected);
			expect(closeSpy).toBeCalled();
		});
		it(`should throw an error if an error occurs`, async () => {
			const dbName = 'my-database';
			const collectionName = 'my-collection';
			const _id = new ObjectId();

			jest.spyOn(Collection.prototype, 'deleteOne').mockRejectedValue(new Error('An error occurred'));

			await expect(dbo.deleteOne(dbName, collectionName, _id)).rejects.toThrow('An error occurred');
		});
	});
	describe('updateOne', () => {
		it('should return an object specifying one document has been updated if successful', async () => {
			const dbName = 'my-database';
			const collectionName = 'my-collection';
			const _id = new ObjectId();
			const document = { _id: _id, name: 'myDocument' };
			const expected = {
				"acknowledged": true,
				"modifiedCount": 1,
				"upsertedId": null,
				"upsertedCount": 0,
				"matchedCount": 1
			};

			const updateOneSpy = jest.spyOn(Collection.prototype, 'updateOne').mockResolvedValue(expected);

			const result = await dbo.updateOne(dbName, collectionName, _id, document);

			expect(connectSpy).toBeCalled();
			expect(dbSpy).toBeCalledWith(dbName);
			expect(collectionSpy).toBeCalledWith(collectionName);
			expect(updateOneSpy).toBeCalledWith({ _id: _id }, { $set: document });
			expect(result).toEqual(expected);
			expect(closeSpy).toBeCalled();
		});
		it(`should throw an error if an error occurs`, async () => {
			const dbName = 'my-database';
			const collectionName = 'my-collection';
			const _id = new ObjectId();
			const document = { _id: _id, name: 'myDocument' };

			jest.spyOn(Collection.prototype, 'updateOne').mockRejectedValue(new Error('An error occurred'));

			await expect(dbo.updateOne(dbName, collectionName, _id, document)).rejects.toThrow('An error occurred');
		});
	});
});