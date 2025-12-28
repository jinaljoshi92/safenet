namespace SafeNetAPI.Models
{
    public class ReportListDto
    {
        public int ReportId { get; set; }
        public string ReportType { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Status { get; set; }
        public int RiskScore { get; set; }
        public DateTime ReportedDateTime { get; set; }
    }
}
