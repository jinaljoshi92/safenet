
using SafeNetAPI.Models;

namespace SafeNetAPI.Services
{
    public interface IAuthService
    {
        Task<int> RegisterAsync(RegisterRequest request);
        Task<LoginResponse> LoginAsync(LoginRequest request);
    }
}
