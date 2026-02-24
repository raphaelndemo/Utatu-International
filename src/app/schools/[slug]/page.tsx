import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ReadMoreCard } from "@/components/ui/read-more-card";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

// School data with corresponding images
const schoolsData: Record<string, {
    title: string;
    description: string;
    content: string;
    image: string;
}> = {
    "special-needs-education": {
        title: "Special Needs Education",
        description: "Equality and inclusivity in learning",
        content: "special-needs-detailed",
        image: "/images/special-needs.webp",
    },
    "foundation-stage": {
        title: "Foundation Stage",
        description: "Ages 3-5: Building Strong Foundations",
        content: "foundation-stage-detailed",
        image: "/images/foundation.webp",
    },
    "preparatory-school": {
        title: "Preparatory School",
        description: "Year 1-6: A strong academic foundation",
        content: "preparatory-school-detailed",
        image: "/images/preparatory.webp",
    },
    "junior-high-school": {
        title: "Junior High School",
        description: "Year 7-9: A Well-Rounded Curriculum",
        content: "junior-high-school-detailed",
        image: "/images/online-homeschooling.webp",
    },
    "senior-high-school": {
        title: "Senior High School",
        description: "Year 10-11: A Foundation for Global Success",
        content: "senior-high-school-detailed",
        image: "/images/senior.webp",
    },
    "international-advanced-school": {
        title: "International Advanced School",
        description: "Year 12-13: Your launchpad to University",
        content: "international-advanced-school-detailed",
        image: "/images/international.webp",
    },
};

// All schools for sidebar
const allSchools = Object.entries(schoolsData).map(([slug, data]) => ({
    slug,
    ...data,
}));

