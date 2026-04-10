/**
 * Neo4j Seed Script — CSE Career Roadmap
 *
 * Run with:
 *   NEO4J_URI=bolt://localhost:7687 NEO4J_USER=neo4j NEO4J_PASSWORD=<pass> \
 *   npx ts-node --project tsconfig.json scripts/seed-neo4j.ts
 *
 * Uses MERGE, so safe to run multiple times.
 */

import neo4j from "neo4j-driver"

const NEO4J_URI = process.env.NEO4J_URI || "bolt://localhost:7687"
const NEO4J_USER = process.env.NEO4J_USER || "neo4j"
const NEO4J_PASSWORD = process.env.NEO4J_PASSWORD || "your_password_here"

// ── Data ──────────────────────────────────────────────────────────────────────

interface SeedResource {
  name: string
  url: string
}

interface SeedSkill {
  name: string
  category: "focusArea" | "coreSubject" | "skill"
  resources?: SeedResource[]
}

interface SeedTimeline {
  phase: string
  description: string
}

interface SeedEntry {
  year: string
  goal: string
  skills: SeedSkill[]
  timeline: SeedTimeline[]
}

const data: SeedEntry[] = [
  // ── 1st Year ────────────────────────────────────────────────────────────────
  {
    year: "1st Year",
    goal: "Placements",
    skills: [
      { name: "Build strong programming fundamentals (C/C++/Python)", category: "focusArea" },
      { name: "Start competitive programming", category: "focusArea" },
      { name: "Learn basic data structures", category: "focusArea" },
      { name: "Participate in coding contests", category: "focusArea" },
      { name: "Programming in C/C++", category: "coreSubject" },
      { name: "Mathematics for CS", category: "coreSubject" },
      { name: "Basic Data Structures", category: "coreSubject" },
      { name: "Introduction to Algorithms", category: "coreSubject" },
      { name: "Problem-solving & logical thinking", category: "skill" },
      { name: "Basic DSA (arrays, strings, linked lists)", category: "skill" },
      { name: "Version control with Git & GitHub", category: "skill" },
      { name: "Technical communication", category: "skill" },
    ],
    timeline: [
      { phase: "Phase 1:", description: "Months 1-3: Learn C/C++ basics, solve 50+ easy problems" },
      { phase: "Phase 2:", description: "Months 4-6: Data structures fundamentals, arrays & strings" },
      { phase: "Phase 3:", description: "Months 7-9: Start competitive programming, join contests" },
      { phase: "Phase 4:", description: "Months 10-12: Build 1-2 small projects, explore domains" },
    ],
  },
  {
    year: "1st Year",
    goal: "Higher Studies",
    skills: [
      { name: "Focus on academic excellence (maintain high GPA)", category: "focusArea" },
      { name: "Explore research areas and interests", category: "focusArea" },
      { name: "Build strong math fundamentals", category: "focusArea" },
      { name: "Start reading research papers", category: "focusArea" },
      { name: "Discrete Mathematics", category: "coreSubject" },
      { name: "Linear Algebra", category: "coreSubject" },
      { name: "Probability & Statistics", category: "coreSubject" },
      { name: "Programming Fundamentals", category: "coreSubject" },
      { name: "Academic writing & research skills", category: "skill" },
      { name: "Strong mathematical foundation", category: "skill" },
      { name: "Critical thinking & analysis", category: "skill" },
      { name: "Technical reading comprehension", category: "skill" },
    ],
    timeline: [
      { phase: "Phase 1:", description: "Months 1-3: Ace your coursework, build math skills" },
      { phase: "Phase 2:", description: "Months 4-6: Explore CS domains, take online courses" },
      { phase: "Phase 3:", description: "Months 7-9: Start reading introductory research papers" },
      { phase: "Phase 4:", description: "Months 10-12: Identify interests, connect with professors" },
    ],
  },
  {
    year: "1st Year",
    goal: "GATE",
    skills: [
      { name: "Build strong CS fundamentals from scratch", category: "focusArea" },
      { name: "Focus on mathematical aptitude", category: "focusArea" },
      { name: "Develop consistent study habits", category: "focusArea" },
      { name: "Start with basic GATE syllabus awareness", category: "focusArea" },
      { name: "Engineering Mathematics", category: "coreSubject" },
      { name: "Programming in C", category: "coreSubject" },
      { name: "Digital Logic", category: "coreSubject" },
      { name: "Basic Data Structures", category: "coreSubject" },
      { name: "Mathematical problem-solving", category: "skill" },
      { name: "Time management in exams", category: "skill" },
      { name: "Conceptual clarity in basics", category: "skill" },
      { name: "Consistent daily study routine", category: "skill" },
    ],
    timeline: [
      { phase: "Phase 1:", description: "Months 1-3: Master C programming and basic math" },
      { phase: "Phase 2:", description: "Months 4-6: Study digital logic and discrete math" },
      { phase: "Phase 3:", description: "Months 7-9: Begin data structures, solve previous papers" },
      { phase: "Phase 4:", description: "Months 10-12: Revise and practice aptitude questions" },
    ],
  },
  {
    year: "1st Year",
    goal: "Research",
    skills: [
      { name: "Develop curiosity and explore CS domains", category: "focusArea" },
      { name: "Maintain excellent academic record", category: "focusArea" },
      { name: "Learn to read and understand papers", category: "focusArea" },
      { name: "Build foundational math & programming skills", category: "focusArea" },
      { name: "Linear Algebra & Calculus", category: "coreSubject" },
      { name: "Probability & Statistics", category: "coreSubject" },
      { name: "Introduction to CS Theory", category: "coreSubject" },
      { name: "Programming Fundamentals", category: "coreSubject" },
      { name: "Critical reading and analysis", category: "skill" },
      { name: "Mathematical maturity", category: "skill" },
      { name: "LaTeX for writing papers", category: "skill" },
      { name: "Python for scientific computing", category: "skill" },
    ],
    timeline: [
      { phase: "Phase 1:", description: "Months 1-3: Excel in coursework, learn Python basics" },
      { phase: "Phase 2:", description: "Months 4-6: Explore AI/ML, systems, theory domains" },
      { phase: "Phase 3:", description: "Months 7-9: Read beginner-friendly research papers" },
      { phase: "Phase 4:", description: "Months 10-12: Approach a professor for guidance" },
    ],
  },
  // ── 2nd Year ─────────────────────────────────────────────────────────────────
  {
    year: "2nd Year",
    goal: "Placements",
    skills: [
      { name: "Strengthen DSA (200+ problems on LeetCode)", category: "focusArea" },
      { name: "Learn one web dev stack (MERN/Next.js)", category: "focusArea" },
      { name: "Build 2-3 solid projects", category: "focusArea" },
      { name: "Start contributing to open source", category: "focusArea" },
      { name: "Object-Oriented Programming", category: "coreSubject" },
      { name: "Data Structures & Algorithms", category: "coreSubject" },
      { name: "Database Management Systems", category: "coreSubject" },
      { name: "Operating Systems (Basics)", category: "coreSubject" },
      { name: "Intermediate DSA & problem-solving", category: "skill" },
      { name: "Full-stack web development", category: "skill" },
      { name: "Git, GitHub & collaboration", category: "skill" },
      { name: "Resume writing & LinkedIn profile", category: "skill" },
    ],
    timeline: [
      { phase: "Phase 1:", description: "Months 1-3: Master OOP & intermediate DSA concepts" },
      { phase: "Phase 2:", description: "Months 4-6: Build full-stack projects, learn databases" },
      { phase: "Phase 3:", description: "Months 7-9: Open source contributions, 150+ DSA problems" },
      { phase: "Phase 4:", description: "Months 10-12: Start resume building, attend workshops" },
    ],
  },
  {
    year: "2nd Year",
    goal: "Higher Studies",
    skills: [
      { name: "Maintain high GPA (aim for 9+)", category: "focusArea" },
      { name: "Explore specializations (AI, Systems, Theory)", category: "focusArea" },
      { name: "Start research under a professor", category: "focusArea" },
      { name: "Prepare for GRE/TOEFL basics", category: "focusArea" },
      { name: "Algorithms & Complexity", category: "coreSubject" },
      { name: "Probability & Statistics", category: "coreSubject" },
      { name: "Computer Architecture", category: "coreSubject" },
      { name: "Database Systems", category: "coreSubject" },
      { name: "Research methodology & paper writing", category: "skill" },
      { name: "Advanced programming in Python/Java", category: "skill" },
      { name: "Statistical analysis & tools", category: "skill" },
      { name: "Presentation & communication skills", category: "skill" },
    ],
    timeline: [
      { phase: "Phase 1:", description: "Months 1-3: Excel in coursework, explore specializations" },
      { phase: "Phase 2:", description: "Months 4-6: Approach professors, start research project" },
      { phase: "Phase 3:", description: "Months 7-9: GRE vocabulary, begin test preparation" },
      { phase: "Phase 4:", description: "Months 10-12: Publish/present work, refine research" },
    ],
  },
  {
    year: "2nd Year",
    goal: "GATE",
    skills: [
      { name: "Complete 40% of GATE syllabus", category: "focusArea" },
      { name: "Focus on core CS subjects", category: "focusArea" },
      { name: "Solve previous year questions regularly", category: "focusArea" },
      { name: "Join a GATE study group or coaching", category: "focusArea" },
      { name: "Data Structures & Algorithms", category: "coreSubject" },
      { name: "Discrete Mathematics", category: "coreSubject" },
      { name: "Computer Organization", category: "coreSubject" },
      { name: "Theory of Computation (Intro)", category: "coreSubject" },
      { name: "Deep conceptual understanding", category: "skill" },
      { name: "Previous year question solving", category: "skill" },
      { name: "Quick mental math & aptitude", category: "skill" },
      { name: "Subject-wise note making", category: "skill" },
    ],
    timeline: [
      { phase: "Phase 1:", description: "Months 1-3: Complete DSA and discrete math syllabus" },
      { phase: "Phase 2:", description: "Months 4-6: Study computer organization & architecture" },
      { phase: "Phase 3:", description: "Months 7-9: Theory of computation, OS basics" },
      { phase: "Phase 4:", description: "Months 10-12: Revise and solve 500+ previous year Qs" },
    ],
  },
  {
    year: "2nd Year",
    goal: "Research",
    skills: [
      { name: "Start a research project under a professor", category: "focusArea" },
      { name: "Deep dive into one specialization", category: "focusArea" },
      { name: "Read 10+ papers in your area of interest", category: "focusArea" },
      { name: "Learn research tools & methodologies", category: "focusArea" },
      { name: "Advanced Algorithms", category: "coreSubject" },
      { name: "Machine Learning Basics", category: "coreSubject" },
      { name: "Formal Methods / Logic", category: "coreSubject" },
      { name: "Computer Architecture", category: "coreSubject" },
      { name: "Literature survey & review", category: "skill" },
      { name: "Experiment design & evaluation", category: "skill" },
      { name: "Python (NumPy, Pandas, Matplotlib)", category: "skill" },
      { name: "Paper writing in LaTeX", category: "skill" },
    ],
    timeline: [
      { phase: "Phase 1:", description: "Months 1-3: Literature survey, identify research gap" },
      { phase: "Phase 2:", description: "Months 4-6: Design experiments, build prototype" },
      { phase: "Phase 3:", description: "Months 7-9: Run experiments, analyze results" },
      { phase: "Phase 4:", description: "Months 10-12: Write paper, submit to workshop/conference" },
    ],
  },
  // ── 3rd Year ─────────────────────────────────────────────────────────────────
  {
    year: "3rd Year",
    goal: "Placements",
    skills: [
      { name: "Intensive DSA practice (300+ problems on LeetCode)", category: "focusArea" },
      { name: "Master system design fundamentals", category: "focusArea" },
      { name: "Apply for internships at top companies", category: "focusArea" },
      { name: "Mock interviews and communication skills", category: "focusArea" },
      { name: "Operating Systems", category: "coreSubject" },
      { name: "Computer Networks", category: "coreSubject" },
      { name: "Database Management Systems", category: "coreSubject" },
      { name: "System Design", category: "coreSubject" },
      { name: "Advanced DSA & competitive programming", category: "skill" },
      { name: "System design (HLD & LLD)", category: "skill" },
      { name: "Behavioral interview preparation", category: "skill" },
      { name: "Resume building & LinkedIn optimization", category: "skill" },
    ],
    timeline: [
      { phase: "Phase 1:", description: "Months 1-3: Solve 150+ medium/hard LeetCode problems" },
      { phase: "Phase 2:", description: "Months 4-6: System design study, mock interviews weekly" },
      { phase: "Phase 3:", description: "Months 7-9: Apply for summer internships, refine resume" },
      { phase: "Phase 4:", description: "Months 10-12: Internship execution, learn from industry experience" },
    ],
  },
  {
    year: "3rd Year",
    goal: "Higher Studies",
    skills: [
      { name: "GRE & TOEFL preparation and exam", category: "focusArea" },
      { name: "Finalize target universities & programs", category: "focusArea" },
      { name: "Strong Statement of Purpose (SOP) drafts", category: "focusArea" },
      { name: "Secure 2-3 strong recommendation letters", category: "focusArea" },
      { name: "Advanced Algorithms", category: "coreSubject" },
      { name: "Machine Learning / AI", category: "coreSubject" },
      { name: "Specialization electives", category: "coreSubject" },
      { name: "Research Methodology", category: "coreSubject" },
      { name: "GRE (Quant 165+, Verbal 155+)", category: "skill" },
      { name: "Academic writing & SOP drafting", category: "skill" },
      { name: "Research presentations", category: "skill" },
      { name: "Professional networking", category: "skill" },
    ],
    timeline: [
      { phase: "Phase 1:", description: "Months 1-3: GRE preparation and give exam" },
      { phase: "Phase 2:", description: "Months 4-6: TOEFL prep, shortlist universities" },
      { phase: "Phase 3:", description: "Months 7-9: Draft SOP, request recommendation letters" },
      { phase: "Phase 4:", description: "Months 10-12: Submit applications, prepare for interviews" },
    ],
  },
  {
    year: "3rd Year",
    goal: "GATE",
    skills: [
      { name: "Complete 80% of GATE syllabus", category: "focusArea" },
      { name: "Take full-length mock tests weekly", category: "focusArea" },
      { name: "Focus on weak areas and revise strong ones", category: "focusArea" },
      { name: "Solve 2000+ practice questions", category: "focusArea" },
      { name: "Operating Systems", category: "coreSubject" },
      { name: "Computer Networks", category: "coreSubject" },
      { name: "Compiler Design", category: "coreSubject" },
      { name: "Database Management Systems", category: "coreSubject" },
      { name: "Advanced problem-solving under time pressure", category: "skill" },
      { name: "Mock test analysis & improvement", category: "skill" },
      { name: "Shortcut techniques for calculations", category: "skill" },
      { name: "Comprehensive subject revision", category: "skill" },
    ],
    timeline: [
      { phase: "Phase 1:", description: "Months 1-3: Complete OS, CN & DBMS syllabus" },
      { phase: "Phase 2:", description: "Months 4-6: Compiler design, TOC, and revision" },
      { phase: "Phase 3:", description: "Months 7-9: Full mock tests every week, analyze mistakes" },
      { phase: "Phase 4:", description: "Months 10-12: Intensive revision, solve previous 10 yr papers" },
    ],
  },
  {
    year: "3rd Year",
    goal: "Research",
    skills: [
      { name: "Publish in a conference or journal", category: "focusArea" },
      { name: "Apply for research internships (MITACS, DAAD)", category: "focusArea" },
      { name: "Deepen expertise in your specialization", category: "focusArea" },
      { name: "Build a strong research portfolio", category: "focusArea" },
      { name: "Advanced ML / Deep Learning", category: "coreSubject" },
      { name: "Specialization courses", category: "coreSubject" },
      { name: "Research Ethics & Methods", category: "coreSubject" },
      { name: "Advanced Mathematics", category: "coreSubject" },
      { name: "Paper writing & peer review process", category: "skill" },
      { name: "Presentation at conferences", category: "skill" },
      { name: "Collaboration with research groups", category: "skill" },
      { name: "Grant/fellowship application writing", category: "skill" },
    ],
    timeline: [
      { phase: "Phase 1:", description: "Months 1-3: Complete research, prepare paper draft" },
      { phase: "Phase 2:", description: "Months 4-6: Submit paper, apply for research internships" },
      { phase: "Phase 3:", description: "Months 7-9: Research internship, expand network" },
      { phase: "Phase 4:", description: "Months 10-12: Refine portfolio, plan for grad school apps" },
    ],
  },
  // ── 4th Year ─────────────────────────────────────────────────────────────────
  {
    year: "4th Year",
    goal: "Placements",
    skills: [
      { name: "Final placement preparation & company targeting", category: "focusArea" },
      { name: "Crack on-campus and off-campus interviews", category: "focusArea" },
      { name: "Negotiate offers and evaluate companies", category: "focusArea" },
      { name: "Complete final year project aligned with career", category: "focusArea" },
      { name: "System Design (Advanced)", category: "coreSubject" },
      { name: "Distributed Systems", category: "coreSubject" },
      { name: "Cloud Computing Basics", category: "coreSubject" },
      { name: "Software Engineering Practices", category: "coreSubject" },
      { name: "Advanced system design interviews", category: "skill" },
      { name: "Salary negotiation & offer evaluation", category: "skill" },
      { name: "Professional workplace skills", category: "skill" },
      { name: "Full-stack project deployment", category: "skill" },
    ],
    timeline: [
      { phase: "Phase 1:", description: "Months 1-3: On-campus placement drives, crack interviews" },
      { phase: "Phase 2:", description: "Months 4-6: Off-campus applications, negotiate offers" },
      { phase: "Phase 3:", description: "Months 7-9: Final year project completion" },
      { phase: "Phase 4:", description: "Months 10-12: Prepare for joining, upskill for role" },
    ],
  },
  {
    year: "4th Year",
    goal: "Higher Studies",
    skills: [
      { name: "Submit all university applications", category: "focusArea" },
      { name: "Prepare for university interviews", category: "focusArea" },
      { name: "Secure funding/scholarships", category: "focusArea" },
      { name: "Complete final year thesis/project", category: "focusArea" },
      { name: "Thesis / Capstone Project", category: "coreSubject" },
      { name: "Advanced electives in specialization", category: "coreSubject" },
      { name: "Research Seminar", category: "coreSubject" },
      { name: "Technical Writing", category: "coreSubject" },
      { name: "University interview preparation", category: "skill" },
      { name: "Scholarship application writing", category: "skill" },
      { name: "Thesis writing & defense", category: "skill" },
      { name: "Pre-graduate research preparation", category: "skill" },
    ],
    timeline: [
      { phase: "Phase 1:", description: "Months 1-3: Submit applications, track deadlines" },
      { phase: "Phase 2:", description: "Months 4-6: Attend interviews, receive admits/rejects" },
      { phase: "Phase 3:", description: "Months 7-9: Accept offer, apply for scholarships/visa" },
      { phase: "Phase 4:", description: "Months 10-12: Complete thesis, prepare for relocation" },
    ],
  },
  {
    year: "4th Year",
    goal: "GATE",
    skills: [
      { name: "Final intensive revision of all subjects", category: "focusArea" },
      { name: "Give 20+ full-length mock tests", category: "focusArea" },
      { name: "Target AIR under 500", category: "focusArea" },
      { name: "Apply for PSU/IIT/IISC through GATE score", category: "focusArea" },
      { name: "All GATE CS subjects (revision)", category: "coreSubject" },
      { name: "Engineering Mathematics", category: "coreSubject" },
      { name: "General Aptitude", category: "coreSubject" },
      { name: "Previous Year Question Analysis", category: "coreSubject" },
      { name: "Exam temperament & time management", category: "skill" },
      { name: "Quick revision techniques", category: "skill" },
      { name: "Accuracy over speed strategy", category: "skill" },
      { name: "Post-GATE counseling preparation", category: "skill" },
    ],
    timeline: [
      { phase: "Phase 1:", description: "Months 1-3: Intensive revision, 3 mock tests per week" },
      { phase: "Phase 2:", description: "Months 4-6: GATE exam, analyze performance" },
      { phase: "Phase 3:", description: "Months 7-9: COAP counseling, PSU applications" },
      { phase: "Phase 4:", description: "Months 10-12: Secure admission, prepare for PG program" },
    ],
  },
  {
    year: "4th Year",
    goal: "Research",
    skills: [
      { name: "Apply to PhD programs or research labs", category: "focusArea" },
      { name: "Complete and publish thesis work", category: "focusArea" },
      { name: "Attend conferences & present research", category: "focusArea" },
      { name: "Secure research position or fellowship", category: "focusArea" },
      { name: "Thesis / Dissertation", category: "coreSubject" },
      { name: "Advanced Specialization Topics", category: "coreSubject" },
      { name: "Research Seminar Presentations", category: "coreSubject" },
      { name: "Independent Study", category: "coreSubject" },
      { name: "PhD application & SOP writing", category: "skill" },
      { name: "Conference presentation skills", category: "skill" },
      { name: "Independent research capability", category: "skill" },
      { name: "Academic networking & collaboration", category: "skill" },
    ],
    timeline: [
      { phase: "Phase 1:", description: "Months 1-3: Finalize thesis, submit to conference/journal" },
      { phase: "Phase 2:", description: "Months 4-6: Apply to PhD programs, secure letters" },
      { phase: "Phase 3:", description: "Months 7-9: Interviews, accept offers, plan transition" },
      { phase: "Phase 4:", description: "Months 10-12: Wrap up undergrad, prepare for PhD journey" },
    ],
  },
]

