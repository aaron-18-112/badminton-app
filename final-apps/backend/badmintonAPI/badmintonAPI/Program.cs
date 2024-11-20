using badmintonAPI.Models;
using badmintonAPI.Models;
using badmintonAPI.Services;

var builder = WebApplication.CreateBuilder(args);
const string myAllowSpecificOrigins = "_MyAllowSubdomainPolicy";
builder.Services.Configure<MongoDBSettings>(builder.Configuration.GetSection("MongoDB"));
builder.Services.AddSingleton<MongoDbService>();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddControllers();
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: myAllowSpecificOrigins,
        policy => { policy.WithOrigins("*").AllowAnyMethod().AllowAnyOrigin().AllowAnyHeader(); });
});
var app = builder.Build();
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();
app.UseCors(myAllowSpecificOrigins);
app.Run();