export default async function SchoolPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const school = schoolsData[slug];

    if (!school) {
        notFound();
    }

    // Get other schools for sidebar (excluding current school)
    const otherSchools = allSchools.filter((s) => s.slug !== slug);

    return (
        <main>
            {/* ===== Hero Section ===== */}
            <section className="relative bg-[#F9FAFB] overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-20 py-24">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        {/* Left Content */}
                        <div className="max-w-xl">
                            {/* Badge */}
                            <span className="inline-block bg-yellow-200 text-slate-800 text-sm px-4 py-1 rounded-full">
                                {school.description}
                            </span>

                            {/* Heading */}
                            <h1 className="mt-6 text-5xl lg:text-6xl font-light font-heading text-slate-900 leading-tight tracking-wide">
                                {school.title}
                            </h1>

                            {/* Description */}
                            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                                At Utatu International School, we are committed to inclusivity and personalized learning for students with diverse needs.
                            </p>

                            {/* CTA */}
                            <Link
                                href="/contact"
                                className="inline-block mt-8 bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-medium px-6 py-3 rounded-lg shadow-md transition duration-300"
                            >
                                Learn More →
                            </Link>
                        </div>

                        {/* Right Image */}
                        <div className="relative">
                            {/* Image */}
                            <div className="relative shadow-2xl overflow-hidden w-full h-[480px]">
                                <Image
                                    src={school.image}
                                    alt={school.title}
                                    fill
                                    className="object-cover"
                                    priority
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                            </div>

                            {/* Soft Left Fade */}
                            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#F9FAFB] to-transparent z-10 pointer-events-none" />

                            {/* Soft Bottom Glow */}
                            <div className="absolute -bottom-10 right-0 w-72 h-72 bg-yellow-200/40 rounded-full blur-3xl pointer-events-none" />
                        </div>

                    </div>
                </div>
            </section>

            {/* ===== Content Section ===== */}
            <div className="max-w-7xl mx-auto px-6 lg:px-20 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                    {/* ===== Article ===== */}
                    <article className="lg:col-span-8 prose prose-slate max-w-none prose-headings:font-heading prose-headings:text-primary prose-h2:text-3xl lg:prose-h2:text-4xl prose-h2:mt-16 prose-h2:mb-8 prose-h2:border-b prose-h2:pb-4 prose-h2:border-slate-200 prose-h2:font-light prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-4 prose-h3:text-primary prose-h3:font-bold prose-h4:text-xl prose-h4:mt-8 prose-h4:mb-4 prose-h4:text-slate-700 prose-p:text-slate-600 prose-p:leading-loose prose-p:mb-8 prose-li:text-slate-600 prose-li:marker:text-secondary prose-li:leading-relaxed prose-strong:text-slate-900 prose-strong:font-semibold prose-ul:my-8 prose-ul:space-y-3">

                        {school.content === "special-needs-detailed" ? (<>
                            <p>
                                At Utatu International School, we believe that access to quality education should never be limited by learning differences.
                            </p>
                            <p>
                                Our Special Needs Education (SNE) Department provides structured, personalized academic support within our hybrid and online Cambridge learning model. Led by experienced educators, we collaborate closely with families to design learning pathways that promote confidence, independence, and measurable progress.
                            </p>
                            <p>
                                We support learners with diverse educational needs, including autism spectrum differences, dyslexia, dysgraphia, dyscalculia, and other learning profiles — always within a respectful, strengths-based framework.
                            </p>
                            <p>
                                Through structured planning, individualized support, and flexible delivery, we ensure every learner has the opportunity to grow academically and personally.
                            </p>

                            <h2>About Our Special Needs Education Pathway</h2>
                            <p>
                                Our Special Needs Education pathway is structured into three progressive levels, designed to meet learners where they are and support meaningful growth.
                            </p>

                            <ReadMoreCard
                                title="1: Foundation Level"
                                preview="Building Essential Skills for Lifelong Learning — the Foundation Level focuses on developing core communication, cognitive, and motor skills that form the groundwork for future academic and social development."
                            >
                                <h4>Key Objectives</h4>
                                <ul>
                                    <li>Strengthen communication and expressive abilities</li>
                                    <li>Develop sensory awareness and motor coordination</li>
                                    <li>Foster social interaction and emotional regulation</li>
                                    <li>Encourage curiosity and structured exploration</li>
                                </ul>
                                <h4>Learning Focus</h4>
                                <ul>
                                    <li>Early literacy and numeracy through visual and interactive tools</li>
                                    <li>Fine and gross motor skill development</li>
                                    <li>Sensory integration activities</li>
                                    <li>Social skills development through guided group interaction</li>
                                    <li>Daily living skills (self-care, organization, routines)</li>
                                </ul>
                                <h4>Support Tools &amp; Strategies</h4>
                                <ul>
                                    <li>Individualized Education Plans (IEPs)</li>
                                    <li>Visual schedules and structured routines</li>
                                    <li>Assistive communication tools</li>
                                    <li>Structured observation and progress tracking</li>
                                </ul>
                            </ReadMoreCard>

                            <ReadMoreCard
                                title="2: Intermediate Level"
                                preview="Developing Academic Confidence and Independence — the Intermediate Level builds upon foundational skills, introducing structured academic learning alongside real-world application and independent thinking."
                            >
                                <h4>Key Objectives</h4>
                                <ul>
                                    <li>Strengthen cognitive and problem-solving skills</li>
                                    <li>Develop functional literacy and numeracy</li>
                                    <li>Encourage emotional awareness and adaptability</li>
                                    <li>Promote increasing independence</li>
                                </ul>
                                <h4>Learning Focus</h4>
                                <ul>
                                    <li>Functional academics applied to real-life scenarios</li>
                                    <li>Life skills development</li>
                                    <li>Social and Emotional Learning (SEL)</li>
                                    <li>Creative expression through arts and music</li>
                                    <li>Structured academic tasks aligned to learner capacity</li>
                                </ul>
                                <h4>Support Tools &amp; Strategies</h4>
                                <ul>
                                    <li>Hands-on, task-based instruction</li>
                                    <li>Assistive technologies (e.g., text-to-speech tools where appropriate)</li>
                                    <li>Structured progress assessments</li>
                                    <li>Flexible pacing within curriculum expectations</li>
                                </ul>
                            </ReadMoreCard>

                            <ReadMoreCard
                                title="3: Pre-Vocational Level"
                                preview="Preparing for Independence and Future Pathways — the Pre-Vocational Level focuses on equipping learners with practical skills, decision-making abilities, and increased independence."
                            >
                                <h4>Key Objectives</h4>
                                <ul>
                                    <li>Develop pre-employment skills and structured work habits</li>
                                    <li>Strengthen self-reliance and daily living independence</li>
                                    <li>Encourage community awareness and integration</li>
                                    <li>Support career exploration</li>
                                </ul>
                                <h4>Learning Focus</h4>
                                <ul>
                                    <li>Workplace simulations and task-based learning</li>
                                    <li>Career exposure and structured exploration</li>
                                    <li>Financial literacy basics</li>
                                    <li>Teamwork and communication skills</li>
                                    <li>Guided volunteer or practical experiences (where applicable)</li>
                                </ul>
                                <h4>Support Tools &amp; Strategies</h4>
                                <ul>
                                    <li>Skill-based vocational training materials</li>
                                    <li>Mentorship and structured supervision</li>
                                    <li>Community partnerships (where available)</li>
                                    <li>Ongoing guidance and transition planning</li>
                                </ul>
                            </ReadMoreCard>

                            <h2>Our Commitment to Inclusive Excellence</h2>
                            <p>
                                Utatu International&apos;s Special Needs pathway is guided by the principle that inclusion requires structure, clarity, and partnership.
                            </p>
                            <p>We:</p>
                            <ul>
                                <li>Maintain high academic expectations where appropriate</li>
                                <li>Adapt instructional strategies without lowering standards</li>
                                <li>Work collaboratively with families</li>
                                <li>Prioritize dignity, respect, and strengths-based development</li>
                            </ul>
                            <p>Our approach ensures learners receive structured support within a credible educational framework.</p>
                        </>) : school.content === "foundation-stage-detailed" ? (<>
                            <p>
                                The UIS Foundation Stage, encompassing Kindergarten 1 (age 3), Kindergarten 2 (age 4), and Kindergarten 3 (age 5), provides a crucial starting point for young learners. Aligned with the Cambridge Early Years framework, this program is designed to create a strong educational foundation for children in these formative years.
                            </p>

                            <h2>A Focus on Individualized Growth</h2>
                            <p>
                                Recognizing that every child develops at their own pace, the UIS Foundation Stage emphasizes individualized learning and development. By tailoring the curriculum to meet the specific needs and interests of each child, the program creates an environment where young learners can thrive.
                            </p>

                            <h2>Key Benefits</h2>
                            <h3>Early exposure to a structured learning environment</h3>
                            <p>Kindergarten 1 (age 3) introduces children to routines and social interactions.</p>

                            <h3>Development of fundamental literacy and numeracy skills</h3>
                            <p>Kindergarten 2 (age 4) builds on early concepts, introducing basic reading, writing, and number skills.</p>

                            <h3>Fostering social and emotional development</h3>
                            <p>Kindergarten 3 (age 5) emphasizes teamwork, cooperation, and self-regulation.</p>

                            <h3>Stimulating creativity and imagination</h3>
                            <p>Throughout the Foundation Stage, children are encouraged to explore their artistic and imaginative abilities.</p>

                            <p>
                                By providing a nurturing and stimulating learning environment, Utatu International School&apos;s Foundation Stage empowers children to become confident, curious, and lifelong learners.
                            </p>
                        </>) : school.content === "preparatory-school-detailed" ? (<>
                            <p>
                                Utatu International School offers a structured Cambridge Primary programme (Year 1–6) designed to build academic confidence, critical thinking, and independent learning skills.
                            </p>
                            <p>
                                Our hybrid and online Cambridge Primary model combines internationally recognized curriculum standards with flexible delivery — making high-quality Cambridge education accessible to modern families.
                            </p>
                            <p>
                                We provide a clear progression pathway that prepares students for Cambridge Lower Secondary and future IGCSE success.
                            </p>

                            <h2>Core Cambridge Primary Subjects (Year 1–6)</h2>
                            <p>Our Preparatory School focuses on foundational mastery in core academic disciplines aligned with the Cambridge framework.</p>

                            <h3>English</h3>
                            <p>Develops strong literacy skills including reading comprehension, structured writing, vocabulary development, and confident communication.</p>

                            <h3>Mathematics</h3>
                            <p>Builds number fluency, logical reasoning, and structured problem-solving through progressive Cambridge-aligned objectives.</p>

                            <h3>Science</h3>
                            <p>Introduces scientific inquiry, observation, experimentation, and analytical thinking — forming the foundation for future STEM success.</p>

                            <h2>A Broad and Balanced Cambridge Curriculum</h2>
                            <p>Beyond core subjects, students engage in a comprehensive Cambridge Primary curriculum that promotes creativity, digital literacy, and global awareness:</p>
                            <ul>
                                <li>Art and Design</li>
                                <li>Computing</li>
                                <li>Digital Literacy</li>
                                <li>Global Perspectives</li>
                                <li>Wellbeing Education</li>
                                <li>Humanities (Social Studies)</li>
                                <li>Modern Foreign Languages</li>
                                <li>Music</li>
                                <li>Physical Education</li>
                            </ul>
                            <p>This well-rounded approach ensures academic development is balanced with social, emotional, and creative growth.</p>

                            <h2>Structured Assessment &amp; Academic Progress Monitoring</h2>
                            <p>As part of the Cambridge Primary programme, students participate in structured assessments that:</p>
                            <ul>
                                <li>Measure progress against international benchmarks</li>
                                <li>Identify learning strengths and support areas</li>
                                <li>Inform instructional planning</li>
                                <li>Prepare students for seamless progression to Cambridge Lower Secondary</li>
                            </ul>
                            <p>Assessment at Utatu International School supports clarity, accountability, and continuous academic improvement.</p>

                            <h2>Why Choose Our Cambridge Primary Programme?</h2>
                            <p>Parents choose Utatu International for Year 1–6 because we provide:</p>
                            <ul>
                                <li>Accredited Cambridge curriculum delivery</li>
                                <li>Flexible hybrid and online learning options</li>
                                <li>Structured academic planning</li>
                                <li>Individualized pacing within Cambridge standards</li>
                                <li>Clear progression to IGCSE pathways</li>
                            </ul>
                            <p>Our Preparatory School builds the academic discipline and confidence necessary for long-term success within the Cambridge system.</p>

                            <h2>Preparing Students for Cambridge Lower Secondary</h2>
                            <p>The transition from Year 6 to Lower Secondary is carefully structured. Students complete Primary with:</p>
                            <ul>
                                <li>Strong literacy and numeracy foundations</li>
                                <li>Developed critical thinking skills</li>
                                <li>Digital fluency</li>
                                <li>Academic independence</li>
                            </ul>
                            <p>This ensures readiness for the next stage of Cambridge education.</p>
                        </>) : school.content === "junior-high-school-detailed" ? (<>
                            <p>
                                At Utatu International School, our Junior High School (Year 7–9) follows the internationally recognized Cambridge Lower Secondary framework, providing a structured pathway that bridges Primary education and IGCSE preparation.
                            </p>
                            <p>
                                Through our hybrid and online learning model, students benefit from academic rigor, guided independence, and personalized support — ensuring steady progression within the Cambridge system.
                            </p>

                            <h2>Core Academic Foundation</h2>
                            <p>Our Cambridge Lower Secondary programme builds depth, analytical thinking, and subject mastery in essential academic disciplines:</p>

                            <h3>English</h3>
                            <p>Supports both first and second language learners in developing advanced reading comprehension, structured writing, analytical skills, and confident communication.</p>

                            <h3>Mathematics</h3>
                            <p>Strengthens algebraic thinking, problem-solving strategies, logical reasoning, and quantitative fluency.</p>

                            <h3>Science (Biology, Chemistry &amp; Physics)</h3>
                            <p>Introduces structured scientific inquiry, experimentation, and deeper conceptual understanding across core scientific disciplines.</p>

                            <p>These subjects form the academic backbone required for successful IGCSE transition.</p>

                            <h2>Expanding Intellectual &amp; Creative Development</h2>
                            <p>Beyond core academics, our Junior High programme offers a broad and balanced curriculum that supports creativity, digital competence, and global awareness:</p>

                            <h3>Art &amp; Design</h3>
                            <p>Encourages visual expression, creativity, and innovative thinking.</p>

                            <h3>Digital Literacy &amp; ICT</h3>
                            <p>Develops digital fluency, media literacy, responsible technology use, and foundational computing skills.</p>

                            <h3>Global Perspectives</h3>
                            <p>Cultivates critical thinking, research skills, and global citizenship awareness.</p>

                            <h3>Geography</h3>
                            <p>Explores environmental systems, human interaction with the Earth, climate patterns, urbanization, and sustainability.</p>

                            <h3>History</h3>
                            <p>Examines historical events, cultures, and developments while strengthening analytical thinking and source evaluation.</p>

                            <h3>Modern Foreign Languages</h3>
                            <p>Offers languages such as Spanish, French, and German to enhance communication skills and cultural understanding.</p>

                            <h3>Music</h3>
                            <p>Builds creative confidence and artistic discipline.</p>

                            <h3>Wellbeing</h3>
                            <p>Supports personal growth, resilience, emotional intelligence, and positive peer engagement during key developmental years.</p>

                            <h3>Physical Education</h3>
                            <p>Promotes teamwork, discipline, and lifelong health awareness.</p>

                            <h2>Preparing for IGCSE Success</h2>
                            <p>Year 7–9 at Utatu International is not just academic enrichment — it is structured preparation. Students complete Cambridge Lower Secondary with:</p>
                            <ul>
                                <li>Strong analytical and research skills</li>
                                <li>Developed subject depth</li>
                                <li>Academic independence</li>
                                <li>Confidence for IGCSE-level expectations</li>
                            </ul>
                            <p>Our hybrid and online Cambridge model ensures flexibility without sacrificing progression standards.</p>

                            <h2>Why Choose UIS Junior High?</h2>
                            <p>Parents choose Utatu International for Cambridge Lower Secondary because we provide:</p>
                            <ul>
                                <li>A globally recognized Cambridge framework</li>
                                <li>Flexible hybrid and online delivery</li>
                                <li>Structured assessment aligned with international benchmarks</li>
                                <li>Personalized academic support</li>
                                <li>Clear progression to IGCSE pathways</li>
                            </ul>
                            <p>This balanced and rigorous approach ensures students excel academically while developing diverse talents and life skills.</p>
                        </>) : school.content === "senior-high-school-detailed" ? (<>
                            <p>
                                At Utatu International School, our Senior High School (Year 10–11) follows the internationally recognized Cambridge Upper Secondary curriculum, preparing students for the globally respected Cambridge IGCSE and O Level qualifications.
                            </p>
                            <p>
                                Through our structured hybrid and online learning model, students receive focused academic preparation, guided subject specialization, and consistent assessment support — ensuring readiness for higher education and competitive global pathways.
                            </p>

                            <h2>Cambridge IGCSE: Internationally Recognized Excellence</h2>
                            <p>
                                The Cambridge International General Certificate of Secondary Education (IGCSE) is one of the world&apos;s most respected secondary qualifications. Recognized by universities, colleges, and employers worldwide, it provides a rigorous academic benchmark for students aged 14–16.
                            </p>
                            <p>At UIS, our IGCSE programme is designed to:</p>
                            <ul>
                                <li>Develop subject mastery and analytical depth</li>
                                <li>Strengthen independent learning and time management</li>
                                <li>Build research and examination skills</li>
                                <li>Prepare students for A Level, IB, or other advanced pathways</li>
                            </ul>
                            <p>This stage marks a transition from guided learning to academic independence.</p>

                            <h2>Broad and Flexible Subject Choices</h2>
                            <p>
                                The Cambridge IGCSE framework offers over 70 subjects, including more than 30 languages, allowing students to create personalized academic pathways aligned with their strengths and future ambitions.
                            </p>
                            <p>Subject areas typically include:</p>
                            <ul>
                                <li>English (First &amp; Second Language)</li>
                                <li>Mathematics (Core &amp; Extended)</li>
                                <li>Sciences (Biology, Chemistry, Physics)</li>
                                <li>Humanities (Geography, History, Global Perspectives)</li>
                                <li>Business and Economics</li>
                                <li>ICT and Computer Science</li>
                                <li>Modern Foreign Languages</li>
                                <li>Creative and Performing Arts</li>
                            </ul>
                            <p>Our academic team guides families in selecting subject combinations that support university entry requirements and long-term career goals.</p>

                            <h2>O Level Qualification Option</h2>
                            <p>Students may also pursue the Cambridge O Level qualification, another internationally respected academic benchmark.</p>
                            <p>Both IGCSE and O Level pathways:</p>
                            <ul>
                                <li>Uphold rigorous Cambridge standards</li>
                                <li>Develop critical thinking and structured analysis</li>
                                <li>Strengthen written and applied knowledge</li>
                                <li>Provide internationally portable qualifications</li>
                            </ul>

                            <h2>Structured Preparation &amp; Academic Support</h2>
                            <p>Our Senior High School programme provides:</p>
                            <ul>
                                <li>Clear syllabus mapping and milestone tracking</li>
                                <li>Regular formative and summative assessments</li>
                                <li>Exam-focused preparation strategies</li>
                                <li>Guided academic mentoring</li>
                                <li>Hybrid and online flexibility without academic compromise</li>
                            </ul>
                            <p>We combine structured progression with personalized support — ensuring students are prepared not only to pass examinations, but to excel.</p>

                            <h2>Preparing for the Next Stage</h2>
                            <p>Completion of Year 11 at Utatu International positions students for:</p>
                            <ul>
                                <li>Cambridge A Level studies</li>
                                <li>International university pathways</li>
                                <li>Competitive global admissions</li>
                                <li>Professional career foundations</li>
                            </ul>
                            <p>This stage builds intellectual discipline, academic confidence, and future readiness.</p>

                            <h2>Why Choose UIS for Cambridge Upper Secondary?</h2>
                            <p>Parents choose Utatu International Senior High because we provide:</p>
                            <ul>
                                <li>Accredited Cambridge IGCSE and O Level pathways</li>
                                <li>Flexible hybrid and online delivery</li>
                                <li>Structured exam preparation</li>
                                <li>Personalized subject guidance</li>
                                <li>Internationally recognized academic standards</li>
                            </ul>
                            <p>Year 10–11 is more than exam preparation — it is preparation for global opportunity.</p>
                        </>) : school.content === "international-advanced-school-detailed" ? (<>
                            <p>
                                At Utatu International School, our International Advanced School (Year 12–13) delivers the globally respected Cambridge International AS &amp; A Level programme — a rigorous two-year academic pathway designed to prepare students for competitive university admission worldwide.
                            </p>
                            <p>
                                Building upon the foundation of IGCSE or O Level, our A Level programme develops subject mastery, advanced analytical thinking, and independent academic discipline.
                            </p>
                            <p>
                                Through our structured hybrid and online model, students benefit from focused specialization with guided academic mentorship — ensuring readiness for higher education at leading universities.
                            </p>

                            <h2>Cambridge AS &amp; A Level: Globally Recognized Academic Excellence</h2>
                            <p>
                                The Cambridge A Level qualification is internationally recognized by top universities across the UK, Europe, North America, Asia, and beyond.
                            </p>
                            <p>It is valued for:</p>
                            <ul>
                                <li>Academic depth and subject specialization</li>
                                <li>Rigorous assessment standards</li>
                                <li>Preparation for university-style learning</li>
                                <li>Development of independent research and critical analysis skills</li>
                            </ul>
                            <p>A Level is not simply an examination pathway — it is preparation for academic leadership.</p>

                            <h2>Deep Specialization Across Key Disciplines</h2>
                            <p>
                                Students select three to four subjects to study in depth, allowing them to align academic focus with intended university courses and career ambitions.
                            </p>
                            <p>Subject areas typically include:</p>
                            <ul>
                                <li>Mathematics and Further Mathematics</li>
                                <li>Biology, Chemistry, Physics</li>
                                <li>Economics and Business</li>
                                <li>Computer Science</li>
                                <li>English Literature</li>
                                <li>History and Humanities</li>
                                <li>Modern Foreign Languages</li>
                            </ul>
                            <p>Our academic advisors guide subject selection to ensure alignment with university entry requirements.</p>

                            <h2>Modular Curriculum Structure (AS &amp; A2)</h2>
                            <p>The Cambridge A Level programme is structured into two stages:</p>
                            <h3>AS Level (Year 12)</h3>
                            <p>Students may complete the AS Level as a standalone qualification or progress into A2.</p>
                            <h3>A2 Level (Year 13)</h3>
                            <p>Completing A2 leads to the full Cambridge A Level qualification.</p>
                            <p>This modular approach offers flexibility while maintaining academic rigor and progression clarity.</p>

                            <h2>Program Highlights</h2>
                            <h3>Advanced Academic Depth</h3>
                            <p>Focused subject mastery prepares students for demanding university coursework.</p>
                            <h3>Flexible Pathways</h3>
                            <p>Complete AS independently or pursue the full two-year A Level.</p>
                            <h3>Critical Thinking &amp; Independence</h3>
                            <p>Develops research skills, structured argumentation, and analytical reasoning.</p>
                            <h3>Hybrid &amp; Online Flexibility</h3>
                            <p>Structured learning delivered with flexibility — without compromising standards.</p>

                            <h2>Preparing for Competitive University Admission</h2>
                            <p>Our International Advanced School prepares students for:</p>
                            <ul>
                                <li>Admission to top global universities</li>
                                <li>Competitive scholarship applications</li>
                                <li>Professional career pathways</li>
                                <li>Academic independence at tertiary level</li>
                            </ul>
                            <p>Graduates leave Year 13 with not only qualifications — but intellectual maturity and clarity of direction.</p>

                            <h2>Why Choose UIS for Cambridge A Level?</h2>
                            <p>Parents and students choose Utatu International for A Levels because we provide:</p>
                            <ul>
                                <li>Accredited Cambridge AS &amp; A Level delivery</li>
                                <li>Structured academic mentorship</li>
                                <li>Clear university pathway guidance</li>
                                <li>Flexible hybrid and online access</li>
                                <li>Internationally competitive academic standards</li>
                            </ul>
                            <p>Year 12–13 is where academic ambition becomes defined direction.</p>
                        </>) : (
                            <p>{school.content}</p>
                        )}

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-10 not-prose">
                            <Link
                                href="/contact"
                                className="inline-block bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-medium px-6 py-3 rounded-lg shadow-md transition duration-300"
                            >
                                Apply for {school.title}
                            </Link>
                            <Link
                                href="/contact"
                                className="inline-block border border-slate-300 hover:border-slate-400 text-slate-700 font-medium px-6 py-3 rounded-lg transition duration-300"
                            >
                                Schedule a Visit
                            </Link>
                        </div>
                    </article>

                    {/* ===== Sidebar: Other Schools ===== */}
                    <aside className="lg:col-span-4">
                        <h3 className="text-sm font-semibold tracking-widest uppercase text-slate-400 mb-6">Other Schools</h3>
                        <div className="space-y-5">
                            {otherSchools.map((item) => (
                                <Link
                                    key={item.slug}
                                    href={`/schools/${item.slug}`}
                                    className="flex gap-4 group items-center"
                                >
                                    <div className="relative w-32 h-24 overflow-hidden flex-shrink-0">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition duration-300"
                                            sizes="128px"
                                        />
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-slate-800 leading-snug group-hover:text-yellow-600 transition-colors">
                                            {item.title}
                                        </p>
                                        <span className="text-xs text-slate-400">{item.description}</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                        {/* ===== Sidebar CTA ===== */}
                        <Card className="mt-12 bg-yellow-50 border-yellow-200 text-center shadow-lg rounded-none">
                            <CardHeader>
                                <CardTitle className="text-xl font-bold font-heading text-slate-900">
                                    Ready to Join Us?
                                </CardTitle>
                                <CardDescription className="text-slate-600 text-sm">
                                    Discover the perfect learning environment for your child at Utatu International School.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-semibold px-6 py-3 rounded-lg shadow-sm transition duration-300 w-full"
                                >
                                    Apply Now
                                </Link>
                            </CardContent>
                        </Card>
                    </aside>

                </div>
            </div>
        </main>
    );
}
