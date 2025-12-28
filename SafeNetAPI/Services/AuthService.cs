using Dapper;
using SafeNetAPI.Data;
using SafeNetAPI.Helpers;
using SafeNetAPI.Models;
using System.Data;

namespace SafeNetAPI.Services
{
    public class AuthService : IAuthService
    {
        private readonly DapperContext _context;

        public AuthService(DapperContext context)
        {
            _context = context;
        }

        public async Task<int> RegisterAsync(RegisterRequest request)
        {
            using var connection = _context.CreateConnection();

            return await connection.ExecuteScalarAsync<int>(
                "sp_RegisterUser",
                new
                {
                    request.FullName,
                    request.Email,
                    PasswordHash = PasswordHelper.Hash(request.Password),
                    request.Role,
                    request.ContactNumber
                },
                commandType: CommandType.StoredProcedure
            );
        }

        public async Task<LoginResponse> LoginAsync(LoginRequest request)
        {
            using var connection = _context.CreateConnection();

            return await connection.QueryFirstOrDefaultAsync<LoginResponse>(
                "sp_LoginUser",
                new
                {
                    request.Email,
                    PasswordHash = PasswordHelper.Hash(request.Password)
                },
                commandType: CommandType.StoredProcedure
            );
        }
    }
}
