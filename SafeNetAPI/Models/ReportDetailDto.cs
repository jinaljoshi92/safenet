namespace SafeNetAPI.Models
{
    public class ReportDetailDto
    {
        public int ReportId { get; set; }
        public string VictimName { get; set; }
        public int? VictimAge { get; set; }
        public string VictimGender { get; set; }
        public string ReportType { get; set; }

        public string AddressLine { get; set; }
        public string Area { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Pincode { get; set; }

        public string Description { get; set; }
        public string Status { get; set; }
        public DateTime ReportedDateTime { get; set; }
    }
}
