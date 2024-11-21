using System;
using Microsoft.AspNetCore.Mvc;
using badmintonAPI.Services;
using badmintonAPI.Models;
using MongoDB.Bson;

namespace badmintonAPI.Controllers;

[Controller]
[Route("[controller]")]
public class PlayerController : ControllerBase
{
    private readonly MongoDbService _mongoDbService;

    public PlayerController(MongoDbService mongoDbService)
    {
        _mongoDbService = mongoDbService;
    }

    [HttpGet]
    public async Task<List<Player>> Get()
    {
        return await _mongoDbService.GetAsync();
    }

    [HttpPost]
    public async Task<IActionResult> Post([FromBody] Player player)
    {
        await _mongoDbService.CreateAsync(player);
        return CreatedAtAction(nameof(Get), new { id = player.Id }, player.Id);
    }


    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(string id)
    {
        await _mongoDbService.DeleteAsync(id);
        return NoContent();
    }

    [HttpGet("count")]
    public async Task<IActionResult> GetPlayerCount()
    {
        var count = await _mongoDbService.CountAsync();
        return Ok(count);
    }
}