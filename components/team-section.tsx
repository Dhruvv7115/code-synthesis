"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Crown,
  GraduationCap,
  UserCheck,
  Users,
  Megaphone,
  Wrench,
  Palette,
  Calendar,
  FolderOpen,
  Camera,
  FileText,
  Video,
  User,
} from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

interface SocialLink {
  platform: "github" | "linkedin" | "instagram";
  url: string;
}

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  socials: SocialLink[];
}

interface TeamSectionProps {
  isDarkMode: boolean;
  cardClasses: string;
  accentColor: string;
}

export default function TeamSection({
  isDarkMode,
  cardClasses,
  accentColor,
}: TeamSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const teamCategories = [
    {
      name: "LEADERSHIP",
      icon: <Crown className="w-6 h-6" />,
      color: "from-yellow-400 to-orange-500",
      bgColor: "from-yellow-500/20 to-orange-500/20",
      members: [
        {
          name: "S. BHUPINDER SINGH GINNY",
          role: "Manager",
          image: "/team/manager.png",
          bio: "Leading organizational excellence and strategic vision",
          socials: [],
        },
        {
          name: "S. HARJEET SINGH PAPPA",
          role: "Chairman",
          image: "/team/chairman.png",
          bio: "Providing strategic direction and leadership",
          socials: [],
        },
        {
          name: "S. GURMEET SINGH BALI",
          role: "Officiating Director",
          image: "/team/Gurmeet.png",
          bio: "Overseeing institutional operations and growth",
          socials: [],
        },
      ],
    },
    {
      name: "FACULTY",
      icon: <GraduationCap className="w-6 h-6" />,
      color: "from-blue-400 to-cyan-500",
      bgColor: "from-blue-500/20 to-cyan-500/20",
      members: [
        {
          name: "PARDEEP SINGH",
          role: "Society Head",
          image: "/team/pradeep.jpg",
          bio: "Leading academic initiatives and student development",
          socials: [
            { platform: "linkedin", url: "" },
            { platform: "github", url: "" },
            { platform: "instagram", url: "" },
          ],
        },
        {
          name: "TARUNA GULATI",
          role: "Faculty Member",
          image: "/team/taruna.jpg",
          bio: "Academic guidance and mentorship",
          socials: [
            { platform: "linkedin", url: "" },
            { platform: "github", url: "" },
            { platform: "instagram", url: "" },
          ],
        },
        {
          name: "SARITA YADAV",
          role: "Faculty Member",
          image: "/team/sarita.jpg",
          bio: "Educational support and development",
          socials: [
            { platform: "linkedin", url: "" },
            { platform: "github", url: "" },
            { platform: "instagram", url: "" },
          ],
        },
        {
          name: "BALWINDER KAUR",
          role: "Faculty Member",
          image: "/team/balwinder.jpg",
          bio: "Academic excellence and student guidance",
          socials: [
            { platform: "linkedin", url: "" },
            { platform: "github", url: "" },
            { platform: "instagram", url: "" },
          ],
        },
        {
          name: "APURVA VASHIST",
          role: "Faculty Member",
          image: "/team/Apoorva.jpg",
          bio: "Technical education and innovation",
          socials: [
            { platform: "linkedin", url: "" },
            { platform: "github", url: "" },
            { platform: "instagram", url: "" },
          ],
        },
        {
          name: "MANPREET KAUR",
          role: "Faculty Member",
          image: "/team/manpreet.jpg",
          bio: "Student development and academic support",
          socials: [
            { platform: "linkedin", url: "" },
            { platform: "github", url: "" },
            { platform: "instagram", url: "" },
          ],
        },
      ],
    },
    {
      name: "LEAD ORGANISERS",
      icon: <UserCheck className="w-6 h-6" />,
      color: "from-green-400 to-emerald-500",
      bgColor: "from-green-500/20 to-emerald-500/20",
      members: [
        {
          name: "KANISHQ VERMA",
          role: "Co-Organiser",
          image: "/team/kanishq-verma.png",
          bio: "Supporting organizational activities",
          socials: [
            {
              platform: "linkedin",
              url: "https://www.linkedin.com/in/kanishq-verma-6a0b6827a/",
            },
            { platform: "github", url: "https://github.com/KanishqVerma" },
            {
              platform: "instagram",
              url: "https://www.instagram.com/__weird.kanishq__",
            },
          ],
        },
        {
          name: "ASHISH KUMAR",
          role: "Co-Organiser",
          image: "/team/ashish-kumar.jpg",
          bio: "Coordinating with partners and stakeholders",
          socials: [
            { platform: "linkedin", url: "" },
            { platform: "github", url: "" },
            { platform: "instagram", url: "" },
          ],
        },
      ],
    },
    {
      name: "CO-ORGANISERS",
      icon: <Users className="w-6 h-6" />,
      color: "from-purple-400 to-pink-500",
      bgColor: "from-purple-500/20 to-pink-500/20",
      members: [
        {
          name: "LEISHA CHOUDHARY",
          role: "Co-Organiser",
          image: "/team/leisha-choudhary.jpg",
          bio: "Supporting event coordination and management",
          socials: [
            {
              platform: "linkedin",
              url: "https://www.linkedin.com/in/imskumarj",
            },
            { platform: "github", url: "https://github.com/imskumarj" },
            { platform: "instagram", url: "https://instagram.com/imskumarj" },
          ],
        },
        {
          name: "NAMAN GAMBHIR",
          role: "PR & Marketing Lead",
          image: "/team/naman-image.jpg",
          bio: "Leading marketing campaigns and outreach",
          socials: [
            {
              platform: "linkedin",
              url: "https://www.linkedin.com/in/naman-gambhir-1ab1a3345",
            },
            {
              platform: "instagram",
              url: "https://www.instagram.com/naman_gambhir.07/",
            },
          ],
        },
      ],
    },
    {
      name: "THE CATALYSTS",
      icon: <Users className="w-6 h-6" />,
      color: "from-purple-400 to-pink-500",
      bgColor: "from-purple-500/20 to-pink-500/20",
      members: [
        {
          name: "AKSHIT SHARMA",
          role: "Core Member",
          image: "/team/akshit-sharma.jpg",
          bio: "Managing project timelines and deliverables",
          socials: [
            {
              platform: "linkedin",
              url: "https://www.linkedin.com/in/akshit-sharma-261626245",
            },
            { platform: "github", url: "https://github.com/akshit014" },
            {
              platform: "instagram",
              url: "https://www.instagram.com/akshit.014",
            },
          ],
        },
        {
          name: "DHRUV OBEROI",
          role: "Core Member",
          image: "/team/dhruv-oberoi.jpeg",
          bio: "Assisting in event planning and execution",
          socials: [
            {
              platform: "linkedin",
              url: "https://www.linkedin.com/in/kashvi15",
            },
            { platform: "github", url: "https://github.com/Kashvi009" },
            {
              platform: "instagram",
              url: "",
            },
          ],
        },
      ],
    },
    {
      name: "DESIGN TEAM",
      icon: <Palette className="w-6 h-6" />,
      color: "from-teal-400 to-green-500",
      bgColor: "from-teal-500/20 to-green-500/20",
      members: [
        {
          name: "MUSKAN SINGH",
          role: "Design Lead",
          image: "/team/muskan-singh.jpg",
          bio: "UI/UX design and creative development",
          socials: [
            {
              platform: "linkedin",
              url: "https://www.linkedin.com/in/muskan-s-b75808235",
            },
            {
              platform: "instagram",
              url: "https://www.instagram.com/muskan._.s2",
            },
          ],
        },
        {
          name: "ARCHANA GUPTA",
          role: "Design Co-Lead",
          image: "/team/Archana-gupta.jpg",
          bio: "Creative design and visual communication",
          socials: [
            {
              platform: "linkedin",
              url: "https://www.linkedin.com/in/archana-gupta2006",
            },
            { platform: "github", url: "https://github.com/Archana15-codes" },
            {
              platform: "instagram",
              url: "https://www.instagram.com/archanaaa_15",
            },
          ],
        },
        {
          name: "HARSH YADAV",
          role: "Design Team",
          image: "/team/harsh-yadav.jpg",
          bio: "Creative design and visual storytelling",
          socials: [
            {
              platform: "linkedin",
              url: "https://www.linkedin.com/in/harsh-yadav-5b92b62b1",
            },
            {
              platform: "instagram",
              url: "https://www.instagram.com/harsh.__.yadavv",
            },
          ],
        },
        {
          name: "SAKSHAM DIDI",
          role: "Design Team",
          image: "/team/saksham.png",
          bio: "Creative design and visual storytelling",
          socials: [
            {
              platform: "linkedin",
              url: "",
            },
            {
              platform: "instagram",
              url: "",
            },
          ],
        },
        {
          name: "BHAWESH THAWANI",
          role: "Design Team",
          image: "/team/bhawesh-thawani.jpg",
          bio: "Visual design and creative solutions",
          socials: [
            {
              platform: "linkedin",
              url: "",
            },
            {
              platform: "instagram",
              url: "",
            },
          ],
        },
        {
          name: "SATVIK PRUTHI",
          role: "Design Team",
          image: "placeholder.svg?height=200&width=200",
          bio: "Visual design and creative solutions",
          socials: [
            {
              platform: "linkedin",
              url: "",
            },
            {
              platform: "instagram",
              url: "",
            },
          ],
        },
        {
          name: "NITIKA RATHEE",
          role: "Design Team",
          image: "placeholder.svg?height=200&width=200",
          bio: "Visual design and creative solutions",
          socials: [
            {
              platform: "linkedin",
              url: "",
            },
            {
              platform: "instagram",
              url: "",
            },
          ],
        },
      ],
    },
    {
      name: "SOCIAL MEDIA TEAM",
      icon: <Megaphone className="w-6 h-6" />,
      color: "from-pink-400 to-red-500",
      bgColor: "from-pink-500/20 to-red-500/20",
      members: [
        {
          name: "AMAN GOEL",
          role: "Social Media Lead",
          image: "/team/aman-goel.jpg",
          bio: "Event planning and execution support",
          socials: [
            {
              platform: "linkedin",
              url: "https://www.linkedin.com/in/aman-goel-56264727b/",
            },
            { platform: "github", url: "https://github.com/Amangoel22" },
          ],
        },
        {
          name: "AYUSHI DUBEY",
          role: "Social Media Member",
          image: "placeholder.svg?height=200&width=200",
          bio: "Managing public relations and communications",
          socials: [
            {
              platform: "linkedin",
              url: "",
            },
            {
              platform: "instagram",
              url: "",
            },
          ],
        },
      ],
    },
    {
      name: "CONTENT TEAM",
      icon: <FileText className="w-6 h-6" />,
      color: "from-rose-400 to-pink-500",
      bgColor: "from-rose-500/20 to-pink-500/20",
      members: [
        {
          name: "TANNISHTHA SACHDEVA",
          role: "Content Lead",
          image: "/team/tannishtha-sachdeva.jpg",
          bio: "Writing compelling copy and content",
          socials: [
            {
              platform: "linkedin",
              url: "https://www.linkedin.com/in/tannishtha-sachdeva-6a089a2ba",
            },
            { platform: "github", url: "https://github.com/Tan-3006" },
            {
              platform: "instagram",
              url: "https://www.instagram.com/tannishtha.sachdeva",
            },
          ],
        },
        {
          name: "SHRIYA BHAMBRI",
          role: "Content Co-Lead",
          image: "/team/shriya-bhambri.jpg",
          bio: "Content creation and storytelling",
          socials: [
            {
              platform: "linkedin",
              url: "https://www.linkedin.com/in/shriya-bhambri-663a65337/",
            },
            { platform: "github", url: "https://github.com/shriya-bhambri" },
            {
              platform: "instagram",
              url: "https://www.instagram.com/shriyaa_.06",
            },
          ],
        },
        {
          name: "MUSTAFA QADEER",
          role: "Content Member",
          image: "placeholder.svg?height=200&width=200",
          bio: "Content creation and storytelling",
          socials: [
            {
              platform: "linkedin",
              url: "",
            },
            { platform: "github", url: "" },
            {
              platform: "instagram",
              url: "",
            },
          ],
        },
        {
          name: "DEEPTI GUPTA",
          role: "Content Member",
          image: "/team/deepti-gupta.jpg",
          bio: "Content creation and storytelling",
          socials: [
            {
              platform: "linkedin",
              url: "",
            },
            { platform: "github", url: "" },
            {
              platform: "instagram",
              url: "",
            },
          ],
        },
      ],
    },
    {
      name: "PHOTOGRAPHY TEAM",
      icon: <Camera className="w-6 h-6" />,
      color: "from-lime-400 to-green-500",
      bgColor: "from-lime-500/20 to-green-500/20",
      members: [
        {
          name: "ISHAAN KAMRA",
          role: "Photography Lead",
          image: "/team/ishan-kamra.jpg",
          bio: "Capturing visual stories and moments",
          socials: [
            {
              platform: "linkedin",
              url: "https://www.linkedin.com/in/palak-bedi/",
            },
            { platform: "github", url: "https://github.com/palakbedii" },
            {
              platform: "instagram",
              url: "https://www.instagram.com/palakbedii",
            },
          ],
        },
        {
          name: "KASHISH ARORA",
          role: "Photography Member",
          image: "/team/kashish-arora.jpg",
          bio: "Event photography and documentation",
          socials: [
            {
              platform: "linkedin",
              url: "https://www.linkedin.com/in/kashish-arora-4b0782328",
            },
            {
              platform: "instagram",
              url: "https://www.instagram.com/kashisharora_006",
            },
          ],
        },
        {
          name: "SHUBHAM RANJAN",
          role: "Photography Member",
          image: "placeholder.svg?height=200&width=200",
          bio: "Creating and editing video content",
          socials: [
            {
              platform: "linkedin",
              url: "",
            },
            { platform: "github", url: "" },
            {
              platform: "instagram",
              url: "",
            },
          ],
        },
        {
          name: "GEET GULATI",
          role: "Photography Team Lead",
          image: "placeholder.svg?height=200&width=200",
          bio: "Capturing visual stories and moments",
          socials: [
            {
              platform: "linkedin",
              url: "https://www.linkedin.com/in/palak-bedi/",
            },
            { platform: "github", url: "https://github.com/palakbedii" },
            {
              platform: "instagram",
              url: "https://www.instagram.com/palakbedii",
            },
          ],
        },
      ],
    },
    {
      name: "MARKETING TEAM",
      icon: <FolderOpen className="w-6 h-6" />,
      color: "from-cyan-400 to-blue-500",
      bgColor: "from-cyan-500/20 to-blue-500/20",
      members: [
        {
          name: "KHUSHI VERMA",
          role: "Marketing Lead",
          image: "/team/Khushi-verma.jpg",
          bio: "Coordinating project activities and teams",
          socials: [
            {
              platform: "linkedin",
              url: "https://www.linkedin.com/in/khushi-verma-a25911280",
            },
            { platform: "github", url: "https://github.com/Khushiv0707" },
            {
              platform: "instagram",
              url: "https://www.instagram.com/_khusheyyy/",
            },
          ],
        },
        {
          name: "PRARTHNA PUNPHER",
          role: "Marketing Member",
          image: "/team/prarthna-punpher.jpg",
          bio: "Project management and team coordination",
          socials: [
            {
              platform: "linkedin",
              url: "",
            },
            {
              platform: "instagram",
              url: "",
            },
          ],
        },
        {
          name: "KRISH KAPOOR",
          role: "Marketing Member",
          image: "placeholder.svg?height=200&width=200",
          bio: "Project management and team coordination",
          socials: [
            {
              platform: "linkedin",
              url: "",
            },
            {
              platform: "instagram",
              url: "",
            },
          ],
        },
        {
          name: "AYUSH MEHRA",
          role: "Marketing Member",
          image: "placeholder.svg?height=200&width=200",
          bio: "Project management and team coordination",
          socials: [
            {
              platform: "linkedin",
              url: "",
            },
            {
              platform: "instagram",
              url: "",
            },
          ],
        },
      ],
    },
    {
      name: "VIDEOGRAPHY TEAM",
      icon: <Video className="w-6 h-6" />,
      color: "from-violet-400 to-purple-500",
      bgColor: "from-violet-500/20 to-purple-500/20",
      members: [
        {
          name: "RITURAJ",
          role: "Videography Lead",
          image: "/team/rituraj.jpg",
          bio: "Leading social media strategy and engagement",
          socials: [
            {
              platform: "linkedin",
              url: "",
            },
            { platform: "github", url: "" },
            {
              platform: "instagram",
              url: "",
            },
          ],
        },
        {
          name: "HARSH SINGHAL",
          role: "Social Media Management",
          image: "/team/Harshsingal.jpg",
          bio: "Social media content and community management",
          socials: [
            {
              platform: "linkedin",
              url: "https://www.linkedin.com/in/harsh-singhal-oo7/",
            },
            { platform: "github", url: "https://github.com/Harsh0007-max" },
            {
              platform: "instagram",
              url: "https://www.instagram.com/harshsinghal2007",
            },
          ],
        },
      ],
    },
    {
      name: "EVENT MANAGEMENT",
      icon: <Calendar className="w-6 h-6" />,
      color: "from-orange-400 to-yellow-500",
      bgColor: "from-orange-500/20 to-yellow-500/20",
      members: [
        {
          name: "ADARSH KUMAR",
          role: "Event Management Lead",
          image: "/team/adarsh.jpg",
          bio: "Coordinating event logistics and operations",
          socials: [
            {
              platform: "linkedin",
              url: "https://www.linkedin.com/in/leisha-choudhary-22b89a325",
            },
            { platform: "github", url: "https://github.com/L-eisha" },
          ],
        },
        {
          name: "RIYA NAGPAL",
          role: "Event Management Co-Lead",
          image: "/team/riya-nagpal.jpg",
          bio: "Managing venue arrangements and coordination",
          socials: [
            {
              platform: "linkedin",
              url: "",
            },
            {
              platform: "instagram",
              url: "",
            },
          ],
        },
        {
          name: "ARCHITI DADHWAL",
          role: "Event Management Member",
          image: "/team/architi-dadhwal.png",
          bio: "Managing venue arrangements and coordination",
          socials: [
            {
              platform: "linkedin",
              url: "https://www.linkedin.com/in/architi-dadhwal/",
            },
            {
              platform: "instagram",
              url: "",
            },
          ],
        },
        {
          name: "PANKAJ",
          role: "Event Management Member",
          image: "placeholder.svg?height=200&width=200",
          bio: "Event coordination and logistics",
          socials: [
            {
              platform: "linkedin",
              url: "",
            },
            {
              platform: "instagram",
              url: "",
            },
          ],
        },
        {
          name: "ARJUN",
          role: "Event Management Member",
          image: "placeholder.svg?height=200&width=200",
          bio: "Event coordination and logistics",
          socials: [
            {
              platform: "linkedin",
              url: "",
            },
            {
              platform: "instagram",
              url: "",
            },
          ],
        },
        {
          name: "SHREYA",
          role: "Event Management Member",
          image: "placeholder.svg?height=200&width=200",
          bio: "Event coordination and logistics",
          socials: [
            {
              platform: "linkedin",
              url: "",
            },
            {
              platform: "instagram",
              url: "",
            },
          ],
        },
        {
          name: "GURNEET SOKHI",
          role: "Event Management Member",
          image: "/team/gurneet-sokhi.jpg",
          bio: "Event coordination and logistics",
          socials: [
            {
              platform: "linkedin",
              url: "",
            },
            {
              platform: "instagram",
              url: "",
            },
          ],
        },
        {
          name: "VAIBHAV",
          role: "Event Management Member",
          image: "placeholder.svg?height=200&width=200",
          bio: "Event coordination and logistics",
          socials: [
            {
              platform: "linkedin",
              url: "",
            },
            {
              platform: "instagram",
              url: "",
            },
          ],
        },
        {
          name: "ANNU DAGAR",
          role: "Event Management Member",
          image: "/team/annu-dagar.jpg",
          bio: "Event coordination and logistics",
          socials: [
            {
              platform: "linkedin",
              url: "",
            },
            {
              platform: "instagram",
              url: "",
            },
          ],
        },
        {
          name: "VANSHIKA GULATI",
          role: "Event Management Member",
          image: "/team/vanshika-gulati.jpg",
          bio: "Event coordination and logistics",
          socials: [
            {
              platform: "linkedin",
              url: "",
            },
            {
              platform: "instagram",
              url: "",
            },
          ],
        },
        {
          name: "MANYA MADAN",
          role: "Event Management Member",
          image: "placeholder.svg?height=200&width=200",
          bio: "Event coordination and logistics",
          socials: [
            {
              platform: "linkedin",
              url: "",
            },
            {
              platform: "instagram",
              url: "",
            },
          ],
        },
        {
          name: "ABHISHEK KUMAR",
          role: "Event Management Member",
          image: "placeholder.svg?height=200&width=200",
          bio: "Event coordination and logistics",
          socials: [
            {
              platform: "linkedin",
              url: "",
            },
            {
              platform: "instagram",
              url: "",
            },
          ],
        },
        {
          name: "RIDHIMA MITTALL",
          role: "Event Management Co-Lead",
          image: "/team/RidhimaMittal.jpg",
          bio: "Managing venue arrangements and coordination",
          socials: [
            {
              platform: "linkedin",
              url: "https://www.linkedin.com/in/ridhima-mittal-bbb11833b",
            },
            {
              platform: "instagram",
              url: "https://www.instagram.com/ridhima_mittal11",
            },
          ],
        },
        {
          name: "RIYA SEHGAL",
          role: "Event Management Member",
          image: "placeholder.svg?height=200&width=200",
          bio: "Event coordination and logistics",
          socials: [
            {
              platform: "linkedin",
              url: "",
            },
            {
              platform: "instagram",
              url: "",
            },
          ],
        },
      ],
    },
    {
      name: "LOGISTICS TEAM",
      icon: <Video className="w-6 h-6" />,
      color: "from-violet-400 to-purple-500",
      bgColor: "from-violet-500/20 to-purple-500/20",
      members: [
        {
          name: "AYUSH MISHRA",
          role: "Logistics Lead",
          image: "/team/ayush-mishra.jpg",
          bio: "Leading social media strategy and engagement",
          socials: [
            {
              platform: "linkedin",
              url: "https://www.linkedin.com/in/shubham-kumar-b77a67226",
            },
            { platform: "github", url: "https://github.com/shubhammgits" },
            {
              platform: "instagram",
              url: "https://www.instagram.com/shhshubham",
            },
          ],
        },
        {
          name: "HARSH SINGHAL",
          role: "Logistics Member",
          image: "/team/Harshsingal.jpg",
          bio: "Social media content and community management",
          socials: [
            {
              platform: "linkedin",
              url: "https://www.linkedin.com/in/harsh-singhal-oo7/",
            },
            { platform: "github", url: "https://github.com/Harsh0007-max" },
            {
              platform: "instagram",
              url: "https://www.instagram.com/harshsinghal2007",
            },
          ],
        },
        {
          name: "ADARSH MISHRA",
          role: "Logistics Member",
          image: "/team/Adarsh-Mishra.jpg",
          bio: "Social media content and community management",
          socials: [
            {
              platform: "linkedin",
              url: "https://www.linkedin.com/in/harsh-singhal-oo7/",
            },
            { platform: "github", url: "https://github.com/Harsh0007-max" },
            {
              platform: "instagram",
              url: "https://www.instagram.com/harshsinghal2007",
            },
          ],
        },
      ],
    },
    {
      name: "MENTORS AND TECHNOLOGY LEADS",
      icon: <Wrench className="w-6 h-6" />,
      color: "from-indigo-400 to-purple-500",
      bgColor: "from-indigo-500/20 to-purple-500/20",
      members: [
        {
          name: "SUDHANSHU KHOSLA",
          role: "Web Dev Lead",
          image: "/team/sudhanshukhosla.jpg",
          bio: "Leading web development initiatives",
          socials: [
            {
              platform: "linkedin",
              url: "https://linkedin.com/in/sudhanshu-khosla-a05b4a298/",
            },
            {
              platform: "github",
              url: "https://github.com/Sudhanshu-khosla-26",
            },
            {
              platform: "instagram",
              url: "https://instagram.com/sudhanshu_khosla/",
            },
          ],
        },
        {
          name: "DHRUV SABHARWAL",
          role: "Web Dev Co-Lead",
          image: "/team/dhruv-sabharwal.jpeg",
          bio: "Leading web development initiatives",
          socials: [
            {
              platform: "linkedin",
              url: "https://linkedin.com/in/dhruv-sabharwal-6a6245295/",
            },
            {
              platform: "github",
              url: "https://github.com/Dhruvv7115",
            },
            {
              platform: "instagram",
              url: "https://instagram.com/dhruvv7115/",
            },
          ],
        },
        {
          name: "YANA MALHOTRA",
          role: "DSA Lead",
          image: "/team/yana-malhotra.jpg",
          bio: "Data Structures and Algorithms specialist",
          socials: [
            {
              platform: "linkedin",
              url: "https://www.linkedin.com/in/yana-malhotra-427b61293",
            },
            { 
              platform: "github", 
              url: "https://github.com/yana-malhotra27" 
            },
          ],
        },
        {
          name: "NAINCY RAJ SINGH",
          role: "DSA Co-Lead",
          image: "placeholder.svg?height=200&width=200",
          bio: "Data Structures and Algorithms specialist",
          socials: [
            {
              platform: "linkedin",
              url: "",
            },
            { 
              platform: "github", 
              url: "" 
            },
          ],
        },
        {
          name: "ANSH KUMAR RAJPUT",
          role: "DSA Coordinator",
          image: "placeholder.svg?height=200&width=200",
          bio: "Data Structures and Algorithms specialist",
          socials: [
            {
              platform: "linkedin",
              url: "",
            },
            { 
              platform: "github", 
              url: "" 
            },
          ],
        },
        {
          name: "VRITTI GARG",
          role: "UI/UX Lead",
          image: "/team/vritti-garg.jpg",
          bio: "Data Structures and Algorithms specialist",
          socials: [
            {
              platform: "linkedin",
              url: "",
            },
            { 
              platform: "github", 
              url: "" 
            },
          ],
        },
        {
          name: "HARSH YADAV",
          role: "UI/UX Co-Lead",
          image: "/team/harsh-yadav.jpg",
          bio: "Creative design and visual storytelling",
          socials: [
            {
              platform: "linkedin",
              url: "https://www.linkedin.com/in/harsh-yadav-5b92b62b1",
            },
            {
              platform: "instagram",
              url: "https://www.instagram.com/harsh.__.yadavv",
            },
          ],
        },
        {
          name: "ANSH",
          role: "AIML Lead",
          image: "placeholder.svg?height=200&width=200",
          bio: "Artificial Intelligence and Machine Learning expertise",
          socials: [
            {
              platform: "linkedin",
              url: "",
            },
            { 
              platform: "github", 
              url: "" 
            },
          ],
        },
        {
          name: "SANCHIT AGGARWAL",
          role: "Cyber Security Lead",
          image: "/team/sanchit.png",
          bio: "Overseeing cybersecurity and infrastructure",
          socials: [
            { 
              platform: "linkedin", 
              url: "https://linkedin.com/in/heysanchit" 
            },
            { 
              platform: "github", 
              url: "https://github.com/0xMistri" 
            },
          ],
        },
        {
          name: "KRISH MITTAL",
          role: "Game Dev Lead",
          image: "placeholder.svg?height=200&width=200",
          bio: "",
          socials: [
            {
              platform: "linkedin",
              url: "",
            },
            { 
              platform: "github", 
              url: "" 
            },
          ],
        },
      ],
    },
    {
      name: "CORE TEAM",
      icon: <Video className="w-6 h-6" />,
      color: "from-violet-400 to-purple-500",
      bgColor: "from-violet-500/20 to-purple-500/20",
      members: [
        {
          name: "JEEVIDHA ARORA",
          role: "Operations Head",
          image: "/team/Jeevidha-Arora.jpg",
          bio: "",
          socials: [
            {
              platform: "linkedin",
              url: "",
            },
            { 
              platform: "github", 
              url: "" 
            },
          ],
        },
        {
          name: "VRITTI GARG",
          role: "Interim Executive",
          image: "/team/vritti-garg.jpg",
          bio: "",
          socials: [
            {
              platform: "linkedin",
              url: "",
            },
            { 
              platform: "github", 
              url: "" 
            },
          ],
        },
      ],
    },
    {
      name: "SOCIETY MENTORS",
      icon: <Users className="w-6 h-6" />,
      color: "from-violet-400 to-purple-500",
      bgColor: "from-violet-500/20 to-purple-500/20",
      members: [
        {
          name: "ARPIT RAJPUT",
          role: "",
          image: "/team/arpit-rajput.jpg",
          bio: "",
          socials: [
            {
              platform: "linkedin",
              url: "",
            },
            { 
              platform: "github", 
              url: "" 
            },
          ],
        },
        {
          name: "ATHARV TRIPATHI",
          role: "",
          image: "/team/atharv-tripathi.jpg",
          bio: "",
          socials: [
            {
              platform: "linkedin",
              url: "",
            },
            { 
              platform: "github", 
              url: "" 
            },
          ],
        },
      ],
    },
    {
      name: "CHIEF MARKETING OFFICER",
      icon: <Video className="w-6 h-6" />,
      color: "from-violet-400 to-purple-500",
      bgColor: "from-violet-500/20 to-purple-500/20",
      members: [
        {
          name: "KASHVI ARORA",
          role: "",
          image: "/team/Kashvi.jpg",
          bio: "",
          socials: [
            {
              platform: "linkedin",
              url: "",
            },
            { 
              platform: "github", 
              url: "" 
            },
          ],
        },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case "github":
        return <FaGithub className="w-4 h-4" />;
      case "linkedin":
        return <FaLinkedin className="w-4 h-4" />;
      case "instagram":
        return <FaInstagram className="w-4 h-4" />;
      default:
        return null;
    }
  };

  return (
    <section
      id="team"
      className="relative py-24 px-6 md:px-12"
      ref={ref}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto"
      >
        <motion.div
          variants={itemVariants}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight">
            MEET OUR <span className={accentColor}>TEAM</span>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto mb-10"></div>
          <p
            className={`${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            } text-lg md:text-xl max-w-4xl mx-auto leading-relaxed`}
          >
            The passionate individuals behind CodeZen, dedicated to fostering
            innovation and technological excellence.
          </p>
        </motion.div>

        <div className="space-y-16">
          {teamCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className="text-center"
            >
              {/* Category Header */}
              <div className="flex items-center justify-center mb-8">
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center mr-4 shadow-lg`}
                >
                  <div className="text-black">{category.icon}</div>
                </div>
                <h3 className="text-2xl md:text-3xl font-black tracking-wide">
                  {category.name}
                </h3>
              </div>

              {/* Team Members Grid */}
              <div
                className={`grid justify-end sm:items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-${Math.min(
                  category.members.length,
                  3,
                )} gap-8`}
              >
                {category.members.map((member, memberIndex) => (
                  <motion.div
                    key={memberIndex}
                    whileHover={{ scale: 1.05, y: -10 }}
                    className={`${cardClasses} border rounded-2xl p-8 h-full transition-all duration-300 group hover:shadow-2xl hover:shadow-green-500/10 relative overflow-hidden`}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${category.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    ></div>
                    <div className="relative z-10 text-center h-full flex flex-col justify-between">
                      <div>
                        <div className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-green-400/50 group-hover:border-green-400 transition-colors shadow-lg overflow-hidden">
                          <Image
                            src={member.image || "/placeholder.svg"}
                            alt={member.name}
                            width={96}
                            height={96}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h4 className="text-lg font-black mb-1">
                          {member.name}
                        </h4>
                        <p className="text-green-400 font-bold mb-3 text-sm">
                          {member.role}
                        </p>
                        {/* <p
                          className={`${
                            isDarkMode ? "text-gray-300" : "text-gray-700"
                          } text-xs mb-4 leading-relaxed`}
                        >
                          {member.bio}
                        </p> */}
                      </div>
                      <div className="flex justify-center space-x-2">
                        {member.socials
                          .filter((social) => social.url.trim() !== "")
                          .map((social, socialIndex) => (
                            <Link
                              key={socialIndex}
                              href={social.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`w-8 h-8 ${
                                isDarkMode ? "bg-gray-800/50" : "bg-gray-100"
                              } rounded-full flex items-center justify-center ${
                                isDarkMode
                                  ? "text-gray-400 hover:text-green-400 hover:bg-green-400/10"
                                  : "text-gray-600 hover:text-green-600 hover:bg-green-100"
                              } transition-all duration-300`}
                            >
                              {getSocialIcon(social.platform)}
                            </Link>
                          ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}