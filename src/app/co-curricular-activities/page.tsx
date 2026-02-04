import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CoCurricularActivitiesPage() {
    const clubs = [
        {
            title: "Chess Club",
            description: "The primary goal of the chess club is to cultivate a vibrant community where members can enhance their chess skills, engage in friendly competition, and foster inclusivity, ultimately promoting a love for the game among individuals of all backgrounds and skill levels.",
            image: "/images/Chess.webp"
        },
        {
            title: "Bible Club",
            description: "Overall, the goal of this Bible club is to provide a nurturing and supportive environment where members can grow spiritually, deepen their understanding of the Bible, and build meaningful connections with others who share their faith. This is achieved through facilitating regular Bible study sessions where members can delve into scripture, discuss its meaning, and apply its teachings to their lives. Encouraging members to engage in acts of service and outreach to their community, reflecting the values and teachings found in the Bible. Offering resources and guest speakers to educate members on various aspects of the Bible, theology, and Christian living, promoting a deeper understanding of their faith.",
            image: "/images/Bible.webp"
        },
        {
            title: "Music Club",
            description: "Overall, the goal of the music club is to offer a supportive community to its members where they can experience growth as musicians in terms of skill and personal growth, share their love for music, and inspire each other through creativity and collaboration.",
            image: "/images/music.webp"
        },
        {
            title: "Investments / Young Entrepreneur Club",
            description: "The investment club provides a platform for members to learn about investing, collaborate on investment opportunities, and work towards building wealth and financial independence together. It empowers members to take control of their financial futures, make informed investment decisions, and achieve their long-term financial goals.",
            image: "/images/Investment.webp"
        },
        {
            title: "Digital Art & Design Club",
            description: "The art club provides a nurturing and inspiring environment where members can explore their creativity, develop their artistic skills, and build meaningful connections with fellow artists.",
            image: "/images/DigitalArts.webp"
        },
        {
            title: "Content Creators Club",
            description: "The goal of a content creators club is to empower members to unleash their creativity, develop their skills, and build a thriving community of like-minded individuals passionate about producing engaging and impactful content.",
            image: "/images/content creation.webp"
        },
        {
            title: "Gaming Club",
            description: "Goals and purpose of the Gamers Club is to be able to learn new video games and work with other students after school.",
            image: "/images/gaming.webp"
        },
        {
            title: "Film and Drama Club",
            description: "Film and Drama Club helps students to know the various scopes in these fields and use their talents to build quality products that will be an asset for society and its people. This will promote and further the appreciation of motion picture/film. Build self-confidence, imagination, creativity and communication skills among students.",
            image: "/images/film.webp"
        },
        {
            title: "Debate Club",
            description: "The debate club gives pupils of all abilities a fun way of developing their oracy skills. The primary goal of a debate is for students to generate effective critical thinking into primary issues in the given topic.",
            image: "/images/Debate.webp"
        },
        {
            title: "Stem Club",
            description: "STEM is an acronym for Science, Technology, Engineering and Math education. We focus on these areas together not only because the skills and knowledge in each discipline are essential for student success, but also because these fields are deeply intertwined in the real world.",
            image: "/images/STEM.webp"
        },
        {
            title: "Wildlife Club",
            description: "The aim of the WCG is to help young learn the knowledge, skills and attitudes they need to help conserve their wildlife and environment. The WCG aims to teach young these skills, knowledge and attitudes in the following ways:\n\n• Club members gain knowledge and awareness of the environment, environmental problems and solutions through lectures, talks, seminars, slide/film/video shows and cultural and drama performances.\n\n• Club members gain important skills such as problem solving and working together through role-play activities, playing games and implementing projects.\n\n• Club members develop good attitudes and values, interest and concern for nature and a commitment to protecting them through nature walks or hikes, bird watching, workshops, camps and field trips and being actively encouraged to enjoy and care about wildlife and the environment.",
            image: "/images/Wildlife.webp"
        },
        {
            title: "Scouts Club",
            description: "Our Scouts Club is devoted to facilitating the growth and advancement of our learners in meaningful ways, equipping them to have a beneficial effect on the school and the wider community.Through the Scouts club, we are passionate about our mission to provide our learners with the tools they need to become successful and responsible citizens.",
            image: "/images/Scouts.webp"
        }
    ];

    return (
        <div className="min-h-screen bg-background pb-20">
            {/* Hero Section */}
            <section className="bg-primary text-primary-foreground py-20 lg:py-32 relative overflow-hidden">
                <div className="container relative z-10 px-4 mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6">
                        Co-curricular Activities
                    </h1>
                    <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
                        UIS offers co-curricular activities, clubs, and sports both individual and team that are aimed at enriching our learners’ experiences. Among the clubs offered are the chess club, music club, Christian union club, Art club, content creators club and investors club.
                    </p>
                </div>
            </section>

            {/* Clubs Section */}
            <section className="container px-4 mx-auto py-20 space-y-24">
                {clubs.map((club, index) => (
                    <div key={club.title} className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
                        {/* Image - Left Side */}
                        <div className="w-full lg:w-1/2">
                            <div className="relative h-[300px] sm:h-[400px] lg:h-[450px] w-full rounded-2xl overflow-hidden shadow-xl">
                                <Image
                                    src={club.image}
                                    alt={club.title}
                                    fill
                                    className="object-cover transform hover:scale-105 transition-transform duration-700"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                            </div>
                        </div>

                        {/* Content - Right Side */}
                        <div className="w-full lg:w-1/2 space-y-6">
                            <h2 className="text-3xl font-bold font-heading text-primary border-l-4 border-secondary pl-4">
                                {club.title}
                            </h2>
                            <div className="text-muted-foreground text-lg leading-relaxed whitespace-pre-wrap">
                                {club.description}
                            </div>
                        </div>
                    </div>
                ))}
            </section>

            {/* Sports Day Section */}
            <section className="bg-muted/30 py-20">
                <div className="container px-4 mx-auto">
                    <div className="flex flex-col lg:flex-row-reverse gap-8 lg:gap-16 items-center">
                        <div className="w-full lg:w-1/2">
                            <div className="relative h-[300px] sm:h-[400px] w-full rounded-2xl overflow-hidden shadow-xl">
                                <Image
                                    src="/images/Sports (2).webp"
                                    alt="Sports Day"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 space-y-6">
                            <h2 className="text-3xl font-bold font-heading text-primary border-l-4 border-secondary pl-4">
                                Sports Day
                            </h2>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                We offer various sports every Friday during the term. We also have Family Sports Day, an event where pupils, teachers, and parents come together for a day of competitive sport and other activities. We offer medals or prizes to the winners.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Camps Section */}
            <section className="container px-4 mx-auto py-20">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
                    <div className="w-full lg:w-1/2">
                        <div className="relative h-[300px] sm:h-[400px] w-full rounded-2xl overflow-hidden shadow-xl">
                            <Image
                                src="/images/Camping.webp"
                                alt="Summer Camps"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 space-y-6">
                        <h2 className="text-3xl font-bold font-heading text-primary border-l-4 border-secondary pl-4">
                            Summer Camps
                        </h2>
                        <div className="text-muted-foreground text-lg leading-relaxed space-y-4">
                            <p>We offer camps during our summer breaks.</p>
                            <p className="font-semibold text-foreground">The goal of the camps are:</p>
                            <ul className="list-disc list-inside space-y-2 ml-2">
                                <li>Building healthy relationships</li>
                                <li>Friendship building</li>
                                <li>Survival skills training</li>
                                <li>Life skills training</li>
                                <li>Knowing places</li>
                                <li>Community service</li>
                                <li>Learning various activities</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>



        </div>
    );
}
