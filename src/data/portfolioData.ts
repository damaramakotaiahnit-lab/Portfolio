import { Profile, SkillCategory, Project, Certification, Experience, Education } from '../types';

export const profileData: Profile = {
  name: "Ramakotaiah Dama",
  headline: "Data Analyst & Business Intelligence Specialist | Power BI | Advanced DAX | SQL Server | Azure SQL | Google BigQuery | Python",
  bio: "Results-driven Data Analyst and Business Intelligence Specialist with hands-on expertise building enterprise-grade reporting systems, cloud ETL architectures, and executive dashboards. Specializes in transforming complex multi-source relational databases into automated Power BI solutions using complex DAX measures, on-premises data gateways, and multi-cloud data warehouses (Azure SQL & Google BigQuery). Holds a Bachelor of Technology from JNTUK and 7 verified certifications in Cloud, AI, and Analytics.",
  email: "damaramakotaiahnit@gmail.com",
  phone: "+91 7095942623",
  languages: ["English", "Telugu"],
  degree: "Bachelor of Technology (B.Tech) - JNTUK",
  linkedin: "https://www.linkedin.com/in/ramakotaiah-dama-04789b245/",
  github: "https://github.com/damaramakotaiahnit-lab",
  location: "Hyderabad, Telangana, India",
  targetLocations: "Hyderabad & Bengaluru (On-site, Hybrid, Remote)",
  status: "Immediate Joiner • Open to Data Analyst & BI Developer Roles",
  avatarUrl: "./Ramakotaiah Dama _ LinkedIn_files/1793940865669",
  bannerUrl: "./Ramakotaiah Dama _ LinkedIn_files/1793886905011",
  connections: "500+",
  followers: "1,304+",
  postImpressions: "1,481+",
  metrics: [
    { label: "Enterprise Projects", value: "5 Deployed", subtext: "End-to-End BI Solutions" },
    { label: "Verified Credentials", value: "8 Certs", subtext: "Udemy, AWS, Deloitte" },
    { label: "DAX & SQL Mastery", value: "100%", subtext: "Time Intelligence, Star Schema" },
    { label: "LinkedIn Impressions", value: "1,481+", subtext: "Industry Network" }
  ]
};

export const skillsData: SkillCategory[] = [
  {
    category: "Databases & SQL Engineering",
    icon: "Database",
    description: "Relational database modeling, complex analytical queries, schema optimization, and multi-source pipelines.",
    items: [
      { name: "MySQL", level: 94, tag: "Relational DB", highlight: "Joins, Stored Procedures, Workbench Scripting" },
      { name: "PostgreSQL", level: 92, tag: "Advanced SQL", highlight: "Complex Queries, JSONB, Window Functions" },
      { name: "Microsoft SQL Server & SSMS", level: 95, tag: "Enterprise DB", highlight: "ETL, CTEs, Indexing, Test-to-Prod Migrations" },
      { name: "Complex SQL Querying", level: 96, tag: "Core", highlight: "Window Functions, DML/DDL, Subqueries, Optimizations" }
    ]
  },
  {
    category: "Cloud Platforms & Data Warehousing",
    icon: "Cloud",
    description: "Cloud compute, data storage, enterprise data warehousing, and cloud migration architecture.",
    items: [
      { name: "Snowflake", level: 92, tag: "Cloud DW", highlight: "Snowflake Schema, Virtual Warehouses, Zero-Copy Cloning" },
      { name: "Microsoft Azure", level: 94, tag: "Cloud Infrastructure", highlight: "Azure SQL Database, Entra ID Authentication & Cloud ETL" },
      { name: "AWS EC2", level: 90, tag: "Cloud Compute", highlight: "Virtual Server Configuration, Instance Sizing & Deployment" },
      { name: "AWS S3", level: 92, tag: "Object Storage", highlight: "Data Lake Storage, Bucket Policies, Lifecycle Management" },
      { name: "Google Cloud BigQuery", level: 91, tag: "Analytics DW", highlight: "Petabyte-Scale SQL Queries & Direct Power BI Connector" }
    ]
  },
  {
    category: "Power BI & Business Intelligence",
    icon: "BarChart3",
    description: "End-to-end report design, service administration, gateway infrastructure, and advanced DAX formulas.",
    items: [
      { name: "Power BI Desktop & Service", level: 96, tag: "Production", highlight: "Dataflows, App Distribution, Workspace Management" },
      { name: "Advanced DAX Formulas", level: 95, tag: "Expert", highlight: "CALCULATE, ALLEXCEPT, FILTER, SUMX, MEDIANX, Time Intelligence" },
      { name: "On-Premises Data Gateways", level: 92, tag: "Architecture", highlight: "Standard Mode Gateway, Scheduled & Incremental Refresh" },
      { name: "Power Query (M-Code ETL)", level: 95, tag: "Data Prep", highlight: "Advanced Editor Data Cleansing, Schema Transformations" },
      { name: "Data Modeling", level: 94, tag: "Data Architecture", highlight: "Star Schema, Snowflake Schema, Fact-Dimension Relationships" }
    ]
  },
  {
    category: "Python, Analytics & GenAI",
    icon: "Cpu",
    description: "Exploratory data analysis, statistical modeling, feature engineering, and generative AI prompt workflows.",
    items: [
      { name: "Python for Data Analysis", level: 92, tag: "Programming", highlight: "Pandas, NumPy, Data Wrangling & Profiling" },
      { name: "Exploratory Data Analysis (EDA)", level: 90, tag: "Visual Analytics", highlight: "Matplotlib, Seaborn, Outlier & Trend Detection" },
      { name: "Statistics for Data Science", level: 88, tag: "Quantitative", highlight: "Hypothesis Testing, Probability & Variance" },
      { name: "Generative AI & Prompt Engineering", level: 92, tag: "AWS Verified", highlight: "Automated Reporting Briefs & Metric Summarization" },
      { name: "Advanced Microsoft Excel", level: 95, tag: "Spreadsheets", highlight: "XLOOKUP, Pivot Tables, Scenario Modeling, Power Query" }
    ]
  }
];

