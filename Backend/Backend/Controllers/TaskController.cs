using Backend.DataAccessLayer;
using Backend.DataAccessLayer.Models;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class TaskController : ControllerBase
{
    private readonly ITaskServices _task;

    public TaskController(ITaskServices task)
    {
        _task = task;
    }
    
    [HttpGet("{id}")]
    public async Task<IEnumerable<TaskModel>> GetTaskByProjectID(int id)
    {
        var tasks = await _task.GetTaskByProjectID(id);
        return tasks;
    }
    
    [HttpGet("assigned/{id}")]
    public async Task<IEnumerable<TaskModel>> GetTaskByAssignedTo(int id)
    {
        var tasks = await _task.GetTaskByAssignedTo(id);
        return tasks;
    }
    
    [HttpGet("created/{id}")]
    public async Task<IEnumerable<TaskModel>> GetTaskByCreatedBy(int id)
    {
        var tasks = await _task.GetTaskByCreatedBy(id);
        return tasks;
    }
    
    [HttpPost]
    public async Task<bool> AddTask([FromBody]TaskModel task)
    {

        bool completed = await _task.AddTask(task);
        return completed;
    }
    
    [HttpPut]
    public async Task<bool> UpdateTask([FromBody] TaskModel task)
    {
        var completed = await _task.UpdateTask(task);
        return completed;
    }
    
    [HttpDelete("{id}")]
    public async Task<bool> DeleteTask(int id)
    {
        var completed = await _task.DeleteTask(id);
        return completed;
    }
    
    
}