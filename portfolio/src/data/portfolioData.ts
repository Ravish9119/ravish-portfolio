import {
  MetricItem,
  CapabilityItem,
  SkillCategory,
  ProjectItem,
  WorkflowStage,
  EducationItem,
  StrengthItem,
  SocialLink,
} from "./types";

export const personalInfo = {
  name: "Ravish Kushwaha",
  title: "Data Analyst & Full Stack Developer",
  eyebrow: "DATA ANALYTICS & FULL STACK DEVELOPMENT",
  shortBio:
    "I turn messy datasets into interactive dashboards, optimized SQL pipelines, and clear business insights — and build responsive web applications with HTML, CSS, JavaScript & Python Flask that drive real impact.",
  aboutDetailed: [
    "I am a Computer Science undergraduate at Rama University, Kanpur, with dual expertise in Full Stack Web Development and Data Analytics & Business Intelligence.",
    "On the development side, I build responsive web applications using HTML, CSS, JavaScript, Python with Flask, REST APIs, and SQLAlchemy — from clean frontends to robust backend services.",
    "On the analytics side, my expertise spans MySQL / SQL for deep data extraction, Power BI & DAX for executive dashboarding, Python (Pandas & Seaborn) for exploratory statistical modeling, and Advanced Excel for rapid scenario analysis.",
    "I believe great work — whether code or data — is about solving real problems:",
  ],
  coreQuestions: [
    "How do we build a seamless user experience?",
    "Why did our revenue shift?",
    "Where are customers dropping off?",
    "What concrete actions should we take next?",
  ],
  email: "ravishkumar94@gmail.com",
  phone: "+91 9119984964",
  location: "Kanpur, Uttar Pradesh, India",
  university: "Rama University, Kanpur",
  profileImage: "/profile.jpg",
  heroBadges: ["Power BI", "SQL / MySQL", "Python / Pandas", "AI Tools", "React.js", "Excel"],
};

export const trustMetrics: MetricItem[] = [
  {
    value: "8.7",
    label: "1st Sem CGPA",
    sublabel: "Academic Distinction",
  },
  {
    value: "4+",
    label: "Full Analytics Projects",
    sublabel: "End-to-End Case Studies",
  },
  {
    value: "50K+",
    label: "Records Analyzed",
    sublabel: "Across SQL & Python",
  },
  {
    value: "100%",
    label: "Code Quality & QA",
    sublabel: "Production Ready",
  },
];

