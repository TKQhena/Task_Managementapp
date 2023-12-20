using Backend.DataAccessLayer;
using Backend.DataAccessLayer.Models;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers;

[ApiController]
[Route("[controller]")]
public class MembersController : ControllerBase
{
    private readonly IProjectMembersServices _member;

    public MembersController(IProjectMembersServices member)
    {
        _member= member;
    }

    [HttpGet]
    public async Task<IEnumerable<ProjectMembers>> GetMembers([FromBody] int prjID)
    {
        var prjMembers = await _member.FindProjectMember(prjID);
        return prjMembers;
    }

    [HttpPost("add")]
    public async Task<IActionResult> AddMember([FromBody] ProjectMembers member)
    {
        var result = await _member.AddProjectMembers(member);
        if (result)
        {
            return Ok(result);
        }
        return BadRequest(result);
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteMember(int id)
    {
        var result = await _member.DeleteProjectMembers(id);
        if (result)
        {
            return Ok(result);
        }
        else
        {
            return BadRequest(result);
            
        }
    }
}