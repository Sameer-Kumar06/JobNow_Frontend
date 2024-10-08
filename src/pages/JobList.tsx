import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaSearch,
  FaMapMarkerAlt,
  FaChevronDown,
  FaSlidersH,
  FaThLarge,
  FaListUl,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import instagramLogo from "../assets/1298747_instagram_brand_logo_social media_icon.png";
import googleLogo from "../assets/7123025_logo_google_g_icon.png";
import facebookLogo from "../assets/317727_facebook_social media_social_icon.png";
import amazonLogo from "../assets/104477_amazon_icon.png";
import atlassianLogo from "../assets/4373272_atlassian_logo_logos_icon.png";
import jpmorganLogo from "../assets/JP-Morgan-Chase-Logo.png";
import morganstanleyLogo from "../assets/morganStanley.png";
import tcsLogo from "../assets/tcs.jpg";
import ibmLogo from "../assets/ibm.png";
import wiproLogo from "../assets/wipro.png";
import ciscoLogo from "../assets/cisco.png";
import netflixLogo from "../assets/netflix.jpg";
import deepmindLogo from "../assets/deepmmind.jpg";
import coinbaseLogo from "../assets/coinbase.png";

// type Job = {
//   id: number;
//   title: string;
//   logoUrl: string;
//   company: string;
//   location: string;
//   jobType: string;
//   jobDescription: string;
//   salary: string;
//   timeRemaining: string;
//   featured: boolean;

// };

