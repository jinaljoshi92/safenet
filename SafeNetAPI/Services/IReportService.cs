

using SafeNetAPI.Models;

namespace SafeNetAPI.Services
{
    public interface IReportService
    {
        Task<int> CreateReportAsync(ReportCreateRequest request);
        Task<IEnumerable<ReportListDto>> GetReportsAsync(string status, string city);
        Task<ReportDetailDto> GetReportDetailAsync(int reportId);
    }
}
