using Backend.DataAccessLayer.Models;
using Supabase;

namespace Backend.DataAccessLayer;

public class UserServices : IUserServices
{
    private readonly Client _client;
    
    public UserServices(Client superbaseClient)
    {
        _client = superbaseClient;
    }

    public UserServices()
    {
        
    }

    public async Task<IEnumerable<Users>> UserLogin(string email, string password)
    {
        var user = await _client.From<Users>().Select("*")
            .Where(x=>x.Email == email && x.Password == password).Get();
        
        return user.Models;
    }

    public async Task<IEnumerable<Users>> GetUsersByEmail(string email)
    {
        var users = await _client.From<Users>().Select("*")
            .Where(x => x.Email == email).Get();
        
        return users.Models;
    }

    public async Task<bool> UserRegister(Users user)
    {
        bool register = false;
        try
        {
            await _client.From<Users>().Insert(user);
            register = true;
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
            throw;
        }

        return register;

    }

    public async Task<bool> UserUpdate(Users user)
    {
        bool update = false;
        try
        {
            await _client.From<Users>().Upsert(user);
            update = true;
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
            throw;
        }

        return update;  
        
    }
}