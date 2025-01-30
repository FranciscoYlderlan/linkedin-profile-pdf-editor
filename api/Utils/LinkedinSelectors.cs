namespace api.Utils
{
    public static class LinkedInSelectors
    {
        
        public static class Profile
        {
            public const string UserName = ".SEGjKgMzygbyyhNrlldLtHjEEfLyiqEzXImo";
            public const string ActionDelegate = "[data-generated-suggestion-target*='fsu_profileActionDelegate']";
        }

        public static class ContactInfo
        {
            public const string Section = ".pv-profile-section__section-info-section-info";
            public const string ContactType = ".pv-contact-info__contact-type";
            public const string Header = ".pv-contact-info__header";
            public const string LinkContainer = ".joOhDIXGzjTBpWsrgKDiSPINDQbWvtJCtLcaDU";
            public const string Link = ".joOhDIXGzjTBpWsrgKDiSPINDQbWvtJCtLcaDU a";
        }

        public static class About
        {
            public const string Section = ".pv-profile-card";
            public const string Container = "#about";
            public const string ContentWrapper = ".QBNsgeoetLpvsGDciJaKJBOktGbSxYZhTT .pv3";
            public const string Text = ".HgHSBcYHepGsPGqsOOjlMCHdCIPEQGDr span";
        }

        public static class Experience
        {
            public const string Section = ".pv-profile-card";
            public const string Container = "#experience";
            public const string List = ".DkZONucCtJGLaDreRZFwVGGkfLxKuzxNHL li";
            public const string CompanyInfo = "[data-field='experience_company_logo'] span[aria-hidden='true']";
            public const string Details = ".pvs-entity__sub-components ul li span[aria-hidden='true']";
        }

        public static class Education
        {
            public const string Section = ".pv-profile-card";
            public const string Container = "#education";
            public const string Info = "span[aria-hidden='true']";
        }

        public static class Certifications
        {
            public const string Section = ".pv-profile-card";
            public const string Container = "#licenses_and_certifications";
            public const string List = ".qZDitpqjfOeugCyxezydrtJmpGphMhvBKA div";
            public const string Content = "span[aria-hidden='true']";
        }
    }

}
