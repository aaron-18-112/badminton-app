using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace BadmintonApi.Models;

public class Player
{
    [BsonId]
    [BsonElement("_id")]
    [BsonRepresentation(BsonType.ObjectId)]
    public ObjectId Id { get; set; } = ObjectId.GenerateNewId();

    public string firstName { get; set; } = null!;
    public string lastName { get; set; } = null!;
    public string email { get; set; } = null!;
}