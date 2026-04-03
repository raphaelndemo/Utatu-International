"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

// ─── Types ────────────────────────────────────────────────────────────────────
interface FormData {
  // Section 1 — Student
  fullName: string;
  dateOfBirth: string;
  gender: string;
  nationality: string;
  countryOfResidence: string;
  cityOfResidence: string;
  primaryLanguage: string;
  additionalLanguages: string;
  // Section 2 — Academic
  currentSchool: string;
  schoolCountry: string;
  currentCurriculum: string;
  currentGrade: string;
  cambridgeStage: string;
  intendedStartTerm: string;
  intendedStartYear: string;
  
  // Section 3 — Learning setup
  learningMode: string;
  hasDevice: string;
  internetQuality: string;
  homeSupportPerson: string;
  hoursAvailable: string;
  studiedOnlineBefore: string;
  onlineStudyDetails: string;
  // Section 4 — Subjects
  selectedSubjects: string[];
  otherSubjects: string;
  subjectNotes: string;
  // Section 5 — Special requirements
  learningNeeds: string;
  learningNeedsDetails: string;
  medicalConditions: string;
  everExcluded: string;
  exclusionDetails: string;
  // Section 6 — Parent/Guardian
  parentName: string;
  parentRelationship: string;
  parentPhone: string;
  parentEmail: string;
  secondaryContactName: string;
  secondaryContactRelationship: string;
  secondaryContactPhone: string;
  secondaryContactEmail: string;
  preferredContact: string;
  bestTimeToContact: string;
  howDidYouHear: string;
  // Section 7 — Declaration
  confirmAccurate: boolean;
  agreeTerms: boolean;
  consentContact: boolean;
  signature: string;
}

const INITIAL: FormData = {
  fullName: "", dateOfBirth: "", gender: "", nationality: "",
  countryOfResidence: "", cityOfResidence: "", primaryLanguage: "", additionalLanguages: "",
  currentSchool: "", schoolCountry: "", currentCurriculum: "", currentGrade: "",
  cambridgeStage: "", intendedStartTerm: "", intendedStartYear: "",
  learningMode: "", hasDevice: "", internetQuality: "", homeSupportPerson: "",
  hoursAvailable: "", studiedOnlineBefore: "", onlineStudyDetails: "",
  selectedSubjects: [], otherSubjects: "", subjectNotes: "",
  learningNeeds: "", learningNeedsDetails: "", medicalConditions: "",
  everExcluded: "", exclusionDetails: "",
  parentName: "", parentRelationship: "", parentPhone: "", parentEmail: "",
  secondaryContactName: "", secondaryContactRelationship: "",
  secondaryContactPhone: "", secondaryContactEmail: "",
  preferredContact: "", bestTimeToContact: "", howDidYouHear: "",
  confirmAccurate: false, agreeTerms: false, consentContact: false, signature: "",
};

const SECTIONS = [
  { id: 1, label: "Student", icon: "01" },
  { id: 2, label: "Academic", icon: "02" },
  { id: 3, label: "Learning Setup", icon: "03" },
  { id: 4, label: "Subjects", icon: "04" },
  { id: 5, label: "Requirements", icon: "05" },
  { id: 6, label: "Parent / Guardian", icon: "06" },
  { id: 7, label: "Declaration", icon: "07" },
];

const IGCSE_SUBJECTS = [
  "English Language", "English Literature", "Mathematics",
  "Additional Mathematics", "Biology", "Chemistry", "Physics",
  "Combined Science", "Computer Science", "Business Studies",
  "Economics", "Geography", "History", "Kiswahili",
  "Foreign Languages", "Art & Design", "Music", "Global Perspectives",
];

const A_LEVEL_SUBJECTS = [
  "Mathematics", "Further Mathematics", "Physics", "Chemistry",
  "Biology", "Computer Science", "Economics", "Accounting","Commerce",
  "English Language", "English Literature", "Geography", "History", "Foreign Languages",
];

