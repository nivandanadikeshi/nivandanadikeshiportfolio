import { motion } from "framer-motion";
import { FaAward, FaExternalLinkAlt } from "react-icons/fa";
import { SiPython, SiAngular, SiTensorflow, SiJavascript } from "react-icons/si";

const certificates = [
  {
    id: 1,
    title: "Web and Programming Foundation",
    issuer: "STEMLink",
    date: "Issued Oct 2025",
    credentialId: "cmgmevpso0001wcmqmzjmsoo1",
    credentialUrl: "https://drive.google.com/file/d/1poCFMCcbw8hU9eY1haaSkKo32VkV-XEj/view?usp=drive_link",
    skills: ["Programming Essentials", "Python Programming Fundamentals", "Data Structures and Object-Oriented Programming", "HTML & CSS Fundamentals", "Web Development Basics", "Advanced Styling with Tailwind CSS", "JavaScript Basics", "Introduction to AI and Integrations", "Responsive Web Design", "AI-Powered Chatbot Development", "Version Control Basics"],
    description: "I successfully completed the Web and Programming Foundations Professional Certification Program, gaining strong foundational knowledge in programming and web development. The course covered Python programming, data structures, object-oriented programming, HTML, CSS, JavaScript, and Tailwind CSS. As part of the program, I built responsive web pages and developed an AI-powered chatbot as a capstone project, strengthening my problem-solving, coding, and full-stack development skills."
  },
  {
    id: 2,
    title: "Fundamental Cloud & DevOps Training Program",
    issuer: "Exlearn Technologies",
    date: "Issued Dec 2025",
    credentialId: "a4fd07b1-4c91-49ee-95f3-14e36752fae7",
    credentialUrl: "https://drive.google.com/file/d/1lFi-R01ble75zKgQUqJN-1ET0NQGcFc2/view?usp=drive_link",
    skills: ["Linux Networking", "Cloud DevOps Fundamentals", "Cloud Computing Basics", "DevOps Concepts", "Linux System Administration", "Networking Fundamentals", "Deployment & Automation Basics"],
    description: "Completed the Fundamental Cloud and DevOps Training Program, gaining knowledge in Linux networking, cloud computing fundamentals, and DevOps concepts. This program strengthened my understanding of system administration, cloud environments, and basic deployment and automation practices."
  },
  {
    id: 3,
    title: "Python for Beginners",
    issuer: "University of Moratuwa - Open learning Platform",
    date: "Issued Dec 2024",
    credentialId: "YZvKj0Gkkz",
    credentialUrl: "https://drive.google.com/file/d/1A6l5IyMkRxa1HQlPnVpBsCtF64lweF-x/view?usp=drive_link",
    skills: ["Python Programming Fundamentals", "Control Flow & Logic Building", "Functions & Modular Programming", "Data Structures","Problem Solving & Debugging","Hands-On Coding & Projects"],
    description: "I completed a beginner-friendly Python programming course designed to introduce the fundamentals of software development. The program condensed essential concepts into an engaging 20-hour curriculum with lecture videos, notes, slides, quizzes, and hands-on coding exercises. It provided a strong foundation in Python syntax, logic building, and real-world problem solving, helping me understand how software applications are created and maintained."
  },  
  {
    id: 4,
    title: "Python Programming",
    issuer: "University of Moratuwa - Open learning Platform",
    date: "Issued Nov 2025",
    credentialId: "MQKdHFnNRx",
    credentialUrl: "https://drive.google.com/file/d/1V6DOLzj0HfLIP_TxPBCVqRWyGyc8I8XE/view?usp=drive_link",
    skills: ["Python Data Structures", "Object-Oriented Programming (OOP)", "Data Handling", "Networking Concepts", "Machine Learning Basics", "Version Control", "Hands-On Coding Exercises"],
    description: "I completed a comprehensive Python programming course designed to strengthen programming fundamentals and introduce advanced concepts in software development and data handling. The course included structured lessons, lecture videos, notes, quizzes, and hands-on coding exercises. It provided a strong foundation in Python programming, object-oriented concepts, working with data, and an introduction to machine learning and networking, helping me build practical programming and problem-solving skills."
  },
    {
    id: 5,
    title: "Web Design for Beginners",
    issuer: "University of Moratuwa - Open learning Platform",
    date: "Issued Nov 2025",
    credentialId: "f8iNqFgfhT",
    credentialUrl: "https://drive.google.com/file/d/1u8v_LVw0BqjtPECYtrOpLRmeUIYHLAnT/view?usp=drive_link",
    skills: ["HTML Foundations", "CSS Styling & Layouts", "JavaScript Basics", "Responsive Design", " Understanding WWW & Internet Basics", "UI/UX Awareness"],
    description: "I completed a self-paced online course that covers the fundamental concepts of modern web design. The course introduced the core building blocks of the web, including HTML, CSS, and JavaScript, while also covering responsive design techniques and the structure of the Internet and the World Wide Web. Through practical lessons and hands-on exercises, I learned how to design user-friendly, interactive, and mobile-responsive websites. This course strengthened my foundational web design skills and prepared me for more advanced front-end development."
  },
  {
    id: 6,
    title: "Front-End Web Development & Angular Framework",
    issuer: "University of Moratuwa - Open learning Platform",
    date: "Issued Nov 2025",
    credentialId: "dgqUjQpdNS",
    credentialUrl: "https://drive.google.com/file/d/18a5TExTuPN7vjTQX_65xlk-JaUnkK7ZI/view?usp=drive_link",
    skills: ["Front-End Web Development Basics", "jQuery & DOM Manipulation","AJAX & API Communication", "Single Page Applications (SPA)", "Angular Framework Fundamentals", "Hands-On Coding & Problem Solving"],
    description: "I successfully completed a front-end development certification focused on the fundamentals of modern web development and the Angular framework. The course covered essential front-end concepts including jQuery, AJAX, and Single Page Applications (SPA). It also included hands-on Angular development, interactive coding playgrounds, quizzes, and structured learning modules. This certification strengthened my foundation in web technologies and equipped me with practical skills needed to build responsive and dynamic web applications."
  },
  {
    id: 7,
    title: "Introduction to Design Thinking",
    issuer: "Grate Learning Academy",
    date: "Issued Nov 2022",
    credentialId: "LXNPLDKM",
    credentialUrl: "https://drive.google.com/file/d/1juF_YPefxZiUa74rc03l15cCxzsX3aqJ/view?usp=drive_link",
    skills: ["Design Thinking Principles & Process", "User Empathy & Human-Centered Design", "Problem Definition & Requirement Analysis", "Ideation Techniques & Creative Problem Solving", "Prototyping & Interactive Workflows", "Usability Testing", "Case Study Analysis", "Non-Linear Product Design Approach"],
    description: "I completed a Design Thinking course that introduced a human-centered, non-linear approach to problem solving and innovation. The course explored real-world case studies such as Airbnb and Uber Eats, highlighting how design thinking is applied in business and product development. I learned the complete Design Thinking process, including empathizing with users, defining problems, ideating solutions, prototyping, and conducting usability testing. Through structured videos and practical workflows, I gained the ability to create innovative, user-focused solutions and improve product design strategies."
  },
  {
    id: 8,
    title: "UI/UX for Beginners",
    issuer: "Grate Learning Academy",
    date: "Issued Oct 2025",
    credentialId: "FCWEXUOS",
    credentialUrl: "https://drive.google.com/file/d/1pBDO8-BWoY1Ylc-vV_dNFu9LF2i9wn8T/view?usp=drive_link",
    skills: ["UI/UX Design Principles, ", "User Research & Usability Testing Methods", "Creating Wireframes and Prototypes", "Design Thinking in Problem Solving", "Knowledge of Design Tools", "Figma", "Adobe XD"],
    description: "I completed a comprehensive UI/UX Design course focused on understanding user-centered design principles and creating intuitive digital experiences. The course covered both User Interface (UI) and User Experience (UX) fundamentals, emphasizing design thinking, usability testing, and practical design workflows. Through hands-on exercises, I gained experience in creating wireframes and prototypes using industry-standard tools, and learned how to translate user needs into effective design solutions."
  },
  {
    id: 9,
    title: "Fundamentals of Quality Assurance",
    issuer: "Alison",
    date: "Issued Jul 2024",
    credentialId: "6032-40728722",
    credentialUrl: "https://drive.google.com/file/d/1wJafuYhN4clLA3n1-wBl9cCap0Whn5Ir/view?usp=drive_link",
    skills: ["Quality Assurance Fundamentals", "Software Testing Basics", "QA Processes & Methodologies", "Defect Identification & Reporting", "Test Planning and Documentation", "Quality Control Principles"],
    description: "I successfully completed the Fundamentals of Quality Assurance course offered by Alison, gaining a solid understanding of QA principles, software testing fundamentals, and quality control processes. This course strengthened my knowledge of testing methodologies, defect tracking, and maintaining quality standards throughout the software development lifecycle."
  },
  {
    id: 10,
    title: "Laravel Framework for Beginners",
    issuer: "Alison",
    date: "Issued Nov 2024",
    credentialId: "6620-40728722",
    credentialUrl: "https://drive.google.com/file/d/17BBvylDSc98nI-NEB9XQmGNT8lgZ2T3e/view?usp=drive_link",
    skills: ["Laravel Framework Basics", "MVC Architecture", "Routing and Controllers", "Blade Templating Engine", "Database Migrations", "CRUD Operations", "Web Application Development with PHP"],
    description: "I successfully completed the Laravel Framework for Beginners course offered by Alison, gaining a foundational understanding of Laravel and its MVC architecture. This course enhanced my skills in routing, controllers, Blade templating, and database operations, enabling me to build structured and dynamic web applications using PHP and Laravel."
  },
  {
    id: 11,
    title: "Laravel Advanced Topics",
    issuer: "Alison",
    date: "Issued Dec 2024",
    credentialId: "7039-44482323",
    credentialUrl: "https://drive.google.com/file/d/11CYomTFzV-4j10mbiJoN7xb8zl72IQaN/view?usp=drive_link",
    skills: ["Advanced Laravel Concepts", "Authentication and Authorization", "Middleware Implementation", "RESTful API Development", "Eloquent ORM Advanced Usage", "Database Relationships", "Application Security Best Practices", "Performance Optimization in Laravel"],
    description: "I successfully completed the Laravel Advanced Topics course offered by Alison, gaining in-depth knowledge of advanced Laravel features and best practices. This course strengthened my skills in authentication, middleware, API development, database relationships, and performance optimization, enabling me to build secure, scalable, and high-performing Laravel applications."
  },
];

