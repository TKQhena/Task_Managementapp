using Backend.DataAccessLayer;
using Backend.DataAccessLayer.Models;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers;

[ApiController]
[Route("[controller]")]
public class ProjectController : ControllerBase
{
    private readonly IProjectServies _project;

    public ProjectController(IProjectServies project)
    {
        _project = project;
    }

    [HttpGet("{id}")]
    public async Task<IEnumerable<Projects>> GetProjects(int id)
    {
        var projects = await _project.GetProjectsByOwnerId(id);
        return projects;
    }

    [HttpPost("new")]
    public async Task<IActionResult> CreateProject([FromBody] Projects project)
    {
        var result = await _project.ProjectRegister(project);
        if (result)
        {
            return Ok(result);
        }
        else
        {
            return BadRequest(result);
            
        }
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteProject(int id)
    {
        var result = await _project.DeleteProject(id);
        if (result)
        {
            return Ok(result);
        }
        else
        {
            return BadRequest(result);
            
        }
    }

    [HttpPut("update")]
    public async Task<IActionResult> UpdateProject( [FromBody] Projects project)
    {
        var result = await _project.UpdateProject(project);
        if (result)
        {
            return Ok(result);
        }
        return BadRequest(result);
    }
}