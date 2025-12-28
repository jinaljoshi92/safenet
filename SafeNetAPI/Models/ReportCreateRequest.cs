namespace SafeNetAPI.Models
{
    public class ReportCreateRequest
    {
        public string VictimName { get; set; }
        public int? VictimAge { get; set; }
        public string VictimGender { get; set; }
        public string ReportType { get; set; }

        public string AddressLine { get; set; }
        public string Area { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Pincode { get; set; }
        public double? Latitude { get; set; }
        public double? Longitude { get; set; }

        public string Description { get; set; }
        public DateTime ReportedDateTime { get; set; }
        public int? ReportedByUserId { get; set; }
        public bool IsAnonymous { get; set; }
    }
}
