import { motion } from "framer-motion";

type Testimonial = {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
  linkedIn: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ishwar Jethwani",
    role: "CEO & Founder",
    company: "Ultra Creation IT Solutions",
    avatar:
      "https://media.licdn.com/dms/image/v2/D4E03AQGAaWHMTqELFw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1640536421496?e=1755129600&v=beta&t=I8ZvGfL9vNrxtB1Qym_mLyqhwExrKBLkALUcWRd-Ldg",
    content:
      "Working with you was an absolute pleasure. Your problem-solving skills and attention to detail helped us deliver the project ahead of schedule. The way you handled the MERN stack implementation was impressive!",
    rating: 5,
    linkedIn: "https://www.linkedin.com/in/ishwar-jethwani-55baab147/",
  },
  {
    id: 2,
    name: "Rishabh Sahu",
    role: "Project Manager",
    company: "CuFront HealthCare Technologies",
    avatar:
      "https://media.licdn.com/dms/image/v2/C4D03AQFWCELqUb0gfg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1660628682867?e=1755129600&v=beta&t=kOEBbgWgDIwfqXjXlJlo2Ltsg66CR-NFMqZsJNsURO4",
    content:
      "Your frontend work on our React.js project was exceptional. You consistently delivered high-quality code and your communication was excellent throughout the project. Would love to work together again!",
    rating: 5,
    linkedIn: "https://www.linkedin.com/in/rishabh-sahu-88a3021a5/",
  },

  {
    id: 3,
    name: "Gantavya Malviya",
    role: "Software Developer",
    company: "Amazon | Founder of Codemistic",
    avatar:
      "https://media.licdn.com/dms/image/v2/D5603AQErMfe0zKV8wg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1692914029628?e=1755129600&v=beta&t=-jVvKrxskA5VpZIdcPi1VjW8JPQT7Q--W6QiuFBgDbY",
    content:
      "As a teaching assistant, you demonstrated exceptional patience and technical knowledge. Students consistently praised your ability to explain complex concepts in simple terms. You're a true asset to any team.",
    rating: 5,
    linkedIn: "https://www.linkedin.com/in/gantavyamalviya/",
  },
  {
    id: 4,
    name: "Divya Shrivastava",
    role: "Django Developer",
    company: "Ultra Creation IT Solutions",
    avatar:
      "https://media.licdn.com/dms/image/v2/D4D03AQFOZ8chRtuwuQ/profile-displayphoto-shrink_400_400/B4DZXEQS7SHIAg-/0/1742754361611?e=1755129600&v=beta&t=bw3ex-cWZ29VwgJjRPPBWu_Z0n-uq6MEWBCM80d3gSw",
    content:
      "The booking platform you developed exceeded our expectations. Your ability to understand complex requirements and translate them into elegant solutions is remarkable. Highly recommended!",
    rating: 4,
    linkedIn: "https://www.linkedin.com/in/divyaa15/",
  },
  {
    id: 5,
    name: "Naman Paliwal",
    role: "React Developer",
    company: "Ultra Creation IT Solutions",
    avatar:
      "https://media.licdn.com/dms/image/v2/D4D35AQFsRew6F-yHtQ/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1730785459352?e=1750492800&v=beta&t=_SWDFm70JKtZOrMVqIO3qqZzCyW7hcUbSPFtlTUs3zw", // Replace with actual LinkedIn image
    content:
      "Collaborating with you on React projects was a great learning experience. Your clean code practices and component architecture knowledge helped me improve as a developer. Your debugging skills are top-notch!",
    rating: 5,
    linkedIn: "https://www.linkedin.com/in/namanpaliwal/", // Add actual LinkedIn URL
  },
  {
    id: 6,
    name: "Harshita Paliwal",
    role: "Full Stack Developer",
    company: "Ultra Creation IT Solutions",
    avatar:
      "https://media.licdn.com/dms/image/v2/D5603AQEV23j_U8yWTA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1713250320217?e=1755129600&v=beta&t=AFDS9wqa-R5-AHOq-Zj2XZNJXcfS45vXJHsseEwV3ig", // Replace with actual LinkedIn image
    content:
      "Your backend expertise combined with your frontend skills made you an invaluable team member. I particularly admired how you optimized our database queries, improving performance by 40%.",
    rating: 5,
    linkedIn: "https://www.linkedin.com/in/harshita-paliwal-405959210/", // Add actual LinkedIn URL
  },
  {
    id: 7,
    name: "Ashi Pandey",
    role: "Graphics Designer",
    company: "CuFront HealthCare Technologies",
    avatar:
      "https://media.licdn.com/dms/image/v2/D4D03AQH2RkLf6qAa-w/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1715974318577?e=1755129600&v=beta&t=nweI9i9Kr1g80gOUnCib0mX84kYQ7erlW4a8vD6XFBw", // Replace with actual LinkedIn image
    content:
      "Working together on UI designs was seamless. You understood design requirements quickly and implemented them perfectly. Your attention to detail in translating designs to code was impressive.",
    rating: 5,
    linkedIn: "https://www.linkedin.com/in/ashi-pandey/", // Add actual LinkedIn URL
  },
  {
    id: 8,
    name: "Anjali Paderiya",
    role: "Next.js Developer",
    company: "CuFront HealthCare Technologies",
    avatar:
      "https://media.licdn.com/dms/image/v2/D4D03AQFEN7txQiT2bw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718700558453?e=1755129600&v=beta&t=Adg7I1p34xYqKkZDxP4MmE_hJpqqpla_MRzafnC2VCc", // Replace with actual LinkedIn image
    content:
      "Your Next.js expertise helped us build a performant, SEO-friendly application. Your knowledge of server-side rendering and static generation saved us countless hours of development time.",
    rating: 5,
    linkedIn: "https://www.linkedin.com/in/anjali-paderiya-9ab4a5224/", // Add actual LinkedIn URL
  },
  {
    id: 9,
    name: "Lavina Shahani",
    role: "Graphic Designer",
    company: "Ultra Creation IT Solutions",
    avatar:
      "https://media.licdn.com/dms/image/v2/D5635AQHL6CD3jv-xig/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1697382098669?e=1750492800&v=beta&t=HHO-rL-kp_VtXZHvrCxmoJ946Fu4ly8uq-v7LHtrdXA", // Replace with actual LinkedIn image URL
    content:
      "Your eye for detail and design consistency elevated our brand identity. The way you translated ideas into visually striking designs was crucial for our marketing campaigns and user experience.",
    rating: 5,
    linkedIn: "https://www.linkedin.com/in/lavina-shahani-aa4660264/", // Replace with actual LinkedIn URL
  },
];

