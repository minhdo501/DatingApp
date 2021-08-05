namespace DatingApp.DTOs
{
    public class PhotoDto
    {
        // This is used to shaped the Data receive from AppUser User
        public int Id { get; set; }
        public string Url { get; set; }
        public bool IsMain { get; set; }
    }
}