export const capabilities: CapabilityItem[] = [
  {
    id: "fullstack-development",
    title: "FULL STACK DEVELOPMENT",
    description:
      "End-to-end web application development with HTML/CSS/JS frontends, Python Flask backends, REST APIs, and SQL/SQLite databases.",
    skills: ["HTML / CSS / JavaScript", "React.js", "Python / Flask", "REST APIs", "SQLAlchemy / SQLite"],
    icon: "Code2",
  },
  {
    id: "data-engineering",
    title: "DATA ENGINEERING & SQL",
    description:
      "Relational schema design, multi-table joins, Window Functions, CTEs, and automated ETL pipelines.",
    skills: ["MySQL / SQL Server", "CTEs & Subqueries", "Window Functions", "Schema Normalization", "ETL Pipelines"],
    icon: "Database",
  },
  {
    id: "executive-bi",
    title: "EXECUTIVE BI DASHBOARDS",
    description:
      "High-impact Power BI reporting, calculated DAX measures, dynamic KPI slicers, and drill-through matrices.",
    skills: ["Power BI Desktop", "Advanced DAX", "Power Query (M)", "Star Schema Modeling", "KPI Scorecards"],
    icon: "LayoutDashboard",
  },
  {
    id: "exploratory-analysis",
    title: "EXPLORATORY ANALYSIS & EDA",
    description:
      "Python (Pandas/NumPy), statistical distributions, cohort retention, and customer churn diagnosis.",
    skills: ["Python", "Pandas & NumPy", "Matplotlib / Seaborn", "Statistical EDA", "Cohort Analytics"],
    icon: "LineChart",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend-development",
    number: "01",
    title: "Frontend Development",
    highlightTool: "HTML, CSS, JS & React",
    skills: [
      "HTML5 & Semantic Markup",
      "CSS3 & Flexbox / Grid",
      "JavaScript (ES6+)",
      "React.js",
      "Responsive Design",
      "DOM Manipulation",
    ],
  },
  {
    id: "backend-development",
    number: "02",
    title: "Backend Development",
    highlightTool: "Python & Flask",
    skills: [
      "Python",
      "Flask Framework",
      "REST API Design",
      "Jinja2 Templating",
      "Flask-WTForms & Validation",
      "Authentication & Sessions",
    ],
  },
  {
    id: "databases",
    number: "03",
    title: "Databases & ORM",
    highlightTool: "MySQL & SQLAlchemy",
    skills: [
      "MySQL / SQL Server",
      "SQLAlchemy ORM",
      "SQLite",
      "Schema Design & Normalization",
      "CRUD Operations",
      "Query Optimization",
    ],
  },
  {
    id: "bi-dashboards",
    number: "04",
    title: "Business Intelligence & Dashboards",
    highlightTool: "Power BI & DAX",
    skills: [
      "Power BI",
      "DAX Calculations",
      "Power Query (ETL)",
      "Executive Dashboards",
      "KPI Scorecards",
      "Star Schema Modeling",
    ],
  },
  {
    id: "python-analytics",
    number: "05",
    title: "Python Data Analytics",
    highlightTool: "Python & Pandas",
    skills: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Jupyter Notebooks",
    ],
  },
  {
    id: "devtools-deployment",
    number: "06",
    title: "DevTools & Deployment",
    highlightTool: "Git & VS Code",
    skills: [
      "Git / GitHub",
      "VS Code",
      "Postman / API Testing",
      "pip / Virtual Environments",
      "Heroku / PythonAnywhere",
      "Agile Collaboration",
    ],
  },
  {
    id: "ai-powered-development",
    number: "07",
    title: "AI-Powered Development",
    highlightTool: "ChatGPT & AI Tools",
    skills: [
      "ChatGPT / GPT-4",
      "Google Gemini",
      "GitHub Copilot",
      "AI-Assisted Web Development",
      "AI-Driven Data Analysis",
      "Prompt Engineering",
    ],
  },
  {
    id: "excel-skills",
    number: "08",
    title: "Excel — Manual & AI-Powered",
    highlightTool: "Advanced Excel & AI",
    skills: [
      "Pivot Tables & Charts",
      "VLOOKUP / XLOOKUP / INDEX-MATCH",
      "Conditional Formatting",
      "Data Validation & Cleaning",
      "AI-Powered Formula Generation",
      "AI-Assisted Data Analysis in Excel",
    ],
  },
];