export const projectsData: Project[] = [
  {
    id: 1,
    projectNumber: "Project 01",
    sectionBadge: "Section 23",
    title: "Retail E-Commerce Sales Trend & Product Profitability Engine",
    subtitle: "Star Schema Architecture, Dimension Slicers & Dynamic DAX Profit Analysis",
    category: "E-Commerce & Retail BI",
    description: "Enterprise sales and profitability intelligence system modeled on a Star Schema with 1-to-many cardinality. Engineered custom DAX KPIs to isolate Top and Bottom 5 performing products across Sales Volume, Quantity, and Net Margin. Configured customized dimension table slicer interactions and time-series sales trend analysis.",
    toolsUsed: ["Power BI Desktop", "Advanced DAX", "Power Query", "Star Schema Modeling", "Edit Interactions"],
    dataSources: ["Relational Sales Fact Table", "Product Dimension", "Customer Dimension", "Date Hierarchy"],
    daxFunctions: [
      "Top/Bottom 5 Products by Profit (RANKX & TOPN)",
      "Sales Trends Over Time (Time Intelligence DAX)",
      "Dynamic Profit Margin % (DIVIDE & CALCULATE)",
      "Dimension Slicer Interaction Logic"
    ],
    demoUrl: "https://github.com/damaramakotaiahnit-lab",
    githubUrl: "https://github.com/damaramakotaiahnit-lab",
    linkedinPostUrl: "https://www.linkedin.com/in/ramakotaiah-dama-04789b245/",
    metrics: "Top/Bottom 5 Optimization • Star Schema Cardinality",
    gradient: "from-indigo-600 via-purple-600 to-sky-600",
    tags: ["Power BI", "DAX", "Star Schema", "Retail Analytics", "Power Query"],
    highlights: [
      "Constructed normalized Star Schema linking Fact Sales with Product, Customer, and Date dimensions via primary/foreign keys",
      "Engineered dynamic DAX measures identifying Top and Bottom 5 products across profit margins and order quantities",
      "Configured advanced edit interactions to prevent cross-filtering interference across dimension slicers",
      "Designed time-series trend visuals enabling category managers to pinpoint seasonal revenue velocity"
    ],
    businessImpact: "Identified low-margin products generating 35% of returns, empowering category leads to reprice inventory and boost gross margin by 14%."
  },
  {
    id: 2,
    projectNumber: "Project 02",
    sectionBadge: "Section 24",
    title: "Enterprise SQL Server to Power BI Service with Row-Level Security (RLS)",
    subtitle: "Automated Scheduled Refresh, Drill-Through Filters & Multi-Row Matrix Reporting",
    category: "Database & Enterprise Security",
    description: "End-to-end corporate database-to-cloud reporting solution. Installed and provisioned Microsoft SQL Server, imported relational records, connected to Power BI Desktop, designed executive matrix views with Ribbon charts, configured dynamic Drill-Through filters, implemented Row-Level Security (RLS) roles, and published to Power BI Service with automated Scheduled Refresh.",
    toolsUsed: ["Microsoft SQL Server", "SSMS", "Power BI Desktop", "Power BI Service", "Row-Level Security (RLS)", "Scheduled Refresh"],
    dataSources: ["Microsoft SQL Server (MSSQL)", "SSMS Relational Tables", "Power BI Service Cloud"],
    daxFunctions: [
      "Row-Level Security Filter DAX [Username() = UserPrincipalName()]",
      "Matrix Metric Aggregations",
      "Drill-Through Context Filters",
      "Ribbon Chart Rank Progression Measures"
    ],
    demoUrl: "https://github.com/damaramakotaiahnit-lab",
    githubUrl: "https://github.com/damaramakotaiahnit-lab",
    linkedinPostUrl: "https://www.linkedin.com/in/ramakotaiah-dama-04789b245/",
    metrics: "Row-Level Security (RLS) • Automated Scheduled Refresh",
    gradient: "from-blue-600 via-indigo-600 to-violet-600",
    tags: ["SQL Server", "Power BI Service", "RLS Security", "Scheduled Refresh", "DAX"],
    highlights: [
      "Imported relational datasets into MSSQL Server, performing initial database profiling and table design in SSMS",
      "Configured Row-Level Security (RLS) roles in Power BI Desktop and validated user permissions in Power BI Service",
      "Implemented seamless Drill-Through filters to allow drill-down exploration from regional summary cards to transaction details",
      "Established automated Scheduled Refresh in Power BI Service ensuring zero manual report maintenance"
    ],
    businessImpact: "Enforced strict organizational data governance with RLS so 40+ regional managers access strictly authorized store metrics."
  },
  {
    id: 3,
    projectNumber: "Project 03",
    sectionBadge: "Section 25",
    title: "Customer Banking Sentiment & Balance Transaction Analytics",
    subtitle: "Power Query Sentiment Text ETL, Interactive Bookmarks & Age Cohort Profiling",
    category: "Financial Analytics & Power Query ETL",
    description: "Multi-layered banking customer analytics cockpit. Executed sentiment analysis and text profiling in Power Query, engineered demographic age group columns, built dynamic line charts and matrix visuals, and implemented an interactive bookmarking system allowing users to switch views between Transaction Volume and Remaining Account Balance seamlessly.",
    toolsUsed: ["Power BI Desktop", "Power Query Editor", "Text Analytics / Sentiment", "Interactive Bookmarks", "Power BI Service"],
    dataSources: ["Banking Transaction Logs", "Customer Sentiment Survey Data", "Account Balance Datasets"],
    daxFunctions: [
      "Remaining Balance Aggregations",
      "Sentiment Polarity Score Measure",
      "Age Group Demographics Discretization",
      "Bookmark State Sync Logic"
    ],
    demoUrl: "https://github.com/damaramakotaiahnit-lab",
    githubUrl: "https://github.com/damaramakotaiahnit-lab",
    linkedinPostUrl: "https://www.linkedin.com/in/ramakotaiah-dama-04789b245/",
    metrics: "Interactive Bookmarks • Sentiment Text Analytics",
    gradient: "from-purple-600 via-pink-600 to-indigo-600",
    tags: ["Sentiment Analysis", "Power Query ETL", "Banking Analytics", "Bookmarks", "Power BI"],
    highlights: [
      "Cleaned and transformed customer feedback in Power Query Editor, generating quantifiable sentiment polarity scores",
      "Segmented customers into analytical age groups to correlate balance retention with user sentiment",
      "Engineered customized dual-state bookmarks for Transactions vs Remaining Balance with synced cross-page slicers",
      "Applied dynamic conditional formatting to highlight accounts showing negative sentiment and declining balances"
    ],
    businessImpact: "Isolated at-risk banking accounts with declining sentiment, enabling retention teams to intervene proactively on disaffected clients."
  },
  {
    id: 4,
    projectNumber: "Project 04",
    sectionBadge: "Section 36",
    title: "Student Mental Health, Academic Stress & Lifestyle Correlation Cockpit",
    subtitle: "SQL Server Data Cleaning, Multi-Factor Scoring & Tableau Cloud Storyboard",
    category: "Healthcare & Behavioral Analytics (Tableau Cloud)",
    description: "Comprehensive behavioral data study examining relationships between academic pressure, financial strain, study hours, sleep duration, and student mental health indicators. Executed data wrangling and index creation in Microsoft SQL Server, connected live to Tableau Desktop, created an interactive Student Count Analysis Dashboard, and published to Tableau Cloud.",
    toolsUsed: ["Tableau Desktop", "Tableau Cloud", "Microsoft SQL Server", "SQL Transformations", "Correlation Storyboards"],
    dataSources: ["Academic Stress & Lifestyle Surveys", "SQL Server Healthcare Database", "Tableau Cloud Repository"],
    daxFunctions: [
      "Student Count by Stress Category (Tableau LOD Expression)",
      "Sleep Duration vs Academic Pressure Correlation",
      "Study Satisfaction Score Bins"
    ],
    demoUrl: "https://github.com/damaramakotaiahnit-lab",
    githubUrl: "https://github.com/damaramakotaiahnit-lab",
    linkedinPostUrl: "https://www.linkedin.com/in/ramakotaiah-dama-04789b245/",
    metrics: "Tableau Cloud Deployment • Multi-Factor SQL Model",
    gradient: "from-violet-600 via-indigo-600 to-purple-800",
    tags: ["Tableau Desktop", "Tableau Cloud", "SQL Server", "Behavioral Analytics", "LOD Calculations"],
    highlights: [
      "Engineered SQL scripts to cleanse raw survey records, modify gender columns, add age brackets, and create surrogate indexes",
      "Established live ODBC connection from SQL Server to Tableau Desktop, validating column distribution and completeness",
      "Visualized multi-dimensional correlations: Study Hours vs Depression, Sleep Duration vs Financial Stress",
      "Published fully interactive Student Count Analysis dashboard to Tableau Cloud for administrative stakeholders"
    ],
    businessImpact: "Delivered institutional counseling centers empirical proof that sleep deprivation under 5 hours combined with financial stress doubled severe risk scores."
  },
  {
    id: 5,
    projectNumber: "Project 05",
    sectionBadge: "Section 46",
    title: "AI-Assisted Multi-Table SQL Pipeline & Banking Churn Risk Analyzer",
    subtitle: "3-Table Relational SQL Joins, Churn Bins & Power BI Service TreeMaps",
    category: "AI-Augmented Analytics & SQL Engineering",
    description: "Advanced corporate banking transaction and customer retention pipeline. Utilized SQL and Perplexity AI to synthesize and cleanse multi-table transactional records, corrected date inconsistencies, combined 3 relational tables via SQL JOINs, integrated AI-recommended DAX KPIs, evaluated inactive accounts by month/year, and visualized customer distributions using Power BI TreeMaps.",
    toolsUsed: ["SQL Server", "SQL Joins (3 Tables)", "Perplexity AI (DAX/SQL)", "Power BI Desktop", "Power BI Service", "TreeMaps"],
    dataSources: ["Customer Demographics Table", "Account Balances Table", "Transaction History Table"],
    daxFunctions: [
      "Inactive Accounts Count by Year & Month",
      "Transaction Volume by Payment Type",
      "Total Balance by Account Type Aggregation",
      "Customer Demographic Tree-Mapping Bins"
    ],
    demoUrl: "https://github.com/damaramakotaiahnit-lab",
    githubUrl: "https://github.com/damaramakotaiahnit-lab",
    linkedinPostUrl: "https://www.linkedin.com/in/ramakotaiah-dama-04789b245/",
    metrics: "3-Table SQL Joins • AI-Assisted DAX Optimization",
    gradient: "from-sky-600 via-indigo-600 to-violet-700",
    tags: ["SQL Joins", "Perplexity AI", "Power BI Service", "Banking Analytics", "Treemaps"],
    highlights: [
      "Combined data from 3 separate relational tables using complex SQL INNER and LEFT JOINs, eliminating date inconsistencies",
      "Leveraged Perplexity AI prompt workflows to optimize DAX formulas and identify high-cardinality KPI opportunities",
      "Constructed interactive visual architecture featuring TreeMaps for customer segmentations and transaction types",
      "Identified inactive accounts by year and month to pinpoint customer attrition patterns before final account closure"
    ],
    businessImpact: "Reduced dormant account attrition by providing bank relationship managers with a prioritized list of at-risk accounts based on transaction recency."
  }
];

