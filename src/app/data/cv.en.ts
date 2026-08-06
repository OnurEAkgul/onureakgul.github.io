import { CvData } from './cv.model';

export const cvEn: CvData = {
  name: 'Onur Eren Akgül',
  headline: 'Full Stack Developer | Angular | ASP.NET Core | .NET 8 | PostgreSQL',
  location: 'Ankara, Türkiye',
  phone: '+90 553 326 3611',
  email: 'onurerenakgul@gmail.com',
  website: 'https://onureakgul.github.io/',
  summary: [
    'I build web applications with Angular and .NET that solve real user needs. Using ASP.NET Core Web API, .NET 8, Entity Framework Core, PostgreSQL and SQL Server, I create backend services, RESTful APIs and sustainable data structures.',
    'I have worked on enterprise procurement and tender workflows, hospital inventory management, authentication and authorization systems, content management modules and responsive web apps. I have also helped modernize older Angular projects and make existing systems more maintainable.',
    'On the KEYY IMYS project I contributed to some React-based screens. My core strengths remain Angular and .NET development, backend services, business logic, API integrations and data flows.',
  ],
  skills: [
    {
      title: 'Frontend — Strong',
      items: [
        'Angular 15-19',
        'TypeScript',
        'JavaScript',
        'HTML5',
        'CSS3',
        'PrimeNG',
        'RxJS',
        'Reactive Forms',
        'Responsive Design',
        'Tailwind CSS',
      ],
    },
    {
      title: 'Frontend — Project Exposure',
      items: ['React', 'Redux Toolkit', 'RTK Query', 'Formik'],
    },
    {
      title: 'Backend',
      items: [
        'C#',
        'ASP.NET Core Web API',
        '.NET 8',
        'RESTful APIs',
        'Microservices',
        'Entity Framework Core',
        'LINQ',
        'Dependency Injection',
        'Async/Await',
        'Business Rule Validation',
      ],
    },
    {
      title: 'Database',
      items: [
        'PostgreSQL',
        'Microsoft SQL Server',
        'SQL Query Optimization',
        'Relational Data Modeling',
      ],
    },
    {
      title: 'Security & Integration',
      items: [
        'JWT Authentication',
        'Role-Based Authorization',
        'Claims-Based Authorization',
        'Swagger/OpenAPI',
        'Google reCAPTCHA v3',
      ],
    },
    {
      title: 'AI-Assisted Development',
      items: [
        'ChatGPT',
        'Claude',
        'Cursor',
        'Prompt engineering',
        'Code analysis',
        'Debugging support',
        'Refactoring support',
        'Technical documentation',
      ],
    },
    {
      title: 'Tools & Practices',
      items: [
        'Git',
        'GitHub',
        'Agile/Scrum',
        'Clean Code',
        'API Documentation',
        'Performance Optimization',
        'Code Review',
      ],
    },
  ],
  experience: [
    {
      title: 'Full Stack Developer',
      company: 'Larinsoft Bilişim Teknoloji A.Ş.',
      period: 'Oct 2024 – Present',
      location: 'Ankara, Türkiye',
      bullets: [
        'Develop and maintain enterprise systems, including KEYY IMYS Procurement Management System, E-Procurement Portal, CAT6 Onboarding Module, Content Management Application and Risk Analysis Application.',
        'Build Angular-first user interfaces with TypeScript, PrimeNG, Reactive Forms, validation rules, server-side paginated data grids, dialogs and file upload workflows.',
        'Contribute to selected React screens in KEYY IMYS using RTK Query, Redux Toolkit and Formik, with emphasis on business workflows, API integration and maintainable UI behavior.',
        'Design ASP.NET Core Web API and .NET 8 microservice endpoints with Entity Framework Core, PostgreSQL, SQL Server, async/await patterns and reusable business validation logic.',
        'Implement procurement, tender, direct procurement, contract, vendor, document, barcode and hospital inventory workflows for public sector management use cases.',
        'Use AI-assisted development tools such as ChatGPT, Claude and Cursor for requirement analysis, debugging, refactoring, code review preparation and technical documentation, while validating outputs against project standards.',
        'Migrated a Risk Analysis Application from Angular 12 to Angular 19, reducing loading time by approximately 40% and improving maintainability.',
        'Refactored backend services into .NET 8 asynchronous Task-based flows, reducing CPU usage by approximately 25% and improving throughput.',
      ],
    },
    {
      title: 'Full-Time Software Development Intern',
      company: 'Larinsoft Bilişim Teknoloji A.Ş.',
      period: 'Feb 2024 – May 2024',
      location: 'Ankara, Türkiye',
      bullets: [
        'Developed responsive single-page application features using Angular, HTML5, CSS3 and TypeScript.',
        'Implemented Reactive Forms, client-side validation and reusable UI components to improve user experience and data quality.',
        'Built RESTful API endpoints with ASP.NET Core Web API and documented integrations using Swagger/OpenAPI.',
        'Worked with Entity Framework Core and Microsoft SQL Server to model data, optimize queries and improve response times by up to 30%.',
      ],
    },
  ],
  projects: [
    {
      name: 'KEYY IMYS Procurement Management System',
      tech: 'ASP.NET Core Web API, .NET 8 Microservices, Entity Framework Core, PostgreSQL, React, TypeScript, RTK Query',
      bullets: [
        'Contributed to an important hospital inventory and procurement management system (IMYS) within a .NET 8 microservice architecture.',
        'Focused on procurement business workflows, REST API integration, data lifecycle rules and backend-supported process automation.',
        'Implemented and maintained tender file, bulk procurement, direct procurement, purchase request, vendor, contract, barcode and document management workflows.',
        'Designed PostgreSQL-backed REST APIs and business rule engine flows for procurement file lifecycle, status transitions, need list synchronization and section-based line item assignment.',
        'Supported selected React frontend screens with server-side pagination, multi-step dialogs, Formik validation and RTK Query service integration.',
      ],
    },
    {
      name: 'E-Procurement Portal',
      tech: 'Angular 15, PrimeNG, ASP.NET Core Web API, Entity Framework Core, PostgreSQL, ClosedXML',
      bullets: [
        'Developed a web-based procurement platform supporting tender creation, bid submission, session management, approval workflows and secure public tender forms.',
        'Created dynamic Reactive Forms for bulk and item-based bid entry, tender document uploads and validation-heavy procurement screens.',
        'Designed PostgreSQL-backed REST APIs for tenders, companies, bids, bid windows, active sessions and business rules.',
        'Integrated ClosedXML for Excel import/export and implemented parsers that map spreadsheet rows to domain entities.',
        'Implemented claims-based authorization and Google reCAPTCHA v3 to secure public tender operations.',
      ],
    },
    {
      name: 'CAT6 Onboarding Module',
      tech: 'Angular 17, PrimeNG, REST APIs, Reactive Forms',
      bullets: [
        'Built frontend workflows for an AssisTT hiring automation module covering candidate information, education history, work experience and document uploads.',
        'Implemented multi-step forms with synchronous and asynchronous validation to improve data quality and guide users through application processes.',
        'Developed HR review dashboards with sortable/filterable data tables, detail panels and inline actions such as approve, reject and request information.',
      ],
    },
    {
      name: 'Content Management and Risk Analysis Applications',
      tech: 'Angular 19, PrimeNG 19, .NET 8, Entity Framework Core',
      bullets: [
        'Developed content administration and viewer modules with Angular Reactive Forms, conditional fields, media uploads, scheduled publishing and role-based access.',
        'Modernized a legacy Angular 12 risk analysis application by upgrading to Angular 19, restructuring modules, enabling TypeScript strict mode and improving startup performance.',
        'Created .NET 8 Web API services with CRUD operations, async LINQ queries, pagination, caching, centralized error handling and secure authorization.',
      ],
    },
    {
      name: 'Personal Portfolio and Link Shortifier Projects',
      tech: 'Angular, TypeScript, PrimeNG, GitHub Pages',
      bullets: [
        'Created responsive Angular single-page applications using routing, component-based architecture, Reactive Forms, validation and GitHub Pages deployment.',
      ],
    },
  ],
  education: [
    {
      degree: 'B.Sc. Computer Engineering',
      school: 'Bartın University',
      location: 'Bartın, Türkiye',
      period: 'Aug 2019 – Jun 2024',
      detail: 'GPA: 3.11/4.00, Honor Student',
    },
    {
      degree: 'Computer Science',
      school: 'Politechnika Świętokrzyska',
      location: 'Kielce, Poland',
      period: 'Oct 2022 – Jul 2023',
      detail: 'Erasmus Student — 2 semesters',
    },
  ],
  languages: [
    'Turkish: Native',
    'English: B2 — Bartın University School of Foreign Languages',
  ],
  social: [
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/onurerenakgul/',
      icon: 'pi pi-linkedin',
      description: 'Professional network and career updates.',
    },
    {
      label: 'GitHub',
      url: 'https://github.com/OnurEAkgul',
      icon: 'pi pi-github',
      description: 'Open-source projects and code samples.',
    },
    {
      label: 'Instagram',
      url: 'https://www.instagram.com/onurerenakgul',
      icon: 'pi pi-instagram',
      description: 'Daily life and personal interests.',
    },
    {
      label: 'YouTube',
      url: 'https://www.youtube.com/channel/UCOshFJFD0q52SHzXjUAxSGQ',
      icon: 'pi pi-youtube',
      description: 'Videos and technical content.',
    },
    {
      label: 'X (Twitter)',
      url: 'https://twitter.com/OnurErenAKGL',
      icon: 'pi pi-twitter',
      description: 'Thoughts and quick updates.',
    },
  ],
  cvFile: 'assets/cv/Onur-Eren-AKGUL-Resume-20260806-English.pdf',
};
