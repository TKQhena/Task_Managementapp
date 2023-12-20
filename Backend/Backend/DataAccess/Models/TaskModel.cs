using Newtonsoft.Json;
using Postgrest.Attributes;
using Postgrest.Models;

namespace Backend.DataAccessLayer.Models;

[Table("Tasks")]
public class TaskModel : BaseModel
{
    [PrimaryKey("id", false)]
    public int Id { get; set; }
    
    [Column("Taskname")]
    public string Taskname { get; set; }
    
    [Column("description")]
    public string Description { get; set; }
    
    [Column("created_at", ignoreOnInsert:true, ignoreOnUpdate:true, nullValueHandling:NullValueHandling.Include)]
    public DateTime? CreatedAt { get; set; }
    
    [Column("closed_at")]
    public Nullable<DateTime> ClosedAt { get; set; }
    
    [Column("created_by")]
    public int CreatedBy { get; set; }
    
    [Column("assigned_to")]
    public Nullable<int> AssignedTo { get; set; }
    
    [Column("projectId")]
    public int ProjectId { get; set; }
    
    [Column("isActive")]
    public bool IsActive { get; set; }
}