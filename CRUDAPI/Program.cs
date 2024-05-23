using CRUDAPI.Models;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);


ConfigureServices(builder);
// Add services to the container.
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
void ConfigureServices(WebApplicationBuilder services)
{
    builder.Services.AddDbContext<Contexto>(opcoes => opcoes.UseSqlServer(builder.Configuration.GetConnectionString("ConexaoBD")));

    // builder.Services.AddHttpsRedirection(options =>
    // {
    //     options.HttpsPort = 5163; // Porta HTTPS personalizada
    // });

    // Aula_5
    builder.Services.AddCors();
}

app.UseHttpsRedirection();

//app.UseRouting();

// Aula_5
app.UseCors(opcoes => opcoes.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());

app.UseAuthorization();

app.MapControllers();

app.Run();
