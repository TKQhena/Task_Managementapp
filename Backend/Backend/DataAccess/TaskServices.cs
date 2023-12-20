using Supabase;

namespace Backend.DataAccessLayer.Models;

public class TaskServices : ITaskServices
{
    private readonly Client _client;
    
    public TaskServices(Client superbaseClient)
    {
        _client = superbaseClient;
    }


    public Task<IEnumerable<TaskModel>> GetTaskByProjectID(int projectID)
    {
        throw new NotImplementedException();
    }

    public async Task<IEnumerable<TaskModel>> GetTaskByAssignedTo(int userID)
    {
        var tasks = await _client.From<TaskModel>().Select("*").Where(x => x.AssignedTo == userID).Get();

        return tasks.Models;
    }

    public async Task<IEnumerable<TaskModel>> GetTaskByCreatedBy(int userID)
    {
        var tasks = await _client.From<TaskModel>().Select("*").Where(x => x.CreatedBy == userID).Get();

        return tasks.Models;
    }

    public async Task<bool> AddTask(TaskModel task)
    {
        bool completed = false;
        await _client.From<TaskModel>().Insert(task);
        completed = true;
        return completed;
    }

    public async Task<bool> UpdateTask(TaskModel task)
    {
        bool completed = false;
        await _client.From<TaskModel>().Upsert(task);
        completed = true;
        return completed;
    }

    public async Task<bool> DeleteTask(int id)
    {
        bool completed = false;
        await _client.From<TaskModel>().Where(x => x.Id == id).Delete();
        completed = true;
        return completed;
    }
}