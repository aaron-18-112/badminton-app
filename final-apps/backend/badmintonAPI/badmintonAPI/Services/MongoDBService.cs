using badmintonAPI.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;
using MongoDB.Bson;

namespace badmintonAPI.Services;

public class MongoDbService
{
    private readonly IMongoCollection<Player> _playerCollection;


    public MongoDbService(IOptions<MongoDBSettings> mongoDbSettings)
    {
        MongoClient client = new MongoClient(mongoDbSettings.Value.ConnectionURI);
        IMongoDatabase database = client.GetDatabase(mongoDbSettings.Value.DatabaseName);
        _playerCollection = database.GetCollection<Player>(mongoDbSettings.Value.CollectionName);
    }

    public async Task<List<Player>> GetAsync()
    {
        return await _playerCollection.Find(new BsonDocument()).ToListAsync();
    }

    public async Task CreateAsync(Player player)
    {
        await _playerCollection.InsertOneAsync(player);
        return;
    }

    public async Task DeleteAsync(string playerId)
    {
        FilterDefinition<Player> filter = Builders<Player>.Filter.Eq<string>(p => p.Id, playerId);
        await _playerCollection.DeleteOneAsync(filter);
        return;
    }
    
    public async Task<long> CountAsync()
    {
        return await _playerCollection.CountDocumentsAsync(FilterDefinition<Player>.Empty);
    }

}