export default function Testimonials() {
  return (
    <div
      id="testimonials"
      className="bg-AAprimary py-20 w-full max-w-6xl mx-auto pb-12 px-4 md:px-8 lg:px-0 flex flex-col items-center "
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-AAsecondary mb-12 text-center "
      >
        What My Teammates Say
      </motion.h2>

      <div className="flex overflow-x-auto space-x-6 scrollbar-hide w-full max-w-6xl px-2 overflow-y-hidden pb-4">
        {testimonials.map((t) => (
          <motion.div
            key={t.id}
            className="bg-AAtertiary flex-shrink-0 w-[300px] md:w-[350px] rounded-xl p-6 border border-gray-700 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: t.id * 0.1 }}
            whileHover={{ scale: 1.03 }}
          >
            <div className="flex items-center space-x-4 mb-4">
              <a href={t.linkedIn} target="_blank" rel="noopener noreferrer">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-AAsecondary hover:border-blue-500 transition-colors"
                />
              </a>
              <div>
                <p className="text-gray-100 font-semibold hover:text-AAsecondary transition-colors">
                  <a
                    href={t.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t.name}
                  </a>
                </p>
                <p className="text-xs">
                  <span className="text-gray-400">{t.role}</span>{" "}
                  <span className="text-gray-500">@</span>{" "}
                  <span className="text-AAsecondary">{t.company}</span>
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              “{t.content}”
            </p>

            <div className="flex mt-4">
              {Array.from({ length: t.rating }).map((_, i) => (
                <span key={i} className="text-yellow-400 text-sm">
                  ★
                </span>
              ))}
              {Array.from({ length: 5 - t.rating }).map((_, i) => (
                <span key={i} className="text-gray-600 text-sm">
                  ★
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
