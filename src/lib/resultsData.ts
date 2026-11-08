// src/lib/resultsData.ts

export interface SubjectMark {
  code: string;
  name: string;
  fullMarks: number;
  obtainedMarks: number;
  grade: string;
  status: "Pass" | "Fail";
}

export interface StudentResult {
  rollNo: string;
  registrationNo: string;
  certificateNo: string;
  studentName: string;
  fatherName: string;
  motherName: string;
  gender: string;
  dateOfBirth: string;
  session: string;
  tradeName: string;
  tradeCode: string;
  duration: string; // e.g. "6 Months (360 Hours)"
  centerName: string;
  centerCode: string;
  district: string;
  issueDate: string;
  verificationCode: string;
  overallGrade: string; // "A+", "A", "A-"
  gpa: string; // e.g. "4.00"
  totalMarks: number;
  obtainedTotal: number;
  percentage: string;
  resultStatus: "PASSED WITH DISTINCTION" | "PASSED" | "REFERRED";
  subjects: SubjectMark[];
}

export const sampleResults: StudentResult[] = [
  {
    rollNo: "NYD-2026-1042",
    registrationNo: "2026-8940-02",
    certificateNo: "CERT-2026-09412",
    studentName: "MD. TANVIR HASAN",
    fatherName: "Md. Rafiqul Islam",
    motherName: "Hosne Ara Begum",
    gender: "Male",
    dateOfBirth: "14 Oct 2002",
    session: "January - June 2026",
    tradeName: "Computer Office Applications & Database Management",
    tradeCode: "ICT-101",
    duration: "6 Months (360 Working Hours)",
    centerName: "Dhaka Central Technical Training Hub",
    centerCode: "C-0104",
    district: "Dhaka",
    issueDate: "28 June 2026",
    verificationCode: "VRF-884029-BD",
    overallGrade: "A+",
    gpa: "4.00",
    totalMarks: 500,
    obtainedTotal: 457,
    percentage: "91.4%",
    resultStatus: "PASSED WITH DISTINCTION",
    subjects: [
      {
        code: "COA-101",
        name: "Computer Fundamentals, Hardware & Operating Systems",
        fullMarks: 100,
        obtainedMarks: 92,
        grade: "A+",
        status: "Pass",
      },
      {
        code: "COA-102",
        name: "Advanced MS Word & Documentation Typing (Bangla/English)",
        fullMarks: 100,
        obtainedMarks: 89,
        grade: "A+",
        status: "Pass",
      },
      {
        code: "COA-103",
        name: "MS Excel, Formula Modeling, Financials & Payroll",
        fullMarks: 100,
        obtainedMarks: 94,
        grade: "A+",
        status: "Pass",
      },
      {
        code: "COA-104",
        name: "Database Systems (MS Access), Internet & Cyber Security",
        fullMarks: 100,
        obtainedMarks: 86,
        grade: "A",
        status: "Pass",
      },
      {
        code: "COA-105",
        name: "Continuous Practical Lab Work & Viva-Voce Assessment",
        fullMarks: 100,
        obtainedMarks: 96,
        grade: "A+",
        status: "Pass",
      },
    ],
  },
  {
    rollNo: "NYD-2026-1088",
    registrationNo: "2026-8940-48",
    certificateNo: "CERT-2026-09458",
    studentName: "SUMAIYA AKTER",
    fatherName: "Abdul Karim",
    motherName: "Salma Khatun",
    gender: "Female",
    dateOfBirth: "05 Mar 2003",
    session: "January - June 2026",
    tradeName: "Professional Graphic Design & Multimedia Production",
    tradeCode: "GDM-201",
    duration: "6 Months (360 Working Hours)",
    centerName: "Chattogram Youth Technical Training Center",
    centerCode: "C-0208",
    district: "Chattogram",
    issueDate: "28 June 2026",
    verificationCode: "VRF-884105-BD",
    overallGrade: "A",
    gpa: "3.85",
    totalMarks: 500,
    obtainedTotal: 432,
    percentage: "86.4%",
    resultStatus: "PASSED WITH DISTINCTION",
    subjects: [
      {
        code: "GDM-201",
        name: "Design Theory, Color Harmony & Typography Fundamentals",
        fullMarks: 100,
        obtainedMarks: 88,
        grade: "A+",
        status: "Pass",
      },
      {
        code: "GDM-202",
        name: "Adobe Photoshop: Photo Retouching & Digital Compositions",
        fullMarks: 100,
        obtainedMarks: 91,
        grade: "A+",
        status: "Pass",
      },
      {
        code: "GDM-203",
        name: "Adobe Illustrator: Vector Illustration, Brand Identity & Logo",
        fullMarks: 100,
        obtainedMarks: 85,
        grade: "A",
        status: "Pass",
      },
      {
        code: "GDM-204",
        name: "Print Production Specifications & Digital Media Prep",
        fullMarks: 100,
        obtainedMarks: 80,
        grade: "A",
        status: "Pass",
      },
      {
        code: "GDM-205",
        name: "Portfolio Review, Capstone Showcase & Viva-Voce",
        fullMarks: 100,
        obtainedMarks: 88,
        grade: "A+",
        status: "Pass",
      },
    ],
  },
  {
    rollNo: "NYD-2026-1120",
    registrationNo: "2026-7812-15",
    certificateNo: "CERT-2026-08119",
    studentName: "MD. AL-AMIN HOSSAIN",
    fatherName: "Md. Sirajul Haque",
    motherName: "Fatema Begum",
    gender: "Male",
    dateOfBirth: "19 Aug 2001",
    session: "January - June 2026",
    tradeName: "Electrical House Wiring & Industrial Motor Installation",
    tradeCode: "EHW-301",
    duration: "6 Months (360 Working Hours)",
    centerName: "Gazipur Industrial Skills Institute",
    centerCode: "C-0312",
    district: "Gazipur",
    issueDate: "28 June 2026",
    verificationCode: "VRF-791044-BD",
    overallGrade: "A+",
    gpa: "3.95",
    totalMarks: 500,
    obtainedTotal: 449,
    percentage: "89.8%",
    resultStatus: "PASSED WITH DISTINCTION",
    subjects: [
      {
        code: "EHW-301",
        name: "Electrical Engineering Principles & Safety Protocols",
        fullMarks: 100,
        obtainedMarks: 86,
        grade: "A",
        status: "Pass",
      },
      {
        code: "EHW-302",
        name: "Domestic Circuit Wiring, Distribution & Earthing Systems",
        fullMarks: 100,
        obtainedMarks: 94,
        grade: "A+",
        status: "Pass",
      },
      {
        code: "EHW-303",
        name: "Industrial Motor Control, Magnetic Contactor & Star-Delta",
        fullMarks: 100,
        obtainedMarks: 90,
        grade: "A+",
        status: "Pass",
      },
      {
        code: "EHW-304",
        name: "Substation Basics, Transformer Maintenance & Solar Power",
        fullMarks: 100,
        obtainedMarks: 87,
        grade: "A",
        status: "Pass",
      },
      {
        code: "EHW-305",
        name: "Hands-on Practical Lab Demonstration & Viva-Voce",
        fullMarks: 100,
        obtainedMarks: 92,
        grade: "A+",
        status: "Pass",
      },
    ],
  },
  {
    rollNo: "NYD-2026-1155",
    registrationNo: "2026-6541-09",
    certificateNo: "CERT-2026-06520",
    studentName: "FARZANA YASMIN",
    fatherName: "Md. Anisur Rahman",
    motherName: "Nazma Parvin",
    gender: "Female",
    dateOfBirth: "22 Nov 2003",
    session: "January - June 2026",
    tradeName: "Industrial Sewing & Modern Garments Quality Control",
    tradeCode: "GAR-401",
    duration: "3 Months (180 Working Hours)",
    centerName: "Narayanganj Apparel Training Academy",
    centerCode: "C-0402",
    district: "Narayanganj",
    issueDate: "28 June 2026",
    verificationCode: "VRF-654210-BD",
    overallGrade: "A",
    gpa: "3.75",
    totalMarks: 400,
    obtainedTotal: 342,
    percentage: "85.5%",
    resultStatus: "PASSED",
    subjects: [
      {
        code: "GAR-401",
        name: "Industrial Lockstitch Machine Operation & Ergonomics",
        fullMarks: 100,
        obtainedMarks: 88,
        grade: "A+",
        status: "Pass",
      },
      {
        code: "GAR-402",
        name: "Garments Pattern Cutting, Measurement & Assembly",
        fullMarks: 100,
        obtainedMarks: 82,
        grade: "A",
        status: "Pass",
      },
      {
        code: "GAR-403",
        name: "Fabric Inspection, Defect Analysis & Quality Assurance",
        fullMarks: 100,
        obtainedMarks: 84,
        grade: "A",
        status: "Pass",
      },
      {
        code: "GAR-404",
        name: "Speed Sewing Practical Lab & Workplace Compliance",
        fullMarks: 100,
        obtainedMarks: 88,
        grade: "A+",
        status: "Pass",
      },
    ],
  },
  {
    rollNo: "NYD-2026-1210",
    registrationNo: "2026-9021-11",
    certificateNo: "CERT-2026-09941",
    studentName: "SAKIB AHMED",
    fatherName: "Md. Mostafa Kamal",
    motherName: "Shireen Begum",
    gender: "Male",
    dateOfBirth: "18 Jun 2004",
    session: "January - June 2026",
    tradeName: "AutoCAD 2D & 3D Architectural Drafting (Short Course)",
    tradeCode: "CAD-101",
    duration: "1 Month (60 Working Hours)",
    centerName: "Sylhet Technical Training Center",
    centerCode: "C-0604",
    district: "Sylhet",
    issueDate: "28 June 2026",
    verificationCode: "VRF-992140-BD",
    overallGrade: "A+",
    gpa: "4.00",
    totalMarks: 100,
    obtainedTotal: 92,
    percentage: "92.0%",
    resultStatus: "PASSED WITH DISTINCTION",
    subjects: [
      {
        code: "CAD-101",
        name: "AutoCAD 2D Plan Drafting, 3D Modeling & Project Viva",
        fullMarks: 100,
        obtainedMarks: 92,
        grade: "A+",
        status: "Pass",
      },
    ],
  },
];

export function findStudentResult(query: string): StudentResult | null {
  const clean = query.trim().toUpperCase().replace(/[\s-]/g, "");
  if (!clean) return null;

  return (
    sampleResults.find((r) => {
      const matchRoll = r.rollNo.toUpperCase().replace(/[\s-]/g, "") === clean;
      const matchReg = r.registrationNo.toUpperCase().replace(/[\s-]/g, "") === clean;
      const matchCert = r.certificateNo.toUpperCase().replace(/[\s-]/g, "") === clean;
      const matchCode = r.verificationCode.toUpperCase().replace(/[\s-]/g, "") === clean;
      return matchRoll || matchReg || matchCert || matchCode;
    }) || null
  );
}
