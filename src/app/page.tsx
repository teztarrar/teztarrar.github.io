"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Linkedin, Github, Mail, Shield, Server, Network, Code, Award, GraduationCap, BookOpen, Terminal, Lock, Users, Download, FileText, Zap, Target, TrendingUp, Globe, Clock, CheckCircle2, Star } from "lucide-react";
import { useEffect, useRef, useMemo } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";

export default function Home() {
  const mainImageRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      mainImageRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 2, ease: "power3.out" }
    );
  }, []);

  useEffect(() => {
    gsap.to(".leaf-image", {
      y: -10,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      duration: 2,
    });
  }, []);

  const containerVariants = useMemo(
    () => ({
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          delayChildren: 1,
          staggerChildren: 0.15,
        },
      },
    }),
    []
  );

  const itemVariants = useMemo(
    () => ({
      hidden: { y: 20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          ease: "easeOut",
        },
      },
    }),
    []
  );

  return (
    <div className="bg-[#11120d] min-h-screen p-3 md:p-5 text-gray-200">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="h-full"
      >
        <motion.header
          variants={itemVariants}
          className="flex flex-col bg-[#d8cfbc] rounded-xl p-4 sm:flex-row justify-center sm:justify-between items-center mb-8 mt-2"
        >
          <h1 className="text-xl md:text-3xl font-spectral font-extrabold text-[#4A3728] ml-4 mb-4 sm:mb-0">
            VISHU DEV SINGH
          </h1>
          <nav className="space-x-4 mr-4 font-poppins">
            <Link
              href="https://github.com/imvishudevsingh"
              className="text-sm sm:text-base text-[#6B4D30] hover:text-[#4A3728] relative group"
            >
              PROJECTS
              <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-[#4A3728] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="https://linkedin.com/in/vishu-dev-singh-1292571ba"
              className="text-sm sm:text-base text-[#6B4D30] hover:text-[#4A3728] relative group"
            >
              ABOUT
              <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-[#4A3728] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="mailto:imvishudevsingh@gmail.com"
              className="text-sm sm:text-base text-[#6B4D30] hover:text-[#4A3728] relative group"
            >
              CONTACT
              <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-[#4A3728] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>
        </motion.header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Box 1 - Hero/Objective with Leaf */}
          <motion.div
            variants={itemVariants}
            className="bg-[#d8cfbc] p-6 rounded-md flex flex-col justify-between py-10"
          >
            <motion.div variants={itemVariants} className="flex justify-end mb-4">
              <Image
                src="/leaf.png"
                alt="leaf-img"
                width={150}
                height={150}
                className="object-cover leaf-image"
                priority
              />
            </motion.div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-lora text-[#4A3728] py-2">
              Motivated IT professional with hands-on experience in{" "}
              <span className="italic underline">technical support</span> and a strong foundation in{" "}
              <span className="italic underline">cybersecurity</span> and networking.
            </h2>
            <p className="text-sm md:text-base font-poppins text-black mt-4">
              +91 9724500202 ⋄ Vadodara, Gujarat
              <br />
              imvishudevsingh@gmail.com
            </p>
          </motion.div>

          {/* Box 2 - Profile Avatar */}
          <div
            ref={mainImageRef}
            className="bg-[#57544a] rounded-md flex items-end justify-center"
          >
            <Image
              src="/avatar.png"
              alt="Vishu Dev Singh"
              width={500}
              height={500}
              className="w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] h-auto object-cover pt-12 px-10 md:px-20"
              priority
            />
          </div>

          {/* Box 3 - Work Experience with Work Image */}
          <motion.div
            variants={itemVariants}
            className="bg-[#d8cfbc] p-6 rounded-md flex flex-col items-center text-center space-y-10 px-4 sm:px-8 md:px-16 lg:px-24"
          >
            <div className="flex justify-between items-center w-full mb-4">
              <h3 className="text-xl md:text-3xl font-spectral font-bold text-[#4A3728]">
                Work
              </h3>
              <motion.div
                whileHover={{ scale: 1.2, rotate: 20 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link href="https://linkedin.com/in/vishu-dev-singh-1292571ba">
                  <ArrowUpRight
                    className="text-[#6B4D30] cursor-pointer"
                    size={30}
                  />
                </Link>
              </motion.div>
            </div>

            <div className="relative overflow-hidden rounded-lg mb-6 max-w-xs sm:max-w-sm md:max-w-md">
              <Image
                src="/work.jpg"
                alt="Work Experience"
                width={400}
                height={400}
                className="object-cover hover:scale-110 transition-transform duration-300"
                priority
              />
            </div>

            <div className="flex flex-col text-left max-w-lg w-full">
              <h3 className="text-2xl font-david-libre font-bold text-[#4A3728] mb-2">
                Technical Support Executive
              </h3>
              <p className="text-sm font-poppins text-black mb-2">
                Cyber Hospitality Pvt. Ltd. • Vadodara
              </p>
              <p className="text-xs font-poppins text-[#6B4D30] mb-3">Jan 2025 - Present</p>
              <ul className="text-sm font-poppins text-black space-y-1">
                <li>• Provide technical support via email and phone</li>
                <li>• Manage and resolve IT tickets</li>
                <li>• Troubleshoot network connectivity issues</li>
                <li>• Monitor and maintain POS systems</li>
              </ul>
            </div>
          </motion.div>

          {/* Box 4 - Skills Overview with Icons */}
          <motion.div
            variants={itemVariants}
            className="bg-[#d8cfbc] p-6 rounded-md flex justify-between items-center gap-12 py-10"
          >
            <div className="flex flex-col gap-4">
              <Server className="text-[#6B4D30] hover:scale-110 transition-transform" size={40} />
              <Network className="text-[#6B4D30] hover:scale-110 transition-transform" size={40} />
              <Shield className="text-[#6B4D30] hover:scale-110 transition-transform" size={40} />
            </div>
            <div className="flex-1">
              <p className="text-sm sm:text-base font-lora text-black">
                Specialized in <span className="font-bold">Windows & Linux</span> administration,{" "}
                <span className="font-bold">Active Directory</span>,{" "}
                <span className="font-bold">Microsoft Defender</span>,{" "}
                <span className="font-bold">SIEM tools</span>, and{" "}
                <span className="font-bold">network security</span>. Experienced in troubleshooting, 
                ticket resolution, and maintaining secure IT environments.
              </p>
            </div>
          </motion.div>

          {/* Box 5 - Contact */}
          <motion.div
            variants={itemVariants}
            className="bg-[#57544a] p-6 rounded-md flex flex-col justify-between"
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg md:text-xl font-david-libre mb-2 text-[#ffddc3]">
                Have some questions?
              </h3>
              <motion.div
                whileHover={{ scale: 1.2, rotate: 20 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link href="mailto:imvishudevsingh@gmail.com">
                  <ArrowUpRight
                    className="mb-2 text-[#D4C6B8] cursor-pointer"
                    size={20}
                  />
                </Link>
              </motion.div>
            </div>
            <h3 className="text-4xl md:text-5xl mt-4 font-sans font-semibold text-[#ffecdd]">
              Contact me
            </h3>
          </motion.div>

          {/* Box 6 - Social Links */}
          <motion.div
            variants={itemVariants}
            className="bg-[#d8cfbc] p-4 rounded-md flex justify-evenly items-center"
          >
            {[
              {
                href: "https://linkedin.com/in/vishu-dev-singh-1292571ba",
                Icon: Linkedin,
              },
              {
                href: "https://github.com/imvishudevsingh",
                Icon: Github,
              },
              {
                href: "mailto:imvishudevsingh@gmail.com",
                Icon: Mail,
              },
            ].map(({ href, Icon }) => (
              <Link key={href} href={href}>
                <motion.div
                  className="text-[#6B4D30] hover:text-[#4A3728]"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={40} />
                </motion.div>
              </Link>
            ))}
          </motion.div>

          {/* Box 7 - Education/School */}
          <motion.div
            variants={itemVariants}
            className="bg-[#d8cfbc] p-6 rounded-md flex flex-col justify-between"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl md:text-2xl font-spectral font-bold text-[#4A3728]">
                Education
              </h3>
              <GraduationCap className="text-[#6B4D30]" size={32} />
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-david-libre font-bold text-[#4A3728] mb-1">
                  Integrated MCA
                </h4>
                <p className="text-sm font-poppins text-black mb-1">Parul University</p>
                <p className="text-xs font-poppins text-[#6B4D30]">2021 - 2025</p>
                <p className="text-xs font-poppins text-black mt-2">
                  Specialization: Cyber Security, Computer Networking
                </p>
              </div>
              <div className="pt-3 border-t border-[#6B4D30]">
                <h4 className="text-base font-david-libre font-bold text-[#4A3728] mb-1">
                  High School (HSC)
                </h4>
                <p className="text-sm font-poppins text-black mb-1">Doon Public School</p>
                <p className="text-xs font-poppins text-[#6B4D30]">2019 - 2021</p>
              </div>
            </div>
          </motion.div>

          {/* Box 8 - Certifications */}
          <motion.div
            variants={itemVariants}
            className="bg-[#57544a] p-6 rounded-md flex flex-col justify-between"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg md:text-xl font-david-libre mb-2 text-[#ffddc3]">
                Certifications
              </h3>
              <Award className="text-[#ffddc3]" size={24} />
            </div>
            <div className="space-y-2 text-sm font-poppins text-[#ffecdd]">
              <p>• Open Source Software Development - Linux Foundation</p>
              <p>• Ethical Hacking Essentials - EC-Council</p>
              <p>• Google Cybersecurity Analyst</p>
              <p>• IBM Cybersecurity Analyst</p>
              <p>• Python for Cybersecurity - INFOSEC</p>
              <p>• Google IT Support</p>
            </div>
          </motion.div>

          {/* Box 9 - Projects */}
          <motion.div
            variants={itemVariants}
            className="bg-[#d8cfbc] p-6 rounded-md flex flex-col"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl md:text-2xl font-spectral font-bold text-[#4A3728]">
                Projects
              </h3>
              <Code className="text-[#6B4D30]" size={28} />
            </div>
            <div className="space-y-3">
              <div>
                <Link href="https://github.com/imvishudevsingh/AutoIPChanger" className="group">
                  <h4 className="text-base font-david-libre font-bold text-[#4A3728] mb-1 group-hover:underline flex items-center gap-2">
                    AutoIPChanger <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h4>
                  <p className="text-xs font-poppins text-black">
                    Rust script for Tor automation and IP monitoring
                  </p>
                </Link>
              </div>
              <div>
                <Link href="https://github.com/imvishudevsingh/networkRouting" className="group">
                  <h4 className="text-base font-david-libre font-bold text-[#4A3728] mb-1 group-hover:underline flex items-center gap-2">
                    networkRouting <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h4>
                  <p className="text-xs font-poppins text-black">
                    C-based CLI tool for IP validation and routing
                  </p>
                </Link>
              </div>
              <div>
                <Link href="https://github.com/imvishudevsingh/firewall-wazuh" className="group">
                  <h4 className="text-base font-david-libre font-bold text-[#4A3728] mb-1 group-hover:underline flex items-center gap-2">
                    firewall-wazuh <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h4>
                  <p className="text-xs font-poppins text-black">
                    Rust firewall app with iptables enforcement
                  </p>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Box 10 - Cybersecurity Skills */}
          <motion.div
            variants={itemVariants}
            className="bg-[#d8cfbc] p-6 rounded-md flex flex-col"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl md:text-2xl font-spectral font-bold text-[#4A3728]">
                Cybersecurity
              </h3>
              <Shield className="text-[#6B4D30]" size={28} />
            </div>
            <div className="space-y-2 text-sm font-poppins text-black">
              <div className="flex items-center gap-2">
                <Lock className="text-[#6B4D30]" size={16} />
                <span>Microsoft Defender & Windows Security</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="text-[#6B4D30]" size={16} />
                <span>Microsoft Sentinel (SIEM)</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="text-[#6B4D30]" size={16} />
                <span>Malware Detection Tools</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="text-[#6B4D30]" size={16} />
                <span>Incident Response & Vulnerability Management</span>
              </div>
            </div>
          </motion.div>

          {/* Box 11 - Networking Skills */}
          <motion.div
            variants={itemVariants}
            className="bg-[#57544a] p-6 rounded-md flex flex-col justify-between"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg md:text-xl font-david-libre mb-2 text-[#ffddc3]">
                Networking
              </h3>
              <Network className="text-[#ffddc3]" size={24} />
            </div>
            <div className="space-y-2 text-sm font-poppins text-[#ffecdd]">
              <p>• TCP/IP, DNS, DHCP, NAT</p>
              <p>• VPN Configuration & Management</p>
              <p>• Firewall Configuration</p>
              <p>• Network Troubleshooting</p>
              <p>• Bridging & Routing</p>
            </div>
          </motion.div>

          {/* Box 12 - System Administration */}
          <motion.div
            variants={itemVariants}
            className="bg-[#d8cfbc] p-6 rounded-md flex flex-col"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl md:text-2xl font-spectral font-bold text-[#4A3728]">
                System Admin
              </h3>
              <Server className="text-[#6B4D30]" size={28} />
            </div>
            <div className="space-y-2 text-sm font-poppins text-black">
              <div className="flex items-center gap-2">
                <Terminal className="text-[#6B4D30]" size={16} />
                <span>Windows 10/11 & Windows Server</span>
              </div>
              <div className="flex items-center gap-2">
                <Terminal className="text-[#6B4D30]" size={16} />
                <span>Active Directory & Group Policies</span>
              </div>
              <div className="flex items-center gap-2">
                <Terminal className="text-[#6B4D30]" size={16} />
                <span>Linux Administration & Shell Scripting</span>
              </div>
              <div className="flex items-center gap-2">
                <Terminal className="text-[#6B4D30]" size={16} />
                <span>File System & User Management</span>
              </div>
            </div>
          </motion.div>

          {/* Box 13 - Learning & Activities */}
          <motion.div
            variants={itemVariants}
            className="bg-[#d8cfbc] p-6 rounded-md flex flex-col"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl md:text-2xl font-spectral font-bold text-[#4A3728]">
                Learning
              </h3>
              <BookOpen className="text-[#6B4D30]" size={28} />
            </div>
            <div className="space-y-3 text-sm font-poppins text-black">
              <div>
                <p className="font-bold text-[#4A3728] mb-1">TryHackMe</p>
                <p className="text-xs">Active learner practicing cybersecurity through interactive labs</p>
              </div>
              <div>
                <p className="font-bold text-[#4A3728] mb-1">Tools Experience</p>
                <p className="text-xs">Nmap, Wireshark, Metasploit, Netcat</p>
              </div>
              <div>
                <p className="font-bold text-[#4A3728] mb-1">Blog</p>
                <p className="text-xs">Personal blog on network security and system administration</p>
              </div>
            </div>
          </motion.div>

          {/* Box 14 - Personal Touch with Coffee */}
          <motion.div
            variants={itemVariants}
            className="bg-[#d8cfbc] p-6 rounded-md flex justify-between items-center gap-12 py-10"
          >
            <Image
              src="/coffee.png"
              alt="coffee"
              width={150}
              height={150}
              className="object-cover mb-4 self-center hover:scale-110 transition-all duration-300"
              priority
            />
            <p className="text-sm sm:text-base font-lora text-black">
              I&apos;m a driven and curious person with a passion for innovation
              and personal growth. Known for problem-solving skills, attention to detail, 
              and persistence. I approach challenges with dedication and a commitment to 
              excellence in everything I do.
            </p>
          </motion.div>

          {/* Box 15 - Soft Skills */}
          <motion.div
            variants={itemVariants}
            className="bg-[#57544a] p-6 rounded-md flex flex-col justify-between"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg md:text-xl font-david-libre mb-2 text-[#ffddc3]">
                Soft Skills
              </h3>
              <Users className="text-[#ffddc3]" size={24} />
            </div>
            <div className="space-y-2 text-sm font-poppins text-[#ffecdd]">
              <p>• Communication & Customer Service</p>
              <p>• Analytical & Problem-solving</p>
              <p>• Team-Oriented & Proactive</p>
              <p>• Documentation & Best Practices</p>
              <p>• IT Service Management</p>
            </div>
          </motion.div>

          {/* Box 16 - Technical Tools */}
          <motion.div
            variants={itemVariants}
            className="bg-[#d8cfbc] p-6 rounded-md flex flex-col"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl md:text-2xl font-spectral font-bold text-[#4A3728]">
                Technical Tools
              </h3>
              <Zap className="text-[#6B4D30]" size={28} />
            </div>
            <div className="space-y-2 text-sm font-poppins text-black">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-[#6B4D30]" size={14} />
                <span>Microsoft 365 Suite</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-[#6B4D30]" size={14} />
                <span>Azure Portal & Services</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-[#6B4D30]" size={14} />
                <span>Ticketing Systems</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-[#6B4D30]" size={14} />
                <span>Wireshark & Network Analyzers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-[#6B4D30]" size={14} />
                <span>Command Line Tools</span>
              </div>
            </div>
          </motion.div>

          {/* Box 17 - Programming Languages */}
          <motion.div
            variants={itemVariants}
            className="bg-[#57544a] p-6 rounded-md flex flex-col justify-between"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg md:text-xl font-david-libre mb-2 text-[#ffddc3]">
                Languages
              </h3>
              <Code className="text-[#ffddc3]" size={24} />
            </div>
            <div className="space-y-2 text-sm font-poppins text-[#ffecdd]">
              <p>• Rust (System Programming)</p>
              <p>• C (Network Programming)</p>
              <p>• Python (Cybersecurity)</p>
              <p>• Shell Scripting</p>
              <p>• PowerShell</p>
            </div>
          </motion.div>

          {/* Box 18 - Key Achievements */}
          <motion.div
            variants={itemVariants}
            className="bg-[#d8cfbc] p-6 rounded-md flex flex-col"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl md:text-2xl font-spectral font-bold text-[#4A3728]">
                Achievements
              </h3>
              <Star className="text-[#6B4D30]" size={28} />
            </div>
            <div className="space-y-3 text-sm font-poppins text-black">
              <div className="flex items-start gap-2">
                <Star className="text-[#6B4D30] mt-0.5" size={14} />
                <span>6 Professional Certifications Completed</span>
              </div>
              <div className="flex items-start gap-2">
                <Star className="text-[#6B4D30] mt-0.5" size={14} />
                <span>3 Open Source Projects on GitHub</span>
              </div>
              <div className="flex items-start gap-2">
                <Star className="text-[#6B4D30] mt-0.5" size={14} />
                <span>Active TryHackMe Learner</span>
              </div>
              <div className="flex items-start gap-2">
                <Star className="text-[#6B4D30] mt-0.5" size={14} />
                <span>Technical Blog Maintainer</span>
              </div>
            </div>
          </motion.div>

          {/* Box 19 - Stats/Numbers */}
          <motion.div
            variants={itemVariants}
            className="bg-[#57544a] p-6 rounded-md flex flex-col justify-between"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg md:text-xl font-david-libre mb-2 text-[#ffddc3]">
                By The Numbers
              </h3>
              <TrendingUp className="text-[#ffddc3]" size={24} />
            </div>
            <div className="space-y-3 text-sm font-poppins text-[#ffecdd]">
              <div>
                <p className="text-2xl font-bold">6+</p>
                <p className="text-xs">Certifications</p>
              </div>
              <div>
                <p className="text-2xl font-bold">3+</p>
                <p className="text-xs">GitHub Projects</p>
              </div>
              <div>
                <p className="text-2xl font-bold">1+</p>
                <p className="text-xs">Year Experience</p>
              </div>
            </div>
          </motion.div>

          {/* Box 20 - Professional Interests */}
          <motion.div
            variants={itemVariants}
            className="bg-[#d8cfbc] p-6 rounded-md flex flex-col"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl md:text-2xl font-spectral font-bold text-[#4A3728]">
                Interests
              </h3>
              <Target className="text-[#6B4D30]" size={28} />
            </div>
            <div className="space-y-2 text-sm font-poppins text-black">
              <p>• Cybersecurity Research</p>
              <p>• Network Security</p>
              <p>• System Administration</p>
              <p>• Open Source Development</p>
              <p>• Continuous Learning</p>
            </div>
          </motion.div>

          {/* Box 21 - Resume Download */}
          <motion.div
            variants={itemVariants}
            className="bg-[#57544a] p-6 rounded-md flex flex-col justify-between"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg md:text-xl font-david-libre mb-2 text-[#ffddc3]">
                Resume
              </h3>
              <FileText className="text-[#ffddc3]" size={24} />
            </div>
            <p className="text-sm font-poppins text-[#ffecdd] mb-4">
              Download my resume to learn more about my experience and qualifications.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="mailto:imvishudevsingh@gmail.com?subject=Resume Request"
                className="flex items-center gap-2 text-[#ffddc3] hover:text-[#ffecdd] transition-colors"
              >
                <Download size={20} />
                <span className="text-sm font-poppins">Request Resume</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Box 22 - Contact Details Expanded */}
          <motion.div
            variants={itemVariants}
            className="bg-[#d8cfbc] p-6 rounded-md flex flex-col"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl md:text-2xl font-spectral font-bold text-[#4A3728]">
                Get In Touch
              </h3>
              <Mail className="text-[#6B4D30]" size={28} />
            </div>
            <div className="space-y-3 text-sm font-poppins text-black">
              <div>
                <p className="font-bold text-[#4A3728] mb-1">Email</p>
                <Link href="mailto:imvishudevsingh@gmail.com" className="text-[#6B4D30] hover:underline">
                  imvishudevsingh@gmail.com
                </Link>
              </div>
              <div>
                <p className="font-bold text-[#4A3728] mb-1">Phone</p>
                <p>+91 9724500202</p>
              </div>
              <div>
                <p className="font-bold text-[#4A3728] mb-1">Location</p>
                <p>Vadodara, Gujarat, India</p>
              </div>
            </div>
          </motion.div>

          {/* Box 23 - Professional Summary */}
          <motion.div
            variants={itemVariants}
            className="bg-[#d8cfbc] p-6 rounded-md flex flex-col sm:col-span-2"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl md:text-2xl font-spectral font-bold text-[#4A3728]">
                Professional Summary
              </h3>
              <Globe className="text-[#6B4D30]" size={28} />
            </div>
            <p className="text-sm md:text-base font-poppins text-black leading-relaxed">
              As a Technical Support Executive with a strong foundation in cybersecurity and networking, 
              I specialize in providing reliable IT support, troubleshooting complex issues, and maintaining 
              secure system environments. My expertise spans Windows and Linux administration, Active Directory 
              management, Microsoft Defender, SIEM tools, and network security. With hands-on experience in 
              ticket resolution, network troubleshooting, and POS system maintenance, I bring a proactive 
              approach to problem-solving and continuous improvement. I am passionate about cybersecurity 
              research, open source development, and staying current with the latest security trends and 
              technologies.
            </p>
          </motion.div>

          {/* Box 24 - Timeline/Experience Timeline */}
          <motion.div
            variants={itemVariants}
            className="bg-[#57544a] p-6 rounded-md flex flex-col justify-between"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg md:text-xl font-david-libre mb-2 text-[#ffddc3]">
                Timeline
              </h3>
              <Clock className="text-[#ffddc3]" size={24} />
            </div>
            <div className="space-y-3 text-sm font-poppins text-[#ffecdd]">
              <div>
                <p className="font-bold">2025 - Present</p>
                <p className="text-xs">Technical Support Executive</p>
              </div>
              <div>
                <p className="font-bold">2021 - 2025</p>
                <p className="text-xs">Integrated MCA - Parul University</p>
              </div>
              <div>
                <p className="font-bold">2019 - 2021</p>
                <p className="text-xs">High School - Doon Public School</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}