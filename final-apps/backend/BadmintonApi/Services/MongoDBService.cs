﻿using System.ComponentModel.DataAnnotations;
using BadmintonApi.Models;
using Microsoft.Extensions.Options;
using MongoDB.Bson;
using MongoDB.Driver;

namespace BadmintonApi.Services;

public class MongoDBService
{
    private readonly IMongoCollection<Player> _playerCollection;

    public MongoDBService(IOptions<MongoDBSettings> mongoDBSettings)
    {
        var client = new MongoClient(mongoDBSettings.Value.ConnectionURI);
        var database = client.GetDatabase(mongoDBSettings.Value.DatabaseName);
        _playerCollection = database.GetCollection<Player>(mongoDBSettings.Value.CollectionName);
    }

    public async Task<List<Player>> GetAsync()
    {
        return await _playerCollection.Find(new BsonDocument()).ToListAsync();
    }

    public async Task<long> GetPlayerCountAsync()
    {
        return await _playerCollection.CountDocumentsAsync(new BsonDocument());
    }

    public async Task CreateAsync(Player player)
    {
        await _playerCollection.InsertOneAsync(player);
    }

    public async Task DeleteAsync(string id)
    {
        var objectId = ObjectId.Parse(id);
        FilterDefinition<Player> filter = Builders<Player>.Filter.Eq(player => player.id, objectId.ToString());
        await _playerCollection.DeleteOneAsync(filter);
    }

    public async Task DeleteAllAsync()
    {
        var filter = Builders<Player>.Filter.Empty;
        await _playerCollection.DeleteManyAsync(filter);
    }

    public async Task<UpdateResult> UpdatePlayerPaymentStatus(string playerId, bool paid)
    {
        var filter = Builders<Player>.Filter.Eq(player => player.id, playerId);
        var update = Builders<Player>.Update.Set(player => player.paid, paid);
        return await _playerCollection.UpdateOneAsync(filter, update);
    }
}