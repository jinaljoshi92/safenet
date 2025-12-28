using Microsoft.AspNetCore.Mvc;
using SafeNetAPI.Models;
using SafeNetAPI.Services;

namespace SafeNetAPI.Controllers
{
    [ApiController]
    [Route("api/auth")]
    public class AuthController : ControllerBase
    {
        private readonly IAuthService _authService;

        public AuthController(IAuthService authService)
        {
            _authService = authService;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(RegisterRequest request)
        {
            var userId = await _authService.RegisterAsync(request);
            return Ok(new { UserId = userId });
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(LoginRequest request)
        {
            var user = await _authService.LoginAsync(request);

            if (user == null)
                return Unauthorized("Invalid email or password");

            return Ok(user);
        }
    }
}
