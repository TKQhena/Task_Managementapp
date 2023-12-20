using Postgrest.Attributes;
using Postgrest.Models;

namespace Backend.DataAccessLayer.Models;

[Table("Project_Members")]
public class ProjectMembers : BaseModel
{
    [PrimaryKey("id", false)]
    public int Id { get; set; }
    
    [Column("projectID")]
    public int ProjectId { get; set; }
    
    [Column("userID")]
    public int UserId { get; set; }
    
    [Column("isAdmin")]
    public bool IsAdmin { get; set; }
}