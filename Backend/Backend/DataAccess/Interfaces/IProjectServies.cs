using System.Collections;
using Backend.DataAccessLayer.Models;

namespace Backend.DataAccessLayer;

public interface IProjectServies
{
    Task<IEnumerable<Projects>> GetProjectsByOwnerId(int ID);
    
    Task<bool> ProjectRegister(Projects project);

    Task<bool> DeleteProject(int Id);
    
    Task<bool> UpdateProject(Projects project);
}