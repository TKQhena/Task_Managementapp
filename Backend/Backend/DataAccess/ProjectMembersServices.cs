using Backend.DataAccessLayer.Models;
using Supabase;

namespace Backend.DataAccessLayer;

public class ProjectMembersServices : IProjectMembersServices
{
    private readonly Client _client;

    public ProjectMembersServices(Client supabaseClient)
    {
        _client = supabaseClient;
    }


    public async Task<bool> AddProjectMembers(ProjectMembers projectMembers)
    {
        bool upserted = false;
        try
        {
            await _client.From<ProjectMembers>().Upsert(projectMembers);
            upserted = true;
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
            throw;
        }

        return upserted;
    }

    public async Task<IEnumerable<ProjectMembers>> FindProjectMember(int ProjectId)
    {
        var projectMemebers = await _client.From<ProjectMembers>().Select("*, Users!inner(*)").Where(x => x.ProjectId == ProjectId).Get();
        return projectMemebers.Models;
    }

    public async Task<bool> DeleteProjectMembers(int id)
    {
        bool deleted = false;
        try
        {
            await _client.From<ProjectMembers>().Where(x=>x.Id == id).Delete();
            deleted = true;
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
            throw;
        }
        
        return deleted;
    }
}