namespace SafeNetAPI.Models
{
    public class LoginResponse
    {
        public int UserId { get; set; }
        public string FullName { get; set; }
        public string Email { get; set; }
        public string Role { get; set; }
        public string ContactNumber { get; set; }
    }
}