// Certificate icon mapping
const getCertificateIcon = (title: string) => {
  if (title.toLowerCase().includes('python')) return <SiPython className="text-3xl text-blue-400" />;
  if (title.toLowerCase().includes('angular')) return <SiAngular className="text-3xl text-red-500" />;
  if (title.toLowerCase().includes('tensorflow') || title.toLowerCase().includes('pytorch')) 
    return <SiTensorflow className="text-3xl text-orange-500" />;
  if (title.toLowerCase().includes('javascript')) return <SiJavascript className="text-3xl text-yellow-400" />;
  return <FaAward className="text-2xl text-purple-400" />;
};

export default function Certificates() {

  return (
    <section id="certificates" className="relative py-24 px-6 md:px-10 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-medium text-blue-300 mb-4 tracking-wider">VALIDATION OF EXPERTISE</span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 mb-6">
            Certifications & Credentials
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 max-w-2xl mx-auto mt-6">
            Professional certifications and credentials that validate my expertise and commitment to continuous learning
          </p>
        </motion.div>

        <div className="space-y-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Animated Background */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-75 blur-lg transition duration-300"></div>
              
              <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300">
                <div className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className={`flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-300 bg-gradient-to-br from-blue-500 to-purple-500`}>
                      {getCertificateIcon(cert.title)}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                        <div>
                          <h3 className="text-xl font-bold text-white">{cert.title}</h3>
                          <div className="flex flex-wrap items-center gap-2 mt-1 text-sm">
                            <span className="text-blue-300 font-medium">{cert.issuer}</span>
                            <span className="text-gray-500">•</span>
                            <span className="text-gray-400">{cert.date}</span>
                            <span className="text-gray-500">•</span>
                            <span className="text-gray-400 text-xs">ID: {cert.credentialId}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <a
                            href={cert.credentialUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 rounded-lg border border-blue-500/30 transition-colors group/button"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <span>View Credential</span>
                            <FaExternalLinkAlt className="text-xs group-hover/button:translate-x-0.5 transition-transform" />
                          </a>
                        </div>
                      </div>
                      
                      <div className="pt-4">
                        <p className="text-gray-300 text-sm mb-4">{cert.description}</p>
                        
                        <div className="mt-4">
                          <h4 className="text-sm font-medium text-gray-300 mb-3 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                            Skills Covered:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {cert.skills.map((skill, i) => (
                              <motion.span
                                key={i}
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.05 * i }}
                                className="inline-block px-3 py-1.5 text-xs font-medium bg-blue-500/10 text-blue-300 rounded-full border border-blue-500/20 hover:bg-blue-500/20 transition-colors"
                              >
                                {skill}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Animated Border Bottom */}
                <div className="h-1 bg-gradient-to-r from-blue-500/0 via-blue-500 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 mb-6">Interested in verifying my credentials or learning more?</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
            >
              <span>Request Transcripts</span>
              <FaExternalLinkAlt className="text-xs" />
            </a>
            <a
              href="https://www.linkedin.com/in/nivandana-dikeshi/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-700 text-white rounded-lg font-medium hover:bg-gray-600 transition-colors"
            >
              <span>View on LinkedIn</span>
              <FaExternalLinkAlt className="text-xs" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}