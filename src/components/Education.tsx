import { motion } from "framer-motion";
import { FaGraduationCap, FaSchool, FaBook, FaLaptopCode, FaServer, FaDatabase } from 'react-icons/fa';

const educationData = [
  {
    id: 1,
    degree: "BSc (Hons) in Software Engineering",
    institution: "Sri Lanka Technologycal Campus (SLTC)",
    period: "2021 - 2025",
    description: "I am a graduate student at SLTC specializing in Software Engineering. I am actively involved in university life as a member of the Faculty of Computing Student Committee(Sub Committee), and the Athletics Team. I am currently seeking internship opportunities in Frontend Development, Backend Development, Full-Stack Development, and UI/UX Design. My academic foundation, leadership roles, and extracurricular involvement have helped me develop strong technical, creative, and teamwork skills.",
    icon: <FaGraduationCap className="text-2xl text-purple-400" />,
    logo: "src/assets/SLTC Logo.jpg",
    alt: "SLTC Logo",
    courses: [
      { name: "Web Development", icon: <FaLaptopCode className="text-blue-400" /> },
      { name: "Mobile App Development", icon: <FaLaptopCode className="text-green-400" /> },
      { name: "Database Systems", icon: <FaDatabase className="text-yellow-400" /> },
      { name: "Cloud Computing", icon: <FaServer className="text-purple-400" /> },
    ],
    achievements: [
      "Member in computer society of IEEE student branch of SLTC",
      "Member of the SLTC Media Unit",
      
    ]
  },
  {
    id: 2,
    degree: "G.C.E. Advanced Level",
    institution: "Galahitiyawa Central College",
    period: "2019 - 2020",
    description: "I completed my G.C.E. Advanced Level examinations in the Technology Stream at Galahitiyawa Central College. I was also a player of the School Girls’ Cricket Team and actively participated in Innovation and Technology Days. These experiences strengthened my communication, teamwork, leadership, and sense of responsibility, while helping me build a strong foundation for my personal and professional growth.",
    icon: <FaSchool className="text-2xl text-blue-400" />,
    logo: "src/assets/School_Logo1.png",
    alt: "Galahitiyawa Central College Logo",
    achievements: [
      "Played for the School Girls’ Cricket Team, actively participating in practices and competitions.",
      "Successfully completed G.C.E. Advanced Level (Technology Stream) examinations at Galahitiyawa Central College.",
      "Actively participated in various school events, maintaining excellence in both academic and extracurricular activities."
    ]
  },
  {
    id: 3,
    degree: "G.C.E. Ordinary Level",
    institution: "Seventh Day Adventist School",
    period: "2006 - 2018",
    description: "I completed my G.C.E. Ordinary Level examinations at Seventh-day Adventist High School. I was also a player of the School Girls’ Netball Team and actively participated in the Literature Association. In addition to my academic work, I engaged in drawing, took part in zonal-level art competitions, and participated in swimming competitions. I also received First Place awards at the annual school prize-giving for Art and Tamil Language. These experiences strengthened my communication, teamwork, creativity, and sense of responsibility, helping me build a strong foundation for my personal and professional growth.",
    icon: <FaSchool className="text-2xl text-blue-400" />,
    logo: "src/assets/School_Logo2.png",
    alt: "Seventh Day Adventist School Logo",
    achievements: [
      "Played for the School Girls’ Netball Team, actively participating in practices and competitions.",
      "Participated in the Literature Association, contributing to creative and literary activities.",
      "Competed in zonal-level art competitions and showcased strong drawing skills",
      "Took part in swimming competitions at school level.",
      "Awarded First Place in Art and Tamil Language at the annual school prize-giving for multiple years.",
      "Successfully completed G.C.E. Ordinary Level examinations at Seventh-day Adventist High School.",
      "Actively participated in various school events, maintaining excellence in both academic and extracurricular activities."
      
    ]
  }
];

const EducationCard = ({ education }: { education: typeof educationData[0] }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-50px" }}
      className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-purple-500/30 transition-all duration-300 relative overflow-hidden group"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-purple-900/10 rounded-full -mr-16 -mt-16 group-hover:bg-purple-900/20 transition-colors duration-300"></div>
      
      <div className="relative z-10">
          <div className="flex items-start justify-between flex-col md:flex-row md:items-center gap-4 mb-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-gray-800 rounded-lg">
              {education.icon}
            </div>
            <div className="flex items-center gap-3">
              <img
                src={education.logo}
                alt={education.alt}
                className="w-12 h-12 object-contain rounded-md bg-white/5 p-1"
                onError={(e) => {
                  const t = e.target as HTMLImageElement;
                  t.onerror = null;
                  t.src = '/images/projects/placeholder.jpg';
                }}
              />
              <div>
                <h3 className="text-xl font-bold text-white">{education.degree}</h3>
                <p className="text-purple-400 font-medium">{education.institution}</p>
              </div>
            </div>
          </div>
          <span className="px-3 py-1 bg-purple-900/50 text-purple-300 text-sm rounded-full">
            {education.period}
          </span>
        </div>

        <p className="text-gray-300 mb-6">{education.description}</p>

        {education.courses && (
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Key Courses</h4>
            <div className="flex flex-wrap gap-2">
              {education.courses.map((course, index) => (
                <span key={index} className="flex items-center gap-2 px-3 py-1.5 bg-gray-800 text-gray-300 rounded-full text-sm">
                  {course.icon}
                  {course.name}
                </span>
              ))}
            </div>
          </div>
        )}

        {education.achievements && education.achievements.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Achievements</h4>
            <ul className="space-y-2">
              {education.achievements.map((achievement, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-purple-400 mr-2 mt-1">•</span>
                  <span className="text-gray-300">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 md:px-10 bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-2"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My academic journey and educational background in technology and computer science
          </p>
        </motion.div>

        <div className="space-y-8">
          {educationData.map((education) => (
            <EducationCard key={education.id} education={education} />
          ))}
        </div>

        {/* Additional Learning */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, margin: "-50px" }}
          className="mt-16 bg-gray-900 rounded-xl p-8 border border-gray-700"
        >
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <FaBook className="text-purple-400" />
            Additional Learning & Certifications
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Full Stack Web Development",
              "UI/UX Design Fundamentals",
              "Cloud Computing with AWS",
              "Mobile App Development with React Native",
              "Data Structures & Algorithms Masterclass",
              "DevOps & CI/CD Pipelines"
            ].map((course, index) => (
              <div key={index} className="flex items-start gap-3 group">
                <div className="p-1.5 bg-purple-500/10 rounded-full mt-1 group-hover:bg-purple-500/20 transition-colors">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors">{course}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
