using Postgrest.Attributes;
using Postgrest.Models;

namespace Backend.DataAccessLayer.Models;

[Table("Projects")]
public class Projects : BaseModel
{
    [PrimaryKey("id")]
    public int ID { get; set; }
    
    [Column("Name")]
    public string Name { get; set; }
    
    [Column("Description")]
    public string Description { get; set; }
    
    [Column("isActive")]
    public bool Active { get; set; }
    
    [Column("OwnerID")]
    public int OwnerID { get; set; }
    
    [Column ("ClosureDate")]
    public DateTime? ClosureDate { get; set; }
    
    [Column ("CreationDate")]
    public DateTime CreationDate { get; }
    
}