export const featuredProjects: ProjectItem[] = [
  {
    id: "sales-intelligence-dashboard",
    number: "01",
    title: "Executive Sales & Revenue Intelligence Dashboard",
    category: "Power BI · Business Intelligence · Excel",
    businessChallenge:
      "Leadership needed real-time visibility into multi-regional revenue streams, product margin variances, and YoY growth without manual spreadsheet merging.",
    analyticalSolution:
      "Built an automated Power BI star-schema dashboard powered by 25+ dynamic DAX measures, time-intelligence calculations, and automated ETL Power Query pipelines.",
    measurableOutcome:
      "Streamlined weekly executive reporting time by 80% and identified underperforming product lines to recover +18.4% profit margins.",
    metrics: [
      { value: "80%", label: "Time Saved" },
      { value: "25+", label: "DAX Measures" },
      { value: "Star Schema", label: "Data Model" },
    ],
    tools: ["Power BI", "DAX", "Power Query", "Advanced Excel", "Data Modeling", "KPI Reporting"],
    repoUrl: "https://github.com/ravishkushwaha",
    featured: true,
  },
  {
    id: "publishing-query-analytics",
    number: "02",
    title: "Publishing Industry & Book Market Query Analytics",
    category: "SQL · Database Architecture · MySQL",
    businessChallenge:
      "Analyze 50,000+ transactional and book records to uncover pricing sweet spots, reader engagement trends, and author revenue concentration.",
    analyticalSolution:
      "Architected modular SQL queries using Common Table Expressions, Window Functions, DENSE_RANK, LEAD/LAG and complex joins for high-speed analysis.",
    measurableOutcome:
      "Identified top 5% revenue-generating author cohorts and optimized query execution time to under 120ms across large datasets.",
    metrics: [
      { value: "50K+", label: "Records Queried" },
      { value: "<120ms", label: "Query Latency" },
      { value: "CTEs & Window", label: "Query Logic" },
    ],
    tools: ["MySQL", "Advanced SQL", "Window Functions", "CTEs", "Query Optimization", "Relational Schema"],
    repoUrl: "https://github.com/ravishkushwaha",
    featured: true,
  },
  {
    id: "ecommerce-cohort-retention",
    number: "03",
    title: "E-Commerce Customer Retention & Cohort Analytics",
    category: "Customer Analytics · SQL & Excel",
    businessChallenge:
      "Identify customer churn patterns, repurchase cycle latency, and Average Order Value variations across multiple buyer cohorts.",
    analyticalSolution:
      "Developed a cohort analysis matrix combining SQL transaction querying with Excel dynamic formulas to isolate customer lifecycle drop-offs.",
    measurableOutcome:
      "Revealed that targeted Month-2 re-engagement emails could recover up to 22% of high-value at-risk customers.",
    metrics: [
      { value: "84.2%", label: "Cohort Tracking" },
      { value: "+22%", label: "Win-Back Potential" },
      { value: "AOV & Churn", label: "Segmentation" },
    ],
    tools: ["SQL Aggregations", "Cohort Retention", "Customer Segmentation", "Advanced Excel", "Trend Modeling"],
    repoUrl: "https://github.com/ravishkushwaha",
    featured: true,
  },
  {
    id: "hr-attrition-diagnostic",
    number: "04",
    title: "HR Workforce Analytics & Attrition Diagnostic Model",
    category: "Python · Exploratory Data Analysis · Data Visualization",
    businessChallenge:
      "Determine the underlying drivers of employee turnover, compensation disparities, and department-level burnout.",
    analyticalSolution:
      "Executed end-to-end Exploratory Data Analysis in Python using Pandas, Matplotlib, Seaborn, statistical correlation matrices and distribution graphs.",
    measurableOutcome:
      "Isolated excessive overtime hours and promotion bottlenecks as the primary statistical contributors to employee turnover.",
    metrics: [
      { value: "78%", label: "Correlation" },
      { value: "100%", label: "Imputed" },
      { value: "Heatmaps & Plots", label: "Visualizations" },
    ],
    tools: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Statistical Analysis", "EDA"],
    repoUrl: "https://github.com/ravishkushwaha",
    featured: true,
  },
];

export const workflowStages: WorkflowStage[] = [
  {
    step: "01",
    title: "Data Extraction & Schema Ingestion",
    description:
      "Extract raw data across diverse sources including MySQL databases, CSV logs, API dumps, and enterprise Excel sheets while auditing relational keys and data types.",
    deliverables: ["Relational Schema Audit", "Cross-Source Extraction", "Data Integrity Verification"],
  },
  {
    step: "02",
    title: "Data Cleaning & Automated ETL",
    description:
      "Handle null values, duplicate records, outliers, and data inconsistencies using Python (Pandas), Power Query ETL, and optimized SQL data transformation scripts.",
    deliverables: ["Null & Outlier Imputation", "ETL Transformation Pipeline", "Standardized Data Types"],
  },
  {
    step: "03",
    title: "Exploratory Analysis & Metric Modeling",
    description:
      "Perform exploratory data analysis, statistical aggregations, cohort retention calculations, and correlation matrices to isolate core business bottlenecks.",
    deliverables: ["Correlation Matrices", "Cohort & Churn Modeling", "Statistical Diagnostics"],
  },
  {
    step: "04",
    title: "Interactive BI & Executive Storytelling",
    description:
      "Architect dynamic Power BI dashboards with calculated DAX measures, KPI scorecards, and intuitive drill-through filters that lead to clear actionable decisions.",
    deliverables: ["Executive KPI Dashboards", "Dynamic DAX Measures", "Actionable Decision Briefs"],
  },
];

