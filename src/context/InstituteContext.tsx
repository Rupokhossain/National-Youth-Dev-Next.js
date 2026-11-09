// src/context/InstituteContext.tsx
"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Course, coursesData as defaultCourses } from "@/lib/coursesData";
import { StudentResult, sampleResults as defaultResults } from "@/lib/resultsData";
import { ResourceItem, resourcesData as defaultResources } from "@/lib/resourcesData";
import { GalleryItem, galleryItems as defaultGallery } from "@/lib/galleryData";

export interface TraineeApplication {
  id: string;
  fullName: string;
  phone: string;
  email: string;
  trade: string;
  district: string;
  status: "Pending" | "Approved" | "Rejected";
  appliedDate: string;
  assignedRoll?: string;
}

export interface ContactInquiry {
  id: string;
  name: string;
  phone: string;
  email: string;
  district: string;
  inquiryType: string;
  message: string;
  status: "New" | "Replied" | "Archived";
  date: string;
}

export interface SiteSettings {
  tickerText: string;
  urgentNoticeEnabled: boolean;
  emergencyNoticeText: string;
  emergencyNoticeLink: string;
  helplinePhone: string;
  helplineEmail: string;
  currentSession: string;
}

interface InstituteContextType {
  // Data lists
  courses: Course[];
  results: StudentResult[];
  resources: ResourceItem[];
  gallery: GalleryItem[];
  admissions: TraineeApplication[];
  inquiries: ContactInquiry[];
  siteSettings: SiteSettings;

  // Course actions
  addCourse: (course: Omit<Course, "id">) => void;
  updateCourse: (id: string, updated: Partial<Course>) => void;
  deleteCourse: (id: string) => void;

  // Results actions
  addResult: (result: StudentResult) => void;
  updateResult: (rollNo: string, updated: Partial<StudentResult>) => void;
  deleteResult: (rollNo: string) => void;

  // Resource actions
  addResource: (resource: Omit<ResourceItem, "id">) => void;
  updateResource: (id: string, updated: Partial<ResourceItem>) => void;
  deleteResource: (id: string) => void;

  // Gallery actions
  addGalleryItem: (item: Omit<GalleryItem, "id">) => void;
  deleteGalleryItem: (id: string) => void;

  // Admission actions
  addAdmission: (application: Omit<TraineeApplication, "id" | "status" | "appliedDate">) => void;
  updateAdmissionStatus: (id: string, status: "Pending" | "Approved" | "Rejected", assignedRoll?: string) => void;
  deleteAdmission: (id: string) => void;

  // Inquiry actions
  addInquiry: (inquiry: Omit<ContactInquiry, "id" | "status" | "date">) => void;
  updateInquiryStatus: (id: string, status: "New" | "Replied" | "Archived") => void;
  deleteInquiry: (id: string) => void;

  // Site Settings actions
  updateSiteSettings: (settings: Partial<SiteSettings>) => void;
  resetToDefaults: () => void;
}

const defaultAdmissions: TraineeApplication[] = [
  {
    id: "adm-1",
    fullName: "Kamrul Ahsan",
    phone: "01712-998877",
    email: "kamrul@gmail.com",
    trade: "Computer Office Applications & Database",
    district: "Dhaka",
    status: "Approved",
    appliedDate: "08 Nov 2026",
    assignedRoll: "NYD-2026-1042",
  },
  {
    id: "adm-2",
    fullName: "Nusrat Jahan",
    phone: "01819-334455",
    email: "nusrat.j@gmail.com",
    trade: "Professional Graphic Design & Multimedia",
    district: "Chattogram",
    status: "Pending",
    appliedDate: "09 Nov 2026",
  },
  {
    id: "adm-3",
    fullName: "Sajjad Hossain",
    phone: "01911-667788",
    email: "sajjad.hvac@gmail.com",
    trade: "Refrigeration & Air Conditioning (HVAC)",
    district: "Bogura",
    status: "Pending",
    appliedDate: "09 Nov 2026",
  },
];

