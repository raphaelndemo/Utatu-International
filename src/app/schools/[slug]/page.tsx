import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

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
        image: "/images/special-needs.jpg",
    },
    "foundation-stage": {
        title: "Foundation Stage",
        description: "Ages 3-5: Building Strong Foundations",
        content: "foundation-stage-detailed",
        image: "/images/foundation.jpg",
    },
    "preparatory-school": {
        title: "Preparatory School",
        description: "Year 1-6: A strong academic foundation",
        content: "preparatory-school-detailed",
        image: "/images/preparatory.jpg",
    },
    "junior-high-school": {
        title: "Junior High School",
        description: "Year 7-9: A Well-Rounded Curriculum",
        content: "junior-high-school-detailed",
        image: "/images/online-homeschooling.jpg",
    },
    "senior-high-school": {
        title: "Senior High School",
        description: "Year 10-11: A Foundation for Global Success",
        content: "senior-high-school-detailed",
        image: "/images/senior.jpg",
    },
    "international-advanced-school": {
        title: "International Advanced School",
        description: "Year 12-13: Your launchpad to University",
        content: "international-advanced-school-detailed",
        image: "/images/international.jpg",
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
        <main className="container py-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* ================= Main Article ================= */}
                <article className="lg:col-span-8">
                    {/* Featured Image */}
                    <div className="relative w-full h-[420px] rounded-xl overflow-hidden mb-8">
                        <Image
                            src={school.image}
                            alt={school.title}
                            fill
                            className="object-cover"
                            priority
                            unoptimized
                        />
                    </div>

                    {/* Meta */}
                    <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
                        <span>{school.description}</span>
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl font-bold font-heading mb-6">
                        {school.title}
                    </h1>

                    {/* Content */}
                    {school.content === "special-needs-detailed" ? (
                        <div className="prose prose-lg max-w-none">
                            {/* Introduction */}
                            <div className="mb-8">
                                <p className="leading-relaxed mb-4 text-lg">
                                    At Utatu International School, we are committed to inclusivity and personalized learning. Our Special Needs Education (SNE) Department, led by our dedicated head, focuses on providing tailored support and resources for students with diverse learning needs. We specialize in assisting students with conditions such as autism, dyslexia, dysgraphia, and dyscalculia.
                                </p>
                                <p className="leading-relaxed mb-4">
                                    We believe that every child deserves the opportunity to succeed and thrive in their educational journey. Through our online IGCSE curriculum, we ensure that each student receives the individualized attention and accommodations they need to reach their full potential.
                                </p>
                            </div>

                            {/* About Section */}
                            <div className="mb-12">
                                <h2 className="text-3xl font-bold font-heading mb-6 mt-10">About our Special Needs Education</h2>
                                <p className="leading-relaxed mb-8">
                                    Special Needs Education (SNE) focuses on ensuring that learners with diverse abilities have access to quality and inclusive education. It provides tailored programs designed to meet the unique learning, social, and vocational needs of each individual. Below is a breakdown of the three key levels in special needs education:
                                </p>
                            </div>

                            {/* Foundation Level */}
                            <div className="mb-12 bg-muted/50 rounded-lg p-6 border-l-4 border-primary">
                                <h3 className="text-2xl font-bold font-heading mb-4">1: Foundation Level</h3>
                                <p className="leading-relaxed mb-4">
                                    The foundation level focuses on developing basic skills and laying a strong groundwork for future learning.
                                </p>

                                <div className="mb-6">
                                    <h4 className="text-xl font-semibold mb-3">Key Objectives:</h4>
                                    <ul className="list-disc list-inside space-y-2 ml-4">
                                        <li>Build communication, sensory, and motor skills.</li>
                                        <li>Foster emotional and social interaction.</li>
                                        <li>Create an inclusive environment for exploration and discovery.</li>
                                    </ul>
                                </div>

                                <div className="mb-6">
                                    <h4 className="text-xl font-semibold mb-3">Activities and Programs:</h4>
                                    <ul className="list-disc list-inside space-y-2 ml-4">
                                        <li><strong>Early Literacy and Numeracy:</strong> Introduce numbers, letters, and shapes through interactive games and visual aids.</li>
                                        <li><strong>Motor Skills Development:</strong> Activities like drawing, stacking blocks, and gross motor exercises such as running or jumping.</li>
                                        <li><strong>Sensory Integration:</strong> Use of sensory rooms and activities to improve response to stimuli.</li>
                                        <li><strong>Social Skills Training:</strong> Group play, storytelling, and peer interactions to encourage collaboration and empathy.</li>
                                        <li>Activities of daily living skills</li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="text-xl font-semibold mb-3">Tools and Strategies:</h4>
                                    <ul className="list-disc list-inside space-y-2 ml-4">
                                        <li>Visual schedules for daily activities.</li>
                                        <li>Assistive technologies like communication boards.</li>
                                        <li>Individualized Education Plans (IEPs) tailored to each learner.</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Intermediate Level */}
                            <div className="mb-12 bg-muted/50 rounded-lg p-6 border-l-4 border-secondary">
                                <h3 className="text-2xl font-bold font-heading mb-4">2: Intermediate Level</h3>
                                <p className="leading-relaxed mb-4">
                                    The intermediate level builds on foundational skills and emphasizes academic growth, independence, and problem-solving.
                                </p>

                                <div className="mb-6">
                                    <h4 className="text-xl font-semibold mb-3">Key Objectives:</h4>
                                    <ul className="list-disc list-inside space-y-2 ml-4">
                                        <li>Enhance cognitive, emotional, and social development.</li>
                                        <li>Introduce functional academics and real-world skills.</li>
                                        <li>Encourage independent thinking and adaptability.</li>
                                    </ul>
                                </div>

                                <div className="mb-6">
                                    <h4 className="text-xl font-semibold mb-3">Activities and Programs:</h4>
                                    <ul className="list-disc list-inside space-y-2 ml-4">
                                        <li><strong>Functional Academics:</strong> Reading, writing, and math skills applied to everyday scenarios (e.g., counting money, reading signs).</li>
                                        <li><strong>Life Skills Training:</strong> Personal hygiene, dressing, and simple household chores.</li>
                                        <li><strong>Social and Emotional Learning (SEL):</strong> Role-playing and group activities to build confidence and self-regulation.</li>
                                        <li><strong>Creative Expression:</strong> Art, music, and drama programs to stimulate creativity and self-expression.</li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="text-xl font-semibold mb-3">Tools and Strategies:</h4>
                                    <ul className="list-disc list-inside space-y-2 ml-4">
                                        <li>Hands-on learning with manipulatives and task-based activities.</li>
                                        <li>Use of assistive devices like text-to-speech software for academic support.</li>
                                        <li>Regular progress assessments to adapt teaching methods.</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Pre-Vocational Level */}
                            <div className="mb-8 bg-muted/50 rounded-lg p-6 border-l-4 border-primary">
                                <h3 className="text-2xl font-bold font-heading mb-4">3: Pre-Vocational Level</h3>
                                <p className="leading-relaxed mb-4">
                                    The pre-vocational level focuses on preparing learners for life beyond school by equipping them with job-specific skills, independence, and decision-making abilities.
                                </p>

                                <div className="mb-6">
                                    <h4 className="text-xl font-semibold mb-3">Key Objectives:</h4>
                                    <ul className="list-disc list-inside space-y-2 ml-4">
                                        <li>Develop pre-employment skills and work habits.</li>
                                        <li>Enhance independence in daily living activities.</li>
                                        <li>Foster community integration and self-reliance.</li>
                                    </ul>
                                </div>

                                <div className="mb-6">
                                    <h4 className="text-xl font-semibold mb-3">Activities and Programs:</h4>
                                    <ul className="list-disc list-inside space-y-2 ml-4">
                                        <li><strong>Workplace Simulations:</strong> Tasks like packaging, assembly, or customer service in a controlled environment.</li>
                                        <li><strong>Career Exploration:</strong> Visits to workplaces and exposure to different career paths.</li>
                                        <li><strong>Financial Literacy:</strong> Basics of budgeting, saving, and managing money.</li>
                                        <li><strong>Teamwork and Communication:</strong> Group projects and practice in workplace etiquette.</li>
                                        <li><strong>Internships and Volunteer Work:</strong> Opportunities to apply skills in real-world settings.</li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="text-xl font-semibold mb-3">Tools and Strategies:</h4>
                                    <ul className="list-disc list-inside space-y-2 ml-4">
                                        <li>Vocational training kits tailored to various skills (e.g., sewing, carpentry, baking).</li>
                                        <li>Collaboration with local businesses for work experience opportunities.</li>
                                        <li>Ongoing mentorship and guidance from teachers and counselors.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ) : school.content === "foundation-stage-detailed" ? (
                        <div className="prose prose-lg max-w-none">
                            {/* Introduction */}
                            <div className="mb-8">
                                <p className="leading-relaxed mb-4 text-lg">
                                    The UIS Foundation Stage, encompassing Kindergarten 1 (age 3), Kindergarten 2 (age 4), and Kindergarten 3 (age 5), provides a crucial starting point for young learners. Aligned with the Cambridge Early Years framework, this program is designed to create a strong educational foundation for children in these formative years.
                                </p>
                            </div>

                            {/* Focus on Individualized Growth */}
                            <div className="mb-12">
                                <h2 className="text-3xl font-bold font-heading mb-6 mt-10">A Focus on Individualized Growth</h2>
                                <p className="leading-relaxed mb-8">
                                    Recognizing that every child develops at their own pace, the UIS Foundation Stage emphasizes individualized learning and development. By tailoring the curriculum to meet the specific needs and interests of each child, the program creates an environment where young learners can thrive.
                                </p>
                            </div>

                            {/* Key Benefits */}
                            <div className="mb-12">
                                <h2 className="text-3xl font-bold font-heading mb-6">Key benefits of the UIS Foundation Stage include:</h2>
                                
                                <div className="space-y-6">
                                    <div className="bg-muted/50 rounded-lg p-6 border-l-4 border-primary">
                                        <h3 className="text-xl font-semibold mb-3">
                                            Early exposure to a structured learning environment
                                        </h3>
                                        <p className="leading-relaxed">
                                            Kindergarten 1 (age 3) introduces children to routines and social interactions.
                                        </p>
                                    </div>

                                    <div className="bg-muted/50 rounded-lg p-6 border-l-4 border-secondary">
                                        <h3 className="text-xl font-semibold mb-3">
                                            Development of fundamental literacy and numeracy skills
                                        </h3>
                                        <p className="leading-relaxed">
                                            Kindergarten 2 (age 4) builds on early concepts, introducing basic reading, writing, and number skills.
                                        </p>
                                    </div>

                                    <div className="bg-muted/50 rounded-lg p-6 border-l-4 border-primary">
                                        <h3 className="text-xl font-semibold mb-3">
                                            Fostering social and emotional development
                                        </h3>
                                        <p className="leading-relaxed">
                                            Kindergarten 3 (age 5) emphasizes teamwork, cooperation, and self-regulation.
                                        </p>
                                    </div>

                                    <div className="bg-muted/50 rounded-lg p-6 border-l-4 border-secondary">
                                        <h3 className="text-xl font-semibold mb-3">
                                            Stimulating creativity and imagination
                                        </h3>
                                        <p className="leading-relaxed">
                                            Throughout the Foundation Stage, children are encouraged to explore their artistic and imaginative abilities.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Conclusion */}
                            <div className="mb-8 bg-primary/5 rounded-lg p-6 border border-primary/20">
                                <p className="leading-relaxed text-lg font-medium">
                                    By providing a nurturing and stimulating learning environment, Utatu International School&apos;s Foundation Stage empowers children to become confident, curious, and lifelong learners.
                                </p>
                            </div>
                        </div>
                    ) : school.content === "preparatory-school-detailed" ? (
                        <div className="prose prose-lg max-w-none">
                            {/* Introduction */}
                            <div className="mb-8">
                                <p className="leading-relaxed mb-4 text-lg">
                                    At UIS we offer the Preparatory School (Cambridge Primary program) which fosters proficiency and comprehension in ten subjects, encompassing:
                                </p>
                            </div>

                            {/* Core Subjects */}
                            <div className="mb-12">
                                <div className="grid gap-4 md:grid-cols-2 mb-8">
                                    <div className="bg-muted/50 rounded-lg p-6 border-l-4 border-primary">
                                        <h3 className="text-xl font-semibold mb-3">English</h3>
                                        <p className="leading-relaxed text-sm">
                                            Develops strong language skills, including reading, writing, speaking, and listening.
                                        </p>
                                    </div>

                                    <div className="bg-muted/50 rounded-lg p-6 border-l-4 border-secondary">
                                        <h3 className="text-xl font-semibold mb-3">Mathematics</h3>
                                        <p className="leading-relaxed text-sm">
                                            Builds a solid foundation in number sense, problem-solving, and mathematical reasoning.
                                        </p>
                                    </div>

                                    <div className="bg-muted/50 rounded-lg p-6 border-l-4 border-primary">
                                        <h3 className="text-xl font-semibold mb-3">Science</h3>
                                        <p className="leading-relaxed text-sm">
                                            Introduces scientific inquiry, exploration, and understanding of the natural world.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-primary/5 rounded-lg p-6 border border-primary/20">
                                    <h3 className="text-xl font-semibold mb-3">Other Subjects</h3>
                                    <p className="leading-relaxed mb-3">
                                        Additional subjects include:
                                    </p>
                                    <ul className="list-disc list-inside space-y-2 ml-4">
                                        <li>Art and Design</li>
                                        <li>Computing</li>
                                        <li>Digital Literacy</li>
                                        <li>Global Perspective</li>
                                        <li>Wellbeing</li>
                                        <li>Humanities (Social Studies)</li>
                                        <li>Modern Foreign Language</li>
                                        <li>Music</li>
                                        <li>Physical Education</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Program Features */}
                            <div className="mb-8">
                                <p className="leading-relaxed mb-6">
                                    The program also features assessments that validate and enhance learning. It provides a comprehensive curriculum designed to foster academic excellence and holistic development in young learners.
                                </p>
                            </div>

                            {/* A Broad Curriculum */}
                            <div className="mb-12 bg-muted/50 rounded-lg p-6 border-l-4 border-primary">
                                <h2 className="text-2xl font-bold font-heading mb-4">A Broad Curriculum</h2>
                                <p className="leading-relaxed">
                                    With a focus on ten core subjects, including English and Mathematics as foundational pillars, the program ensures a well-rounded education. Students are introduced to a variety of disciplines, stimulating curiosity and critical thinking.
                                </p>
                            </div>

                            {/* Rigorous Assessment */}
                            <div className="mb-12 bg-muted/50 rounded-lg p-6 border-l-4 border-secondary">
                                <h2 className="text-2xl font-bold font-heading mb-4">Rigorous Assessment</h2>
                                <p className="leading-relaxed">
                                    To measure progress and identify areas for improvement, the Preparatory School incorporates regular assessments. These evaluations serve as valuable tools for both students and teachers, informing instructional decisions and celebrating achievements.
                                </p>
                </div>

                            {/* Conclusion */}
                            <div className="mb-8 bg-primary/5 rounded-lg p-6 border border-primary/20">
                                <p className="leading-relaxed text-lg font-medium">
                                    By combining a diverse curriculum with robust assessment, the UIS Preparatory School equips students with the knowledge and skills necessary for future academic success.
                                </p>
                            </div>
                        </div>
                    ) : school.content === "junior-high-school-detailed" ? (
                        <div className="prose prose-lg max-w-none">
                            {/* Introduction */}
                            <div className="mb-8">
                                <p className="leading-relaxed mb-4 text-lg">
                                    The UIS Junior High program, following the Cambridge Lower Secondary framework, offers a robust curriculum designed to foster holistic development in young learners.
                                </p>
                            </div>

                            {/* Core Academic Foundation */}
                            <div className="mb-12">
                                <h2 className="text-3xl font-bold font-heading mb-6 mt-10">Core Academic Foundation</h2>
                                <p className="leading-relaxed mb-6">
                                    The program lays a strong academic foundation with core subjects such as:
                                </p>

                                <div className="grid gap-4 md:grid-cols-2 mb-8">
                                    <div className="bg-muted/50 rounded-lg p-6 border-l-4 border-primary">
                                        <h3 className="text-xl font-semibold mb-3">English</h3>
                                        <p className="leading-relaxed text-sm">
                                            Catering to both first and second language learners, the program ensures effective communication skills.
                                        </p>
                                    </div>

                                    <div className="bg-muted/50 rounded-lg p-6 border-l-4 border-secondary">
                                        <h3 className="text-xl font-semibold mb-3">Mathematics</h3>
                                        <p className="leading-relaxed text-sm">
                                            Building a solid numerical and problem-solving ability.
                                        </p>
                                    </div>

                                    <div className="bg-muted/50 rounded-lg p-6 border-l-4 border-primary md:col-span-2">
                                        <h3 className="text-xl font-semibold mb-3">Science (Biology, Chemistry and Physics)</h3>
                                        <p className="leading-relaxed text-sm">
                                            Fostering scientific inquiry and understanding of the natural world.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Exploring Creative and Physical Abilities */}
                            <div className="mb-12">
                                <h2 className="text-3xl font-bold font-heading mb-6">Exploring Creative and Physical Abilities</h2>
                                <p className="leading-relaxed mb-6">
                                    Beyond the core subjects, UIS Junior High recognizes the importance of well-rounded education by incorporating:
                                </p>

                                <div className="grid gap-4 md:grid-cols-2 mb-6">
                                    <div className="bg-muted/50 rounded-lg p-6 border-l-4 border-primary">
                                        <h3 className="text-xl font-semibold mb-3">Art & Design</h3>
                                        <p className="leading-relaxed text-sm">
                                            Nurturing creativity and artistic expression.
                                        </p>
                                    </div>

                                    <div className="bg-muted/50 rounded-lg p-6 border-l-4 border-secondary">
                                        <h3 className="text-xl font-semibold mb-3">Digital Literacy</h3>
                                        <p className="leading-relaxed text-sm">
                                            Expanding digital skills beyond basic ICT to include digital citizenship and media literacy.
                                        </p>
                                    </div>

                                    <div className="bg-muted/50 rounded-lg p-6 border-l-4 border-primary">
                                        <h3 className="text-xl font-semibold mb-3">ICT</h3>
                                        <p className="leading-relaxed text-sm">
                                            Introducing students to the digital world and basic computer skills.
                                        </p>
                                    </div>

                                    <div className="bg-muted/50 rounded-lg p-6 border-l-4 border-secondary">
                                        <h3 className="text-xl font-semibold mb-3">Global Perspectives</h3>
                                        <p className="leading-relaxed text-sm">
                                            Encouraging critical thinking and global citizenship.
                                        </p>
                                    </div>

                                    <div className="bg-muted/50 rounded-lg p-6 border-l-4 border-primary">
                                        <h3 className="text-xl font-semibold mb-3">Geography</h3>
                                        <p className="leading-relaxed text-sm">
                                            Explores the physical features of the Earth, as well as how human activities interact with the environment. It covers topics such as climate, landforms, ecosystems, and urbanization, helping students understand the world around them.
                                        </p>
                                    </div>

                                    <div className="bg-muted/50 rounded-lg p-6 border-l-4 border-secondary">
                                        <h3 className="text-xl font-semibold mb-3">History</h3>
                                        <p className="leading-relaxed text-sm">
                                            Delves into past events, societies, and cultures, providing insights into how historical developments shape the present. It encourages critical thinking about sources, timelines, and the impact of key moments in history.
                                        </p>
                                    </div>

                                    <div className="bg-muted/50 rounded-lg p-6 border-l-4 border-primary">
                                        <h3 className="text-xl font-semibold mb-3">Modern Foreign Languages</h3>
                                        <p className="leading-relaxed text-sm">
                                            We offer modern foreign languages to promote diversity among our students. By learning languages such as Spanish, French, German among others, students gain valuable cultural insights and communication skills.
                                        </p>
                                    </div>

                                    <div className="bg-muted/50 rounded-lg p-6 border-l-4 border-secondary">
                                        <h3 className="text-xl font-semibold mb-3">Music</h3>
                                        <p className="leading-relaxed text-sm">
                                            We offer music as part of our well-rounded education, fostering creativity and musical skills in our students.
                                        </p>
                                    </div>

                                    <div className="bg-muted/50 rounded-lg p-6 border-l-4 border-primary">
                                        <h3 className="text-xl font-semibold mb-3">Wellbeing</h3>
                                        <p className="leading-relaxed text-sm">
                                            This helps students navigate key developmental changes by fostering motivation, resilience, and engagement. The curriculum encourages self-reflection, positive relationships, and active participation in a dynamic world, promoting overall wellbeing.
                                        </p>
                                    </div>

                                    <div className="bg-muted/50 rounded-lg p-6 border-l-4 border-secondary">
                                        <h3 className="text-xl font-semibold mb-3">Physical Education</h3>
                                        <p className="leading-relaxed text-sm">
                                            Promoting a healthy lifestyle, teamwork, and physical fitness.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Conclusion */}
                            <div className="mb-8 bg-primary/5 rounded-lg p-6 border border-primary/20">
                                <p className="leading-relaxed text-lg font-medium">
                                    This balanced approach ensures that our Junior High students not only excel academically but also develop a wide range of skills, interests, and talents.
                                </p>
                            </div>
                        </div>
                    ) : school.content === "senior-high-school-detailed" ? (
                        <div className="prose prose-lg max-w-none">
                            {/* Introduction */}
                            <div className="mb-8">
                                <p className="leading-relaxed mb-4 text-lg">
                                    Our Senior High program, following the Cambridge Upper Secondary curriculum, is meticulously designed to prepare students aged 14 to 16 for the rigors of the International General Certificate of Secondary Education (IGCSE) examinations. This globally recognized qualification, with a rich history spanning over three decades, is the cornerstone for entry into prestigious universities and competitive employment opportunities worldwide.
                                </p>
                            </div>

                            {/* IGCSE Breadth */}
                            <div className="mb-12 bg-muted/50 rounded-lg p-6 border-l-4 border-primary">
                                <h2 className="text-2xl font-bold font-heading mb-4">Unparalleled Subject Breadth</h2>
                                <p className="leading-relaxed mb-4">
                                    The IGCSE offers an unparalleled breadth of subjects, encompassing over 70 disciplines including 30 languages. This extensive curriculum empowers schools to create tailored learning pathways that align with individual student interests and aspirations.
                                </p>
                            </div>

                            {/* O Level Option */}
                            <div className="mb-12 bg-muted/50 rounded-lg p-6 border-l-4 border-secondary">
                                <h2 className="text-2xl font-bold font-heading mb-4">O Level Qualification</h2>
                                <p className="leading-relaxed">
                                    At this crucial stage of education, students can also opt for the O Level qualification, another internationally respected benchmark. Both the IGCSE and O Levels equip young learners with the essential tools to excel in their future endeavors.
                                </p>
                            </div>

                            
                        </div>
                    ) : school.content === "international-advanced-school-detailed" ? (
                        <div className="prose prose-lg max-w-none">
                            {/* Introduction */}
                            <div className="mb-8">
                                <p className="leading-relaxed mb-4 text-lg">
                                    Building upon the strong foundation provided by the IGCSE or O Level, our International Advanced Level (A Level) program is meticulously crafted to prepare students for the rigors of higher education. This two-year intensive course offers a deep dive into three or four subjects across the sciences, arts, and humanities, fostering specialized knowledge and critical thinking abilities.
                                </p>
                            </div>

                            {/* Curriculum Structure */}
                            <div className="mb-12 bg-muted/50 rounded-lg p-6 border-l-4 border-primary">
                                <h2 className="text-2xl font-bold font-heading mb-4">Modular Curriculum Structure</h2>
                                <p className="leading-relaxed mb-4">
                                    The A Level curriculum is thoughtfully structured into two stages: AS and A2. This modular approach empowers students to tailor their learning journey based on their academic goals and aspirations.
                                </p>
                                <p className="leading-relaxed">
                                    Whether they opt to complete all examinations at the end of the two-year program, or choose to take the AS as a standalone qualification, students have the flexibility to chart their own educational path.
                                </p>
                            </div>

                            {/* Key Features */}
                            <div className="mb-12">
                                <h2 className="text-3xl font-bold font-heading mb-6">Program Highlights</h2>
                                <div className="grid gap-4 md:grid-cols-2 mb-6">
                                    <div className="bg-muted/50 rounded-lg p-6 border-l-4 border-primary">
                                        <h3 className="text-xl font-semibold mb-3">Deep Specialization</h3>
                                        <p className="leading-relaxed text-sm">
                                            Students choose 3-4 subjects to study in depth, allowing for focused expertise in their areas of interest.
                                        </p>
                                    </div>

                                    <div className="bg-muted/50 rounded-lg p-6 border-l-4 border-secondary">
                                        <h3 className="text-xl font-semibold mb-3">Flexible Pathways</h3>
                                        <p className="leading-relaxed text-sm">
                                            Choose between AS as a standalone qualification or complete the full A Level over two years.
                                        </p>
                                    </div>

                                    <div className="bg-muted/50 rounded-lg p-6 border-l-4 border-primary">
                                        <h3 className="text-xl font-semibold mb-3">Broad Subject Range</h3>
                                        <p className="leading-relaxed text-sm">
                                            Subjects span sciences, arts, and humanities, providing diverse learning opportunities.
                                        </p>
                                    </div>

                                    <div className="bg-muted/50 rounded-lg p-6 border-l-4 border-secondary">
                                        <h3 className="text-xl font-semibold mb-3">Critical Thinking Focus</h3>
                                        <p className="leading-relaxed text-sm">
                                            Develops advanced analytical and independent learning skills essential for university success.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Global Recognition */}
                            <div className="mb-8 bg-primary/5 rounded-lg p-6 border border-primary/20">
                                <h2 className="text-2xl font-bold font-heading mb-4">Global Recognition and Excellence</h2>
                                <p className="leading-relaxed text-lg">
                                    Renowned globally for its academic excellence, the A Level is the passport to top universities worldwide. Its comprehensive curriculum and rigorous assessment methodology equip students with the intellectual tools and independent learning skills essential for success in higher education and beyond.
                                </p>
                            </div>
                        </div>
                    ) : (
                        <div className="prose prose-lg max-w-none">
                            <p className="leading-relaxed mb-5">{school.content}</p>
                            <p className="leading-relaxed mb-5">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex gap-4 mt-8">
                    <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90" asChild>
                        <Link href="/contact">Apply for {school.title}</Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                        <Link href="/contact">Schedule a Visit</Link>
                    </Button>
                </div>
                </article>

                {/* ================= Sidebar ================= */}
                <aside className="lg:col-span-4">
                    <h3 className="text-lg font-semibold mb-6">Other Schools</h3>

                    <div className="space-y-6">
                        {otherSchools.map((item) => (
                            <Link
                                key={item.slug}
                                href={`/schools/${item.slug}`}
                                className="flex gap-4 group"
                            >
                                <div className="relative w-24 h-20 rounded-lg overflow-hidden flex-shrink-0">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition"
                                        unoptimized
                                    />
                                </div>

                                <div>
                                    <p className="text-sm font-medium leading-snug group-hover:underline">
                                        {item.title}
                                    </p>
                                    <span className="text-xs text-muted-foreground">
                                        {item.description}
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </aside>
            </div>
        </main>
    );
}
