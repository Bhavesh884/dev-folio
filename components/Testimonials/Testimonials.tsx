import { motion } from "framer-motion";

type Testimonial = {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Senior Developer",
    company: "Ultra Creation IT Solutions",
    avatar: "/avatars/alex.jpg",
    content:
      "Working with you was an absolute pleasure. Your problem-solving skills and attention to detail helped us deliver the project ahead of schedule. The way you handled the MERN stack implementation was impressive!",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "Project Manager",
    company: "Blue Ocean Innovations",
    avatar: "/avatars/sarah.jpg",
    content:
      "Your frontend work on our React.js project was exceptional. You consistently delivered high-quality code and your communication was excellent throughout the project. Would love to work together again!",
    rating: 5,
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "CTO",
    company: "Aussie Driving School",
    avatar: "/avatars/michael.jpg",
    content:
      "The booking platform you developed exceeded our expectations. Your ability to understand complex requirements and translate them into elegant solutions is remarkable. Highly recommended!",
    rating: 4,
  },
  {
    id: 4,
    name: "Priya Patel",
    role: "Team Lead",
    company: "Codemistic",
    avatar: "/avatars/priya.jpg",
    content:
      "As a teaching assistant, you demonstrated exceptional patience and technical knowledge. Students consistently praised your ability to explain complex concepts in simple terms. You're a true asset to any team.",
    rating: 5,
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

      <div className="flex overflow-x-auto space-x-6 scrollbar-hide w-full max-w-6xl px-2 overflow-y-hidden">
        {testimonials.map((t) => (
          <motion.div
            key={t.id}
            className="bg-AAtertiary flex-shrink-0 w-[300px] md:w-[350px] rounded-xl p-6 border border-gray-700 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: t.id * 0.15 }}
            whileHover={{ scale: 1.03 }}
          >
            <div className="flex items-center space-x-4 mb-4">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-AAsecondary"
              />
              <div>
                <p className="text-gray-100 font-semibold">{t.name}</p>
                <p className="text-xs text-gray-400">
                  {t.role} @ {t.company}
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