const defaultInquiries: ContactInquiry[] = [
  {
    id: "inq-1",
    name: "Mohammad Shahin",
    phone: "01755-112233",
    email: "shahin@yahoo.com",
    district: "Dhaka",
    inquiryType: "Admission & Scholarship",
    message: "Is there any weekend batch available for the Computer Office Application course for working professionals?",
    status: "New",
    date: "09 Nov 2026",
  },
  {
    id: "inq-2",
    name: "Farhana Akter",
    phone: "01688-445566",
    email: "farhana.it@gmail.com",
    district: "Sylhet",
    inquiryType: "Certificate Verification",
    message: "I completed the Graphic Design course in 2025. How can I get my transcript verified for overseas employment?",
    status: "Replied",
    date: "08 Nov 2026",
  },
];

const defaultSettings: SiteSettings = {
  tickerText: "Admission Open for Academic Session 2026 (Jan-Jun Batch) across all 64 district centers • Govt. Subsidized Training Available",
  urgentNoticeEnabled: true,
  emergencyNoticeText: "Academic Session 2026 Final Examination Routine & Practical Guidelines have been officially published.",
  emergencyNoticeLink: "/resources",
  helplinePhone: "+880 1712-345678",
  helplineEmail: "info@jubounnayon.com",
  currentSession: "Session 2026 (Jan - Jun)",
};

const InstituteContext = createContext<InstituteContextType | undefined>(undefined);

