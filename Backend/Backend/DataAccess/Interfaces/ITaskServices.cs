using Backend.DataAccessLayer.Models;

namespace Backend.DataAccessLayer;

public interface ITaskServices
{
    Task<IEnumerable<TaskModel>> GetTaskByProjectID(int projectID);
    
    Task<IEnumerable<TaskModel>> GetTaskByAssignedTo(int userID);
    
    Task<IEnumerable<TaskModel>> GetTaskByCreatedBy(int userID);
    
    Task<bool> AddTask(TaskModel task);
    
    Task<bool> UpdateTask(TaskModel task);
    
    Task<bool> DeleteTask(int id);
    
    
}