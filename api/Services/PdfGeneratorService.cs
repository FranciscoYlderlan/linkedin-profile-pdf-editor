
using iText.Kernel.Pdf;
using iText.Layout;
using iText.Layout.Element;
using api.Models.Entities;

namespace api.Services
{
    public class PdfGeneratorService
    {
        public byte[] GeneratePdf(Profile profile)
        {
            using var stream = new MemoryStream();
            PdfWriter writer = new PdfWriter(stream);
            PdfDocument pdfDocument = new PdfDocument(writer);
            Document document = new Document(pdfDocument);

            document.Add(new Paragraph($"Name: {profile.Name}"));
            document.Add(new Paragraph($"About: {profile.About}\n"));

            document.Add(new Paragraph("Experience:"));
            foreach (var exp in profile.Experiences)
            {
                document.Add(new Paragraph($"- {exp.JobTitle} at {exp.Company} ({exp.Duration})"));
            }

            document.Add(new Paragraph("\nEducation:"));
            foreach (var edu in profile.Educations)
            {
                document.Add(new Paragraph($"- {edu.Institution}"));
            }

            document.Add(new Paragraph("\nCertifications:"));
            foreach (var cert in profile.Certifications)
            {
                document.Add(new Paragraph($"- {cert.CertificationName}"));
            }

            document.Close();

            return stream.ToArray();
        }
    }
}
