export interface RoadmapData {
  focusAreas: string[]
  coreSubjects: string[]
  skills: string[]
  platforms: { name: string; url: string }[]
  timeline: { phase: string; description: string }[]
}

export type Year = "1st Year" | "2nd Year" | "3rd Year" | "4th Year"
export type Goal = "Placements" | "Higher Studies" | "GATE" | "Research"

const roadmaps: Record<string, RoadmapData> = {
  "1st Year-Placements": {
    focusAreas: [
      "Build strong programming fundamentals (C/C++/Python)",
      "Start competitive programming",
      "Learn basic data structures",
      "Participate in coding contests",
    ],
    coreSubjects: [
      "Programming in C/C++",
      "Mathematics for CS",
      "Basic Data Structures",
      "Introduction to Algorithms",
    ],
    skills: [
      "Problem-solving & logical thinking",
      "Basic DSA (arrays, strings, linked lists)",
      "Version control with Git & GitHub",
      "Technical communication",
    ],
    platforms: [
      { name: "LeetCode", url: "https://leetcode.com" },
      { name: "HackerRank", url: "https://hackerrank.com" },
      { name: "Codeforces", url: "https://codeforces.com" },
      { name: "freeCodeCamp", url: "https://freecodecamp.org" },
    ],
    timeline: [
      { phase: "Phase 1:", description: "Months 1-3: Learn C/C++ basics, solve 50+ easy problems" },
      { phase: "Phase 2:", description: "Months 4-6: Data structures fundamentals, arrays & strings" },
      { phase: "Phase 3:", description: "Months 7-9: Start competitive programming, join contests" },
      { phase: "Phase 4:", description: "Months 10-12: Build 1-2 small projects, explore domains" },
    ],
  },
  "1st Year-Higher Studies": {
    focusAreas: [
      "Focus on academic excellence (maintain high GPA)",
      "Explore research areas and interests",
      "Build strong math fundamentals",
      "Start reading research papers",
    ],
    coreSubjects: [
      "Discrete Mathematics",
      "Linear Algebra",
      "Probability & Statistics",
      "Programming Fundamentals",
    ],
    skills: [
      "Academic writing & research skills",
      "Strong mathematical foundation",
      "Critical thinking & analysis",
      "Technical reading comprehension",
    ],
    platforms: [
      { name: "Coursera", url: "https://coursera.org" },
      { name: "MIT OpenCourseWare", url: "https://ocw.mit.edu" },
      { name: "Khan Academy", url: "https://khanacademy.org" },
      { name: "Google Scholar", url: "https://scholar.google.com" },
    ],
    timeline: [
      { phase: "Phase 1:", description: "Months 1-3: Ace your coursework, build math skills" },
      { phase: "Phase 2:", description: "Months 4-6: Explore CS domains, take online courses" },
      { phase: "Phase 3:", description: "Months 7-9: Start reading introductory research papers" },
      { phase: "Phase 4:", description: "Months 10-12: Identify interests, connect with professors" },
    ],
  },
  "1st Year-GATE": {
    focusAreas: [
      "Build strong CS fundamentals from scratch",
      "Focus on mathematical aptitude",
      "Develop consistent study habits",
      "Start with basic GATE syllabus awareness",
    ],
    coreSubjects: [
      "Engineering Mathematics",
      "Programming in C",
      "Digital Logic",
      "Basic Data Structures",
    ],
    skills: [
      "Mathematical problem-solving",
      "Time management in exams",
      "Conceptual clarity in basics",
      "Consistent daily study routine",
    ],
    platforms: [
      { name: "GeeksforGeeks", url: "https://geeksforgeeks.org" },
      { name: "GATE Overflow", url: "https://gateoverflow.in" },
      { name: "Unacademy", url: "https://unacademy.com" },
      { name: "NPTEL", url: "https://nptel.ac.in" },
    ],
    timeline: [
      { phase: "Phase 1:", description: "Months 1-3: Master C programming and basic math" },
      { phase: "Phase 2:", description: "Months 4-6: Study digital logic and discrete math" },
      { phase: "Phase 3:", description: "Months 7-9: Begin data structures, solve previous papers" },
      { phase: "Phase 4:", description: "Months 10-12: Revise and practice aptitude questions" },
    ],
  },
  "1st Year-Research": {
    focusAreas: [
      "Develop curiosity and explore CS domains",
      "Maintain excellent academic record",
      "Learn to read and understand papers",
      "Build foundational math & programming skills",
    ],
    coreSubjects: [
      "Linear Algebra & Calculus",
      "Probability & Statistics",
      "Introduction to CS Theory",
      "Programming Fundamentals",
    ],
    skills: [
      "Critical reading and analysis",
      "Mathematical maturity",
      "LaTeX for writing papers",
      "Python for scientific computing",
    ],
    platforms: [
      { name: "arXiv", url: "https://arxiv.org" },
      { name: "MIT OpenCourseWare", url: "https://ocw.mit.edu" },
      { name: "Coursera", url: "https://coursera.org" },
      { name: "Overleaf (LaTeX)", url: "https://overleaf.com" },
    ],
    timeline: [
      { phase: "Phase 1:", description: "Months 1-3: Excel in coursework, learn Python basics" },
      { phase: "Phase 2:", description: "Months 4-6: Explore AI/ML, systems, theory domains" },
      { phase: "Phase 3:", description: "Months 7-9: Read beginner-friendly research papers" },
      { phase: "Phase 4:", description: "Months 10-12: Approach a professor for guidance" },
    ],
  },
  "2nd Year-Placements": {
    focusAreas: [
      "Strengthen DSA (200+ problems on LeetCode)",
      "Learn one web dev stack (MERN/Next.js)",
      "Build 2-3 solid projects",
      "Start contributing to open source",
    ],
    coreSubjects: [
      "Object-Oriented Programming",
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Operating Systems (Basics)",
    ],
    skills: [
      "Intermediate DSA & problem-solving",
      "Full-stack web development",
      "Git, GitHub & collaboration",
      "Resume writing & LinkedIn profile",
    ],
    platforms: [
      { name: "LeetCode", url: "https://leetcode.com" },
      { name: "GeeksforGeeks", url: "https://geeksforgeeks.org" },
      { name: "GitHub", url: "https://github.com" },
      { name: "freeCodeCamp", url: "https://freecodecamp.org" },
    ],
    timeline: [
      { phase: "Phase 1:", description: "Months 1-3: Master OOP & intermediate DSA concepts" },
      { phase: "Phase 2:", description: "Months 4-6: Build full-stack projects, learn databases" },
      { phase: "Phase 3:", description: "Months 7-9: Open source contributions, 150+ DSA problems" },
      { phase: "Phase 4:", description: "Months 10-12: Start resume building, attend workshops" },
    ],
  },
  "2nd Year-Higher Studies": {
    focusAreas: [
      "Maintain high GPA (aim for 9+)",
      "Explore specializations (AI, Systems, Theory)",
      "Start research under a professor",
      "Prepare for GRE/TOEFL basics",
    ],
    coreSubjects: [
      "Algorithms & Complexity",
      "Probability & Statistics",
      "Computer Architecture",
      "Database Systems",
    ],
    skills: [
      "Research methodology & paper writing",
      "Advanced programming in Python/Java",
      "Statistical analysis & tools",
      "Presentation & communication skills",
    ],
    platforms: [
      { name: "Coursera", url: "https://coursera.org" },
      { name: "edX", url: "https://edx.org" },
      { name: "Google Scholar", url: "https://scholar.google.com" },
      { name: "NPTEL", url: "https://nptel.ac.in" },
    ],
    timeline: [
      { phase: "Phase 1:", description: "Months 1-3: Excel in coursework, explore specializations" },
      { phase: "Phase 2:", description: "Months 4-6: Approach professors, start research project" },
      { phase: "Phase 3:", description: "Months 7-9: GRE vocabulary, begin test preparation" },
      { phase: "Phase 4:", description: "Months 10-12: Publish/present work, refine research" },
    ],
  },
  "2nd Year-GATE": {
    focusAreas: [
      "Complete 40% of GATE syllabus",
      "Focus on core CS subjects",
      "Solve previous year questions regularly",
      "Join a GATE study group or coaching",
    ],
    coreSubjects: [
      "Data Structures & Algorithms",
      "Discrete Mathematics",
      "Computer Organization",
      "Theory of Computation (Intro)",
    ],
    skills: [
      "Deep conceptual understanding",
      "Previous year question solving",
      "Quick mental math & aptitude",
      "Subject-wise note making",
    ],
    platforms: [
      { name: "GATE Overflow", url: "https://gateoverflow.in" },
      { name: "GeeksforGeeks", url: "https://geeksforgeeks.org" },
      { name: "Unacademy", url: "https://unacademy.com" },
      { name: "NPTEL", url: "https://nptel.ac.in" },
    ],
    timeline: [
      { phase: "Phase 1:", description: "Months 1-3: Complete DSA and discrete math syllabus" },
      { phase: "Phase 2:", description: "Months 4-6: Study computer organization & architecture" },
      { phase: "Phase 3:", description: "Months 7-9: Theory of computation, OS basics" },
      { phase: "Phase 4:", description: "Months 10-12: Revise and solve 500+ previous year Qs" },
    ],
  },
  "2nd Year-Research": {
    focusAreas: [
      "Start a research project under a professor",
      "Deep dive into one specialization",
      "Read 10+ papers in your area of interest",
      "Learn research tools & methodologies",
    ],
    coreSubjects: [
      "Advanced Algorithms",
      "Machine Learning Basics",
      "Formal Methods / Logic",
      "Computer Architecture",
    ],
    skills: [
      "Literature survey & review",
      "Experiment design & evaluation",
      "Python (NumPy, Pandas, Matplotlib)",
      "Paper writing in LaTeX",
    ],
    platforms: [
      { name: "arXiv", url: "https://arxiv.org" },
      { name: "Papers with Code", url: "https://paperswithcode.com" },
      { name: "Google Scholar", url: "https://scholar.google.com" },
      { name: "Overleaf (LaTeX)", url: "https://overleaf.com" },
    ],
    timeline: [
      { phase: "Phase 1:", description: "Months 1-3: Literature survey, identify research gap" },
      { phase: "Phase 2:", description: "Months 4-6: Design experiments, build prototype" },
      { phase: "Phase 3:", description: "Months 7-9: Run experiments, analyze results" },
      { phase: "Phase 4:", description: "Months 10-12: Write paper, submit to workshop/conference" },
    ],
  },
  "3rd Year-Placements": {
    focusAreas: [
      "Intensive DSA practice (300+ problems on LeetCode)",
      "Master system design fundamentals",
      "Apply for internships at top companies",
      "Mock interviews and communication skills",
    ],
    coreSubjects: [
      "Operating Systems",
      "Computer Networks",
      "Database Management Systems",
      "System Design",
    ],
    skills: [
      "Advanced DSA & competitive programming",
      "System design (HLD & LLD)",
      "Behavioral interview preparation",
      "Resume building & LinkedIn optimization",
    ],
    platforms: [
      { name: "LeetCode", url: "https://leetcode.com" },
      { name: "GeeksforGeeks", url: "https://geeksforgeeks.org" },
      { name: "HackerRank", url: "https://hackerrank.com" },
      { name: "freeCodeCamp", url: "https://freecodecamp.org" },
    ],
    timeline: [
      { phase: "Phase 1:", description: "Months 1-3: Solve 150+ medium/hard LeetCode problems" },
      { phase: "Phase 2:", description: "Months 4-6: System design study, mock interviews weekly" },
      { phase: "Phase 3:", description: "Months 7-9: Apply for summer internships, refine resume" },
      { phase: "Phase 4:", description: "Months 10-12: Internship execution, learn from industry experience" },
    ],
  },
  "3rd Year-Higher Studies": {
    focusAreas: [
      "GRE & TOEFL preparation and exam",
      "Finalize target universities & programs",
      "Strong Statement of Purpose (SOP) drafts",
      "Secure 2-3 strong recommendation letters",
    ],
    coreSubjects: [
      "Advanced Algorithms",
      "Machine Learning / AI",
      "Specialization electives",
      "Research Methodology",
    ],
    skills: [
      "GRE (Quant 165+, Verbal 155+)",
      "Academic writing & SOP drafting",
      "Research presentations",
      "Professional networking",
    ],
    platforms: [
      { name: "ETS (GRE/TOEFL)", url: "https://ets.org" },
      { name: "Yocket", url: "https://yocket.com" },
      { name: "GradCafe", url: "https://thegradcafe.com" },
      { name: "Google Scholar", url: "https://scholar.google.com" },
    ],
    timeline: [
      { phase: "Phase 1:", description: "Months 1-3: GRE preparation and give exam" },
      { phase: "Phase 2:", description: "Months 4-6: TOEFL prep, shortlist universities" },
      { phase: "Phase 3:", description: "Months 7-9: Draft SOP, request recommendation letters" },
      { phase: "Phase 4:", description: "Months 10-12: Submit applications, prepare for interviews" },
    ],
  },
  "3rd Year-GATE": {
    focusAreas: [
      "Complete 80% of GATE syllabus",
      "Take full-length mock tests weekly",
      "Focus on weak areas and revise strong ones",
      "Solve 2000+ practice questions",
    ],
    coreSubjects: [
      "Operating Systems",
      "Computer Networks",
      "Compiler Design",
      "Database Management Systems",
    ],
    skills: [
      "Advanced problem-solving under time pressure",
      "Mock test analysis & improvement",
      "Shortcut techniques for calculations",
      "Comprehensive subject revision",
    ],
    platforms: [
      { name: "GATE Overflow", url: "https://gateoverflow.in" },
      { name: "Made Easy", url: "https://madeeasy.in" },
      { name: "GeeksforGeeks", url: "https://geeksforgeeks.org" },
      { name: "TestBook", url: "https://testbook.com" },
    ],
    timeline: [
      { phase: "Phase 1:", description: "Months 1-3: Complete OS, CN & DBMS syllabus" },
      { phase: "Phase 2:", description: "Months 4-6: Compiler design, TOC, and revision" },
      { phase: "Phase 3:", description: "Months 7-9: Full mock tests every week, analyze mistakes" },
      { phase: "Phase 4:", description: "Months 10-12: Intensive revision, solve previous 10 yr papers" },
    ],
  },
  "3rd Year-Research": {
    focusAreas: [
      "Publish in a conference or journal",
      "Apply for research internships (MITACS, DAAD)",
      "Deepen expertise in your specialization",
      "Build a strong research portfolio",
    ],
    coreSubjects: [
      "Advanced ML / Deep Learning",
      "Specialization courses",
      "Research Ethics & Methods",
      "Advanced Mathematics",
    ],
    skills: [
      "Paper writing & peer review process",
      "Presentation at conferences",
      "Collaboration with research groups",
      "Grant/fellowship application writing",
    ],
    platforms: [
      { name: "arXiv", url: "https://arxiv.org" },
      { name: "OpenReview", url: "https://openreview.net" },
      { name: "MITACS", url: "https://mitacs.ca" },
      { name: "Papers with Code", url: "https://paperswithcode.com" },
    ],
    timeline: [
      { phase: "Phase 1:", description: "Months 1-3: Complete research, prepare paper draft" },
      { phase: "Phase 2:", description: "Months 4-6: Submit paper, apply for research internships" },
      { phase: "Phase 3:", description: "Months 7-9: Research internship, expand network" },
      { phase: "Phase 4:", description: "Months 10-12: Refine portfolio, plan for grad school apps" },
    ],
  },
  "4th Year-Placements": {
    focusAreas: [
      "Final placement preparation & company targeting",
      "Crack on-campus and off-campus interviews",
      "Negotiate offers and evaluate companies",
      "Complete final year project aligned with career",
    ],
    coreSubjects: [
      "System Design (Advanced)",
      "Distributed Systems",
      "Cloud Computing Basics",
      "Software Engineering Practices",
    ],
    skills: [
      "Advanced system design interviews",
      "Salary negotiation & offer evaluation",
      "Professional workplace skills",
      "Full-stack project deployment",
    ],
    platforms: [
      { name: "LeetCode", url: "https://leetcode.com" },
      { name: "Pramp", url: "https://pramp.com" },
      { name: "InterviewBit", url: "https://interviewbit.com" },
      { name: "Glassdoor", url: "https://glassdoor.com" },
    ],
    timeline: [
      { phase: "Phase 1:", description: "Months 1-3: On-campus placement drives, crack interviews" },
      { phase: "Phase 2:", description: "Months 4-6: Off-campus applications, negotiate offers" },
      { phase: "Phase 3:", description: "Months 7-9: Final year project completion" },
      { phase: "Phase 4:", description: "Months 10-12: Prepare for joining, upskill for role" },
    ],
  },
  "4th Year-Higher Studies": {
    focusAreas: [
      "Submit all university applications",
      "Prepare for university interviews",
      "Secure funding/scholarships",
      "Complete final year thesis/project",
    ],
    coreSubjects: [
      "Thesis / Capstone Project",
      "Advanced electives in specialization",
      "Research Seminar",
      "Technical Writing",
    ],
    skills: [
      "University interview preparation",
      "Scholarship application writing",
      "Thesis writing & defense",
      "Pre-graduate research preparation",
    ],
    platforms: [
      { name: "Yocket", url: "https://yocket.com" },
      { name: "GradCafe", url: "https://thegradcafe.com" },
      { name: "CSRankings", url: "https://csrankings.org" },
      { name: "Google Scholar", url: "https://scholar.google.com" },
    ],
    timeline: [
      { phase: "Phase 1:", description: "Months 1-3: Submit applications, track deadlines" },
      { phase: "Phase 2:", description: "Months 4-6: Attend interviews, receive admits/rejects" },
      { phase: "Phase 3:", description: "Months 7-9: Accept offer, apply for scholarships/visa" },
      { phase: "Phase 4:", description: "Months 10-12: Complete thesis, prepare for relocation" },
    ],
  },
  "4th Year-GATE": {
    focusAreas: [
      "Final intensive revision of all subjects",
      "Give 20+ full-length mock tests",
      "Target AIR under 500",
      "Apply for PSU/IIT/IISC through GATE score",
    ],
    coreSubjects: [
      "All GATE CS subjects (revision)",
      "Engineering Mathematics",
      "General Aptitude",
      "Previous Year Question Analysis",
    ],
    skills: [
      "Exam temperament & time management",
      "Quick revision techniques",
      "Accuracy over speed strategy",
      "Post-GATE counseling preparation",
    ],
    platforms: [
      { name: "GATE Overflow", url: "https://gateoverflow.in" },
      { name: "Made Easy", url: "https://madeeasy.in" },
      { name: "ACE Academy", url: "https://aceacademy.co.in" },
      { name: "COAP (IIT Counseling)", url: "https://coap.iitd.ac.in" },
    ],
    timeline: [
      { phase: "Phase 1:", description: "Months 1-3: Intensive revision, 3 mock tests per week" },
      { phase: "Phase 2:", description: "Months 4-6: GATE exam, analyze performance" },
      { phase: "Phase 3:", description: "Months 7-9: COAP counseling, PSU applications" },
      { phase: "Phase 4:", description: "Months 10-12: Secure admission, prepare for PG program" },
    ],
  },
  "4th Year-Research": {
    focusAreas: [
      "Apply to PhD programs or research labs",
      "Complete and publish thesis work",
      "Attend conferences & present research",
      "Secure research position or fellowship",
    ],
    coreSubjects: [
      "Thesis / Dissertation",
      "Advanced Specialization Topics",
      "Research Seminar Presentations",
      "Independent Study",
    ],
    skills: [
      "PhD application & SOP writing",
      "Conference presentation skills",
      "Independent research capability",
      "Academic networking & collaboration",
    ],
    platforms: [
      { name: "CSRankings", url: "https://csrankings.org" },
      { name: "OpenReview", url: "https://openreview.net" },
      { name: "arXiv", url: "https://arxiv.org" },
      { name: "LinkedIn Academic", url: "https://linkedin.com" },
    ],
    timeline: [
      { phase: "Phase 1:", description: "Months 1-3: Finalize thesis, submit to conference/journal" },
      { phase: "Phase 2:", description: "Months 4-6: Apply to PhD programs, secure letters" },
      { phase: "Phase 3:", description: "Months 7-9: Interviews, accept offers, plan transition" },
      { phase: "Phase 4:", description: "Months 10-12: Wrap up undergrad, prepare for PhD journey" },
    ],
  },
}

export function getRoadmap(year: Year, goal: Goal): RoadmapData {
  const key = `${year}-${goal}`
  return roadmaps[key]
}