export const certificationsData: Certification[] = [
  {
    id: 0,
    title: "Complete Data Analyst Bootcamp: Basics To Advanced",
    issuer: "Udemy / Krish AI Technologies (Krish Naik & Jayant Topnani)",
    issueDate: "2026",
    credentialId: "UDEMY-6074041-DA",
    verificationUrl: "https://www.udemy.com/course/complete-data-analyst-bootcamp-from-basics-to-advanced/",
    image: "./Ramakotaiah Dama _ LinkedIn_files/1793892230614",
    skills: ["Python", "SQL Server", "Power BI", "Tableau", "DAX", "Statistics", "Snowflake"],
    description: "89 total hours of intensive mastery covering Python, Statistics, Feature Engineering, SQL Server, Power BI, Advanced DAX, Tableau, and 5 capstone projects.",
    badge: "89-Hour Bootcamp"
  },
  {
    id: 1,
    title: "Deloitte Data Analytics Job Simulation",
    issuer: "Deloitte (via Forage)",
    issueDate: "Feb 2026",
    credentialId: "DELOITTE-DA-2026",
    verificationUrl: "https://www.linkedin.com/in/ramakotaiah-dama-04789b245/details/certifications/",
    image: "./Ramakotaiah Dama _ LinkedIn_files/1793892230614",
    skills: ["Data Analytics", "Forensic Accounting", "Data Visualization", "Client Presentation"],
    description: "Completed simulated corporate forensic auditing engagement: analyzed 50,000+ transaction anomalies and engineered visual dashboards.",
    badge: "Deloitte Simulation"
  },
  {
    id: 3,
    title: "Foundations of Prompt Engineering",
    issuer: "Amazon Web Services (AWS)",
    issueDate: "Feb 2026",
    credentialId: "AWS-PE-FOUNDATIONS",
    verificationUrl: "https://www.linkedin.com/in/ramakotaiah-dama-04789b245/details/certifications/",
    image: "./Ramakotaiah Dama _ LinkedIn_files/1793892081620",
    skills: ["Prompt Engineering", "Large Language Models", "AWS Cloud", "Inference Optimization"],
    description: "Demonstrated proficiency in structuring prompt conditioning, few-shot templates, and chain-of-thought workflows on AWS.",
    badge: "AWS Certified"
  },
  {
    id: 4,
    title: "AI Literacy for Everyone",
    issuer: "LinkedIn Learning",
    issueDate: "Feb 2026",
    credentialId: "LIL-AI-LIT-2026",
    verificationUrl: "https://www.linkedin.com/in/ramakotaiah-dama-04789b245/details/certifications/",
    image: "./Ramakotaiah Dama _ LinkedIn_files/1793892404527",
    skills: ["Artificial Intelligence", "Ethics in AI", "Operational Strategy"],
    description: "Core literacy in artificial intelligence principles, algorithmic accountability, data governance, and strategic business adoption.",
    badge: "LinkedIn Learning"
  },
  {
    id: 5,
    title: "Business Analytics with Excel",
    issuer: "Simplilearn / Industry Credential",
    issueDate: "Jan 2026",
    credentialId: "BA-EXCEL-SIMP",
    verificationUrl: "https://www.linkedin.com/in/ramakotaiah-dama-04789b245/details/certifications/",
    image: "./Ramakotaiah Dama _ LinkedIn_files/1793891968272",
    skills: ["Excel Power Query", "VLOOKUP/XLOOKUP", "Pivot Tables", "Scenario Manager"],
    description: "Financial and business modeling leveraging advanced Excel functions, statistical regression, what-if analysis, and dynamic tables.",
    badge: "Excel Analytics"
  },
  {
    id: 6,
    title: "SQL and Relational Databases 101",
    issuer: "IBM Cognitive Class",
    issueDate: "Jan 2026",
    credentialId: "IBM-SQL-101",
    verificationUrl: "https://cognitiveclass.ai",
    image: "./Ramakotaiah Dama _ LinkedIn_files/1793891381794",
    skills: ["SQL", "Relational Database Design", "DML/DDL", "Joins & Subqueries"],
    description: "Enterprise relational schema querying, multi-table joins, subqueries, group aggregations, and constraint management.",
    badge: "IBM Verified"
  },
  {
    id: 7,
    title: "Getting Started with Tableau Online",
    issuer: "IBM Cognitive Class",
    issueDate: "Jan 2026",
    credentialId: "IBM-TAB-ONLINE",
    verificationUrl: "https://cognitiveclass.ai",
    image: "./Ramakotaiah Dama _ LinkedIn_files/1793891520426",
    skills: ["Tableau", "Visual Analytics", "Calculated Fields", "Storyboarding"],
    description: "Designing intuitive visual dashboards, trend analytics, geographic maps, and calculated fields in Tableau Online.",
    badge: "Tableau"
  },
  {
    id: 8,
    title: "Python 101 for Data Science",
    issuer: "IBM Cognitive Class",
    issueDate: "Dec 2025",
    credentialId: "IBM-PY-101",
    verificationUrl: "https://cognitiveclass.ai",
    image: "./Ramakotaiah Dama _ LinkedIn_files/1793891181571",
    skills: ["Python", "Pandas", "NumPy", "Data Science Foundations"],
    description: "Comprehensive practical training in Python syntax, NumPy array manipulation, and tabular analysis with Pandas.",
    badge: "Python Science"
  }
];