export const educationList: EducationItem[] = [
  {
    institution: "Rama University",
    degree: "Bachelor of Technology (B.Tech) in Computer Science & Engineering",
    period: "2025 – 2029 (Expected)",
    location: "Kanpur, Uttar Pradesh",
    grade: "8.7 CGPA",
    gradeLabel: "1st Semester Distinction",
    subjects: [
      "Database Management Systems",
      "Data Structures",
      "Statistical Methods",
      "Object-Oriented Programming",
    ],
    badge: "Undergraduate Program",
  },
  {
    institution: "UP Board",
    degree: "Senior Secondary Certificate (Class 12th) – Science Stream (PCM)",
    period: "2023 – 2024",
    location: "Uttar Pradesh, India",
    grade: "72% Aggregate",
    gradeLabel: "Science Division (PCM)",
    subjects: ["Mathematics", "Physics", "Chemistry", "Computer Science"],
  },
  {
    institution: "UP Board",
    degree: "Secondary School Certificate (Class 10th)",
    period: "2021 – 2022",
    location: "Uttar Pradesh, India",
    grade: "85% Merit",
    gradeLabel: "High First Division",
    subjects: ["Mathematics", "Science", "Information Technology", "Social Sciences"],
  },
];

export const strengthsList: StrengthItem[] = [
  {
    number: "01",
    title: "Full Stack Architecture",
    description:
      "Designing scalable web architectures with clean separation of concerns — from responsive HTML/CSS/JS frontends to robust Python Flask APIs and database layers.",
    icon: "Code2",
  },
  {
    number: "02",
    title: "Data Rigor & Integrity",
    description:
      "Rigorous data auditing, deduplication, and sanity checking to eliminate reporting errors and ensure stakeholder trust.",
    icon: "ShieldCheck",
  },
  {
    number: "03",
    title: "REST API Design",
    description:
      "Building RESTful APIs with Flask, proper authentication, request validation, error handling, and seamless third-party service integration.",
    icon: "Zap",
  },
  {
    number: "04",
    title: "Intuitive BI Dashboard Design",
    description:
      "Designing uncluttered Power BI dashboards with clear visual hierarchies, dynamic filters, and executive-ready KPI cards.",
    icon: "BarChart3",
  },
  {
    number: "05",
    title: "Responsive UI/UX Design",
    description:
      "Crafting pixel-perfect, mobile-first interfaces with smooth animations, accessibility best practices, and modern design patterns.",
    icon: "Monitor",
  },
  {
    number: "06",
    title: "Continuous Technical Learning",
    description:
      "Quick to learn and implement new frameworks, libraries, cloud platforms, and modern development workflows.",
    icon: "Sparkles",
  },
];

export const socialLinks: SocialLink[] = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/ravishkushwaha",
    icon: "Linkedin",
    handle: "ravishkushwaha",
  },
  {
    name: "GitHub",
    url: "https://github.com/ravishkushwaha",
    icon: "Github",
    handle: "ravishkushwaha",
  },
  {
    name: "Email",
    url: "mailto:ravishkumar94@gmail.com",
    icon: "Mail",
    handle: "ravishkumar94@gmail.com",
  },
];

export const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Workflow", href: "#workflow" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];