// ─── Small UI pieces ──────────────────────────────────────────────────────────
function Label({ children, required }: { children: React.ReactNode; required?: boolean }) {
  return (
    <label className="block text-sm font-medium text-foreground mb-1.5">
      {children}
      {required && <span className="text-secondary ml-1">*</span>}
    </label>
  );
}

function Select({ className, ...props }: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      {...props}
      className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${className || ''}`}
    />
  );
}

function RadioGroup({
  name, options, value, onChange,
}: {
  name: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => (
        <label
          key={opt.value}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg cursor-pointer border text-sm transition-all duration-200 select-none ${
            value === opt.value
              ? "border-secondary bg-secondary/10 text-secondary font-medium"
              : "border-input bg-background text-muted-foreground hover:bg-muted/50"
          }`}
        >
          <input
            type="radio"
            name={name}
            value={opt.value}
            checked={value === opt.value}
            onChange={() => onChange(opt.value)}
            className="hidden"
          />
          {opt.label}
        </label>
      ))}
    </div>
  );
}



// ─── Main component ───────────────────────────────────────────────────────────
export default function AdmissionsPage() {
  const [form, setForm] = useState<FormData>(INITIAL);
  const [activeSection, setActiveSection] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const set = (key: keyof FormData, value: unknown) =>
    setForm(f => ({ ...f, [key]: value }));

  const toggleSubject = (subject: string) => {
    setForm(f => ({
      ...f,
      selectedSubjects: f.selectedSubjects.includes(subject)
        ? f.selectedSubjects.filter(s => s !== subject)
        : [...f.selectedSubjects, subject],
    }));
  };

  const subjectList =
    form.cambridgeStage === "a-level" ? A_LEVEL_SUBJECTS :
    form.cambridgeStage === "igcse" ? IGCSE_SUBJECTS : [];

  

  const handleSubmit = async () => {
    if (!form.confirmAccurate || !form.agreeTerms || !form.consentContact) {
      alert("Please complete all declaration checkboxes before submitting.");
      return;
    }
    setSubmitting(true);
    
    try {
      const response = await fetch('/api/admission', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form)
      });
      
      if (!response.ok) {
        throw new Error('Failed to submit application');
      }
      
      setSubmitted(true);
    } catch (error) {
      console.error(error);
      alert("There was an error submitting your application. Please make sure you've answered all the mandatory fields, or contact us directly if the issue persists.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 bg-background font-sans">
        <div className="max-w-md w-full text-center space-y-6">
          <div className="w-20 h-20 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="h-10 w-10" />
          </div>
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary">
            Application Received
          </h1>
          <p className="text-muted-foreground leading-relaxed">
            Thank you for applying to Utatu International School. We'll review your
            application and contact {form.parentEmail ? <span className="font-medium text-foreground">{form.parentEmail}</span> : "you"} within 2 working days
            to schedule an assessment call.
          </p>
          <div className="bg-muted/50 border border-border rounded-xl p-5 inline-block text-left min-w-[260px]">
            <div className="text-sm text-muted-foreground mb-1">Reference Number</div>
            <div className="text-xl font-bold font-mono text-primary tracking-wider">
              UIS-{Date.now().toString().slice(-6)}
            </div>
          </div>
          <div className="pt-8">
             <Button variant="outline" onClick={() => window.location.href = "/"}>Return to Homepage</Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted/20 font-sans flex flex-col">
      {/* ── Hero header ── */}
      <section className="relative bg-primary text-primary-foreground py-20 overflow-hidden isolate">
        <div className="absolute inset-0 z-10 w-full h-full object-cover opacity-20 pointer-events-none">
          {/* Subtle background texture or shape can go here */}
          <div className="absolute top-0 right-0 max-w-lg w-full h-full bg-gradient-to-l from-white/10 to-transparent blur-3xl opacity-50 block mix-blend-overlay"></div>
        </div>
        <div className="container relative z-20 mx-auto px-4 max-w-3xl text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-secondary mb-6 border border-white/20">
            Cambridge Accredited · Online & Hybrid
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 tracking-tight">
            Apply to Utatu<br />International School
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl leading-relaxed mb-10">
            Complete the form below. We'll review your application and respond within 2 working days with your next steps.
          </p>

          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            <div className="flex items-center gap-3 text-sm md:text-base text-primary-foreground/90 font-medium">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary text-primary font-bold">1</span>
              ~5-10 min to complete
            </div>
            <div className="flex items-center gap-3 text-sm md:text-base text-primary-foreground/90 font-medium">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary text-primary font-bold">2</span>
              Have reports ready
            </div>
            <div className="flex items-center gap-3 text-sm md:text-base text-primary-foreground/90 font-medium">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary text-primary font-bold">3</span>
              Instant confirmation
            </div>
          </div>
        </div>
      </section>

      {/* ── Progress bar ── */}
      <div className="bg-background border-b border-border sticky top-0 z-30 shadow-sm">
        <div className="container max-w-4xl mx-auto px-4 flex overflow-x-auto scrollbar-hide">
          {SECTIONS.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveSection(s.id)}
              className={`flex items-center gap-2 py-4 px-3 sm:px-4 whitespace-nowrap transition-colors border-b-2 font-medium text-sm ${
                activeSection === s.id
                  ? "border-secondary text-secondary"
                  : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
              }`}
            >
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                activeSection === s.id ? "bg-secondary text-primary" : "bg-muted text-muted-foreground"
              }`}>
                {s.icon}
              </span>
              {s.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── Form body ── */}
      <div className="flex-1 w-full max-w-3xl mx-auto px-4 py-12 pb-32">
        <Card className="shadow-lg border-muted">
          <CardHeader className="bg-muted/20 border-b border-border pb-6">
            <CardTitle className="text-2xl font-heading text-primary">
              {SECTIONS.find(s => s.id === activeSection)?.label}
            </CardTitle>
            <CardDescription className="text-base">
              {activeSection === 1 && "Personal details about the applicant"}
              {activeSection === 2 && "Current and previous education details"}
              {activeSection === 3 && "Helps us ensure the student is ready to learn"}
              {activeSection === 4 && (form.cambridgeStage === "igcse" || form.cambridgeStage === "a-level" ? "Select the subjects you wish to study" : "Subject selection applies to IGCSE and A-Level students")}
              {activeSection === 5 && "Any medical or learning requirements we should know about"}
              {activeSection === 6 && "Contact details for parents or guardians"}
              {activeSection === 7 && "Review and submit your application"}
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6 sm:p-8 space-y-8">
            
            {/* SECTION 1 — Student */}
            {activeSection === 1 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
                <div>
                  <Label required>Full legal name</Label>
                  <Input placeholder="As it appears on birth certificate"
                    value={form.fullName} onChange={e => set("fullName", e.target.value)} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <Label required>Date of birth</Label>
                    <Input type="date" value={form.dateOfBirth}
                      onChange={e => set("dateOfBirth", e.target.value)} />
                  </div>
                  <div>
                    <Label required>Gender</Label>
                    <Select value={form.gender} onChange={e => set("gender", e.target.value)}>
                      <option value="">Select…</option>
                      <option>Male</option><option>Female</option>
                      
                    </Select>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div>
                    <Label required>Nationality</Label>
                    <Input placeholder="e.g. Kenyan" value={form.nationality}
                      onChange={e => set("nationality", e.target.value)} />
                  </div>
                  <div>
                    <Label required>Country of residence</Label>
                    <Input placeholder="e.g. Kenya" value={form.countryOfResidence}
                      onChange={e => set("countryOfResidence", e.target.value)} />
                  </div>
                  <div>
                    <Label required>City of residence</Label>
                    <Input placeholder="e.g. Nairobi" value={form.cityOfResidence}
                      onChange={e => set("cityOfResidence", e.target.value)} />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <Label required>Primary language at home</Label>
                    <Input placeholder="e.g. English, Swahili" value={form.primaryLanguage}
                      onChange={e => set("primaryLanguage", e.target.value)} />
                  </div>
                  <div>
                    <Label>Additional languages spoken</Label>
                    <Input placeholder="Optional" value={form.additionalLanguages}
                      onChange={e => set("additionalLanguages", e.target.value)} />
                  </div>
                </div>
              </div>
            )}

            {/* SECTION 2 — Academic */}
            {activeSection === 2 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <Label required>Current / most recent school</Label>
                    <Input placeholder="School name" value={form.currentSchool}
                      onChange={e => set("currentSchool", e.target.value)} />
                  </div>
                  <div>
                    <Label required>School country</Label>
                    <Input placeholder="e.g. Kenya" value={form.schoolCountry}
                      onChange={e => set("schoolCountry", e.target.value)} />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <Label required>Current curriculum</Label>
                    <Select value={form.currentCurriculum}
                      onChange={e => set("currentCurriculum", e.target.value)}>
                      <option value="">Select…</option>
                      <option>Kenya CBC</option>
                      <option>American Curriculum</option>
                      <option>Cambridge</option>
                      <option>Australian Curriculum</option>
                      <option>Others</option>
                    </Select>
                  </div>
                  <div>
                    <Label required>Current year / grade</Label>
                    <Select value={form.currentGrade}
                      onChange={e => set("currentGrade", e.target.value)}>
                      <option value="">Select…</option>
                      {["Early Years / Kindergarten","Grade/Year 1","Grade/Year 2","Grade/Year 3","Grade/Year 4","Grade/Year 5","Grade/Year 6",
                        "Grade/Year 7","Grade/Year 8","Grade/Year 9","Grade/Year 10","Grade/Year 11","Grade/Year 12",
                        "Year 13"
                      ].map(g => <option key={g}>{g}</option>)}
                    </Select>
                  </div>
                </div>
                <div>
                  <Label required>Applying for Cambridge stage</Label>
                  <RadioGroup
                    name="cambridgeStage"
                    value={form.cambridgeStage}
                    onChange={v => set("cambridgeStage", v)}
                    options={[
                      { value: "primary", label: "Cambridge Primary" },
                      { value: "lower-secondary", label: "Lower Secondary" },
                      { value: "igcse", label: "IGCSE" },
                      { value: "a-level", label: "A-Level" },
                    ]}
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <Label required>Intended start term</Label>
                    <Select value={form.intendedStartTerm}
                      onChange={e => set("intendedStartTerm", e.target.value)}>
                      <option value="">Select…</option>
                      <option>Term 1 (September)</option>
                      <option>Term 2 (January)</option>
                      <option>Term 3 (May)</option>
                    </Select>
                  </div>
                  <div>
                    <Label required>Year</Label>
                    <Input type="number" placeholder="e.g. 2026" value={form.intendedStartYear}
                      onChange={e => set("intendedStartYear", e.target.value)} />
                  </div>
                </div>
                
              </div>
            )}

            {/* SECTION 3 — Learning setup */}
            {activeSection === 3 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
                <div>
                  <Label required>Preferred learning mode</Label>
                  <RadioGroup name="learningMode" value={form.learningMode}
                    onChange={v => set("learningMode", v)}
                    options={[
                      { value: "online", label: "Fully online" },
                      { value: "in-person", label: "Fully In-person" },
                      { value: "hybrid", label: "Hybrid" },
                      { value: "unsure", label: "Not sure yet" },
                    ]}
                  />
                </div>
                <div>
                  <Label required>Does the student have a dedicated learning device?</Label>
                  <RadioGroup name="hasDevice" value={form.hasDevice}
                    onChange={v => set("hasDevice", v)}
                    options={[
                      { value: "laptop", label: "Laptop" },
                      { value: "desktop", label: "Desktop" },
                      { value: "tablet", label: "Tablet" },
                      { value: "shared", label: "Shared device" },
                      { value: "none", label: "None" },
                    ]}
                  />
                </div>
                <div>
                  <Label required>Home internet connection quality</Label>
                  <RadioGroup name="internetQuality" value={form.internetQuality}
                    onChange={v => set("internetQuality", v)}
                    options={[
                      { value: "broadband", label: "Stable broadband" },
                      { value: "mobile", label: "Mobile data" },
                      { value: "unreliable", label: "Unreliable" },
                      { value: "none", label: "None" },
                    ]}
                  />
                </div>
                <div>
                  <Label required>Who provides primary learning support at home?</Label>
                  <RadioGroup name="homeSupportPerson" value={form.homeSupportPerson}
                    onChange={v => set("homeSupportPerson", v)}
                    options={[
                      { value: "parent", label: "Parent" },
                      { value: "guardian", label: "Guardian" },
                      { value: "tutor", label: "Private tutor" },
                      { value: "independent", label: "Student is independent" },
                    ]}
                  />
                </div>
                <div>
                  <Label required>Hours available for structured learning per day</Label>
                  <Select value={form.hoursAvailable}
                    onChange={e => set("hoursAvailable", e.target.value)}>
                    <option value="">Select…</option>
                    <option>2-3 hours</option><option>4-5 hours</option>
                    <option>morning hours</option>
                    <option>full day</option>
                  </Select>
                </div>
                <div>
                  <Label required>Has the student studied online before?</Label>
                  <RadioGroup name="studiedOnlineBefore" value={form.studiedOnlineBefore}
                    onChange={v => set("studiedOnlineBefore", v)}
                    options={[
                      { value: "yes", label: "Yes" },
                      { value: "no", label: "No" },
                    ]}
                  />
                </div>
                {form.studiedOnlineBefore === "yes" && (
                  <div>
                    <Label>Brief details — where and for how long</Label>
                    <Textarea placeholder="e.g. Khan Academy for 1 year, online tutor for Maths since 2023"
                      value={form.onlineStudyDetails}
                      onChange={e => set("onlineStudyDetails", e.target.value)} />
                  </div>
                )}
              </div>
            )}

            {/* SECTION 4 — Subjects */}
            {activeSection === 4 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
                {(form.cambridgeStage === "igcse" || form.cambridgeStage === "a-level") ? (
                  <div className="space-y-8">
                    {form.cambridgeStage === "igcse" && (
                      <div className="bg-secondary/10 border border-secondary/20 rounded-xl p-4 text-sm text-primary font-medium flex items-start gap-3">
                        <span className="text-secondary text-xl">ℹ</span>
                        <p>English Language and Mathematics are compulsory for all IGCSE students.</p>
                      </div>
                    )}
                    <div>
                      <Label>Select subjects <span className="text-muted-foreground font-normal">
                        ({form.selectedSubjects.length} selected)</span>
                      </Label>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {subjectList.map(subject => {
                          const selected = form.selectedSubjects.includes(subject);
                          const compulsory = subject === "English Language" || subject === "Mathematics";
                          return (
                            <button
                              key={subject}
                              type="button"
                              onClick={() => !compulsory && toggleSubject(subject)}
                              className={`px-4 py-2 rounded-lg text-sm transition-all duration-200 border ${
                                selected 
                                  ? "bg-secondary text-primary font-medium border-secondary shadow-sm" 
                                  : "bg-background text-muted-foreground hover:bg-muted border-border"
                              } ${compulsory ? "opacity-90 cursor-default" : "cursor-pointer"}`}
                            >
                              {compulsory ? "🔒 " : ""}{subject}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                    <div>
                      <Label>Other subjects (if not listed above)</Label>
                      <Input placeholder="e.g. Sociology, Psychology" value={form.otherSubjects}
                        onChange={e => set("otherSubjects", e.target.value)} />
                    </div>
                    <div>
                      <Label>Subject strengths or concerns (optional)</Label>
                      <Textarea
                        placeholder="e.g. Strong in Sciences, needs support in English Literature"
                        value={form.subjectNotes}
                        onChange={e => set("subjectNotes", e.target.value)}
                      />
                    </div>
                  </div>
                ) : (
                  <div className="py-12 px-4 text-center text-muted-foreground rounded-2xl border border-dashed border-border bg-muted/20">
                    {form.cambridgeStage
                      ? "Cambridge Primary and Lower Secondary have a set curriculum — no subject selection needed."
                      : "Please select a Cambridge stage in Section 2 first."}
                  </div>
                )}
              </div>
            )}

            {/* SECTION 5 — Requirements */}
            {activeSection === 5 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
                <div>
                  <Label required>Does the student have any diagnosed learning needs?</Label>
                 <RadioGroup name="learningNeeds" value={form.learningNeeds}
                    onChange={v => set("learningNeeds", v)}
                    options={[{ value: "yes", label: "Yes" }, { value: "no", label: "No" }]}
                  />
                </div>
                {form.learningNeeds === "yes" && (
                  <div>
                    <Label required>Please provide details</Label>
                    <Textarea placeholder="e.g. Dyslexia, ADHD. Please mention if they require extra time in exams."
                      value={form.learningNeedsDetails}
                      onChange={e => set("learningNeedsDetails", e.target.value)} />
                  </div>
                )}
                <div>
                  <Label>Any chronic medical conditions we should be aware of? (Optional)</Label>
                  <Textarea placeholder="Physical conditions, severe allergies, etc."
                    value={form.medicalConditions}
                    onChange={e => set("medicalConditions", e.target.value)} />
                </div>
                <div>
                  <Label required>Has the student ever been excluded/expelled from a school?</Label>
                  <RadioGroup name="everExcluded" value={form.everExcluded}
                    onChange={v => set("everExcluded", v)}
                    options={[{ value: "yes", label: "Yes" }, { value: "no", label: "No" }]}
                  />
                </div>
                {form.everExcluded === "yes" && (
                  <div>
                    <Label required>Please provide context</Label>
                    <Textarea value={form.exclusionDetails}
                      onChange={e => set("exclusionDetails", e.target.value)} />
                  </div>
                )}
              </div>
            )}

            {/* SECTION 6 — Parent/Guardian */}
            {activeSection === 6 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
                <div className="text-lg font-heading text-primary border-b border-border pb-2 mt-2">Primary Contact</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <Label required>Full name</Label>
                    <Input value={form.parentName}
                      onChange={e => set("parentName", e.target.value)} />
                  </div>
                  <div>
                    <Label required>Relationship to student</Label>
                    <Select value={form.parentRelationship}
                      onChange={e => set("parentRelationship", e.target.value)}>
                      <option value="">Select…</option>
                      <option>Mother</option><option>Father</option>
                      <option>Guardian</option><option>Other</option>
                    </Select>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <Label required>Phone number</Label>
                    <Input type="tel" placeholder="+254..." value={form.parentPhone}
                      onChange={e => set("parentPhone", e.target.value)} />
                  </div>
                  <div>
                    <Label required>Email address</Label>
                    <Input type="email" value={form.parentEmail}
                      onChange={e => set("parentEmail", e.target.value)} />
                  </div>
                </div>

                <div className="text-lg font-heading text-primary border-b border-border pb-2 mt-6 pt-4">Secondary Contact (Optional)</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <Label>Full name</Label>
                    <Input value={form.secondaryContactName}
                      onChange={e => set("secondaryContactName", e.target.value)} />
                  </div>
                  <div>
                    <Label>Relationship</Label>
                    <Input value={form.secondaryContactRelationship}
                      onChange={e => set("secondaryContactRelationship", e.target.value)} />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <Label>Phone number</Label>
                    <Input type="tel" value={form.secondaryContactPhone}
                      onChange={e => set("secondaryContactPhone", e.target.value)} />
                  </div>
                  <div>
                    <Label>Email address</Label>
                    <Input type="email" value={form.secondaryContactEmail}
                      onChange={e => set("secondaryContactEmail", e.target.value)} />
                  </div>
                </div>

                <div className="text-lg font-heading text-primary border-b border-border pb-2 mt-6 pt-4">Communication</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <Label required>Preferred contact method</Label>
                    <Select value={form.preferredContact}
                      onChange={e => set("preferredContact", e.target.value)}>
                      <option value="">Select…</option>
                      <option>Email</option><option>Phone Call</option><option>WhatsApp</option>
                    </Select>
                  </div>
                  <div>
                    <Label>Best time to contact</Label>
                    <Input placeholder="e.g. Any time, Weekday mornings" value={form.bestTimeToContact}
                      onChange={e => set("bestTimeToContact", e.target.value)} />
                  </div>
                </div>
                <div>
                    <Label>How did you hear about us?</Label>
                    <Select value={form.howDidYouHear}
                      onChange={e => set("howDidYouHear", e.target.value)}>
                      <option value="">Select…</option>
                      <option>Google Search</option><option>Social Media</option>
                      <option>Friend / Family</option><option>Education Agent</option>
                      <option>School Referral</option><option>Other</option>
                    </Select>
                </div>
              </div>
            )}

            {/* SECTION 7 — Declaration */}
            {activeSection === 7 && (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-300">
                <div className="bg-muted p-6 rounded-xl space-y-4 text-sm text-foreground">
                  <div>
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <input type="checkbox"
                        className="mt-1 w-4 h-4 rounded border-border text-secondary focus:ring-secondary accent-secondary"
                        checked={form.confirmAccurate}
                        onChange={e => set("confirmAccurate", e.target.checked)} />
                      <span className="leading-relaxed group-hover:text-primary transition-colors">I confirm that to the best of my knowledge, the information provided in this form is accurate and complete. I understand that providing false or misleading information may affect this application.</span>
                    </label>
                  </div>
                  <div>
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <input type="checkbox"
                         className="mt-1 w-4 h-4 rounded border-border text-secondary focus:ring-secondary accent-secondary"
                        checked={form.agreeTerms}
                        onChange={e => set("agreeTerms", e.target.checked)} />
                      <span className="leading-relaxed group-hover:text-primary transition-colors">I agree to Utatu International School's Privacy Policy and Admissions Terms & Conditions.</span>
                    </label>
                  </div>
                  <div>
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <input type="checkbox"
                         className="mt-1 w-4 h-4 rounded border-border text-secondary focus:ring-secondary accent-secondary"
                        checked={form.consentContact}
                        onChange={e => set("consentContact", e.target.checked)} />
                      <span className="leading-relaxed group-hover:text-primary transition-colors">I consent to Utatu International School contacting me regarding this application and related school updates.</span>
                    </label>
                  </div>
                </div>

                <div>
                  <Label required>Parent / Guardian Signature (Type full name)</Label>
                  <Input placeholder="Electronic signature"
                    className="font-medium text-primary text-lg px-4 py-6"
                    value={form.signature}
                    onChange={e => set("signature", e.target.value)} />
                </div>

                <div className="pt-4 border-t border-border">
                  <Button
                    className="w-full sm:w-auto px-10 py-6 text-lg font-bold bg-secondary text-primary hover:bg-secondary/90 shadow-xl shadow-secondary/20 transition-all hover:scale-[1.02]"
                    disabled={submitting}
                    onClick={handleSubmit}
                  >
                    {submitting ? "Submitting Application..." : "Submit Application"}
                  </Button>
                </div>
              </div>
            )}
            
            {/* Form navigation buttons (Bottom) */}
            {activeSection !== 7 && (
              <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4 pt-8 mt-8 border-t border-border pt-6">
                <Button
                  variant="outline"
                  onClick={() => setActiveSection(Math.max(1, activeSection - 1))}
                  disabled={activeSection === 1}
                  className="w-full sm:w-auto"
                >
                  Previous Section
                </Button>
                <Button
                  className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 min-w-[140px]"
                  onClick={() => setActiveSection(Math.min(7, activeSection + 1))}
                  disabled={activeSection === 7}
                >
                  Save & Continue
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
