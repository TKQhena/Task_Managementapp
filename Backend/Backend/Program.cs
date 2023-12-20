using Backend.DataAccessLayer;
using Backend.DataAccessLayer.Models;
using Supabase;

var builder = WebApplication.CreateBuilder(args);
var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";
// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Add Supabase services
builder.Services.AddSingleton<Supabase.Client>(_ =>
    new Supabase.Client(
        builder.Configuration["Supabase:Url"],
        builder.Configuration["Supabase:Key"],
        new SupabaseOptions
        {
            AutoConnectRealtime = true,
            Schema = "taskit_db"
        })
);

//Add CORS Policy
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins,
        policy =>
        {
            policy.WithOrigins("http://localhost:5173", "http://127.0.0.1:5173")
                .AllowAnyHeader()
                .AllowAnyHeader();
        });
});


// Add DataServices
builder.Services.AddSingleton<IUserServices, UserServices>();
builder.Services.AddSingleton<IProjectServies, ProjectServices>();
builder.Services.AddSingleton<ITaskServices, TaskServices>();
builder.Services.AddSingleton<IProjectMembersServices, ProjectMembersServices>();

//Add Json interpreter 
builder.Services.AddControllers().AddNewtonsoftJson();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors(MyAllowSpecificOrigins);

app.UseAuthorization();

app.MapControllers();


app.Run();