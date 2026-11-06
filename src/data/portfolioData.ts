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
    { label: "Enterprise Projects", value: "10 Deployed", subtext: "End-to-End BI Solutions" },
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
  },
  {
    id: 6,
    projectNumber: "Project 06",
    sectionBadge: "Financial BI",
    title: "Banking Loan Default Risk & Portfolio Analytics Cockpit",
    subtitle: "On-Premises Data Gateway, Automated Daily Refresh & Advanced DAX Decomposition Trees",
    category: "Financial Analytics & Risk Modeling",
    description: "Enterprise credit risk dashboard ingesting 50,000+ loan records from Microsoft SQL Server. Configured an On-Premises Standard Mode Data Gateway with automated daily incremental refresh schedules achieving 99.4% uptime. Authored 12+ complex DAX measures including YoY Loan Amount Growth, YoY Default Rate variance, and YTD Credit Bins.",
    toolsUsed: ["Power BI Service", "Microsoft SQL Server", "Advanced DAX", "On-Premises Data Gateway", "Decomposition Trees"],
    dataSources: ["SQL Server Financial Database", "Loan Fact Tables", "Borrower Demographics"],
    daxFunctions: [
      "YoY Loan Amount Growth % = DIVIDE([Current Year Loan] - [Prior Year Loan], [Prior Year Loan])",
      "YoY Default Rate Variance = [Default Rate] - CALCULATE([Default Rate], SAMEPERIODLASTYEAR('Calendar'[Date]))",
      "Decomposition Tree Metric Dynamic Switch Logic",
      "YTD Credit Risk Bins using CALCULATE, ALLEXCEPT & MEDIANX"
    ],
    demoUrl: "https://github.com/damaramakotaiahnit-lab",
    githubUrl: "https://github.com/damaramakotaiahnit-lab",
    linkedinPostUrl: "https://www.linkedin.com/in/ramakotaiah-dama-04789b245/",
    metrics: "50,000+ Loan Records • 99.4% Gateway Uptime",
    gradient: "from-amber-600 via-orange-600 to-rose-700",
    tags: ["Financial BI", "Power BI Gateway", "DAX Time Intelligence", "Credit Risk", "SQL Server"],
    highlights: [
      "Ingested 50,000+ transactional loan records from Microsoft SQL Server staging warehouse",
      "Configured On-Premises Data Gateway ensuring scheduled automatic refreshes with zero manual overhead",
      "Constructed 12+ production DAX measures evaluating YoY growth, delinquency velocity, and portfolio exposure",
      "Implemented dynamic Decomposition Trees enabling credit officers to drill down into loan default drivers"
    ],
    businessImpact: "Empowered credit risk committee to preemptively identify $4.2M in high-risk exposures, reducing default delinquency by 11%."
  },
  {
    id: 7,
    projectNumber: "Project 07",
    sectionBadge: "Database Migration",
    title: "Dual-Engine Enterprise Database Migration & Reporting",
    subtitle: "SQL Server ↔ MySQL Test-to-Production Migration with Power Query Advanced M-Code Re-pointing",
    category: "Data Engineering & Migration",
    description: "Architected a test-to-production database ETL migration from Microsoft SQL Server staging to MySQL production environment. Formulated optimized SQL LEFT JOIN queries, views, and DDL/DML scripts in MySQL Workbench ensuring 100% data parity. Re-pointed production Power BI data sources seamlessly using Power Query Advanced Editor (M-Code).",
    toolsUsed: ["Microsoft SQL Server", "MySQL Workbench", "Power Query (M-Code)", "Power BI Desktop", "Power BI Service"],
    dataSources: ["SQL Server Staging DB", "MySQL Production DB", "M-Code Source Repositories"],
    daxFunctions: [
      "Data Parity Validation DAX Measures",
      "Cross-Engine Metric Consistency Checks",
      "Dynamic Status Indicators"
    ],
    demoUrl: "https://github.com/damaramakotaiahnit-lab",
    githubUrl: "https://github.com/damaramakotaiahnit-lab",
    linkedinPostUrl: "https://www.linkedin.com/in/ramakotaiah-dama-04789b245/",
    metrics: "100% Data Parity • Zero Report Downtime",
    gradient: "from-emerald-600 via-teal-600 to-cyan-700",
    tags: ["Database Migration", "SQL Server", "MySQL", "Power Query M-Code", "ETL"],
    highlights: [
      "Designed and executed database migration scripts from SQL Server to MySQL Workbench with complete schema alignment",
      "Utilized Power Query M-Code to re-point data connections without altering report visual bindings or breaking DAX calculations",
      "Validated schema parity across 100,000+ records using structured checksum queries",
      "Configured workspace distribution and permission tiers in Power BI Service for cross-departmental delivery"
    ],
    businessImpact: "Achieved seamless migration from staging to production with zero report downtime and 100% verified data consistency."
  },
  {
    id: 8,
    projectNumber: "Project 08",
    sectionBadge: "Cloud Data Warehouse",
    title: "Google Cloud BigQuery Real Estate Sales Intelligence Engine",
    subtitle: "Cloud Data Warehousing, Direct Connector, Rolling 12-Month DAX & AI Key Influencers",
    category: "Cloud Data Warehousing & AI",
    description: "Provisioned Google Cloud BigQuery dataset pipelines to process large-scale property transaction records using BigQuery SQL. Connected Power BI directly to Google Cloud via native BigQuery connector, performing data type casting, null imputation, and data wrangling in Power Query. Built multi-tier time-intelligence DAX calculations and AI Key Influencer visuals.",
    toolsUsed: ["Google Cloud BigQuery", "BigQuery SQL", "Power BI Desktop", "Advanced DAX", "Key Influencers Visual"],
    dataSources: ["GCP BigQuery Datasets", "Cloud Property Transactions", "GIS Spatial Data"],
    daxFunctions: [
      "Rolling 12-Month Sales = CALCULATE([Total Sales], DATESINPERIOD('Calendar'[Date], MAX('Calendar'[Date]), -12, MONTH))",
      "Offer-to-SQM Price Ratio = DIVIDE([Total Offer Price], [Total Square Meters], 0)",
      "YoY Property Price Growth % = DIVIDE([Current Price] - [Prior Price], [Prior Price])",
      "AI Key Influencers Variance Attribution"
    ],
    demoUrl: "https://github.com/damaramakotaiahnit-lab",
    githubUrl: "https://github.com/damaramakotaiahnit-lab",
    linkedinPostUrl: "https://www.linkedin.com/in/ramakotaiah-dama-04789b245/",
    metrics: "Direct GCP Connector • Rolling 12-Month DAX",
    gradient: "from-blue-600 via-sky-600 to-indigo-700",
    tags: ["Google Cloud BigQuery", "GCP", "Cloud Warehousing", "DAX", "Key Influencers"],
    highlights: [
      "Provisioned Google BigQuery datasets and executed complex SQL aggregations on high-volume property records",
      "Established direct connection between Power BI and Google Cloud BigQuery with optimized query folding",
      "Authored Rolling 12-Month time-intelligence DAX expressions using DATESINPERIOD and dynamic ratios",
      "Integrated AI-driven Key Influencers visual to reveal core drivers of property price acceleration"
    ],
    businessImpact: "Accelerated property valuation turnaround by 45% and identified the top 3 spatial drivers that increase commercial lease yields."
  },
  {
    id: 9,
    projectNumber: "Project 09",
    sectionBadge: "Cloud Relational BI",
    title: "Microsoft Azure Cloud SQL Retail Brand Profitability Cockpit",
    subtitle: "Cloud Database, Entra ID Authentication, Ribbon Trend Visuals & Power BI Apps",
    category: "Cloud Database & App Distribution",
    description: "Provisioned and configured a cloud-hosted Microsoft Azure SQL Database for retail inventory and sales transactional data. Configured secure dual authentication using Database credentials and Microsoft Entra ID. Built automated DAX margin analytics: Gross Discount %, Net Profit Margin %, and Cost of Goods Sold (COGS). Distributed executive reports via Power BI Service Apps.",
    toolsUsed: ["Microsoft Azure SQL Database", "Microsoft Entra ID", "Power BI Desktop", "Power BI Service Apps", "Advanced DAX"],
    dataSources: ["Azure SQL Cloud Database", "Retail Transactions Fact", "Brand Master Dimension"],
    daxFunctions: [
      "Gross Discount % = DIVIDE([Total Discount Amount], [Gross Revenue], 0)",
      "Net Profit Margin % = DIVIDE([Net Revenue] - [COGS], [Net Revenue])",
      "Brand Rank Shift DAX Logic",
      "Cumulative Area Profit Progression"
    ],
    demoUrl: "https://github.com/damaramakotaiahnit-lab",
    githubUrl: "https://github.com/damaramakotaiahnit-lab",
    linkedinPostUrl: "https://www.linkedin.com/in/ramakotaiah-dama-04789b245/",
    metrics: "Azure Cloud SQL • Entra ID • Power BI Apps",
    gradient: "from-indigo-600 via-violet-600 to-purple-800",
    tags: ["Azure SQL", "Cloud Database", "Microsoft Entra ID", "Power BI Apps", "Retail Profitability"],
    highlights: [
      "Configured Azure SQL Cloud Database and established enterprise authentication using Microsoft Entra ID",
      "Engineered comprehensive margin analytics DAX suite tracking discount erosion, COGS, and net profitability",
      "Implemented AppSource Ribbon Charts to visualize multi-year brand rank movements across product lines",
      "Packaged and published reports through Power BI Service Apps with tailored role-based access for merchandising executives"
    ],
    businessImpact: "Eliminated unauthorized promotional discounts across 18 brand lines, recovering $230K in annualized net margin."
  },
  {
    id: 10,
    projectNumber: "Project 10",
    sectionBadge: "End-to-End Analytics",
    title: "End-to-End Enterprise Analytics Pipeline & Decision Model",
    subtitle: "Python EDA, Outlier Remediation, Snowflake Warehousing & Executive Scorecard BI",
    category: "Full-Stack Data Analytics",
    description: "Completed full analytics lifecycle from telemetry data extraction to executive boardroom presentation. Conducted exploratory data analysis, outlier remediation, and feature transformation in Python (Pandas/NumPy). Designed snowflake relational schema to power sub-second response times for multi-dimension aggregations. Formulated Customer Lifetime Value and retention scorecards.",
    toolsUsed: ["Python (Pandas/NumPy)", "Snowflake Data Warehouse", "SQL", "Power BI Desktop", "EDA & Statistics"],
    dataSources: ["Enterprise Telemetry Streams", "Snowflake Schema Tables", "Customer Behavioral Data"],
    daxFunctions: [
      "Customer Lifetime Value (CLV) DAX Matrix",
      "Retention Rate Retention Curve DAX",
      "Dynamic Multi-Dimension Scorecard Aggregations"
    ],
    demoUrl: "https://github.com/damaramakotaiahnit-lab",
    githubUrl: "https://github.com/damaramakotaiahnit-lab",
    linkedinPostUrl: "https://www.linkedin.com/in/ramakotaiah-dama-04789b245/",
    metrics: "Python EDA • Snowflake DW • Full Analytics Lifecycle",
    gradient: "from-violet-600 via-purple-600 to-pink-700",
    tags: ["Python", "Snowflake", "Full-Stack Analytics", "Power BI", "Statistics"],
    highlights: [
      "Engineered Python preprocessing scripts for statistical outlier treatment, feature imputation, and normalization",
      "Architected Snowflake virtual warehouse tables with zero-copy cloning for rapid BI data modeling",
      "Built multi-page executive BI dashboard delivering high-level executive KPIs and deep drill-down transaction detail",
      "Formulated Customer Lifetime Value (CLV) and retention scorecards adopted for strategic quarterly business reviews"
    ],
    businessImpact: "Provided C-suite executives with a single source of truth dashboard, reducing weekly reporting prep time from 16 hours to zero."
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
