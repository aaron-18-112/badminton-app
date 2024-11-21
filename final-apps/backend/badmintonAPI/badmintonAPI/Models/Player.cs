using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System.Text.Json.Serialization;

namespace badmintonAPI.Models;

public class Player
{
    [BsonId]
    [BsonElement("_id")]
    [BsonRepresentation(MongoDB.Bson.BsonType.ObjectId)]
    public string? Id { get; set; } = null;
    public string playerId { get; set; } = null!;
    public string name { get; set; } = null!;
    public string firstName { get; set; } = null!;
    public string lastName { get; set; } = null!;
    public string email { get; set; } = null!;
}