// Per-goal platforms (resources linked to the CareerGoal node)
const goalPlatforms: Record<string, SeedResource[]> = {
  Placements: [
    { name: "LeetCode", url: "https://leetcode.com" },
    { name: "HackerRank", url: "https://hackerrank.com" },
    { name: "GeeksforGeeks", url: "https://geeksforgeeks.org" },
    { name: "freeCodeCamp", url: "https://freecodecamp.org" },
    { name: "Pramp", url: "https://pramp.com" },
    { name: "InterviewBit", url: "https://interviewbit.com" },
    { name: "Codeforces", url: "https://codeforces.com" },
    { name: "GitHub", url: "https://github.com" },
    { name: "Glassdoor", url: "https://glassdoor.com" },
  ],
  "Higher Studies": [
    { name: "Coursera", url: "https://coursera.org" },
    { name: "MIT OpenCourseWare", url: "https://ocw.mit.edu" },
    { name: "Khan Academy", url: "https://khanacademy.org" },
    { name: "Google Scholar", url: "https://scholar.google.com" },
    { name: "edX", url: "https://edx.org" },
    { name: "NPTEL", url: "https://nptel.ac.in" },
    { name: "ETS (GRE/TOEFL)", url: "https://ets.org" },
    { name: "Yocket", url: "https://yocket.com" },
    { name: "GradCafe", url: "https://thegradcafe.com" },
    { name: "CSRankings", url: "https://csrankings.org" },
  ],
  GATE: [
    { name: "GeeksforGeeks", url: "https://geeksforgeeks.org" },
    { name: "GATE Overflow", url: "https://gateoverflow.in" },
    { name: "Unacademy", url: "https://unacademy.com" },
    { name: "NPTEL", url: "https://nptel.ac.in" },
    { name: "Made Easy", url: "https://madeeasy.in" },
    { name: "TestBook", url: "https://testbook.com" },
    { name: "ACE Academy", url: "https://aceacademy.co.in" },
    { name: "COAP (IIT Counseling)", url: "https://coap.iitd.ac.in" },
  ],
  Research: [
    { name: "arXiv", url: "https://arxiv.org" },
    { name: "MIT OpenCourseWare", url: "https://ocw.mit.edu" },
    { name: "Coursera", url: "https://coursera.org" },
    { name: "Overleaf (LaTeX)", url: "https://overleaf.com" },
    { name: "Papers with Code", url: "https://paperswithcode.com" },
    { name: "Google Scholar", url: "https://scholar.google.com" },
    { name: "OpenReview", url: "https://openreview.net" },
    { name: "MITACS", url: "https://mitacs.ca" },
    { name: "CSRankings", url: "https://csrankings.org" },
    { name: "LinkedIn Academic", url: "https://linkedin.com" },
  ],
}

