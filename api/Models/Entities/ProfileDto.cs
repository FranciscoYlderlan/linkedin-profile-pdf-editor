namespace api.Models.Entities
{
    public class Profile
    {
        public string? Name { get; set; }
        public List<ContactInfo>? ContactInfos { get; set; } = new();
        public string? About { get; set; }
        public List<Experience> Experiences { get; set; } = new();
        public List<Education> Educations { get; set; } = new();
        public List<Certification> Certifications { get; set; } = new();
    }

    public class ContactInfo
    {
        public string? Header { get; set; }
        public List<string>? Links { get; set; }
    }

    public class Experience
    {
        public string? Company { get; set; }
        public string? Duration { get; set; }
        public string? JobTitle { get; set; }
        public string? Description { get; set; }
    }

    public class Education
    {
        public string? Institution { get; set; }
        public string? Degree { get; set; }
    }

    public class Certification
    {
        public string? CertificationName { get; set; }
        public string? Issuer { get; set; }
        public string? DateIssued { get; set; }
    }

}
