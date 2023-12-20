using Backend.DataAccessLayer.Models;
using Supabase;

namespace Backend.DataAccessLayer;

public class ProjectServices : IProjectServies
{
    private readonly Client _client;


    public ProjectServices(Client superbaseClient)
    {
        _client = superbaseClient;
    }

    public async Task<IEnumerable<Projects>> GetProjectsByOwnerId(int ID)
    {
        var userProjects = await _client.From<Projects>().Select("*").Where(x => x.OwnerID == ID).Get();
        return userProjects.Models;
    }

    public async Task<bool> ProjectRegister(Projects project)
    {
        bool register = false;
        try
        {
            await _client.From<Projects>().Insert(project);
            register = true;
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
            throw;
        }
        return register;
    }

    public async Task<bool> DeleteProject(int Id)
    {
        bool deleted = false;
        await _client.From<Projects>().Where(x => x.ID == Id).Delete();
        return deleted;
    }

    public async Task<bool> UpdateProject(Projects project)
    {
        bool updated = false;
        try
        {
            await _client.From<Projects>().Upsert(project);
            updated = true;
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
            throw;
        }

        return updated;
    }
}