// Per-year per-goal platforms (overrides used to match original hardcoded data exactly)
const yearGoalPlatforms: Record<string, SeedResource[]> = {
  "1st Year-Placements": [
    { name: "LeetCode", url: "https://leetcode.com" },
    { name: "HackerRank", url: "https://hackerrank.com" },
    { name: "Codeforces", url: "https://codeforces.com" },
    { name: "freeCodeCamp", url: "https://freecodecamp.org" },
  ],
  "1st Year-Higher Studies": [
    { name: "Coursera", url: "https://coursera.org" },
    { name: "MIT OpenCourseWare", url: "https://ocw.mit.edu" },
    { name: "Khan Academy", url: "https://khanacademy.org" },
    { name: "Google Scholar", url: "https://scholar.google.com" },
  ],
  "1st Year-GATE": [
    { name: "GeeksforGeeks", url: "https://geeksforgeeks.org" },
    { name: "GATE Overflow", url: "https://gateoverflow.in" },
    { name: "Unacademy", url: "https://unacademy.com" },
    { name: "NPTEL", url: "https://nptel.ac.in" },
  ],
  "1st Year-Research": [
    { name: "arXiv", url: "https://arxiv.org" },
    { name: "MIT OpenCourseWare", url: "https://ocw.mit.edu" },
    { name: "Coursera", url: "https://coursera.org" },
    { name: "Overleaf (LaTeX)", url: "https://overleaf.com" },
  ],
  "2nd Year-Placements": [
    { name: "LeetCode", url: "https://leetcode.com" },
    { name: "GeeksforGeeks", url: "https://geeksforgeeks.org" },
    { name: "GitHub", url: "https://github.com" },
    { name: "freeCodeCamp", url: "https://freecodecamp.org" },
  ],
  "2nd Year-Higher Studies": [
    { name: "Coursera", url: "https://coursera.org" },
    { name: "edX", url: "https://edx.org" },
    { name: "Google Scholar", url: "https://scholar.google.com" },
    { name: "NPTEL", url: "https://nptel.ac.in" },
  ],
  "2nd Year-GATE": [
    { name: "GATE Overflow", url: "https://gateoverflow.in" },
    { name: "GeeksforGeeks", url: "https://geeksforgeeks.org" },
    { name: "Unacademy", url: "https://unacademy.com" },
    { name: "NPTEL", url: "https://nptel.ac.in" },
  ],
  "2nd Year-Research": [
    { name: "arXiv", url: "https://arxiv.org" },
    { name: "Papers with Code", url: "https://paperswithcode.com" },
    { name: "Google Scholar", url: "https://scholar.google.com" },
    { name: "Overleaf (LaTeX)", url: "https://overleaf.com" },
  ],
  "3rd Year-Placements": [
    { name: "LeetCode", url: "https://leetcode.com" },
    { name: "GeeksforGeeks", url: "https://geeksforgeeks.org" },
    { name: "HackerRank", url: "https://hackerrank.com" },
    { name: "freeCodeCamp", url: "https://freecodecamp.org" },
  ],
  "3rd Year-Higher Studies": [
    { name: "ETS (GRE/TOEFL)", url: "https://ets.org" },
    { name: "Yocket", url: "https://yocket.com" },
    { name: "GradCafe", url: "https://thegradcafe.com" },
    { name: "Google Scholar", url: "https://scholar.google.com" },
  ],
  "3rd Year-GATE": [
    { name: "GATE Overflow", url: "https://gateoverflow.in" },
    { name: "Made Easy", url: "https://madeeasy.in" },
    { name: "GeeksforGeeks", url: "https://geeksforgeeks.org" },
    { name: "TestBook", url: "https://testbook.com" },
  ],
  "3rd Year-Research": [
    { name: "arXiv", url: "https://arxiv.org" },
    { name: "OpenReview", url: "https://openreview.net" },
    { name: "MITACS", url: "https://mitacs.ca" },
    { name: "Papers with Code", url: "https://paperswithcode.com" },
  ],
  "4th Year-Placements": [
    { name: "LeetCode", url: "https://leetcode.com" },
    { name: "Pramp", url: "https://pramp.com" },
    { name: "InterviewBit", url: "https://interviewbit.com" },
    { name: "Glassdoor", url: "https://glassdoor.com" },
  ],
  "4th Year-Higher Studies": [
    { name: "Yocket", url: "https://yocket.com" },
    { name: "GradCafe", url: "https://thegradcafe.com" },
    { name: "CSRankings", url: "https://csrankings.org" },
    { name: "Google Scholar", url: "https://scholar.google.com" },
  ],
  "4th Year-GATE": [
    { name: "GATE Overflow", url: "https://gateoverflow.in" },
    { name: "Made Easy", url: "https://madeeasy.in" },
    { name: "ACE Academy", url: "https://aceacademy.co.in" },
    { name: "COAP (IIT Counseling)", url: "https://coap.iitd.ac.in" },
  ],
  "4th Year-Research": [
    { name: "CSRankings", url: "https://csrankings.org" },
    { name: "OpenReview", url: "https://openreview.net" },
    { name: "arXiv", url: "https://arxiv.org" },
    { name: "LinkedIn Academic", url: "https://linkedin.com" },
  ],
}

