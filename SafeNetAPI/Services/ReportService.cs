using Dapper;
using SafeNetAPI.Data;
using SafeNetAPI.Models;
using System.Data;

namespace SafeNetAPI.Services
{
    public class ReportService : IReportService
    {
        private readonly DapperContext _context;

        public ReportService(DapperContext context)
        {
            _context = context;
        }

        public async Task<int> CreateReportAsync(ReportCreateRequest request)
        {
            using var connection = _context.CreateConnection();

            return await connection.ExecuteScalarAsync<int>(
                "sp_AddReport",
                request,
                commandType: CommandType.StoredProcedure
            );
        }

        public async Task<IEnumerable<ReportListDto>> GetReportsAsync(string status, string city)
        {
            using var connection = _context.CreateConnection();

            return await connection.QueryAsync<ReportListDto>(
                "sp_GetReports",
                new { Status = status, City = city },
                commandType: CommandType.StoredProcedure
            );
        }

        public async Task<ReportDetailDto> GetReportDetailAsync(int reportId)
        {
            using var connection = _context.CreateConnection();

            return await connection.QueryFirstOrDefaultAsync<ReportDetailDto>(
                "sp_GetReportDetail",
                new { ReportId = reportId },
                commandType: CommandType.StoredProcedure
            );
        }

    }
}
