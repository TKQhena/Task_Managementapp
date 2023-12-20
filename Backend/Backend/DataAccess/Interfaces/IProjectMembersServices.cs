using System.Collections;
using Backend.DataAccessLayer.Models;

namespace Backend.DataAccessLayer;

public interface IProjectMembersServices
{
    Task<bool> AddProjectMembers(ProjectMembers projectMembers);

    Task<IEnumerable<ProjectMembers>> FindProjectMember(int ProjectId);
    
    Task<bool> DeleteProjectMembers(int id);
}