// ── Seed ──────────────────────────────────────────────────────────────────────

async function seed() {
  const driver = neo4j.driver(NEO4J_URI, neo4j.auth.basic(NEO4J_USER, NEO4J_PASSWORD))
  const session = driver.session()

  try {
    console.log("🌱  Seeding Neo4j database…")

    // Clear existing data
    await session.run("MATCH (n) DETACH DELETE n")
    console.log("   Cleared existing nodes.")

    for (const entry of data) {
      const platformKey = `${entry.year}-${entry.goal}`
      const platforms = yearGoalPlatforms[platformKey] ?? goalPlatforms[entry.goal] ?? []

      // Merge Year node
      await session.run(`MERGE (yr:Year {name: $year})`, { year: entry.year })

      // Merge CareerGoal node
      await session.run(
        `MERGE (cg:CareerGoal {name: $goal, yearLevel: $year})`,
        { goal: entry.goal, year: entry.year }
      )

      // Link Year → CareerGoal
      await session.run(
        `MATCH (yr:Year {name: $year})
         MATCH (cg:CareerGoal {name: $goal, yearLevel: $year})
         MERGE (yr)-[:HAS_GOAL]->(cg)`,
        { year: entry.year, goal: entry.goal }
      )

      // Skills & their Resources
      for (const skill of entry.skills) {
        await session.run(
          `MERGE (sk:Skill {name: $name, category: $category})`,
          { name: skill.name, category: skill.category }
        )
        await session.run(
          `MATCH (cg:CareerGoal {name: $goal, yearLevel: $year})
           MATCH (sk:Skill {name: $name, category: $category})
           MERGE (cg)-[:REQUIRES {yearLevel: $year}]->(sk)`,
          { goal: entry.goal, year: entry.year, name: skill.name, category: skill.category }
        )
      }

      // Timeline phases stored as Resource nodes linked to CareerGoal
      for (let i = 0; i < entry.timeline.length; i++) {
        const t = entry.timeline[i]
        await session.run(
          `MERGE (tp:TimelinePhase {phase: $phase, yearLevel: $year, goal: $goal})
           SET tp.description = $description, tp.order = $order`,
          { phase: t.phase, year: entry.year, goal: entry.goal, description: t.description, order: i }
        )
        await session.run(
          `MATCH (cg:CareerGoal {name: $goal, yearLevel: $year})
           MATCH (tp:TimelinePhase {phase: $phase, yearLevel: $year, goal: $goal})
           MERGE (cg)-[:HAS_TIMELINE]->(tp)`,
          { goal: entry.goal, year: entry.year, phase: t.phase }
        )
      }

      // Platforms as Resource nodes linked to CareerGoal
      for (const platform of platforms) {
        await session.run(
          `MERGE (res:Resource {name: $name, url: $url})`,
          { name: platform.name, url: platform.url }
        )
        await session.run(
          `MATCH (cg:CareerGoal {name: $goal, yearLevel: $year})
           MATCH (res:Resource {name: $resName, url: $url})
           MERGE (cg)-[:RECOMMENDS]->(res)`,
          { goal: entry.goal, year: entry.year, resName: platform.name, url: platform.url }
        )
      }

      console.log(`   ✓ ${entry.year} – ${entry.goal}`)
    }

    console.log("\n✅  Seeding complete!")
  } catch (err) {
    console.error("❌  Seeding failed:", err)
    process.exit(1)
  } finally {
    await session.close()
    await driver.close()
  }
}

seed()
