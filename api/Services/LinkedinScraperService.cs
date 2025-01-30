using api.Models.Entities;
using api.Utils;
using HtmlAgilityPack;

namespace api.Services
{
    public class LinkedInScraperService
    {
        private readonly HttpClient _httpClient;

        public LinkedInScraperService(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

        public async Task<Profile> ExtractProfileAsync(string url)
        {
            var response = await _httpClient.GetStringAsync(url);
            var htmlDoc = new HtmlDocument();
            htmlDoc.LoadHtml(response);

            return new Profile
            {
                Name = ExtractText(htmlDoc, LinkedInSelectors.Profile.UserName),
                About = ExtractText(htmlDoc, LinkedInSelectors.About.Text),
                Experiences = ExtractExperiences(htmlDoc),
                Educations = ExtractEducations(htmlDoc),
                Certifications = ExtractCertifications(htmlDoc),
                ContactInfos = ExtractContactInfo(htmlDoc)
            };
        }

        private string ExtractText(HtmlDocument doc, string selector)
        {
            return doc.DocumentNode.SelectSingleNode(selector)?.InnerText.Trim() ?? "";
        }

        private List<Experience> ExtractExperiences(HtmlDocument doc)
        {

            
            var experiences = new List<Experience>();
            var nodes = doc.DocumentNode.SelectNodes(LinkedInSelectors.Experience.Details);
            if (nodes == null) return experiences;

            foreach (var node in nodes)
            {
                experiences.Add(new Experience
                {
                    Company = node.SelectSingleNode(LinkedInSelectors.Experience.CompanyInfo)?.InnerText.Trim() ?? "Unknown",
                    JobTitle = node.SelectSingleNode(LinkedInSelectors.Experience.Details)?.InnerText.Trim() ?? "Unknown",
                    Duration = node.SelectSingleNode(LinkedInSelectors.Experience.Details)?.InnerText.Trim() ?? "Unknown"
                });
            }

            return experiences;
        }

        private List<Education> ExtractEducations(HtmlDocument doc)
        {
            var educations = new List<Education>();
            var nodes = doc.DocumentNode.SelectNodes(LinkedInSelectors.Education.Info);
            if (nodes == null) return educations;

            foreach (var node in nodes)
            {
                educations.Add(new Education
                {
                    Institution = node.InnerText.Trim()
                });
            }

            return educations;
        }

        private List<Certification> ExtractCertifications(HtmlDocument doc)
        {
            var certifications = new List<Certification>();
            var nodes = doc.DocumentNode.SelectNodes(LinkedInSelectors.Certifications.List);
            if (nodes == null) return certifications;

            foreach (var node in nodes)
            {
                certifications.Add(new Certification
                {
                    CertificationName = node.InnerText.Trim()
                });
            }

            return certifications;
        }

        private List<ContactInfo> ExtractContactInfo(HtmlDocument doc)
        {
            var contactInfos = new List<ContactInfo>();
            var nodes = doc.DocumentNode.SelectNodes(LinkedInSelectors.ContactInfo.Link);
            if (nodes == null) return contactInfos;

            foreach (var node in nodes)
            {
                contactInfos.Add(new ContactInfo
                {
                    Header = node.SelectSingleNode("h3")?.InnerText.Trim(),
                    Links = node.SelectNodes("a")?.Select(a => a.Attributes["href"].Value).ToList()
                });
            }

            return contactInfos;
        }
    }
}
