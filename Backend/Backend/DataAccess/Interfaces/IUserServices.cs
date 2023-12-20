using Backend.DataAccessLayer.Models;

namespace Backend.DataAccessLayer;

public interface IUserServices
{
    Task<IEnumerable<Users>> UserLogin(string email, string password);
    
    Task<IEnumerable<Users>> GetUsersByEmail(string email);
    
    Task<bool> UserRegister(Users user);
    
    Task<bool> UserUpdate(Users user);
}