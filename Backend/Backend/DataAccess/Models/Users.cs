using Postgrest.Attributes;
using Postgrest.Models;

namespace Backend.DataAccessLayer.Models;

[Table("Users")]
public class Users: BaseModel
{
    [PrimaryKey("id", false)]
    public long Id { get; set; }
    
    [Postgrest.Attributes.Column("name")]
    public string name { get; set; }
    
    [Postgrest.Attributes.Column("surname")]
    public string surname { get; set; }
    
    [Postgrest.Attributes.Column("email")]
    public string Email { get; set; }
    
    [Postgrest.Attributes.Column("password")]
    public string Password { get; set; }
}