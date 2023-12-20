using Backend.DataAccessLayer;
using Microsoft.AspNetCore.Mvc;
using Backend.DataAccessLayer.Models;

namespace Backend.Controllers;

[ApiController]
[Route("[controller]")]
public class UserController : ControllerBase
{
    private readonly IUserServices _user;

    public UserController(IUserServices user)
    {
        _user = user;
    }
    
    [HttpPost("newUser")]
    public async Task<IActionResult> CreateUser([FromBody] Users user)
    {
        var result = await _user.UserRegister(user);
        if (result)
        {
            return Ok(result);
        }
        return BadRequest(result);
        
    }

    [HttpGet("login")]
    public async Task<IActionResult> Login(string email, string password)
    {
        var loginUser = await _user.UserLogin(email, password);
        if (loginUser.Count() > 0)
        {
            return Ok(loginUser);
        }
        return BadRequest(loginUser);
    }
}