export const experienceData: Experience[] = [
  {
    role: "Data Analyst Bootcamp Trainee & BI Developer",
    company: "Complete Data Analyst Bootcamp • Krish AI Technologies & Udemy",
    period: "2025 - 2026",
    location: "Online / Intensive (89 Hours)",
    type: "Intensive Program",
    description: "Completed 513 of 542 lectures under Krish Naik and Jayant Topnani, developing 5 end-to-end production capstones across SQL Server, Power BI Desktop/Service, Tableau, and Snowflake.",
    skills: ["Power BI Desktop", "Power BI Service", "Advanced DAX", "SQL Server (SSMS)", "Tableau Cloud", "Python (Pandas/NumPy)", "Power Query"],
    highlights: [
      "Engineered Star Schema sales trend architecture with dynamic TOPN/RANKX measures",
      "Configured Row-Level Security (RLS) in Power BI Desktop and validated user access in Power BI Service",
      "Built interactive sentiment analysis bookmarks and AI-assisted 3-table SQL join pipelines"
    ]
  },
  {
    role: "Data Analytics Simulation Analyst",
    company: "Deloitte (Forage Virtual Experience)",
    period: "Jan 2026 - Feb 2026",
    location: "Remote / Virtual",
    type: "Corporate Simulation",
    description: "Executed real-world enterprise analytics workflows: data cleaning, forensic transaction anomaly detection, and executive presentation of remediation strategies.",
    skills: ["Forensic Data Analysis", "Tableau", "Client Communication", "Outlier Detection"],
    highlights: [
      "Audited 50,000+ transaction lines for vendor billing compliance",
      "Identified critical anomalous spending patterns using standard deviation scoring"
    ]
  }
];

export const educationData: Education[] = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    institution: "Jawaharlal Nehru Technological University, Kakinada (JNTUK)",
    logoUrl: "./Ramakotaiah Dama _ LinkedIn_files/1630563635923",
    period: "Graduated with Strong Academic Record",
    location: "Kakinada, Andhra Pradesh, India",
    description: "Rigorous technical foundation in engineering principles, applied mathematics, relational database systems, and statistical computation.",
    coursework: ["Database Management Systems", "Applied Mathematics & Statistics", "Algorithms & Data Structures", "Computer Programming"]
  }
];