export function InstituteProvider({ children }: { children: React.ReactNode }) {
  const [courses, setCourses] = useState<Course[]>(defaultCourses);
  const [results, setResults] = useState<StudentResult[]>(defaultResults);
  const [resources, setResources] = useState<ResourceItem[]>(defaultResources);
  const [gallery, setGallery] = useState<GalleryItem[]>(defaultGallery);
  const [admissions, setAdmissions] = useState<TraineeApplication[]>(defaultAdmissions);
  const [inquiries, setInquiries] = useState<ContactInquiry[]>(defaultInquiries);
  const [siteSettings, setSiteSettings] = useState<SiteSettings>(defaultSettings);
  const [isInitialized, setIsInitialized] = useState(false);

  // Load from localStorage if present
  useEffect(() => {
    try {
      const storedCourses = localStorage.getItem("nyd_courses");
      if (storedCourses) setCourses(JSON.parse(storedCourses));

      const storedResults = localStorage.getItem("nyd_results");
      if (storedResults) setResults(JSON.parse(storedResults));

      const storedResources = localStorage.getItem("nyd_resources");
      if (storedResources) setResources(JSON.parse(storedResources));

      const storedGallery = localStorage.getItem("nyd_gallery");
      if (storedGallery) setGallery(JSON.parse(storedGallery));

      const storedAdmissions = localStorage.getItem("nyd_admissions");
      if (storedAdmissions) setAdmissions(JSON.parse(storedAdmissions));

      const storedInquiries = localStorage.getItem("nyd_inquiries");
      if (storedInquiries) setInquiries(JSON.parse(storedInquiries));

      const storedSettings = localStorage.getItem("nyd_settings");
      if (storedSettings) setSiteSettings(JSON.parse(storedSettings));
    } catch {
      // Fallback silently to defaults
    } finally {
      setIsInitialized(true);
    }
  }, []);

  // Sync to localStorage
  useEffect(() => {
    if (!isInitialized) return;
    try {
      localStorage.setItem("nyd_courses", JSON.stringify(courses));
      localStorage.setItem("nyd_results", JSON.stringify(results));
      localStorage.setItem("nyd_resources", JSON.stringify(resources));
      localStorage.setItem("nyd_gallery", JSON.stringify(gallery));
      localStorage.setItem("nyd_admissions", JSON.stringify(admissions));
      localStorage.setItem("nyd_inquiries", JSON.stringify(inquiries));
      localStorage.setItem("nyd_settings", JSON.stringify(siteSettings));
    } catch {
      // Storage quota or SSR guard
    }
  }, [courses, results, resources, gallery, admissions, inquiries, siteSettings, isInitialized]);

  // Course actions
  const addCourse = (courseData: Omit<Course, "id">) => {
    const newCourse: Course = {
      ...courseData,
      id: `course-${Date.now()}`,
    };
    setCourses((prev) => [newCourse, ...prev]);
  };

  const updateCourse = (id: string, updated: Partial<Course>) => {
    setCourses((prev) => prev.map((c) => (c.id === id ? { ...c, ...updated } : c)));
  };

  const deleteCourse = (id: string) => {
    setCourses((prev) => prev.filter((c) => c.id !== id));
  };

  // Results actions
  const addResult = (resultData: StudentResult) => {
    setResults((prev) => [resultData, ...prev.filter((r) => r.rollNo !== resultData.rollNo)]);
  };

  const updateResult = (rollNo: string, updated: Partial<StudentResult>) => {
    setResults((prev) => prev.map((r) => (r.rollNo === rollNo ? { ...r, ...updated } : r)));
  };

  const deleteResult = (rollNo: string) => {
    setResults((prev) => prev.filter((r) => r.rollNo !== rollNo));
  };

  // Resources actions
  const addResource = (resData: Omit<ResourceItem, "id">) => {
    const newRes: ResourceItem = {
      ...resData,
      id: `res-${Date.now()}`,
    };
    setResources((prev) => [newRes, ...prev]);
  };

  const updateResource = (id: string, updated: Partial<ResourceItem>) => {
    setResources((prev) => prev.map((r) => (r.id === id ? { ...r, ...updated } : r)));
  };

  const deleteResource = (id: string) => {
    setResources((prev) => prev.filter((r) => r.id !== id));
  };

  // Gallery actions
  const addGalleryItem = (itemData: Omit<GalleryItem, "id">) => {
    const newItem: GalleryItem = {
      ...itemData,
      id: `gal-${Date.now()}`,
    };
    setGallery((prev) => [newItem, ...prev]);
  };

  const deleteGalleryItem = (id: string) => {
    setGallery((prev) => prev.filter((i) => i.id !== id));
  };

  // Admissions actions
  const addAdmission = (appData: Omit<TraineeApplication, "id" | "status" | "appliedDate">) => {
    const newApp: TraineeApplication = {
      ...appData,
      id: `adm-${Date.now()}`,
      status: "Pending",
      appliedDate: new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" }),
    };
    setAdmissions((prev) => [newApp, ...prev]);
  };

  const updateAdmissionStatus = (id: string, status: "Pending" | "Approved" | "Rejected", assignedRoll?: string) => {
    setAdmissions((prev) =>
      prev.map((a) => (a.id === id ? { ...a, status, assignedRoll: assignedRoll || a.assignedRoll } : a))
    );
  };

  const deleteAdmission = (id: string) => {
    setAdmissions((prev) => prev.filter((a) => a.id !== id));
  };

  // Inquiry actions
  const addInquiry = (inqData: Omit<ContactInquiry, "id" | "status" | "date">) => {
    const newInq: ContactInquiry = {
      ...inqData,
      id: `inq-${Date.now()}`,
      status: "New",
      date: new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" }),
    };
    setInquiries((prev) => [newInq, ...prev]);
  };

  const updateInquiryStatus = (id: string, status: "New" | "Replied" | "Archived") => {
    setInquiries((prev) => prev.map((i) => (i.id === id ? { ...i, status } : i)));
  };

  const deleteInquiry = (id: string) => {
    setInquiries((prev) => prev.filter((i) => i.id !== id));
  };

  // Site Settings
  const updateSiteSettings = (settings: Partial<SiteSettings>) => {
    setSiteSettings((prev) => ({ ...prev, ...settings }));
  };

  const resetToDefaults = () => {
    setCourses(defaultCourses);
    setResults(defaultResults);
    setResources(defaultResources);
    setGallery(defaultGallery);
    setAdmissions(defaultAdmissions);
    setInquiries(defaultInquiries);
    setSiteSettings(defaultSettings);
    try {
      localStorage.clear();
    } catch {}
  };

  return (
    <InstituteContext.Provider
      value={{
        courses,
        results,
        resources,
        gallery,
        admissions,
        inquiries,
        siteSettings,
        addCourse,
        updateCourse,
        deleteCourse,
        addResult,
        updateResult,
        deleteResult,
        addResource,
        updateResource,
        deleteResource,
        addGalleryItem,
        deleteGalleryItem,
        addAdmission,
        updateAdmissionStatus,
        deleteAdmission,
        addInquiry,
        updateInquiryStatus,
        deleteInquiry,
        updateSiteSettings,
        resetToDefaults,
      }}
    >
      {children}
    </InstituteContext.Provider>
  );
}

export function useInstitute() {
  const context = useContext(InstituteContext);
  if (!context) {
    throw new Error("useInstitute must be used within an InstituteProvider");
  }
  return context;
}
