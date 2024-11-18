using badminton_api.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;
using MongoDB.Bson;

namespace badminton_api.Services;

public class MongoDBService
{
    private readonly IMongoCollection<Player> _playerCollection;
    public MongoDBService(IOptions<MongoDBSettings> mongoDBSettings) {
        MongoClient client = new MongoClient(mongoDBSettings.Value.ConnectionURI);
        IMongoDatabase database = client.GetDatabase(mongoDBSettings.Value.DatabaseName);
        _playerCollection = database.GetCollection<Player>(mongoDBSettings.Value.CollectionName);
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

    public async Task DeleteAsync(string id)
    {
        FilterDefinition<Player> filter = Builders<Player>.Filter.Eq("Id", id);
        await _playerCollection.DeleteOneAsync(filter);
        return;
    }

}