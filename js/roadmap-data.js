/**
 * Complete Cybersecurity Roadmap Dataset
 * Verified & Fact-Checked as of August-September 2026
 */

const ROADMAP_DATA = {
  metadata: {
    title: "The Complete Cybersecurity Roadmap",
    subtitle: "Zero Knowledge → Job-Ready Skills",
    description: "A self-contained, fact-checked roadmap focused on real cybersecurity skill: topics, verified free resources, active free certifications, hands-on practice, and portfolio building.",
    timeline: "9–14 months of consistent effort (10–15 hrs/week), faster if full-time",
    verifiedDate: "August–September 2026",
    philosophy: [
      {
        step: 1,
        title: "Learn",
        desc: "Courses, videos, reading, and foundational concepts."
      },
      {
        step: 2,
        title: "Practice",
        desc: "Labs, CTFs, home virtual lab, and real tool configuration."
      },
      {
        step: 3,
        title: "Prove",
        desc: "Free certs → paid certs → public portfolio write-ups."
      }
    ]
  },

  first30Days: [
    {
      id: "f30-1",
      title: "Set up VirtualBox + Kali Linux VM",
      description: "Download VirtualBox and Kali Linux virtual appliance from kali.org. Boot it up, get familiar with the terminal, and update packages.",
      link: "https://www.kali.org",
      linkText: "Download Kali Linux",
      category: "Setup",
      tag: "Must-Have"
    },
    {
      id: "f30-2",
      title: "Create Core Accounts (GitHub, LinkedIn, THM, HTB)",
      description: "Set up your learning identity. Your GitHub will host your write-ups and scripts; your LinkedIn documents your progress; TryHackMe and Hack The Box will be your daily practice grounds.",
      link: "https://tryhackme.com",
      linkText: "TryHackMe Signup",
      category: "Profiles",
      tag: "Identity"
    },
    {
      id: "f30-3",
      title: "Start Professor Messer's Network+ Course",
      description: "Watch 3–5 videos per week. Take structured notes on the OSI model, IP addressing, common ports, and core network protocols.",
      link: "https://www.professormesser.com/network-plus/n10-008/n10-008-video/n10-008-training-course/",
      linkText: "Watch Course",
      category: "Networking",
      tag: "Core Study"
    },
    {
      id: "f30-4",
      title: "Complete OverTheWire Bandit Levels 1–10",
      description: "Learn Linux terminal commands (cd, ls, cat, grep, find, ssh) by solving hands-on wargame levels over SSH.",
      link: "https://overthewire.org/wargames/bandit/",
      linkText: "OverTheWire Bandit",
      category: "Linux",
      tag: "Hands-On"
    },
    {
      id: "f30-5",
      title: "Start TryHackMe's 'Pre Security' Path",
      description: "Work through the interactive, beginner-friendly modules on network basics, web fundamentals, and how attacks work.",
      link: "https://tryhackme.com/path/outline/presecurity",
      linkText: "Pre Security Path",
      category: "Practice",
      tag: "Hands-On"
    },
    {
      id: "f30-6",
      title: "Enroll in Cisco's Free Introduction to Cybersecurity",
      description: "Free self-paced training that teaches basic defense concepts and awards an official verifiable Credly digital badge.",
      link: "https://www.netacad.com/courses/cybersecurity/introduction-cybersecurity",
      linkText: "Cisco NetAcad Course",
      category: "Free Cert",
      tag: "Credential"
    },
    {
      id: "f30-7",
      title: "Publish Your First GitHub / LinkedIn Learning Log",
      description: "Write a short summary of what you learned this week (e.g., 'Bandit levels 1-5 write-up' or 'How TCP 3-way handshake works'). Public documentation builds recruiter visibility early.",
      link: "https://github.com",
      linkText: "GitHub Repositories",
      category: "Portfolio",
      tag: "Crucial"
    }
  ],

  phases: [
    {
      id: 0,
      phaseNumber: "Phase 0",
      title: "Setup & Home Lab Readiness",
      timeline: "Week 1",
      badge: "Prerequisite",
      badgeColor: "gray",
      summary: "Before touching any content, set up these tools. They cost zero dollars and you will rely on them every single week.",
      description: "Lay the groundwork for continuous hands-on learning, documentation, and professional presence.",
      topics: [
        {
          id: "p0-t1",
          name: "Note-Taking System: Obsidian or Notion",
          detail: "Create a vault called 'Cybersecurity Notes'. Document every concept, tool cheat sheet, and lab write-up. Obsidian is offline, markdown-based, and ideal for linking concepts."
        },
        {
          id: "p0-t2",
          name: "GitHub Account (Your Future Portfolio)",
          detail: "Sign up at github.com. This is where you will commit your write-ups, automation scripts, and lab architectures."
        },
        {
          id: "p0-t3",
          name: "LinkedIn Profile (Public Learning Journey)",
          detail: "Even a bare profile works to start. You will build and share weekly progress posts as you advance."
        },
        {
          id: "p0-t4",
          name: "Virtualization Engine: VirtualBox or VMware Player",
          detail: "VirtualBox (100% free open-source) or VMware Workstation Player (free for personal use). This hosts your target VMs and testing machines."
        },
        {
          id: "p0-t5",
          name: "Kali Linux Virtual Machine",
          detail: "Download the pre-built VirtualBox or VMware VM image from kali.org — the gold standard penetration testing distro packed with hundreds of tools."
        },
        {
          id: "p0-t6",
          name: "TryHackMe & Hack The Box Accounts",
          detail: "Create free tier accounts at tryhackme.com and hackthebox.com for gamified browser-based and VPN-based security labs."
        }
      ],
      resources: [
        { name: "Obsidian", type: "Note-taking", desc: "Local markdown knowledge base", url: "https://obsidian.md" },
        { name: "VirtualBox", type: "Virtualization", desc: "Free x86/AMD64 hypervisor", url: "https://www.virtualbox.org" },
        { name: "Kali Linux", type: "Security OS", desc: "Pre-built VM image download", url: "https://www.kali.org/get-kali/#kali-virtual-machines" },
        { name: "TryHackMe", type: "Lab Platform", desc: "Gamified security exercises", url: "https://tryhackme.com" },
        { name: "Hack The Box", type: "Lab Platform", desc: "Hands-on cyber ranges", url: "https://www.hackthebox.com" }
      ],
      milestone: "Your Kali Linux VM boots cleanly, you can run terminal commands, and you have created your 'Cybersecurity Notes' repository."
    },
    {
      id: 1,
      phaseNumber: "Phase 1",
      title: "IT & Networking Foundations",
      timeline: "Months 1–3",
      badge: "Mandatory Foundation",
      badgeColor: "blue",
      summary: "You cannot skip this. The single biggest reason beginners stall out is trying to learn 'hacking' before understanding how computers and networks actually work.",
      description: "Cybersecurity is the defense and analysis of existing computer and network protocols. If you don't know how packets move or how an OS operates, security tools are just magic black boxes.",
      topics: [
        {
          id: "p1-t1",
          name: "Computer Architecture & OS Internals",
          detail: "How a computer boots (BIOS/UEFI, bootloaders), CPU architecture, processes, memory management (RAM, stack, heap), and file systems (NTFS, ext4)."
        },
        {
          id: "p1-t2",
          name: "OSI 7-Layer & TCP/IP 4-Layer Models",
          detail: "Understand both cold. Know the difference between Layer 2 (Data Link / MAC), Layer 3 (Network / IP), Layer 4 (Transport / TCP/UDP), and Layer 7 (Application)."
        },
        {
          id: "p1-t3",
          name: "IP Addressing & Subnetting",
          detail: "IPv4 vs IPv6, CIDR notation (/24, /16, /30), public vs private IP ranges (RFC 1918), and subnet calculations until it is automatic."
        },
        {
          id: "p1-t4",
          name: "Core Network Protocols & Common Ports",
          detail: "DNS (53), DHCP (67/68), HTTP (80), HTTPS (443), SSH (22), Telnet (23), FTP (21), SMTP (25), SMB (445), RDP (3389), etc. Understand stateful connections and 3-way handshakes."
        },
        {
          id: "p1-t5",
          name: "Network Hardware & Perimeter Defense",
          detail: "Routers, switches, VLANs, firewalls (stateless vs stateful vs NGFW), NAT, and VPN technologies (IPsec, OpenVPN, WireGuard)."
        },
        {
          id: "p1-t6",
          name: "Windows Administration Basics",
          detail: "Active Directory fundamentals (Domains, Forests, OUs, Domain Controllers), Group Policy Objects (GPOs), Windows Event Viewer, and PowerShell basics."
        },
        {
          id: "p1-t7",
          name: "Linux Fundamentals & Command Line",
          detail: "FHS directory structure (/etc, /var, /bin, /home), Linux file permissions (rwx, chmod, chown), package management (apt, dnf), and Bash scripting essentials."
        }
      ],
      resources: [
        { name: "Professor Messer's Network+", type: "Video Course", desc: "Full free video course aligned with CompTIA Network+", url: "https://www.professormesser.com/network-plus/n10-008/n10-008-video/n10-008-training-course/" },
        { name: "Cisco NetAcad — Intro to Networking", type: "Interactive", desc: "Free, self-paced, hands-on with Cisco Packet Tracer", url: "https://www.netacad.com" },
        { name: "freeCodeCamp — Networking Course", type: "Video Course", desc: "Comprehensive computer networking full course on YouTube", url: "https://www.freecodecamp.org/news/computer-networking-course/" },
        { name: "Linux Journey", type: "Interactive Guide", desc: "Structured, interactive Linux fundamentals tutorial", url: "https://linuxjourney.com" },
        { name: "OverTheWire: Bandit", type: "Wargame", desc: "Learn command-line Linux by solving 34+ progressive SSH challenges", url: "https://overthewire.org/wargames/bandit/" },
        { name: "Microsoft Learn: Windows Modules", type: "Self-Paced", desc: "Official training on networking & Windows administration", url: "https://learn.microsoft.com" }
      ],
      milestone: "Can you explain what happens, step-by-step, when you type a URL into a browser and press Enter — from DNS resolution to TCP 3-way handshake, TLS negotiation, and HTTP response?"
    },
    {
      id: 2,
      phaseNumber: "Phase 2",
      title: "Core Cybersecurity Concepts",
      timeline: "Months 2–4 (Overlaps Phase 1)",
      badge: "Core Theory",
      badgeColor: "emerald",
      summary: "Understand the core principles, threats, defensive models, and governance frameworks that govern information security.",
      description: "Begins during your second month of networking study so you start connecting networking protocols to real attacks and defenses.",
      topics: [
        {
          id: "p2-t1",
          name: "The CIA Triad & Security Architecture",
          detail: "Confidentiality, Integrity, Availability, and secondary concepts like Non-Repudiation, Defense in Depth, and Least Privilege."
        },
        {
          id: "p2-t2",
          name: "Risk Management & Threat Modeling",
          detail: "Risk = Threat × Vulnerability × Impact; qualitative vs quantitative risk; likelihood, risk mitigation, transference, acceptance, and STRIDE model."
        },
        {
          id: "p2-t3",
          name: "Authentication, Authorization, Accounting (AAA)",
          detail: "Identity and Access Management (IAM), Multi-Factor Authentication (MFA), Single Sign-On (SSO), Kerberos, OAuth 2.0, and SAML."
        },
        {
          id: "p2-t4",
          name: "Cryptography & PKI Fundamentals",
          detail: "Symmetric (AES, ChaCha20) vs Asymmetric encryption (RSA, ECC), cryptographic hashing (SHA-256), salt, digital signatures, and Public Key Infrastructure (CA, certificates, CRL)."
        },
        {
          id: "p2-t5",
          name: "Common Attack Vectors & Exploits",
          detail: "Phishing & social engineering, malware varieties (viruses, worms, trojans, ransomware), DoS/DDoS, Man-in-the-Middle (MitM), SQL injection (SQLi), and Cross-Site Scripting (XSS)."
        },
        {
          id: "p2-t6",
          name: "Governance, Risk & Compliance (GRC)",
          detail: "High-level understanding of regulatory frameworks: NIST Cybersecurity Framework (CSF), ISO 27001, GDPR, HIPAA, PCI-DSS, and SOC 2."
        },
        {
          id: "p2-t7",
          name: "Incident Response Lifecycle & BCDR",
          detail: "The 6 phases of incident response (Preparation, Detection, Containment, Eradication, Recovery, Lessons Learned), plus Business Continuity & Disaster Recovery basics."
        }
      ],
      resources: [
        { name: "Professor Messer's Security+ (SY0-701)", type: "Video Course", desc: "Gold-standard complete free video course covering the full Security+ syllabus", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/sy0-701-training-course/" },
        { name: "Google Cybersecurity Certificate", type: "Coursera Program", desc: "8-course program (~170 hrs) covering Python, Linux, SQL, SIEM. Free to audit all content!", url: "https://www.coursera.org/professional-certificates/google-cybersecurity" },
        { name: "Cisco Intro to Cybersecurity", type: "Course + Badge", desc: "Official Cisco introduction with free verifiable Credly digital badge", url: "https://www.netacad.com/courses/cybersecurity/introduction-cybersecurity" },
        { name: "Cisco Cybersecurity Essentials", type: "Course", desc: "Deeper dive into security technologies, architectures, and operations", url: "https://www.netacad.com/courses/cybersecurity/cybersecurity-essentials" },
        { name: "NIST CSF Official Documentation", type: "Framework", desc: "The official industry standard risk framework. Read once even as a beginner.", url: "https://www.nist.gov/cyberframework" },
        { name: "OWASP Top 10", type: "Standard", desc: "The definitive reference for the top 10 web application security risks", url: "https://owasp.org/www-project-top-ten/" }
      ],
      milestone: "You can identify the CIA impact of different breach scenarios and explain symmetric vs asymmetric cryptography without hesitating."
    },
    {
      id: 3,
      phaseNumber: "Phase 3",
      title: "Hands-On Practice (Labs & CTFs)",
      timeline: "Starts Month 2, Continuous Forever",
      badge: "Highest Priority",
      badgeColor: "amber",
      summary: "This is where you actually become employable. Reading alone does not get you hired — hands-on labs and CTFs do.",
      description: "Never treat practice as a separate phase that waits for theory to end. The moment you start learning Linux and networking, start cracking beginner boxes and analyzing traffic.",
      topics: [
        {
          id: "p3-t1",
          name: "TryHackMe Guided Rooms",
          detail: "Begin with the free 'Pre Security' path, then progress through 'Complete Beginner'. Learn Nmap, Wireshark, Burp Suite, and basic exploitation in browser or via OpenVPN."
        },
        {
          id: "p3-t2",
          name: "Hack The Box 'Starting Point'",
          detail: "Free guided track teaching core pentesting mechanics: connecting via OpenVPN, network enumeration, exploiting Telnet, FTP, Redis, and acquiring user/root flags."
        },
        {
          id: "p3-t3",
          name: "OverTheWire Wargames",
          detail: "Bandit for mastering Linux navigation and file parsing; Natas for understanding web security, server-side code execution, and SQL injection."
        },
        {
          id: "p3-t4",
          name: "PortSwigger Web Security Academy",
          detail: "100% free, crafted by the creators of Burp Suite. Features hundreds of hands-on interactive labs spanning SQLi, XSS, CSRF, SSRF, authentication bypass, and JWT attacks."
        },
        {
          id: "p3-t5",
          name: "picoCTF (Carnegie Mellon University)",
          detail: "Free, beginner-friendly Capture The Flag platform available year-round. Great for web exploitation, cryptography, binary exploitation, and reverse engineering."
        },
        {
          id: "p3-t6",
          name: "LetsDefend & CyberDefenders (Blue Team Labs)",
          detail: "Free tier hands-on SOC analyst simulation: triage security alerts, analyze PCAP packet captures in Wireshark, examine endpoint logs, and detect malicious PowerShell."
        },
        {
          id: "p3-t7",
          name: "Build Your Own Vulnerable Home Lab",
          detail: "Set up VirtualBox with Kali Linux + target VMs (Metasploitable 2 or DVWA). Practice network scanning, service enumeration, and exploitation in a strictly isolated, legal environment."
        }
      ],
      resources: [
        { name: "TryHackMe", type: "Gamified Labs", desc: "Interactive security walkthroughs & CTF rooms", url: "https://tryhackme.com" },
        { name: "Hack The Box Starting Point", type: "Beginner Range", desc: "Step-by-step introduction to target exploitation", url: "https://www.hackthebox.com" },
        { name: "PortSwigger Web Security Academy", type: "Web Pentest", desc: "World-class free web security labs from Burp Suite makers", url: "https://portswigger.net/web-security" },
        { name: "OverTheWire Natas", type: "Web Wargame", desc: "Hands-on web server security challenges", url: "https://overthewire.org/wargames/natas/" },
        { name: "picoCTF", type: "CTF Platform", desc: "Carnegie Mellon's accessible cyber competition platform", url: "https://picoctf.org" },
        { name: "LetsDefend", type: "SOC Simulator", desc: "Real-world SOC alert investigation platform", url: "https://letsdefend.io" },
        { name: "CyberDefenders", type: "Defensive CTF", desc: "Blue team challenges and artifact analysis", url: "https://cyberdefenders.org" }
      ],
      milestone: "You have completed 20+ TryHackMe rooms, solved Bandit levels 1-15, and solved 5+ PortSwigger labs with documented write-ups in your notes."
    },
    {
      id: 4,
      phaseNumber: "Phase 4",
      title: "Choose a Specialization Track",
      timeline: "Months 4–6",
      badge: "Career Decision",
      badgeColor: "purple",
      summary: "Cybersecurity is vast. After sampling the basics, select a focused path to optimize your portfolio and certifications.",
      description: "SOC Analyst is the most common and accessible entry-level role with high volume hiring. Pentesting has fewer entry-level spots, but SOC experience builds the perfect bridge into offensive roles.",
      specializationIntro: "Select a track below to explore typical job titles, day-to-day work, core tools, and tailored progression.",
      milestone: "You have selected a primary specialization track and aligned your hands-on practice, portfolio projects, and target certs with it."
    },
    {
      id: 5,
      phaseNumber: "Phase 5",
      title: "Verified Free Certifications Hub",
      timeline: "Months 2–6 (During Study)",
      badge: "Verified Free in 2026",
      badgeColor: "green",
      summary: "Earn legitimate, verifiable credentials at zero cost to prove interest on LinkedIn and resume while saving for paid certifications.",
      description: "Important honesty check: The ISC2 CC free voucher program ended on May 20, 2026. Do not fall for outdated blog posts! Below is what is genuinely free right now.",
      honestyAlert: {
        title: "Important 2026 Fact Check: Expired 'Free' Certifications",
        content: "Several programs frequently recommended in older YouTube videos and blogs are NO LONGER FREE as of 2026:\n• ISC2 Certified in Cybersecurity (CC): Free exam program closed May 20, 2026. New candidates must now pay standard exam fees.\n• EC-Council Essentials: Free exams discontinued.\n• Palo Alto PCCET & MITRE ATT&CK Defender: No longer free entry pathways.\nDon't waste time chasing dead voucher links!"
      },
      milestone: "Earn at least 2 verified free credentials (e.g. Fortinet NSE 1-3 or Centri BTJA) and display verifiable badges on LinkedIn."
    },
    {
      id: 6,
      phaseNumber: "Phase 6",
      title: "Your First Paid Certification: CompTIA Security+",
      timeline: "Months 5–8",
      badge: "The Industry Baseline",
      badgeColor: "red",
      summary: "This is the single certification that actually moves the needle on junior job applications and passes HR screening algorithms.",
      description: "CompTIA Security+ (SY0-701) is recognized globally and fulfills DoD 8570 / 8140 baseline compliance in the US. It validates core security readiness.",
      details: [
        {
          label: "Voucher Cost",
          value: "Roughly ~$400 (check comptia.org for current pricing and regional adjustments)"
        },
        {
          label: "100% Free Study Path",
          value: "Professor Messer's full SY0-701 YouTube series covers every single exam objective at zero cost. Complement with free practice questions on ExamCompass."
        },
        {
          label: "Discounts & Vouchers",
          value: "CompTIA offers student discounts with an active .edu email address via the CompTIA Academic Marketplace. Check your university or local community college!"
        },
        {
          label: "What If Money Is Blocked?",
          value: "Do NOT pause your learning! Continue building your GitHub portfolio, setting up your home lab SIEM, and completing TryHackMe rooms. Skills come first."
        },
        {
          label: "Lower-Cost Alternative",
          value: "Microsoft SC-900 (Security, Compliance & Identity Fundamentals): Exam fee is ~$99, and the complete official training is free on Microsoft Learn."
        }
      ],
      milestone: "Score 85%+ consistently on practice exam questions and sit the official Security+ SY0-701 examination."
    },
    {
      id: 7,
      phaseNumber: "Phase 7",
      title: "Specialize & Go Deeper",
      timeline: "Months 6–12",
      badge: "Advanced Mastery",
      badgeColor: "indigo",
      summary: "Transition from broad security fundamentals to advanced, specialization-specific tooling, realistic simulations, and recognized industry certs.",
      description: "Dive deep into the exact tools, architectures, and certifications required by employers in your chosen career track.",
      milestone: "You have built specialization-specific projects (e.g. SIEM lab, pentest reports, cloud security posture audit) and prepared for your specialized credential."
    },
    {
      id: 8,
      phaseNumber: "Phase 8",
      title: "Build a Public Portfolio & Get Hired",
      timeline: "Starts Month 3, Ongoing Forever",
      badge: "Employability Engine",
      badgeColor: "cyan",
      summary: "Certifications prove you studied. A portfolio proves you can actually execute the job. It's the decisive factor between an interview and silence.",
      description: "In a competitive market, candidates with public technical write-ups, home lab demonstrations, and code repositories stand far ahead of applicants who only hold paper credentials.",
      pillars: [
        {
          title: "1. GitHub CTF & Machine Write-Ups",
          desc: "Publish structured, well-formatted markdown write-ups for every TryHackMe room, Hack The Box machine, or OverTheWire level you solve. Document: What was the vulnerability? How did you discover it? How did you exploit or remediate it? What did you learn?"
        },
        {
          title: "2. The Home SOC Lab Project (Highest ROI for Blue Team)",
          desc: "Set up a virtual SIEM (free-tier Splunk or the open-source Elastic / ELK stack) ingesting Sysmon logs, Windows Event logs, or Linux auditd logs from target VMs. Trigger an attack (e.g. brute force, Atomic Red Team script), create an alert rule, and write a full case study on LinkedIn / GitHub."
        },
        {
          title: "3. Public Technical Learning Logs",
          desc: "Share your weekly journey on LinkedIn or a personal blog: 'Week 12: How I configured an ELK SIEM and detected credential dumping.' Technical recruiters and hiring managers actively search for candidates demonstrating genuine curiosity and communication ability."
        },
        {
          title: "4. Resume & Profile Optimization",
          desc: "Embed your TryHackMe and Hack The Box public profile badges directly in your resume header and LinkedIn profile. Technical managers inspect these profiles to verify real hands-on capability."
        }
      ],
      milestone: "Your GitHub contains 5+ comprehensive lab write-ups, your home SIEM/lab project is fully documented with architecture diagrams, and your LinkedIn profile showcases your continuous learning."
    }
  ],

  specializationTracks: [
    {
      id: "blue-team",
      name: "Blue Team / SOC Analyst",
      icon: "shield-check",
      roleOverview: "Monitor, detect, analyze, and respond to threats across an organization's network and endpoints.",
      entryTitles: ["SOC Analyst Tier 1", "Junior Security Analyst", "Incident Handler"],
      demandInsight: "Highest entry-level demand in the cybersecurity industry. More entry-level openings than pentesting.",
      keyTools: ["Wireshark", "Splunk / ELK SIEM", "Sysmon", "CrowdStrike / Defender EDR", "CyberChef", "VirusTotal"],
      freeTraining: [
        { name: "LetsDefend Free SOC Labs", url: "https://letsdefend.io", desc: "Simulate ticket triage and log analysis" },
        { name: "CyberDefenders Free Challenges", url: "https://cyberdefenders.org", desc: "Blue team artifact investigations" },
        { name: "Centri BTJA Pathway", url: "https://centri.org", desc: "Hands-on tools: Wireshark, CyberChef, Redline" },
        { name: "Splunk Fundamentals Free Tutorials", url: "https://www.splunk.com/en_us/training.html", desc: "Official training on enterprise SIEM queries" },
        { name: "Elastic (ELK) Free Guides", url: "https://www.elastic.co/training", desc: "Log ingestion, dashboarding, and security alerts" }
      ],
      paidCertTarget: {
        primary: "Blue Team Level 1 (BTL1) (~$399)",
        desc: "24-hour practical incident response exam with live evidence analysis. Immensely respected by SOC team leads."
      },
      proTip: "Build a home SIEM (Splunk free or Elastic) ingesting Sysmon logs from a Windows VM. This single portfolio item beats a stack of generic certs."
    },
    {
      id: "red-team",
      name: "Red Team / Penetration Testing",
      icon: "crosshair",
      roleOverview: "Ethically simulate real-world attacks to discover and report security vulnerabilities before malicious actors exploit them.",
      entryTitles: ["Junior Penetration Tester", "AppSec Associate", "Ethical Hacker"],
      demandInsight: "High competition for junior roles. A strong practical portfolio or prior SOC experience makes you stand out.",
      keyTools: ["Kali Linux", "Burp Suite Pro", "Nmap", "Metasploit", "Gobuster / ffuf", "Hydra", "Hashcat"],
      freeTraining: [
        { name: "TryHackMe (Pre-Security & Complete Beginner)", url: "https://tryhackme.com", desc: "Guided hands-on hacking labs" },
        { name: "Hack The Box Academy", url: "https://academy.hackthebox.com", desc: "Tier 0 and beginner modules" },
        { name: "PortSwigger Web Security Academy", url: "https://portswigger.net/web-security", desc: "Best-in-class free web exploitation academy" },
        { name: "OverTheWire (Bandit & Natas)", url: "https://overthewire.org", desc: "Command line and web application wargames" }
      ],
      paidCertTarget: {
        primary: "eJPT (~$249) → PNPT (~$399) → OSCP (~$1,749)",
        desc: "Start with eJPT (practical, accessible first offensive cert), advance to PNPT (realistic external/internal network pentest), and target OSCP 2–3 years into your career."
      },
      proTip: "Don't rush to OSCP immediately. Build solid scripting skills in Python and Bash, and master web fundamentals in PortSwigger Academy first."
    },
    {
      id: "cloud-security",
      name: "Cloud Security",
      icon: "cloud",
      roleOverview: "Architect, configure, and secure infrastructure, containers, and data hosted in Amazon AWS, Microsoft Azure, and Google Cloud.",
      entryTitles: ["Cloud Security Analyst", "Cloud Compliance Specialist", "Junior Cloud Engineer"],
      demandInsight: "Rapidly expanding field as enterprise workloads migrate to hybrid and multi-cloud architectures.",
      keyTools: ["AWS IAM / CloudTrail", "Azure Policy / Entra ID", "Terraform", "Prisma Cloud / Wiz", "Trivy", "Kubernetes"],
      freeTraining: [
        { name: "AWS Skill Builder (Cloud Practitioner Essentials)", url: "https://skillbuilder.aws", desc: "Free comprehensive AWS foundational training" },
        { name: "Microsoft Learn AZ-900 Path", url: "https://learn.microsoft.com/en-us/credentials/certifications/azure-fundamentals/", desc: "Free complete Azure fundamentals curriculum" },
        { name: "Google Cloud Skills Boost (Free Tier)", url: "https://www.cloudskillsboost.google", desc: "Introductory hands-on GCP labs and courses" }
      ],
      paidCertTarget: {
        primary: "AWS Certified Cloud Practitioner (~$100) or Microsoft Azure AZ-900 (~$99)",
        desc: "Affordable entry-level validation. Both can be studied completely free through official vendor learning paths."
      },
      proTip: "Learn Infrastructure as Code (Terraform) and Identity & Access Management (IAM) policies. Misconfigured permissions are the #1 cloud vulnerability."
    },
    {
      id: "grc",
      name: "GRC (Governance, Risk & Compliance)",
      icon: "clipboard-document-check",
      roleOverview: "Assess organizational risk, audit security controls, ensure regulatory compliance, and establish enterprise security policies.",
      entryTitles: ["GRC Analyst", "Information Security Compliance Analyst", "IT Auditor"],
      demandInsight: "High demand across finance, healthcare, and enterprise tech. Ideal for individuals with strong analytical and communication skills.",
      keyTools: ["NIST CSF / 800-53", "ISO 27001", "SOC 2 Type II", "ServiceNow GRC", "OneTrust", "Jira"],
      freeTraining: [
        { name: "NIST Cybersecurity Framework Documents", url: "https://www.nist.gov/cyberframework", desc: "Free PDFs of CSF 2.0 and NIST SP 800-53 controls" },
        { name: "ISACA Governance & Risk Whitepapers", url: "https://www.isaca.org", desc: "Free foundational guides on IT audit and risk appetite" }
      ],
      paidCertTarget: {
        primary: "Long-term goal: ISACA CISA or CRISC",
        desc: "CISA and CRISC carry heavy industry prestige but require verifiable work experience; start with Security+ and internal audit projects."
      },
      proTip: "Translate technical jargon into business impact. GRC professionals excel when they can explain risk in terms executives care about: dollars, reputation, and continuity."
    },
    {
      id: "dfir",
      name: "Digital Forensics & Incident Response (DFIR)",
      icon: "magnifying-glass",
      roleOverview: "Investigate active breaches, perform memory analysis, dissect malware behavior, and reconstruct attack timelines for legal and recovery purposes.",
      entryTitles: ["DFIR Analyst", "Incident Response Associate", "Digital Forensics Examiner"],
      demandInsight: "Critical specialization during cyber crises. Often combines high-pressure incident response with meticulous technical investigation.",
      keyTools: ["Autopsy", "FTK Imager", "Volatility (Memory)", "Wireshark", "KAPE", "YARA", "Ghidra"],
      freeTraining: [
        { name: "CyberDefenders DFIR Challenges", url: "https://cyberdefenders.org", desc: "Analyze real malware samples and memory dumps" },
        { name: "Centri BTJA Artifact Labs", url: "https://centri.org", desc: "Hands-on tools like Steghide, Redline, and CyberChef" },
        { name: "SANS Reading Room & Cheat Sheets", url: "https://www.sans.org/white-papers/", desc: "Free technical whitepapers and forensic cheat sheets" }
      ],
      paidCertTarget: {
        primary: "BTL1 or certified forensic investigator pathways",
        desc: "Practical hands-on scenario tests that prove evidence chain of custody and forensic triage skills."
      },
      proTip: "Learn how to image drives and dump RAM without contaminating evidence. Master timeline reconstruction using tools like Plaso / log2timeline."
    }
  ],

  certifications: [
    {
      id: "cert-fortinet",
      name: "Fortinet NSE 1, 2, 3",
      cost: "100% Free",
      isFree: true,
      category: "Free Verified",
      issuer: "Fortinet",
      validity: "2 Years",
      url: "https://training.fortinet.com",
      description: "Three self-paced certifications (Cybersecurity & Cloud Fundamentals, Intro to Next-Gen Firewall, FortiGate Operator). Free exam included upon course completion.",
      whyItMatters: "Carries real enterprise weight because Fortinet hardware and firewalls are deployed in corporate networks worldwide."
    },
    {
      id: "cert-cisco-intro",
      name: "Cisco Introduction to Cybersecurity",
      cost: "100% Free",
      isFree: true,
      category: "Free Verified",
      issuer: "Cisco Networking Academy",
      validity: "Lifetime (Digital Badge)",
      url: "https://www.netacad.com/courses/cybersecurity/introduction-cybersecurity",
      description: "Self-paced introductory course with a final exam that issues a verifiable Credly digital badge.",
      whyItMatters: "Recognized brand name, great introduction to fundamental concepts and modern threat landscapes."
    },
    {
      id: "cert-attackiq",
      name: "AttackIQ Academy — Foundations",
      cost: "100% Free",
      isFree: true,
      category: "Free Verified",
      issuer: "AttackIQ",
      validity: "Badges + CPE Credits",
      url: "https://academy.attackiq.com",
      description: "Six free modular courses covering breach & attack simulation, purple teaming, threat intelligence, MITRE ATT&CK mapping, and AI security.",
      whyItMatters: "Genuinely high-level technical content teaching how real enterprise defense teams evaluate adversary behaviors."
    },
    {
      id: "cert-centri-btja",
      name: "Centri Blue Team Junior Analyst (BTJA)",
      cost: "100% Free",
      isFree: true,
      category: "Free Verified",
      issuer: "Centri",
      validity: "Course Pathway",
      url: "https://centri.org/courses/blue-team-junior-analyst-pathway-bundle",
      description: "Six hands-on defensive courses utilizing real investigation tools: Wireshark, CyberChef, Redline, Steghide.",
      whyItMatters: "The most authentic hands-on defensive work of any free training available on the web."
    },
    {
      id: "cert-ibm-fundamentals",
      name: "IBM Cybersecurity Fundamentals",
      cost: "100% Free",
      isFree: true,
      category: "Free Verified",
      issuer: "IBM SkillsBuild",
      validity: "Credly Digital Badge",
      url: "https://skillsbuild.org",
      description: "Self-paced curriculum open to all registered learners. Pass the assessment with 80%+ to unlock the Credly badge.",
      whyItMatters: "Verifiable Credly credential from a top tech vendor to showcase early dedication on LinkedIn."
    },
    {
      id: "cert-opswat-cip",
      name: "OPSWAT Intro to Critical Infrastructure",
      cost: "100% Free",
      isFree: true,
      category: "Free Verified",
      issuer: "OPSWAT Academy",
      validity: "Completion Certificate",
      url: "https://opswatacademy.com/courses/introduction-to-cip",
      description: "Short (18-minute) focused course explaining Operational Technology (OT) and Industrial Control System (ICS) security.",
      whyItMatters: "Quick to complete, highly relevant if you are interested in industrial cybersecurity and SCADA environments."
    },
    {
      id: "cert-qualys",
      name: "Qualys Free Training Courses",
      cost: "100% Free",
      isFree: true,
      category: "Free Verified",
      issuer: "Qualys",
      validity: "Course Certificates",
      url: "https://www.qualys.com/training/",
      description: "Free self-paced training and interactive lab environments spanning vulnerability management, web app scanning, and compliance.",
      whyItMatters: "No purchase required; learn how enterprise vulnerability scanning is configured and monitored."
    },
    {
      id: "cert-portswigger-bscp",
      name: "PortSwigger BSCP (Burp Suite Certified)",
      cost: "Free Training / ~$99 Exam",
      isFree: false,
      category: "Free Training, Paid Exam",
      issuer: "PortSwigger",
      validity: "Certified Credential",
      url: "https://portswigger.net/web-security/certification",
      description: "Training is 100% free through the Web Security Academy. The official 4-hour practical exam costs ~$99 (requires Burp Suite Pro license).",
      whyItMatters: "The premier hands-on certification for web application penetration testing. Save for after Security+."
    },
    {
      id: "cert-ms-sc900",
      name: "Microsoft SC-900 (Security Fundamentals)",
      cost: "Free Training / $99 Exam",
      isFree: false,
      category: "Free Training, Paid Exam",
      issuer: "Microsoft",
      validity: "Microsoft Certified",
      url: "https://learn.microsoft.com/en-us/credentials/certifications/security-compliance-and-identity-fundamentals/",
      description: "Complete study path is 100% free on Microsoft Learn. Exam voucher costs $99 (note: old free voucher promo codes are discontinued).",
      whyItMatters: "Excellent affordable badge if you are targeting corporate environments running Microsoft 365 and Azure Entra ID."
    },
    {
      id: "cert-comptia-secplus",
      name: "CompTIA Security+ (SY0-701)",
      cost: "~$400 Exam (Study 100% Free)",
      isFree: false,
      category: "First Paid Target",
      issuer: "CompTIA",
      validity: "3 Years (CE Credits)",
      url: "https://www.comptia.org/certifications/security",
      description: "The premier entry-level cybersecurity certification worldwide. Meets DoD 8570/8140 directives and is required in many junior SOC postings.",
      whyItMatters: "The single credential that actually breaks through HR applicant tracking systems for beginners."
    },
    {
      id: "cert-btl1",
      name: "Blue Team Level 1 (BTL1)",
      cost: "~$399 Exam + Course",
      isFree: false,
      category: "Specialized Paid",
      issuer: "Security Blue Team",
      validity: "3 Years",
      url: "https://securityblue.team/why-btl1/",
      description: "24-hour practical incident response exam covering Phishing, SIEM, Digital Forensics, Threat Intelligence, and Incident Response.",
      whyItMatters: "Widely regarded as the most realistic hands-on blue team cert for aspiring SOC analysts."
    },
    {
      id: "cert-ejpt",
      name: "eLearnSecurity Junior Pentester (eJPT)",
      cost: "~$249 Exam",
      isFree: false,
      category: "Specialized Paid",
      issuer: "INE Security",
      validity: "3 Years",
      url: "https://ine.com/certifications/ejpt-certification",
      description: "100% practical, hands-on network penetration testing exam. Ideal stepping stone before tackling PNPT or OSCP.",
      whyItMatters: "Builds real exploitation confidence in a safe, simulated corporate network."
    }
  ],

  expiredAlerts: [
    {
      name: "ISC2 Certified in Cybersecurity (CC)",
      status: "Free Promotion Closed May 20, 2026",
      details: "Formerly offered a 1 million free exams initiative. The program closed to new applicants in May 2026. Exam now costs standard fee ($199)."
    },
    {
      name: "EC-Council Essentials Series",
      status: "No Longer Free",
      details: "Older blogs advertise free ethical hacking essentials vouchers, but exams now carry fees."
    },
    {
      name: "Palo Alto Networks PCCET",
      status: "Discontinued / Paid",
      details: "Palo Alto has restructured their certification tracks; free foundational certs are no longer provided."
    },
    {
      name: "MITRE ATT&CK Defender (MAD)",
      status: "Paid Subscription Only",
      details: "Now requires paid subscriptions to access credentialed testing."
    }
  ],

  creators: [
    {
      name: "NetworkChuck",
      focus: "Networking, Linux, Cloud & Security Fundamentals",
      style: "High energy, visual, hands-on with coffee, incredibly beginner-friendly",
      url: "https://www.youtube.com/@NetworkChuck",
      bestFor: "Demystifying subnets, TCP/IP, Linux command line, and coffee-fueled labs."
    },
    {
      name: "John Hammond",
      focus: "CTF Walkthroughs, Malware Analysis & Threat Intel",
      style: "Deeply technical yet clear explanations, daily security news, and live demonstrations",
      url: "https://www.youtube.com/@_JohnHammond",
      bestFor: "Watching how real hackers analyze malware, inspect obfuscated code, and solve CTF rooms."
    },
    {
      name: "The Cyber Mentor (Heath Adams)",
      focus: "Practical Ethical Hacking & Career Roadmaps",
      style: "No-BS, pragmatic advice from a seasoned pentesting company owner",
      url: "https://www.youtube.com/@TCMSecurityAcademy",
      bestFor: "12-hour practical ethical hacking courses and straight talk on breaking into the industry."
    },
    {
      name: "IppSec",
      focus: "Deep Hack The Box Machine Walkthroughs",
      style: "Methodical, quiet, masterclass-level breakdown of machine exploitation",
      url: "https://www.youtube.com/@ippsec",
      bestFor: "Searching specific attack techniques and watching an expert methodically exploit boxes."
    },
    {
      name: "David Bombal",
      focus: "Networking, Python for Cyber, Wireshark, & Hardware Hacking",
      style: "In-depth technical interviews, Packet Tracer labs, and software defined radio",
      url: "https://www.youtube.com/@DavidBombal",
      bestFor: "Deep dives with protocol creators, Wireshark packet inspections, and ethical hacking demos."
    }
  ],

  mistakesToAvoid: [
    {
      num: 1,
      title: "Cert-Collecting Without Hands-On Skill",
      bad: "Hoarding 10 multiple-choice badges on LinkedIn with zero GitHub code or lab write-ups to show for it.",
      remedy: "Every certification or course you complete must be paired with at least one documented lab write-up or hands-on project."
    },
    {
      num: 2,
      title: "Skipping Networking & Linux Basics",
      bad: "Jumping directly into Kali Linux and Metasploit without understanding how an IP packet reaches a destination or how DNS works.",
      remedy: "Spend Months 1–3 mastering OSI layers, common ports, subnetting, and Linux CLI navigation. Every serious hack exploits fundamental protocols."
    },
    {
      num: 3,
      title: "Believing Every 'Free Certification' List Online",
      bad: "Wasting hours hunting for expired ISC2 CC or EC-Council free vouchers from 2023–2024 blog posts.",
      remedy: "Check vendor pages directly. Our list is verified current for 2026. Focus your time on verified platforms like Fortinet, Cisco, Centri, and AttackIQ."
    },
    {
      num: 4,
      title: "Not Documenting Your Work Publicly",
      bad: "Clicking through TryHackMe rooms, closing the browser tab, and retaining nothing 3 weeks later.",
      remedy: "Take notes in Obsidian while doing every lab. Publish CTF write-ups on GitHub and share milestone reflections on LinkedIn so recruiters discover you."
    },
    {
      num: 5,
      title: "Studying Pure Theory in Isolation",
      bad: "Reading a 600-page Security+ textbook cover to cover before ever firing up a virtual machine or running Nmap.",
      remedy: "Always keep the 'Learn → Practice → Prove' loop running simultaneously every week. If you read about ARP poisoning today, inspect an ARP table in Wireshark tonight."
    }
  ],

  monthSummary: [
    { months: "Months 1–3", focus: "Networking + Linux/Windows fundamentals; start TryHackMe/HTB free rooms" },
    { months: "Months 2–4", focus: "Core security concepts (Professor Messer Security+, Google Cybersecurity Cert audit)" },
    { months: "Months 2–6", focus: "Pick up 2–4 free verified certifications along the way (Phase 5)" },
    { months: "Months 4–6", focus: "Choose a specialization track (Blue Team, Pentesting, Cloud, GRC, DFIR)" },
    { months: "Months 5–8", focus: "Study for and sit CompTIA Security+ (SY0-701)" },
    { months: "Months 3–12", focus: "Continuously build portfolio: GitHub write-ups, home SIEM lab, tech blog posts" },
    { months: "Months 6–12", focus: "Specialization-specific skills + first affordable paid cert (BTL1, eJPT, AWS/Azure fundamentals)" }
  ]
};

// Export to window for browser usage
if (typeof window !== "undefined") {
  window.ROADMAP_DATA = ROADMAP_DATA;
}
