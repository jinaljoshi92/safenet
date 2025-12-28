using Microsoft.AspNetCore.Mvc;
using SafeNetAPI.Models;
using SafeNetAPI.Services;

namespace SafeNetAPI.Controllers
{
    [ApiController]
    [Route("api/reports")]
    public class ReportsController : ControllerBase
    {
        private readonly IReportService _service;

        public ReportsController(IReportService service)
        {
            _service = service;
        }

        [HttpPost]
        public async Task<IActionResult> CreateReport([FromBody] ReportCreateRequest request)
        {
            var reportId = await _service.CreateReportAsync(request);
            return Ok(new { ReportId = reportId });
        }

        [HttpGet]
        public async Task<IActionResult> GetReports( [FromQuery] string? status = null, [FromQuery] string? city = null)
        {
            var result = await _service.GetReportsAsync(status, city);
            return Ok(result);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetReportDetail(int id)
        {
            var result = await _service.GetReportDetailAsync(id);
            if (result == null) return NotFound();
            return Ok(result);
        }

    }
}