export function JobList() {
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: "Marketing Manager",
      company: "Instagram",
      location: "New Mexico, USA",
      salary: "$60k-100k/year",
      jobDescription:
        "As a Marketing Manager at Instagram, you will be responsible for developing, implementing, and executing strategic marketing plans for the entire organization. You will lead campaigns that help enhance our brand presence and increase user engagement. In this role, you will work closely with cross-functional teams such as product, sales, and design to deliver creative and engaging content. You will analyze market trends, oversee advertising strategies, and manage relationships with influencers. You will be responsible for increasing our customer base through innovative ideas. Experience in social media marketing is crucial for this role.",
      timeRemaining: "4 Days Remaining",
      details: {
        website: "https://instagram.com",
        phone: "123-456-7890",
        email: "contact@instagram.com",
      },
      company_info: {
        founded: "2010",
        organization_type: "Social Media",
        company_size: "10,000+",
      },
      logoUrl: instagramLogo,
      featured: true,
      jobType: "Remote",
    },
    {
      id: 2,
      title: "Software Engineer",
      company: "Google",
      location: "Mountain View, CA, USA",
      salary: "$120k-150k/year",
      jobDescription:
        "As a Software Engineer at Google, you will design, develop, and maintain complex software systems that are scalable, reliable, and efficient. You will collaborate with product managers, designers, and other engineers to develop cutting-edge products that enhance user experience across Google services. You’ll be involved in all stages of the software development lifecycle, including architecture, implementation, and testing. This role requires a deep understanding of data structures, algorithms, and system design. Familiarity with coding languages such as Python, Java, and C++ is essential. Experience in building large-scale distributed systems is preferred.",
      timeRemaining: "6 Days Remaining",
      details: {
        website: "https://google.com",
        phone: "987-654-3210",
        email: "jobs@google.com",
      },
      company_info: {
        founded: "1998",
        organization_type: "Tech",
        company_size: "100,000+",
      },
      logoUrl: googleLogo,
      featured: false,
      jobType: "Full Time",
    },
    {
      id: 3,
      title: "Product Manager",
      company: "Atlassian",
      location: "Sydney, Australia",
      salary: "$90k-120k/year",
      jobDescription:
        "As a Product Manager at Atlassian, you will lead the product development process from ideation to launch. You will work closely with engineers, designers, and other stakeholders to build products that solve customer problems and align with the company’s vision. Your responsibilities will include defining product roadmaps, prioritizing features, and ensuring timely delivery of releases. You will also engage with customers to gather feedback and make data-driven decisions to improve the product. Strong communication skills and experience in managing technical products are key to success in this role.",
      timeRemaining: "7 Days Remaining",
      details: {
        website: "https://atlassian.com",
        phone: "111-222-3333",
        email: "careers@atlassian.com",
      },
      company_info: {
        founded: "2002",
        organization_type: "Software",
        company_size: "7,000+",
      },
      logoUrl: atlassianLogo,
      featured: true,
      jobType: "Remote",
    },
    {
      id: 4,
      title: "DevOps Engineer",
      company: "TCS",
      location: "Bangalore, India",
      salary: "$70k-100k/year",
      jobDescription:
        "As a DevOps Engineer at TCS, you will be responsible for automating and streamlining operations, as well as improving system reliability and performance. You will work with development and IT teams to deploy new applications, manage infrastructure, and troubleshoot operational issues. Your role will involve continuous integration, continuous delivery (CI/CD), and monitoring of systems to ensure smooth operations. Knowledge of cloud technologies, scripting languages, and containerization (Docker, Kubernetes) is crucial for this role. You will also ensure security protocols are followed and contribute to process improvement initiatives.",
      timeRemaining: "1 Day Remaining",
      details: {
        website: "https://tcs.com",
        phone: "777-888-9999",
        email: "jobs@tcs.com",
      },
      company_info: {
        founded: "1968",
        organization_type: "IT Services",
        company_size: "500,000+",
      },
      logoUrl: tcsLogo,
      featured: false,
      jobType: "Full Time",
    },
    {
      id: 5,
      title: "UX/UI Designer",
      company: "IBM",
      location: "Austin, TX, USA",
      salary: "$100k-130k/year",
      jobDescription:
        "As a UX/UI Designer at IBM, you will play a key role in shaping the user experience across various products and services. You will collaborate with product managers, engineers, and researchers to design intuitive and visually appealing interfaces. Your responsibilities include creating wireframes, prototypes, and user flows to optimize the overall user experience. You will conduct user research to understand pain points and iterate on design solutions based on feedback. Proficiency in design tools such as Sketch, Figma, or Adobe XD is required, along with a strong understanding of usability principles.",
      timeRemaining: "5 Days Remaining",
      details: {
        website: "https://ibm.com",
        phone: "555-666-7777",
        email: "careers@ibm.com",
      },
      company_info: {
        founded: "1911",
        organization_type: "Tech",
        company_size: "350,000+",
      },
      logoUrl: ibmLogo,
      featured: false,
      jobType: "Remote",
    },
    {
      id: 6,
      title: "Cybersecurity Analyst",
      company: "Cisco",
      location: "San Francisco, CA, USA",
      salary: "$110k-140k/year",
      jobDescription:
        "As a Cybersecurity Analyst at Cisco, you will be responsible for safeguarding the organization's network and data from cyber threats. You will monitor systems for potential vulnerabilities, perform risk assessments, and respond to security incidents. In this role, you will implement security measures, such as firewalls and encryption protocols, to protect sensitive information. You will also collaborate with IT teams to ensure that best practices in cybersecurity are followed. Experience with intrusion detection systems, penetration testing, and threat intelligence tools is crucial. Keeping up with the latest cybersecurity trends is a must.",
      timeRemaining: "6 Days Remaining",
      details: {
        website: "https://cisco.com",
        phone: "888-999-0000",
        email: "jobs@cisco.com",
      },
      company_info: {
        founded: "1984",
        organization_type: "Networking",
        company_size: "75,000+",
      },
      logoUrl: ciscoLogo,
      featured: true,
      jobType: "Full Time",
    },
    {
      id: 7,
      title: "Blockchain Developer",
      company: "Coinbase",
      location: "New York, NY, USA",
      salary: "$120k-150k/year",
      jobDescription:
        "As a Blockchain Developer at Coinbase, you will be at the forefront of building innovative blockchain solutions for cryptocurrency exchanges and digital wallets. You will develop decentralized applications (dApps) and smart contracts that ensure secure, efficient, and transparent transactions. Your role involves working closely with security experts to ensure the integrity of the blockchain and applying cryptographic techniques to safeguard data. Experience with Solidity, Ethereum, or other blockchain platforms is critical, along with a deep understanding of distributed ledger technologies. You’ll also stay updated on the latest blockchain trends and emerging technologies.",
      timeRemaining: "9 Days Remaining",
      details: {
        website: "https://coinbase.com",
        phone: "999-888-7777",
        email: "careers@coinbase.com",
      },
      company_info: {
        founded: "2012",
        organization_type: "Cryptocurrency",
        company_size: "5,000+",
      },
      logoUrl: coinbaseLogo,
      featured: false,
      jobType: "Remote",
    },
    {
      id: 8,
      title: "Software Engineer",
      company: "Morgan Stanley",
      location: "London, UK",
      salary: "$90k-120k/year",
      jobDescription:
        "As a Software Engineer at Morgan Stanley, you will develop and maintain critical financial applications used across the organization. You will work on high-performance, low-latency systems that support trading, risk management, and analytics. This role requires expertise in programming languages such as Java, Python, or C++, as well as experience in large-scale distributed systems. You will collaborate with business analysts and other developers to ensure software solutions meet business needs. The ability to work in a fast-paced, deadline-driven environment and experience in the financial industry will be beneficial for this role.",
      timeRemaining: "4 Days Remaining",
      details: {
        website: "https://morganstanley.com",
        phone: "333-444-5555",
        email: "careers@morganstanley.com",
      },
      company_info: {
        founded: "1935",
        organization_type: "Investment Banking",
        company_size: "70,000+",
      },
      logoUrl: morganstanleyLogo,
      featured: true,
      jobType: "Full Time",
    },
  ]);

  const navigate = useNavigate();

  const handleApplyNow = (job) => {
    console.log(job);

    navigate(`/job-detail`, { state: { job } });
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Find Job</h1>
      <div className="flex items-center space-x-4 mb-6">
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="Job title, keyword..."
            className="w-full pl-10 pr-4 py-2 border rounded-md"
          />
          <FaSearch
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
        </div>
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="Location"
            className="w-full pl-10 pr-4 py-2 border rounded-md"
          />
          <FaMapMarkerAlt
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
        </div>
        <div className="flex-1 relative">
          <select className="w-full pl-4 pr-10 py-2 border rounded-md appearance-none">
            <option>Select Category</option>
            <option>Software Engineer</option>
            <option>Machine Learning</option>
            <option>DevOps Engineer</option>
            <option>Figma Designer</option>
            <option>AI Engineer</option>
          </select>
          <FaChevronDown
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
        </div>
        <button className="px-4 py-2 bg-gray-200 rounded-md flex items-center">
          <FaSlidersH size={20} className="mr-2" />
          Advance Filter
        </button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md">
          Find Job
        </button>
      </div>

      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-2">
          <div className="flex items-center gap-5 mr-5">
            <span className="font-semibold">
              <select className="appearance-none">
                <option>Software Engineer</option>
                <option>Machine Learning</option>
                <option>DevOps Engineer</option>
                <option>Figma Designer</option>
                <option>AI Engineer</option>
              </select>
            </span>
            <FaChevronDown size={16} />
          </div>

          <div className="flex items-center gap-5 mr-5">
            <span className="font-semibold">
              <select className="appearance-none">
                <option>New York</option>
                <option>San Francisco</option>
                <option>Los Angeles</option>
                <option>Chicago</option>
                <option>Seattle</option>
                <option>Boston</option>
                <option>Austin</option>
                <option>Dallas</option>
                <option>Miami</option>
                <option>Atlanta</option>
                <option>Toronto</option>
                <option>Vancouver</option>
                <option>Montreal</option>
                <option>London</option>
                <option>Manchester</option>
                <option>Berlin</option>
                <option>Paris</option>
                <option>Amsterdam</option>
                <option>Sydney</option>
                <option>Singapore</option>
                <option>Mumbai</option>
                <option>Delhi</option>
                <option>Bengaluru</option>
                <option>Hyderabad</option>
                <option>Chennai</option>
                <option>Pune</option>
                <option>Kolkata</option>
                <option>Ahmedabad</option>
                <option>Jaipur</option>
                <option>Surat</option>
                <option>Chandigarh</option>
                <option>Gurgaon</option>
              </select>
            </span>
            <FaChevronDown size={16} />{" "}
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <span>Latest</span>
          <FaChevronDown size={16} />
          <span>12 per page</span>
          <FaChevronDown size={16} />
          <FaThLarge size={20} />
          <FaListUl size={20} />
        </div>
      </div>

      <div className="space-y-4">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="flex items-center justify-between bg-white p-4 rounded-lg shadow"
          >
            <div className="flex items-center space-x-4">
              <img
                src={job.logoUrl}
                alt={job.company}
                className="w-12 h-12 rounded-lg"
              />
              <div>
                <h2 className="font-semibold">{job.title}</h2>
                <div className="text-sm text-gray-500">
                  <span>{job.location}</span> • <span>{job.salary}</span> •{" "}
                  <span>{job.timeRemaining}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              {job.featured && (
                <span className="px-2 py-1 bg-pink-100 text-pink-600 rounded-full text-xs">
                  Featured
                </span>
              )}
              <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-xs">
                {job.jobType}
              </span>
              <button
                onClick={() => handleApplyNow(job)}
                className="px-4 py-2 bg-blue-600 text-white rounded-md"
              >
                Apply Now
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center space-x-2 mt-6">
        <button className="p-2 border rounded-md">
          <FaChevronLeft size={20} />
        </button>
        <button className="p-2 border rounded-md bg-blue-600 text-white">
          01
        </button>
        <button className="p-2 border rounded-md">02</button>
        <button className="p-2 border rounded-md">03</button>
        <button className="p-2 border rounded-md">04</button>
        <button className="p-2 border rounded-md">05</button>
        <button className="p-2 border rounded-md">
          <FaChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
