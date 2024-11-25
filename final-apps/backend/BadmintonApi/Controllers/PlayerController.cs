﻿using System.ComponentModel.DataAnnotations;
using BadmintonApi.Models;
using BadmintonApi.Services;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
using MongoDB.Driver;

namespace BadmintonApi.Controllers;

[Controller]
[Route("api/[controller]")]
public class PlayerController : Controller
{
    private readonly MongoDBService _mongoDBService;

    public PlayerController(MongoDBService mongoDBService)
    {
        _mongoDBService = mongoDBService;
    }

    [HttpGet("get-all-players")]
    public async Task<List<Player>> Get()
    {
        return await _mongoDBService.GetAsync();
    }

    [HttpGet("get-number-of-players")]
    public async Task<IActionResult> GetPlayerCount()
    {
        var count = await _mongoDBService.GetPlayerCountAsync();
        return Ok(count);
    }

    [HttpPost("create-player")]
    public async Task<IActionResult> Post([FromBody] Player player)
    {
        await _mongoDBService.CreateAsync(player);
        return CreatedAtAction(nameof(Get), new { id = player.id }, player);
    }

    [HttpDelete("delete-player-by-id/{id}")]
    public async Task<IActionResult> Delete(string id)
    {
        await _mongoDBService.DeleteAsync(id);
        return NoContent();
    }

    [HttpDelete("delete-all-players")]
    public async Task<IActionResult> DeleteAll()
    {
        await _mongoDBService.DeleteAllAsync();
        return NoContent();
    }

    [HttpPatch("update-player-payment-status/{id}")]
    public async Task<IActionResult> PatchAsync(string id, [FromBody] bool paid)
    {
        var filter = Builders<Player>.Filter.Eq(player => player.id, id);
        var update = Builders<Player>.Update.Set(player => player.paid, paid);
        var result = await _mongoDBService.UpdatePlayerPaymentStatus(id, paid);
        if (result.MatchedCount == 0) return NotFound();
        return NoContent();
    }
}