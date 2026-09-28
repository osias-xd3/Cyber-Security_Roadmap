/**
 * Complete Cybersecurity Roadmap Dataset
 * Verified & Fact-Checked as of August-September 2026
 * Author: Muhammad Awais (Software Engineering Student at COMSATS Lahore)
 */

const ROADMAP_DATA = {
  metadata: {
    title: "The Complete Cybersecurity Roadmap",
    subtitle: "Zero Knowledge → Job-Ready Skills",
    author: "Muhammad Awais",
    authorTitle: "Software Engineering Student at COMSATS Lahore",
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
      overviewPoints: [
        "Create your core note-taking system in Obsidian or Notion to document all labs.",
        "Set up professional presence on LinkedIn and a repository on GitHub for write-ups.",
        "Install VirtualBox or VMware Player and import the pre-configured Kali Linux VM.",
        "Register free-tier accounts on TryHackMe and Hack The Box for daily practice."
      ],
      topics: [
        {
          id: "p0-t1",
          name: "Note-Taking System: Obsidian or Notion",
          detail: "Create a vault called 'Cybersecurity Notes'. Document every concept, tool cheat sheet, and lab write-up. Obsidian is offline, markdown-based, and ideal for linking concepts.",
          resources: [
            { name: "Obsidian Official", type: "Free Tool", url: "https://obsidian.md", desc: "Markdown note-taking app with local file storage & knowledge graphs" },
            { name: "Notion", type: "Web App", url: "https://www.notion.so", desc: "Structured web & desktop workspace for documentation" }
          ]
        },
        {
          id: "p0-t2",
          name: "GitHub Account (Your Future Portfolio)",
          detail: "Sign up at github.com. This is where you will commit your write-ups, automation scripts, and lab architectures.",
          resources: [
            { name: "GitHub Sign Up", type: "Portfolio Platform", url: "https://github.com", desc: "Where you will host your write-ups and tool scripts" }
          ]
        },
        {
          id: "p0-t3",
          name: "LinkedIn Profile (Public Learning Journey)",
          detail: "Even a bare profile works to start. You will build and share weekly progress posts as you advance.",
          resources: [
            { name: "LinkedIn", type: "Professional Network", url: "https://www.linkedin.com", desc: "Document your learning progress and engage with hiring managers" }
          ]
        },
        {
          id: "p0-t4",
          name: "Virtualization Engine: VirtualBox or VMware Player",
          detail: "VirtualBox (100% free open-source) or VMware Workstation Player (free for personal use). This hosts your target VMs and testing machines.",
          resources: [
            { name: "Oracle VirtualBox", type: "Open Source Hypervisor", url: "https://www.virtualbox.org", desc: "Free x86/AMD64 hypervisor for running isolated guest OSs" },
            { name: "VMware Workstation Player", type: "Hypervisor", url: "https://www.vmware.com", desc: "Free for personal non-commercial desktop virtualization" }
          ]
        },
        {
          id: "p0-t5",
          name: "Kali Linux Virtual Machine",
          detail: "Download the pre-built VirtualBox or VMware VM image from kali.org — the gold standard penetration testing distro packed with hundreds of tools.",
          resources: [
            { name: "Kali Linux Pre-Built Virtual Machines", type: "OS Download", url: "https://www.kali.org/get-kali/#kali-virtual-machines", desc: "Official ready-to-run VM image for VirtualBox & VMware" },
            { name: "Kali Documentation & Tools", type: "Documentation", url: "https://www.kali.org/docs/", desc: "Official guides on default configurations and bundled tools" }
          ]
        },
        {
          id: "p0-t6",
          name: "TryHackMe & Hack The Box Accounts",
          detail: "Create free tier accounts at tryhackme.com and hackthebox.com for gamified browser-based and VPN-based security labs.",
          resources: [
            { name: "TryHackMe Free Tier", type: "Lab Platform", url: "https://tryhackme.com", desc: "Interactive cybersecurity training rooms and gamified CTFs" },
            { name: "Hack The Box Free Tier", type: "Lab Platform", url: "https://www.hackthebox.com", desc: "Virtual labs and machine exploitation ranges" }
          ]
        }
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
      overviewPoints: [
        "Computer architecture, booting processes (UEFI/BIOS), CPU, memory, and file systems.",
        "Master the 7 layers of OSI and 4 layers of TCP/IP cold.",
        "Calculate IPv4/IPv6 subnets, CIDR notations, and private address spaces.",
        "Learn core protocols: DNS, DHCP, HTTP/HTTPS, SSH, SMB, and common port numbers.",
        "Learn Windows admin (Active Directory, GPOs) and Linux CLI (permissions, bash scripting)."
      ],
      topics: [
        {
          id: "p1-t1",
          name: "Computer Architecture & OS Internals",
          detail: "How a computer boots (BIOS/UEFI, bootloaders), CPU architecture, processes, memory management (RAM, stack, heap), and file systems (NTFS, ext4).",
          resources: [
            { name: "OSTEP (Operating Systems: Three Easy Pieces)", type: "Free University Book", url: "https://pages.cs.wisc.edu/~remzi/OSTEP/", desc: "Acclaimed university textbook & course on virtualization, concurrency, and persistence" },
            { name: "CrashCourse Computer Science Series", type: "Video Series", url: "https://www.youtube.com/playlist?list=PL8dPuuaLjXtNlUrzyH5r6jN9ulIgZBpdo", desc: "Visual introduction to CPU architecture, registers, RAM, and OS processes" }
          ]
        },
        {
          id: "p1-t2",
          name: "OSI 7-Layer & TCP/IP 4-Layer Models",
          detail: "Understand both cold. Know the difference between Layer 2 (Data Link / MAC), Layer 3 (Network / IP), Layer 4 (Transport / TCP/UDP), and Layer 7 (Application).",
          resources: [
            { name: "Professor Messer CompTIA Network+ (N10-009)", type: "Free Training Course", url: "https://www.professormesser.com/network-plus/n10-009/n10-009-video/n10-009-training-course/", desc: "Comprehensive official video training course covering the OSI model and packet encapsulation" },
            { name: "freeCodeCamp Computer Networking Course", type: "Full Course", url: "https://www.freecodecamp.org/news/computer-networking-fundamentals/", desc: "Computer networking fundamentals structured beginner tutorial" }
          ]
        },
        {
          id: "p1-t3",
          name: "IP Addressing & Subnetting",
          detail: "IPv4 vs IPv6, CIDR notation (/24, /16, /30), public vs private IP ranges (RFC 1918), and subnet calculations until it is automatic.",
          resources: [
            { name: "Professor Messer's Network+ Playlist (N10-009)", type: "Video Playlist", url: "https://www.professormesser.com/network-plus/n10-009/n10-009-video/n10-009-training-course/", desc: "All IP addressing and subnetting fundamentals are covered in Professor Messer's Network+ training course" },
            { name: "SubnettingPractice.com", type: "Interactive Drills", url: "https://subnettingpractice.com", desc: "Interactive subnet quizzes to build calculation speed and muscle memory" }
          ]
        },
        {
          id: "p1-t4",
          name: "Core Network Protocols & Common Ports",
          detail: "DNS (53), DHCP (67/68), HTTP (80), HTTPS (443), SSH (22), Telnet (23), FTP (21), SMTP (25), SMB (445), RDP (3389), etc. Understand stateful connections and 3-way handshakes.",
          resources: [
            { name: "Cisco Networking Academy: Networking Basics", type: "Free Course", url: "https://www.netacad.com/courses/networking-basics?courseLang=en-US", desc: "Official Cisco NetAcad fundamentals course on protocols, devices, and packet flow" },
            { name: "SpeedGuide Common Ports Database", type: "Lookup Tool", url: "https://www.speedguide.net/ports.php", desc: "Search and understand TCP/UDP ports and their vulnerabilities" }
          ]
        },
        {
          id: "p1-t5",
          name: "Network Hardware & Perimeter Defense",
          detail: "Routers, switches, VLANs, firewalls (stateless vs stateful vs NGFW), NAT, and VPN technologies (IPsec, OpenVPN, WireGuard).",
          resources: [
            { name: "Network Hardware by NetworkChuck", type: "Video Series", url: "https://www.youtube.com/watch?v=S7MNX_UD7vY&list=PLIhvC56v63IJVXv0GJcl9vO5Z6znCVb1P", desc: "Visual, beginner-friendly breakdowns of routers, switches, and network cabling" },
            { name: "Perimeter Defense by NetworkChuck", type: "Video Series", url: "https://www.youtube.com/watch?v=yLf2jRY39Rc&list=PLIhvC56v63IIyU0aBUed4qwP0nSCORAdB", desc: "In-depth video tutorials on firewalls, DMZs, proxies, and perimeter security" }
          ]
        },
        {
          id: "p1-t6",
          name: "Windows Administration Basics",
          detail: "Active Directory fundamentals (Domains, Forests, OUs, Domain Controllers), Group Policy Objects (GPOs), Windows Event Viewer, and PowerShell basics.",
          resources: [
            { name: "Active Directory Domain Services Training (Microsoft)", type: "Learning Path", url: "https://learn.microsoft.com/en-us/training/paths/active-directory-domain-services/", desc: "Official Microsoft Learn path on administering AD DS, domain controllers, and trust relationships" },
            { name: "AZ-800: Administering Windows Server Hybrid Core Infrastructure", type: "Microsoft Course", url: "https://learn.microsoft.com/en-us/training/courses/az-800t00", desc: "Official Microsoft course on Windows Server IaaS, networking, and identity management" }
          ]
        },
        {
          id: "p1-t7",
          name: "Linux Fundamentals & Command Line",
          detail: "FHS directory structure (/etc, /var, /bin, /home), Linux file permissions (rwx, chmod, chown), package management (apt, dnf), and Bash scripting essentials.",
          resources: [
            { name: "Linux Journey", type: "Free Interactive Guide", url: "https://linuxjourney.com", desc: "Structured, clean tutorial on Linux permissions, CLI, processes, and scripting" },
            { name: "OverTheWire: Bandit (SSH Wargame)", type: "Hands-on Wargame", url: "https://overthewire.org/wargames/bandit/", desc: "Master the Linux command line by solving 34+ progressive SSH wargame challenges" }
          ]
        }
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
      overviewPoints: [
        "The CIA Triad (Confidentiality, Integrity, Availability) and non-repudiation.",
        "Risk management formulas: Risk = Threat × Vulnerability × Impact.",
        "Authentication, Authorization, Accounting (AAA) & Identity and Access Management (IAM).",
        "Cryptography: Symmetric vs Asymmetric encryption, SHA-256 hashing, PKI, and digital certificates.",
        "Common cyber attacks: Phishing, ransomware, social engineering, DoS, MitM, SQLi, and XSS.",
        "High-level governance: NIST CSF, ISO 27001, GDPR, HIPAA, and the Incident Response lifecycle."
      ],
      topics: [
        {
          id: "p2-t1",
          name: "The CIA Triad & Security Architecture",
          detail: "Confidentiality, Integrity, Availability, and secondary concepts like Non-Repudiation, Defense in Depth, and Least Privilege.",
          resources: [
            { name: "Professor Messer Security+ SY0-701 Training Course", type: "Free Video Series", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/sy0-701-comptia-security-plus-course/", desc: "Comprehensive free video series covering the complete Security+ SY0-701 syllabus" }
          ]
        },
        {
          id: "p2-t2",
          name: "Risk Management & Threat Modeling",
          detail: "Risk = Threat × Vulnerability × Impact; qualitative vs quantitative risk; likelihood, risk mitigation, transference, acceptance, and STRIDE model.",
          resources: [
            { name: "Professor Messer Security+ SY0-701 Course", type: "Free Video Series", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/sy0-701-comptia-security-plus-course/", desc: "Note: All risk management & threat modeling topics are covered in Professor Messer's Security+ playlist" },
            { name: "NIST SP 800-30 Risk Assessment Guide", type: "Official Standard", url: "https://csrc.nist.gov/publications/detail/sp/800-30/rev-1/final", desc: "The definitive enterprise standard for conducting risk assessments" }
          ]
        },
        {
          id: "p2-t3",
          name: "Authentication, Authorization, Accounting (AAA)",
          detail: "Identity and Access Management (IAM), Multi-Factor Authentication (MFA), Single Sign-On (SSO), Kerberos, OAuth 2.0, and SAML.",
          resources: [
            { name: "Google Cybersecurity Professional Certificate", type: "Coursera (Free Audit)", url: "https://www.coursera.org/professional-certificates/google-cybersecurity", desc: "Free to audit modules on IAM, access controls, and security operations" }
          ]
        },
        {
          id: "p2-t4",
          name: "Cryptography & PKI Fundamentals",
          detail: "Symmetric (AES, ChaCha20) vs Asymmetric encryption (RSA, ECC), cryptographic hashing (SHA-256), salt, digital signatures, and Public Key Infrastructure (CA, certificates, CRL).",
          resources: [
            { name: "Professor Messer Security+ SY0-701 Course", type: "Video Lessons", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/sy0-701-comptia-security-plus-course/", desc: "Note: Cryptography, PKI, and hashing mechanics are covered in Professor Messer's Security+ playlist" }
          ]
        },
        {
          id: "p2-t5",
          name: "Common Attack Vectors & Exploits",
          detail: "Phishing & social engineering, malware varieties (viruses, worms, trojans, ransomware), DoS/DDoS, Man-in-the-Middle (MitM), SQL injection (SQLi), and Cross-Site Scripting (XSS).",
          resources: [
            { name: "Professor Messer Security+ SY0-701 Course", type: "Video Lessons", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/sy0-701-comptia-security-plus-course/", desc: "Note: Attack vectors, social engineering, and exploits are covered in Professor Messer's Security+ playlist" },
            { name: "OWASP Top 10 Official Documentation", type: "Standard Reference", url: "https://owasp.org/www-project-top-ten/", desc: "The definitive guide to the top 10 web application vulnerabilities" }
          ]
        },
        {
          id: "p2-t6",
          name: "Governance, Risk & Compliance (GRC)",
          detail: "High-level understanding of regulatory frameworks: NIST Cybersecurity Framework (CSF), ISO 27001, GDPR, HIPAA, PCI-DSS, and SOC 2.",
          resources: [
            { name: "Professor Messer Security+ SY0-701 Course", type: "Video Lessons", url: "https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/sy0-701-comptia-security-plus-course/", desc: "Note: Frameworks, compliance, and regulations are covered in Professor Messer's Security+ playlist" },
            { name: "NIST CSF 2.0 Documentation", type: "Official Framework", url: "https://www.nist.gov/cyberframework", desc: "The official industry standard cybersecurity framework" }
          ]
        },
        {
          id: "p2-t7",
          name: "Incident Response Lifecycle & BCDR",
          detail: "The 6 phases of incident response (Preparation, Detection, Containment, Eradication, Recovery, Lessons Learned), plus Business Continuity & Disaster Recovery basics.",
          resources: [
            { name: "Cisco Introduction to Cybersecurity", type: "NetAcad Course", url: "https://www.netacad.com/courses/cybersecurity/introduction-cybersecurity", desc: "Incident triage and disaster recovery concepts with free Credly badge" }
          ]
        }
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
      overviewPoints: [
        "TryHackMe 'Pre Security' and 'Complete Beginner' guided pathways.",
        "Hack The Box 'Starting Point' tier for fundamental pentesting mechanics.",
        "OverTheWire Bandit (Linux) and Natas (Web Security) wargames.",
        "PortSwigger Web Security Academy for hands-on Burp Suite & web exploits.",
        "LetsDefend & CyberDefenders for defensive SOC alert analysis & PCAP inspection.",
        "Build an isolated virtual home lab with Kali Linux and deliberately vulnerable VMs (DVWA, Metasploitable)."
      ],
      topics: [
        {
          id: "p3-t1",
          name: "TryHackMe Guided Rooms",
          detail: "Begin with the free 'Pre Security' path, then progress through 'Complete Beginner'. Learn Nmap, Wireshark, Burp Suite, and basic exploitation in browser or via OpenVPN.",
          resources: [
            { name: "TryHackMe Pre Security Path", type: "Guided Labs", url: "https://tryhackme.com/path/outline/presecurity", desc: "Interactive beginner rooms covering networking and web concepts" }
          ]
        },
        {
          id: "p3-t2",
          name: "Hack The Box 'Starting Point'",
          detail: "Free guided track teaching core pentesting mechanics: connecting via OpenVPN, network enumeration, exploiting Telnet, FTP, Redis, and acquiring user/root flags.",
          resources: [
            { name: "HTB Starting Point Track", type: "Target Machines", url: "https://www.hackthebox.com", desc: "Free guided machines designed for brand new penetration testers" }
          ]
        },
        {
          id: "p3-t3",
          name: "OverTheWire Wargames",
          detail: "Bandit for mastering Linux navigation and file parsing; Natas for understanding web security, server-side code execution, and SQL injection.",
          resources: [
            { name: "OverTheWire Natas", type: "Web Security Labs", url: "https://overthewire.org/wargames/natas/", desc: "Hands-on wargame teaching web application vulnerabilities level by level" }
          ]
        },
        {
          id: "p3-t4",
          name: "PortSwigger Web Security Academy",
          detail: "100% free, crafted by the creators of Burp Suite. Features hundreds of hands-on interactive labs spanning SQLi, XSS, CSRF, SSRF, authentication bypass, and JWT attacks.",
          resources: [
            { name: "PortSwigger Web Security Academy", type: "Best-in-Class Labs", url: "https://portswigger.net/web-security", desc: "The single best free web security training in the industry" }
          ]
        },
        {
          id: "p3-t5",
          name: "picoCTF (Carnegie Mellon University)",
          detail: "Free, beginner-friendly Capture The Flag platform available year-round. Great for web exploitation, cryptography, binary exploitation, and reverse engineering.",
          resources: [
            { name: "picoCTF Challenge Archive", type: "CTF Competition", url: "https://picoctf.org", desc: "Accessible beginner cyber challenge archive created by CMU" }
          ]
        },
        {
          id: "p3-t6",
          name: "LetsDefend & CyberDefenders (Blue Team Labs)",
          detail: "Free tier hands-on SOC analyst simulation: triage security alerts, analyze PCAP packet captures in Wireshark, examine endpoint logs, and detect malicious PowerShell.",
          resources: [
            { name: "LetsDefend SOC Simulator", type: "Blue Team Labs", url: "https://letsdefend.io", desc: "Realistic SOC tickets, alert triage, and log investigation" },
            { name: "CyberDefenders Challenges", type: "Artifact Analysis", url: "https://cyberdefenders.org", desc: "Memory dumps, PCAP files, and incident response exercises" }
          ]
        },
        {
          id: "p3-t7",
          name: "Build Your Own Vulnerable Home Lab",
          detail: "Set up VirtualBox with Kali Linux + target VMs (Metasploitable 2 or DVWA). Practice network scanning, service enumeration, and exploitation in a strictly isolated, legal environment.",
          resources: [
            { name: "Metasploitable 2 Download", type: "Vulnerable VM", url: "https://sourceforge.net/projects/metasploitable/", desc: "Intentionally vulnerable Linux virtual machine for lab scanning" },
            { name: "DVWA (Damn Vulnerable Web App)", type: "Web App Target", url: "https://github.com/digininja/DVWA", desc: "PHP/MySQL web app that is damn vulnerable for testing tools" }
          ]
        }
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
      overviewPoints: [
        "Blue Team / SOC: Threat detection, alert monitoring, and incident response (highest entry demand).",
        "Red Team / Pentesting: Ethical hacking, finding exploits, and writing vulnerability reports.",
        "Cloud Security: Hardening AWS, Azure, and GCP environments, IAM, and container safety.",
        "GRC: Audits, compliance frameworks (ISO, NIST), policies, and enterprise risk management.",
        "DFIR: Digital forensics, memory analysis, malware triage, and post-breach investigation."
      ],
      topics: [
        {
          id: "p4-t1",
          name: "Evaluate Specialization Interests",
          detail: "Assess whether you prefer active defense (Blue Team), exploit analysis (Red Team), infrastructure hardening (Cloud), or compliance policies (GRC).",
          resources: [
            { name: "CyberSeek Career Pathway Tool", type: "Career Data", url: "https://www.cyberseek.org/pathway.html", desc: "Interactive mapping of cybersecurity job titles, salaries, and required credentials" }
          ]
        }
      ],
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
      overviewPoints: [
        "Fact Check: ISC2 Certified in Cybersecurity (CC) free exam program ended May 20, 2026. Do not chase expired vouchers.",
        "Fortinet NSE 1, 2, 3: Three free certs on firewalls and network fundamentals with 2-year validity.",
        "Cisco Introduction to Cybersecurity: Free NetAcad course with a verifiable digital Credly badge.",
        "AttackIQ Academy: Six free modular courses on MITRE ATT&CK, threat intel, and purple teaming.",
        "Centri BTJA: Hands-on defensive coursework covering Wireshark, CyberChef, and Redline.",
        "IBM SkillsBuild & OPSWAT CIP: Free badges in fundamentals and critical infrastructure security."
      ],
      topics: [
        {
          id: "p5-t1",
          name: "Fortinet NSE 1, 2, 3 Pathways",
          detail: "Complete Fortinet's self-paced fundamentals courses and earn certifications with included exams valid for 2 years.",
          resources: [
            { name: "Fortinet Training Institute", type: "Free Official Cert", url: "https://training.fortinet.com", desc: "Enroll in NSE 1-3 modules at zero cost" }
          ]
        },
        {
          id: "p5-t2",
          name: "Cisco NetAcad Credly Digital Badge",
          detail: "Pass the Cisco Introduction to Cybersecurity final assessment to unlock your official Credly credential.",
          resources: [
            { name: "Cisco NetAcad Portal", type: "Free Badge", url: "https://www.netacad.com/courses/cybersecurity/introduction-cybersecurity", desc: "Enroll and claim your verified Credly badge" }
          ]
        },
        {
          id: "p5-t3",
          name: "AttackIQ Academy Foundations",
          detail: "Earn digital badges in breach & attack simulation, MITRE ATT&CK mapping, and threat intelligence.",
          resources: [
            { name: "AttackIQ Academy", type: "Free Badges + CPE", url: "https://academy.attackiq.com", desc: "Free enterprise security education modules" }
          ]
        },
        {
          id: "p5-t4",
          name: "Centri Blue Team Junior Analyst",
          detail: "Complete the 6 free defensive courses utilizing Wireshark, CyberChef, and Steghide.",
          resources: [
            { name: "Centri BTJA Bundle", type: "Free Defensive Pathway", url: "https://centri.org/courses/blue-team-junior-analyst-pathway-bundle", desc: "Hands-on blue team training pathway" }
          ]
        }
      ],
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
      overviewPoints: [
        "The #1 baseline credential required or preferred in entry-level SOC and analyst postings.",
        "Voucher cost is ~$400, but student discounts are available via the CompTIA Academic Marketplace.",
        "Study 100% free with Professor Messer's complete video series and ExamCompass tests.",
        "If budget is tight, do not stall! Keep building your portfolio, SIEM lab, and TryHackMe rooms."
      ],
      topics: [
        {
          id: "p6-t1",
          name: "CompTIA Security+ SY0-701 Preparation",
          detail: "Cover all five exam domains: General Security Concepts, Threats/Vulnerabilities, Security Architecture, Operations & Incident Response, Governance/Risk/Compliance.",
          resources: [
            { name: "Professor Messer's Security+ Hub", type: "Free Full Course", url: "https://www.professormesser.com/security-plus/", desc: "Free video course covering every single exam objective" },
            { name: "ExamCompass Security+ Practice", type: "Free Practice Tests", url: "https://www.examcompass.com", desc: "Topic-by-topic multiple-choice practice quizzes" },
            { name: "CompTIA Official Security+", type: "Certification Details", url: "https://www.comptia.org/certifications/security", desc: "Official exam objectives and testing requirements" }
          ]
        }
      ],
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
          value: "CompTIA offers student discounts with an active student email address via the CompTIA Academic Marketplace."
        },
        {
          label: "What If Money Is Blocked?",
          value: "Do NOT pause your learning! Continue building your GitHub portfolio, setting up your home lab SIEM, and completing TryHackMe rooms. Skills come first."
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
      overviewPoints: [
        "Blue Team: Master Splunk/ELK queries, alert triage on LetsDefend, target Blue Team Level 1 (BTL1).",
        "Red Team: Master Burp Suite Pro, web exploitation on PortSwigger, target eJPT or PNPT.",
        "Cloud Security: AWS Practitioner or Azure AZ-900, master IAM policies and Terraform configs.",
        "GRC: Deep dive into NIST CSF 2.0 and NIST 800-53 controls; long-term target: CISA or CRISC."
      ],
      topics: [
        {
          id: "p7-t1",
          name: "Deep Tool Specialization & Advanced Certs",
          detail: "Master enterprise security tooling aligned with your chosen track (Splunk, Wireshark, Burp Suite, CloudTrail, or GRC frameworks) and prepare for practical scenario exams.",
          resources: [
            { name: "Security Blue Team (BTL1)", type: "Practical Exam", url: "https://securityblue.team/why-btl1/", desc: "24-hour practical incident response exam with live evidence analysis" },
            { name: "eJPT Certification (INE)", type: "Practical Pentest", url: "https://ine.com/learning/certifications/ejpt", desc: "Hands-on network penetration testing certification" },
            { name: "AWS Cloud Practitioner Essentials", type: "Free AWS Training", url: "https://skillbuilder.aws", desc: "Official free cloud fundamentals curriculum" }
          ]
        }
      ],
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
      overviewPoints: [
        "Publish structured CTF & TryHackMe machine write-ups on GitHub explaining your methodology.",
        "Build a virtual home SOC lab ingesting Sysmon logs into Splunk or ELK, and write a technical case study.",
        "Document weekly learning reflections on LinkedIn to get noticed by recruiters.",
        "Put verified TryHackMe and Hack The Box badges directly in your resume header."
      ],
      topics: [
        {
          id: "p8-t1",
          name: "1. GitHub CTF & Machine Write-Ups",
          detail: "Publish structured, well-formatted markdown write-ups for every TryHackMe room, Hack The Box machine, or OverTheWire level you solve. Document: What was the vulnerability? How did you discover it? How did you exploit or remediate it? What did you learn?",
          resources: [
            { name: "GitHub Markdown Documentation Guide", type: "Guide", url: "https://github.com", desc: "How to structure professional CTF walkthroughs and repositories" }
          ]
        },
        {
          id: "p8-t2",
          name: "2. The Home SOC Lab Project (Highest ROI)",
          detail: "Set up a virtual SIEM (free-tier Splunk or the open-source Elastic / ELK stack) ingesting Sysmon logs, Windows Event logs, or Linux auditd logs from target VMs. Trigger an attack, create an alert rule, and write a full case study on LinkedIn / GitHub.",
          resources: [
            { name: "Splunk Free Tier", type: "Enterprise SIEM", url: "https://www.splunk.com", desc: "Free enterprise license allowing up to 500MB/day of log ingestion" },
            { name: "Elastic Security Free Guide", type: "Open Source SIEM", url: "https://www.elastic.co/security", desc: "Deploying Elastic agent and ingesting Windows Sysmon logs" }
          ]
        },
        {
          id: "p8-t3",
          name: "3. Public Technical Learning Logs",
          detail: "Share your weekly journey on LinkedIn or a personal blog: 'Week 12: How I configured an ELK SIEM and detected credential dumping.' Technical recruiters and hiring managers actively search for candidates demonstrating genuine curiosity and communication ability.",
          resources: [
            { name: "LinkedIn Articles", type: "Blogging Platform", url: "https://www.linkedin.com", desc: "Publishing long-form technical walkthroughs directly on LinkedIn" }
          ]
        },
        {
          id: "p8-t4",
          name: "4. Resume & Profile Optimization",
          detail: "Embed your TryHackMe and Hack The Box public profile badges directly in your resume header and LinkedIn profile. Technical managers inspect these profiles to verify real hands-on capability.",
          resources: [
            { name: "TryHackMe Profile Settings", type: "Badge Embed", url: "https://tryhackme.com", desc: "Generate public verifiable profile badges for resumes" }
          ]
        }
      ],
      milestone: "Your GitHub contains 5+ comprehensive lab write-ups, your home SIEM/lab project is fully documented with architecture diagrams, and your LinkedIn profile showcases your continuous learning."
    }
  ],

  specializationTracks: [
    {
        "id": "blue-team",
        "name": "Blue Team / SOC Analyst",
        "icon": "shield-check",
        "roleOverview": "Monitor network traffic, triage alerts, investigate suspicious endpoint behaviors, and defend systems from active attacks.",
        "entryTitles": [
            "SOC Analyst Tier 1",
            "Junior Security Analyst",
            "Incident Response Associate"
        ],
        "demandInsight": "Highest entry-level job volume in cybersecurity (~70% of junior postings). More entry slots than pentesting.",
        "keyTools": [
            "Wireshark",
            "Splunk / ELK SIEM",
            "Sysmon",
            "Microsoft Defender XDR",
            "CyberChef",
            "VirusTotal"
        ],
        "essentialCertsPath": [
            {
                "step": "1. Free Baseline",
                "name": "Fortinet NSE 1-3 & Cisco NetAcad",
                "issuer": "Fortinet / Cisco",
                "cost": "100% Free",
                "type": "Free Verified",
                "rating": "\u2605\u2605\u2605",
                "notes": "Build foundational credential proof on LinkedIn and resume before spending any money.",
                "url": "https://training.fortinet.com"
            },
            {
                "step": "2. Industry Baseline",
                "name": "CompTIA Security+ (SY0-701)",
                "issuer": "CompTIA",
                "cost": "$439 (or academic discount)",
                "type": "Paid Foundation",
                "rating": "\u2605\u2605\u2605",
                "notes": "The primary requirement for HR screening algorithms and US DoD 8140 baseline compliance.",
                "url": "https://www.comptia.org/certifications/security"
            },
            {
                "step": "3. Entry Practical Proof",
                "name": "Centri BTL1 or TryHackMe SAL1",
                "issuer": "Centri / TryHackMe",
                "cost": "~$500 / $349",
                "type": "Hands-On Practical",
                "rating": "\u2605\u2605\u2605",
                "notes": "Proves real SIEM investigation, packet analysis, and incident triage in a live 24-hour scenario.",
                "url": "https://centri.org"
            },
            {
                "step": "4. Intermediate SOC Operations",
                "name": "Microsoft SC-200 (Security Operations Analyst)",
                "issuer": "Microsoft",
                "cost": "$165",
                "type": "Cloud / SOC Specialization",
                "rating": "\u2605\u2605\u2605",
                "notes": "Validates Microsoft Sentinel SIEM and Defender XDR skills; free official study paths on Microsoft Learn.",
                "url": "https://learn.microsoft.com"
            },
            {
                "step": "5. Advanced Incident Handling",
                "name": "GIAC GCIH (Certified Incident Handler)",
                "issuer": "GIAC (SANS)",
                "cost": "$999 exam (Sponsor recommended)",
                "type": "Advanced Professional",
                "rating": "\u2605\u2605 (\u2605\u2605\u2605 if employer pays)",
                "notes": "The premier enterprise incident response benchmark. Only pursue via employer tuition reimbursement.",
                "url": "https://www.giac.org"
            },
            {
                "step": "6. Senior Career Gate",
                "name": "ISC2 CISSP",
                "issuer": "ISC2",
                "cost": "$749",
                "type": "Executive Benchmark",
                "rating": "\u2605\u2605\u2605",
                "notes": "Target after acquiring 5 years of verified professional experience for senior leadership roles.",
                "url": "https://www.isc2.org/certifications/cissp"
            }
        ],
        "gamesAndExercises": [
            {
                "title": "LetsDefend SOC Ticket Simulator",
                "platform": "LetsDefend",
                "format": "Interactive SOC Simulator",
                "badge": "Hands-On Triage",
                "url": "https://letsdefend.io",
                "desc": "Simulates a corporate Security Operations Center. Triage real alert tickets, analyze suspicious emails, and block command-and-control IPs."
            },
            {
                "title": "CyberDefenders Blue Team Investigations",
                "platform": "CyberDefenders",
                "format": "Artifact & PCAP Forensics",
                "badge": "DFIR / PCAP",
                "url": "https://cyberdefenders.org",
                "desc": "Gamified CTF-style challenges investigating actual malware memory dumps, Wireshark packet captures, and compromised endpoints."
            },
            {
                "title": "Centri Blue Team Junior Analyst (BTJA)",
                "platform": "Centri",
                "format": "Interactive Tool Drills",
                "badge": "100% Free",
                "url": "https://centri.org/courses/blue-team-junior-analyst-pathway-bundle",
                "desc": "6 hands-on courses practicing with Wireshark, CyberChef, Redline, and Steghide on real network captures."
            },
            {
                "title": "Splunk Boss of the SOC (BOTS) Datasets",
                "platform": "Splunk",
                "format": "Enterprise CTF Dataset",
                "badge": "SIEM Hunting",
                "url": "https://www.splunk.com",
                "desc": "Free realistic enterprise SOC attack datasets. Write SPL search queries to trace attacker lateral movement from initial breach to data exfiltration."
            }
        ],
        "proTip": "Build a home SIEM (Splunk Free or Elastic) ingesting Sysmon logs from a Windows VM. This single documented portfolio item beats a stack of generic multiple-choice certs."
    },
    {
        "id": "red-team",
        "name": "Red Team / Penetration Testing",
        "icon": "crosshair",
        "roleOverview": "Ethically simulate adversary attacks to uncover and report vulnerabilities across networks, web applications, and Active Directory environments.",
        "entryTitles": [
            "Junior Penetration Tester",
            "AppSec Associate",
            "Security Consultant"
        ],
        "demandInsight": "High competition for junior slots. Prior SOC experience or an active, practical GitHub portfolio provides a massive competitive edge.",
        "keyTools": [
            "Kali Linux",
            "Burp Suite Pro",
            "Nmap",
            "Metasploit",
            "Gobuster / ffuf",
            "BloodHound",
            "Hashcat"
        ],
        "essentialCertsPath": [
            {
                "step": "1. Free Hands-On Labs",
                "name": "TryHackMe Pre-Security & PortSwigger Academy",
                "issuer": "TryHackMe / PortSwigger",
                "cost": "100% Free",
                "type": "Free Training",
                "rating": "\u2605\u2605\u2605",
                "notes": "Master web vulnerabilities (SQLi, XSS, SSRF) and basic machine exploitation without spending a dime.",
                "url": "https://portswigger.net/web-security"
            },
            {
                "step": "2. Optional Foundation",
                "name": "CompTIA Security+ (SY0-701)",
                "issuer": "CompTIA",
                "cost": "$439",
                "type": "Baseline",
                "rating": "\u2605\u2605 (Offensive Context)",
                "notes": "Useful for government contracts and passing HR keyword filters, though primarily theoretical.",
                "url": "https://www.comptia.org/certifications/security"
            },
            {
                "step": "3. First Practical Exploitation",
                "name": "INE Security eJPT (v2) or TryHackMe PT1",
                "issuer": "INE / TryHackMe",
                "cost": "$249 / $297",
                "type": "Entry Practical",
                "rating": "\u2605\u2605\u2605",
                "notes": "Your first genuine hands-on exam attacking live target machines in a real simulated corporate network.",
                "url": "https://ine.com/learning/certifications/ejpt"
            },
            {
                "step": "4. Technical Depth & Reporting",
                "name": "HTB CPTS or TCM Security PNPT",
                "issuer": "Hack The Box / TCM",
                "cost": "~$210\u2013$499",
                "type": "Professional Practical",
                "rating": "\u2605\u2605\u2605",
                "notes": "Simulates complete commercial penetration tests including OSINT, Active Directory compromise, and client reporting.",
                "url": "https://academy.hackthebox.com"
            },
            {
                "step": "5. Industry Gold Standard",
                "name": "OffSec OSCP+ (PEN-200)",
                "issuer": "OffSec",
                "cost": "$1,749",
                "type": "Industry Benchmark",
                "rating": "\u2605\u2605\u2605",
                "notes": "The most recognized offensive security certification by hiring managers worldwide. Pursue once prepared.",
                "url": "https://www.offsec.com"
            },
            {
                "step": "6. Active Directory & Red Teaming",
                "name": "Altered Security CRTP \u2192 Zero-Point CRTO",
                "issuer": "Altered Security / Zero-Point",
                "cost": "$249 \u2192 ~\u00a3399",
                "type": "Red Team Operations",
                "rating": "\u2605\u2605\u2605",
                "notes": "Advanced adversary emulation, command-and-control (C2) operations, OPSEC, and domain escalation.",
                "url": "https://www.alteredsecurity.com"
            }
        ],
        "gamesAndExercises": [
            {
                "title": "OverTheWire: Bandit & Natas",
                "platform": "OverTheWire",
                "format": "CLI & Web Wargames",
                "badge": "100% Free",
                "url": "https://overthewire.org",
                "desc": "Progressive command-line wargame puzzles. Bandit teaches Linux CLI cold; Natas teaches web vulnerability exploitation."
            },
            {
                "title": "TryHackMe: Offensive Rooms & King of the Hill",
                "platform": "TryHackMe",
                "format": "Gamified Attack Rooms & KotH",
                "badge": "Interactive CTF",
                "url": "https://tryhackme.com",
                "desc": "Hands-on browser-based attack machines, guided penetration testing learning paths, and competitive multiplayer King of the Hill games."
            },
            {
                "title": "Hack The Box: Active Machines & Pro Labs",
                "platform": "Hack The Box",
                "format": "Virtual Machine Exploitation",
                "badge": "Real-World Boxes",
                "url": "https://www.hackthebox.com",
                "desc": "Industry-standard machine exploitation ranges. Crack hashes, exploit buffer overflows, and escalate privileges to root/SYSTEM."
            },
            {
                "title": "PortSwigger Web Security Academy Labs",
                "platform": "PortSwigger",
                "format": "Interactive Exploit Sandbox",
                "badge": "100% Free AppSec",
                "url": "https://portswigger.net/web-security",
                "desc": "Over 200 interactive labs created by the creators of Burp Suite. Practice SQLi, Blind XSS, CSRF, SSRF, and JWT tampering."
            }
        ],
        "proTip": "Don't rush to OSCP+ immediately. Master web exploitation on PortSwigger Academy and Active Directory enumeration first. Write clean, professional vulnerability reports for your GitHub."
    },
    {
        "id": "cloud-security",
        "name": "Cloud Security",
        "icon": "cloud",
        "roleOverview": "Architect, configure, and secure infrastructure, identity, and container workloads hosted across AWS, Microsoft Azure, and Google Cloud Platform.",
        "entryTitles": [
            "Cloud Security Analyst",
            "Cloud Security Engineer",
            "DevSecOps Associate"
        ],
        "demandInsight": "Rapidly expanding job market as enterprise infrastructure migrates to hybrid and multi-cloud architectures.",
        "keyTools": [
            "AWS IAM / CloudTrail",
            "Azure Policy / Entra ID",
            "Terraform",
            "Prisma Cloud / Wiz",
            "Trivy",
            "Kubernetes"
        ],
        "essentialCertsPath": [
            {
                "step": "1. Free Cloud Prep & Labs",
                "name": "AWS Skill Builder & Microsoft Learn",
                "issuer": "AWS / Microsoft",
                "cost": "100% Free",
                "type": "Free Digital Training",
                "rating": "\u2605\u2605\u2605",
                "notes": "Comprehensive free official paths covering cloud architecture, IAM roles, and cloud security baselines.",
                "url": "https://skillbuilder.aws"
            },
            {
                "step": "2. Foundation Validation",
                "name": "CompTIA Security+ or AWS Cloud Practitioner",
                "issuer": "CompTIA / AWS",
                "cost": "$439 / ~$100",
                "type": "Baseline",
                "rating": "\u2605\u2605",
                "notes": "Validates cloud fundamentals and shared responsibility concepts across cloud providers.",
                "url": "https://aws.amazon.com/certification"
            },
            {
                "step": "3. Enterprise Security Engineering",
                "name": "Microsoft SC-200 or SC-500",
                "issuer": "Microsoft",
                "cost": "$165 each",
                "type": "Cloud Associate",
                "rating": "\u2605\u2605\u2605",
                "notes": "SC-500 replaced AZ-500 in August 2026 and adds generative AI workload security; SC-200 covers Defender & Sentinel.",
                "url": "https://learn.microsoft.com"
            },
            {
                "step": "4. High-Volume Cloud Specialty",
                "name": "AWS Certified Security \u2013 Specialty (SCS-C03)",
                "issuer": "AWS",
                "cost": "$300",
                "type": "Cloud Specialty",
                "rating": "\u2605\u2605\u2605",
                "notes": "The highest-volume cloud security credential in US job postings. Tests deep IAM, KMS envelope encryption, and VPC security.",
                "url": "https://aws.amazon.com/certification"
            },
            {
                "step": "5. Senior Cloud Architecture",
                "name": "ISC2 CCSP or Microsoft SC-100",
                "issuer": "ISC2 / Microsoft",
                "cost": "~$599 / $165",
                "type": "Senior Cloud Expert",
                "rating": "\u2605\u2605",
                "notes": "Senior-level cloud architecture validation for enterprise architects and security consultants.",
                "url": "https://www.isc2.org/certifications/ccsp"
            }
        ],
        "gamesAndExercises": [
            {
                "title": "Microsoft Applied Skills: Cloud Labs",
                "platform": "Microsoft Learn",
                "format": "Live Sandboxed Cloud Lab",
                "badge": "100% Free Credential",
                "url": "https://learn.microsoft.com",
                "desc": "Perform real configuration tasks in a live Azure cloud sandbox (e.g. configuring Defender for Cloud and hardening storage accounts)."
            },
            {
                "title": "Flaws.cloud & Flaws2.cloud Wargames",
                "platform": "Flaws.cloud",
                "format": "Interactive AWS Wargame",
                "badge": "100% Free",
                "url": "http://flaws.cloud",
                "desc": "Hands-on levels teaching common AWS security mistakes: open S3 buckets, IAM misconfigurations, and EC2 metadata exposure."
            },
            {
                "title": "Google Cloud Skills Boost Security Quests",
                "platform": "Google Cloud",
                "format": "Interactive Lab Quests",
                "badge": "Hands-On Badges",
                "url": "https://www.cloudskillsboost.google",
                "desc": "Live hands-on labs in Google Cloud Console exploring IAM policies, VPC Service Controls, and Kubernetes container hardening."
            },
            {
                "title": "AWS Skill Builder: Cloud Threat Quests",
                "platform": "AWS",
                "format": "Role-Playing Cloud Game",
                "badge": "Gamified Simulation",
                "url": "https://skillbuilder.aws",
                "desc": "Gamified 3D role-playing learning adventure where you solve real cloud security architecture puzzles to protect virtual companies."
            }
        ],
        "proTip": "Learn Infrastructure as Code (Terraform) and Identity & Access Management (IAM) policies. Misconfigured permissions and exposed secrets are the #1 root cause of cloud breaches."
    },
    {
        "id": "grc",
        "name": "GRC (Governance, Risk & Compliance)",
        "icon": "clipboard-document-check",
        "roleOverview": "Assess enterprise risk, audit technological controls, ensure regulatory compliance, and draft organizational security policies.",
        "entryTitles": [
            "GRC Analyst",
            "IT Compliance Specialist",
            "Information Security Auditor"
        ],
        "demandInsight": "High stability and enterprise demand across healthcare, fintech, defense, and banking. High earning potential with fewer on-call emergencies.",
        "keyTools": [
            "NIST CSF 2.0 / SP 800-53",
            "ISO 27001",
            "SOC 2 Type II",
            "ServiceNow GRC",
            "OneTrust",
            "Jira"
        ],
        "essentialCertsPath": [
            {
                "step": "1. Free Foundations & Frameworks",
                "name": "IBM SkillsBuild & Cisco NetAcad Badges",
                "issuer": "IBM / Cisco",
                "cost": "100% Free",
                "type": "Free Verified",
                "rating": "\u2605\u2605",
                "notes": "Demonstrates early dedication and grasp of information privacy, ethical standards, and governance.",
                "url": "https://skillsbuild.org"
            },
            {
                "step": "2. Baseline Technical Validation",
                "name": "CompTIA Security+ (SY0-701)",
                "issuer": "CompTIA",
                "cost": "$439",
                "type": "Industry Baseline",
                "rating": "\u2605\u2605\u2605",
                "notes": "Essential baseline proving you understand the underlying technical controls you will be auditing.",
                "url": "https://www.comptia.org/certifications/security"
            },
            {
                "step": "3. The IT Audit Gold Standard",
                "name": "ISACA CISA (Certified Information Systems Auditor)",
                "issuer": "ISACA",
                "cost": "$575 (member) / $760",
                "type": "Audit Gold Standard",
                "rating": "\u2605\u2605\u2605",
                "notes": "The universally recognized credential for IT audit, assurance, control, and internal risk assessment.",
                "url": "https://www.isaca.org/credentialing/cisa"
            },
            {
                "step": "4. Enterprise Security Governance",
                "name": "ISACA CISM (Certified Information Security Manager)",
                "issuer": "ISACA",
                "cost": "$575 (member) / $760",
                "type": "CISO Track",
                "rating": "\u2605\u2605\u2605",
                "notes": "Designed for security managers and future CISOs. Focuses on aligning security strategy with business objectives.",
                "url": "https://www.isaca.org/credentialing/cism"
            },
            {
                "step": "5. Senior Enterprise Benchmark",
                "name": "ISC2 CISSP or CRISC",
                "issuer": "ISC2 / ISACA",
                "cost": "$749 / $575",
                "type": "Executive Benchmark",
                "rating": "\u2605\u2605\u2605",
                "notes": "The definitive credential for senior security architects, directors, and governance program leaders.",
                "url": "https://www.isc2.org/certifications/cissp"
            }
        ],
        "gamesAndExercises": [
            {
                "title": "NIST CSF 2.0 Control Mapping Workshop",
                "platform": "NIST Official",
                "format": "Practical Framework Exercises",
                "badge": "100% Free",
                "url": "https://www.nist.gov/cyberframework",
                "desc": "Hands-on exercises mapping enterprise business operations to the 6 core NIST functions: Govern, Identify, Protect, Detect, Respond, and Recover."
            },
            {
                "title": "ISACA CSX Risk Assessment Simulations",
                "platform": "ISACA",
                "format": "Interactive Case Studies",
                "badge": "Risk Modeling",
                "url": "https://www.isaca.org",
                "desc": "Practical case study exercises evaluating threat likelihood, calculating Annualized Loss Expectancy (ALE), and drafting risk registers."
            },
            {
                "title": "Automated Policy Auditing with Trivy & OpenSCAP",
                "platform": "Open Source",
                "format": "CLI Compliance Audits",
                "badge": "Hands-On GRC",
                "url": "https://aquasecurity.github.io/trivy/",
                "desc": "Learn how modern GRC teams automate compliance checks by running OpenSCAP benchmarks and Trivy misconfiguration scans against Linux VMs."
            }
        ],
        "proTip": "Translate technical jargon into business impact. GRC professionals excel when they explain risk in terms executives care about: dollars, reputation, regulatory penalties, and business continuity."
    },
    {
        "id": "dfir",
        "name": "Digital Forensics & Incident Response (DFIR)",
        "icon": "magnifying-glass",
        "roleOverview": "Investigate active breaches, perform memory forensics, dissect malware capabilities, and reconstruct attack timelines for containment and legal recovery.",
        "entryTitles": [
            "DFIR Analyst",
            "Incident Response Associate",
            "Digital Forensics Examiner"
        ],
        "demandInsight": "Critical frontline role during major cybersecurity crises. Combines fast-paced incident handling with meticulous evidence preservation.",
        "keyTools": [
            "Autopsy",
            "FTK Imager",
            "Volatility 3 (Memory)",
            "Wireshark",
            "KAPE",
            "YARA",
            "Ghidra"
        ],
        "essentialCertsPath": [
            {
                "step": "1. Free Hands-On Forensics",
                "name": "Centri BTJA Pathway & CyberDefenders Free Tier",
                "issuer": "Centri / CyberDefenders",
                "cost": "100% Free",
                "type": "Free Training",
                "rating": "\u2605\u2605\u2605",
                "notes": "Hands-on practice extracting artifacts with Wireshark, Redline, and CyberChef from real attack captures.",
                "url": "https://centri.org"
            },
            {
                "step": "2. Core Knowledge Baseline",
                "name": "CompTIA Security+ (SY0-701)",
                "issuer": "CompTIA",
                "cost": "$439",
                "type": "Industry Baseline",
                "rating": "\u2605\u2605\u2605",
                "notes": "Validates incident response phases, chain of custody rules, and hashing integrity standards.",
                "url": "https://www.comptia.org/certifications/security"
            },
            {
                "step": "3. Practical Incident Response",
                "name": "Centri BTL1 or CyberDefenders CCDL1",
                "issuer": "Centri / CyberDefenders",
                "cost": "~$500",
                "type": "Entry Practical",
                "rating": "\u2605\u2605\u2605",
                "notes": "Live practical exam testing evidence acquisition, memory triage, phishing analysis, and reporting.",
                "url": "https://centri.org"
            },
            {
                "step": "4. Digital Forensics Specialization",
                "name": "INE Security eCDFP",
                "issuer": "INE Security",
                "cost": "~$450",
                "type": "Forensic Practical",
                "rating": "\u2605\u2605",
                "notes": "Focuses on hard drive forensics, file system analysis, Master File Table (MFT) parsing, and registry forensics.",
                "url": "https://ine.com"
            },
            {
                "step": "5. Enterprise Incident Handling",
                "name": "GIAC GCIH / GCFA / GCFE",
                "issuer": "GIAC (SANS)",
                "cost": "$999 exam each",
                "type": "Elite Professional",
                "rating": "\u2605\u2605 (Employer-Sponsored)",
                "notes": "The gold standards for digital forensics and threat hunting. Best pursued through corporate training sponsorship.",
                "url": "https://www.giac.org"
            }
        ],
        "gamesAndExercises": [
            {
                "title": "CyberDefenders Artifact Forensics Challenges",
                "platform": "CyberDefenders",
                "format": "Real-World Incident CTF",
                "badge": "Live Artifacts",
                "url": "https://cyberdefenders.org",
                "desc": "Hands-on challenges analyzing actual disk images, raw PCAP files, and memory dumps from real-world ransomware and APT attacks."
            },
            {
                "title": "Autopsy Hard Drive Forensic CTFs",
                "platform": "Autopsy",
                "format": "Disk Image Reconstruction",
                "badge": "100% Free Tool",
                "url": "https://www.autopsy.com",
                "desc": "Load sample disk images into the open-source Autopsy digital forensics suite. Recover deleted files, extract browser history, and build chronological timelines."
            },
            {
                "title": "MemLabs: Volatility 3 Memory Forensics",
                "platform": "MemLabs / GitHub",
                "format": "RAM Analysis Challenges",
                "badge": "Memory Analysis",
                "url": "https://github.com/stuxnet999/MemLabs",
                "desc": "A set of 6 progressive memory analysis CTF challenges designed to teach the use of Volatility 3 for detecting malicious DLL injections and stealthy processes."
            }
        ],
        "proTip": "Learn how to image drives and dump RAM without contaminating evidence. Master timeline reconstruction using tools like Plaso / log2timeline and forensic artifact parsers like KAPE."
    }
],

  certificationsData: {
    whatChanged2026: [
      {
            "title": "ISC2 Certified in Cybersecurity (CC) Exam Program Ended",
            "badge": "Policy Shift",
            "desc": "ISC2's free 'One Million Certified in Cybersecurity' exam voucher program has ended. New candidates now pay the standard ~$199 fee (plus $50/yr maintenance fee). Free training remains available on isc2.org."
      },
      {
            "title": "CompTIA Exam Price Increases (Effective June 1, 2026)",
            "badge": "Pricing Update",
            "desc": "CompTIA raised US retail exam prices across the board: Security+ is now $439, Network+ is $399, A+ is $274 per exam ($548 total for both), CySA+ is $439, and PenTest+ is $439. Always seek academic student discounts."
      },
      {
            "title": "CompTIA CySA+ Moved to Version CS0-004",
            "badge": "Exam Refresh",
            "desc": "CompTIA CySA+ launched CS0-004 on June 23, 2026. The older CS0-003 English exam retires on December 22, 2026. Focus your study on the CS0-004 objectives."
      },
      {
            "title": "CompTIA Security+ Remains SY0-701",
            "badge": "Stable Version",
            "desc": "Security+ remains on version SY0-701. A newer SY0-801 blueprint is not expected before late 2026. Study and sit SY0-701 now without hesitation."
      },
      {
            "title": "Brand-New CompTIA SecAI+ (CY0-001) Launched",
            "badge": "New AI Cert",
            "desc": "CompTIA SecAI+ launched February 17, 2026 ($359), specifically validating skills in securing AI/ML models, adversarial prompt defense, and AI workload governance."
      },
      {
            "title": "Microsoft AZ-500 Retired \u2014 Replaced by SC-500",
            "badge": "Retired & Replaced",
            "desc": "Microsoft retired AZ-500 on August 31, 2026. It is officially replaced by SC-500 (Cloud and AI Security Engineer Associate, $165). Prior AZ-500 certs stay on transcripts but cannot be renewed."
      },
      {
            "title": "AWS Certified Security \u2013 Specialty Updated to SCS-C03",
            "badge": "Exam Refresh",
            "desc": "AWS Security - Specialty is now exam SCS-C03 (which replaced SCS-C02 in December 2025). The updated exam emphasizes KMS envelope encryption and container security."
      },
      {
            "title": "Cisco CyberOps Associate is Now 'CCNA Cybersecurity'",
            "badge": "Rebrand & AI Refresh",
            "desc": "Cisco CyberOps Associate (exam 200-201) has been rebranded to 'CCNA Cybersecurity' and refreshed to v1.2 with new AI-assisted SOC operational objectives."
      },
      {
            "title": "Security Blue Team Rebranded to 'Centri'",
            "badge": "Rebrand",
            "desc": "Security Blue Team rebranded to 'Centri' on June 1, 2026. The flagship BTL1 (Blue Team Level 1) certification itself and exam structure remain unchanged."
      },
      {
            "title": "OffSec OSCP is Now Sold as 'OSCP+' (3-Year Validity)",
            "badge": "Policy Change",
            "desc": "OffSec now issues OSCP as OSCP+ with a 3-year recertification validity window. Grandfathered holders who earned their OSCP prior to the change retain non-expiring credentials."
      }
],
    top10Shortlist: [
      {
            "rank": 1,
            "name": "CompTIA Security+ (SY0-701)",
            "issuer": "CompTIA",
            "cost": "$439",
            "rating": "\u2605\u2605\u2605",
            "why": "Most requested entry-level security credential on LinkedIn and job boards; fulfills US DoD 8140 baseline requirement; opens early government contractor doors."
      },
      {
            "rank": 2,
            "name": "INE eJPT (v2) or TryHackMe PT1",
            "issuer": "INE Security / TryHackMe",
            "cost": "$249 / $297",
            "rating": "\u2605\u2605\u2605",
            "why": "Inexpensive, 100% practical hands-on exams. Proves you can actually exploit live targets and write actionable technical reports rather than just memorizing MCQ answers."
      },
      {
            "rank": 3,
            "name": "HTB CPTS (Certified Penetration Testing Specialist)",
            "issuer": "Hack The Box",
            "cost": "~$210\u2013$490",
            "rating": "\u2605\u2605\u2605",
            "why": "Best technical depth per dollar for penetration testing in 2026. Deeper and more realistic than competitors; requires a commercial-grade professional report."
      },
      {
            "rank": 4,
            "name": "TCM Security PNPT (Practical Network Pentester)",
            "issuer": "TCM Security",
            "cost": "$499",
            "rating": "\u2605\u2605\u2605",
            "why": "Simulates a true commercial pentest including OSINT, Active Directory compromise, external/internal pivoting, written report, and live 15-minute client debrief."
      },
      {
            "rank": 5,
            "name": "Centri BTL1 or TryHackMe SAL1",
            "issuer": "Centri / TryHackMe",
            "cost": "~$500 / $349",
            "rating": "\u2605\u2605\u2605",
            "why": "Cheapest and most realistic ways to prove defensive SOC operations skills. Tests live incident response, pcap analysis, and ticket triage."
      },
      {
            "rank": 6,
            "name": "Altered Security CRTP \u2192 Zero-Point Security CRTO",
            "issuer": "Altered Security / Zero-Point",
            "cost": "$249 \u2192 ~\u00a3399",
            "rating": "\u2605\u2605\u2605",
            "why": "The best value progression into enterprise Active Directory exploitation, C2 infrastructure, OPSEC, and red team engagements."
      },
      {
            "rank": 7,
            "name": "Microsoft SC-200 / AWS Certified Security \u2013 Specialty",
            "issuer": "Microsoft / AWS",
            "cost": "$165 / $300",
            "rating": "\u2605\u2605\u2605",
            "why": "Affordable, extremely high-demand cloud security credentials for securing Azure Sentinel/Defender XDR or AWS cloud environments."
      },
      {
            "rank": 8,
            "name": "OffSec OSCP+ (PEN-200)",
            "issuer": "OffSec",
            "cost": "$1,749",
            "rating": "\u2605\u2605\u2605",
            "why": "The undisputed gold standard for HR keyword filters and offensive security recruiters. Worth paying once you are fully prepared and job-hunting."
      },
      {
            "rank": 9,
            "name": "ISC2 CISSP",
            "issuer": "ISC2",
            "cost": "$749",
            "rating": "\u2605\u2605\u2605",
            "why": "The ultimate senior benchmark. Fulfills executive DoD requirements and unlocks 6-figure senior management/architect compensation once you meet the 5-year experience requirement."
      },
      {
            "rank": 10,
            "name": "ISACA CISM / CISA",
            "issuer": "ISACA",
            "cost": "$575\u2013$760",
            "rating": "\u2605\u2605\u2605",
            "why": "The gold standards for IT auditing (CISA) and information security governance/CISO leadership (CISM)."
      }
],
    notWorthOutOfPocket: [
      {
            "title": "SANS / GIAC Courses ($8,500\u2013$9,000+)",
            "reason": "Outstanding world-class technical training, but almost never worth self-funding at entry level. Only take when fully funded by an employer training budget or SANS scholarship."
      },
      {
            "title": "EC-Council CEH v13 ($950\u2013$1,199+)",
            "reason": "Recognized by HR and on DoD 8140, but practitioners consider it heavily theory-focused and overpriced compared to practical certs like eJPT, PNPT, and CPTS."
      },
      {
            "title": "OffSec OSCE3 (~$5,247 total)",
            "reason": "Prestige credential requiring OSEP + OSWE + OSED. Unnecessary for getting hired; pursuit should be reserved for employer sponsorship or seasoned red team operators."
      },
      {
            "title": "Sitting CCSP or CISSP Too Early",
            "reason": "Both require verifiable full-time security experience (5 years for CISSP). Passing without experience only grants 'Associate of ISC2', which offers minimal entry-level hiring benefit."
      },
      {
            "title": "Multiple Entry-Level Practical Certs in the Same Track",
            "reason": "Do not collect both eJPT and PT1, or both BTL1 and SAL1. One practical credential is sufficient; spend your extra time and money building GitHub portfolio projects."
      }
],
    studyCostTips: [
      {
            "category": "Free Official Prep",
            "tip": "High-quality free preparation exists for almost every major cert: Professor Messer covers 100% of Security+ & Network+; Microsoft Learn covers all SC-series; AWS Skill Builder covers Cloud Practitioner; and PortSwigger Academy covers all web exploitation."
      },
      {
            "category": "Student Academic Discounts",
            "tip": "CompTIA offers deep discounts via the CompTIA Academic Marketplace; HTB Academy has a ~$8/month student subscription; and ISC2 provides reduced exam rates for active students."
      },
      {
            "category": "Exam Retake Bundles",
            "tip": "Never pay full price for single exam vouchers when retake packages exist. CompTIA offers discount retake insurance; TryHackMe (SAL1/PT1), TCM Security (PNPT), and INE (eJPT) include free retakes."
      },
      {
            "category": "Maintenance & Annual Fees",
            "tip": "Factor in ongoing maintenance costs before committing: CISSP carries a $135/yr AMF + 120 CPEs; ISACA certs charge $45-$85/yr; GIAC renews every 4 years ($499); CompTIA certs require CEUs every 3 years."
      },
      {
            "category": "Employer Sponsorship",
            "tip": "Over 70% of Fortune 500 companies have dedicated employee upskilling budgets. Expensive credentials (CISSP, GIAC, OSCP+, CISM) are routinely reimbursed after your initial hiring."
      }
],
    vendorDirectory: [
      {
            "name": "CompTIA Official",
            "url": "https://www.comptia.org/certifications"
      },
      {
            "name": "ISC2 Official",
            "url": "https://www.isc2.org/certifications"
      },
      {
            "name": "ISACA Official",
            "url": "https://www.isaca.org/credentialing"
      },
      {
            "name": "OffSec (Offensive Security)",
            "url": "https://www.offsec.com"
      },
      {
            "name": "INE Security",
            "url": "https://ine.com/learning/certifications"
      },
      {
            "name": "TCM Security Academy",
            "url": "https://tcm-sec.com"
      },
      {
            "name": "Hack The Box Academy",
            "url": "https://academy.hackthebox.com"
      },
      {
            "name": "TryHackMe",
            "url": "https://tryhackme.com"
      },
      {
            "name": "Centri (ex-Security Blue Team)",
            "url": "https://centri.org"
      },
      {
            "name": "GIAC (SANS)",
            "url": "https://www.giac.org"
      },
      {
            "name": "Microsoft Learn Credentials",
            "url": "https://learn.microsoft.com/credentials"
      },
      {
            "name": "AWS Certification",
            "url": "https://aws.amazon.com/certification"
      },
      {
            "name": "Google Cloud Certification",
            "url": "https://cloud.google.com/learn/certification"
      },
      {
            "name": "PortSwigger Web Security",
            "url": "https://portswigger.net/web-security"
      },
      {
            "name": "Zero-Point Security",
            "url": "https://www.zeropointsecurity.co.uk"
      },
      {
            "name": "Altered Security",
            "url": "https://www.alteredsecurity.com"
      },
      {
            "name": "CyberDefenders",
            "url": "https://cyberdefenders.org"
      }
],
    allCertifications: [
      {
            "id": "cert-fortinet-nse1",
            "name": "Fortinet NSE 1",
            "issuer": "Fortinet",
            "category": "Free Basic (A1)",
            "domain": "General / Foundation",
            "format": "Course + Free Exam",
            "cost": "100% Free",
            "isFree": true,
            "worthRating": "\u2605\u2605\u2605",
            "time": "~1.5 hrs",
            "notes": "Cybersecurity awareness and threat landscape overview. Includes free digital badge.",
            "url": "https://training.fortinet.com"
      },
      {
            "id": "cert-fortinet-nse2",
            "name": "Fortinet NSE 2",
            "issuer": "Fortinet",
            "category": "Free Basic (A1)",
            "domain": "General / Foundation",
            "format": "Course + Free Exam",
            "cost": "100% Free",
            "isFree": true,
            "worthRating": "\u2605\u2605\u2605",
            "time": "~2 hrs",
            "notes": "Cloud and network security fundamentals with a focus on enterprise architecture.",
            "url": "https://training.fortinet.com"
      },
      {
            "id": "cert-fortinet-nse3",
            "name": "Fortinet NSE 3",
            "issuer": "Fortinet",
            "category": "Free Basic (A1)",
            "domain": "General / Foundation",
            "format": "Course + Free Exam",
            "cost": "100% Free",
            "isFree": true,
            "worthRating": "\u2605\u2605\u2605",
            "time": "~10 hrs",
            "notes": "Core security technologies and Fortinet enterprise product capabilities.",
            "url": "https://training.fortinet.com"
      },
      {
            "id": "cert-cisco-intro",
            "name": "Introduction to Cybersecurity",
            "issuer": "Cisco Networking Academy",
            "category": "Free Basic (A1)",
            "domain": "General / Foundation",
            "format": "Course + Credly Badge",
            "cost": "100% Free",
            "isFree": true,
            "worthRating": "\u2605\u2605\u2605",
            "time": "~15 hrs",
            "notes": "Covers baseline security terminology, threats, and privacy with verifiable Credly digital badge.",
            "url": "https://www.netacad.com/courses/cybersecurity/introduction-cybersecurity"
      },
      {
            "id": "cert-cisco-essentials",
            "name": "Cybersecurity Essentials",
            "issuer": "Cisco Networking Academy",
            "category": "Free Basic (A1)",
            "domain": "General / Foundation",
            "format": "Course + Credly Badge",
            "cost": "100% Free",
            "isFree": true,
            "worthRating": "\u2605\u2605\u2605",
            "time": "~30 hrs",
            "notes": "Deeper exploration of network defense, encryption, and basic incident triage.",
            "url": "https://www.netacad.com"
      },
      {
            "id": "cert-cisco-junior-analyst",
            "name": "Junior Cybersecurity Analyst Pathway",
            "issuer": "Cisco Skills for All",
            "category": "Free Basic (A1)",
            "domain": "Defensive",
            "format": "Pathway + Badges",
            "cost": "100% Free",
            "isFree": true,
            "worthRating": "\u2605\u2605\u2605",
            "time": "Self-paced (~120 hrs)",
            "notes": "Combines networking fundamentals with security operations and packet analysis.",
            "url": "https://www.netacad.com"
      },
      {
            "id": "cert-ibm-skillsbuild",
            "name": "IBM Cybersecurity Fundamentals",
            "issuer": "IBM SkillsBuild",
            "category": "Free Basic (A1)",
            "domain": "General / Foundation",
            "format": "Course + Credly Badge",
            "cost": "100% Free",
            "isFree": true,
            "worthRating": "\u2605\u2605",
            "time": "~10 hrs",
            "notes": "Free Credly badge awarded upon scoring 80%+ on the end-of-course assessment.",
            "url": "https://skillsbuild.org"
      },
      {
            "id": "cert-opswat-icip",
            "name": "Introduction to Critical Infrastructure Protection (ICIP)",
            "issuer": "OPSWAT Academy",
            "category": "Free Basic (A1)",
            "domain": "Specialist",
            "format": "Short Course + Certificate",
            "cost": "100% Free",
            "isFree": true,
            "worthRating": "\u2605\u2605",
            "time": "<1 hr (18 mins)",
            "notes": "Concise introduction to OT/ICS cybersecurity and securing critical physical infrastructure.",
            "url": "https://opswatacademy.com"
      },
      {
            "id": "cert-google-cybersecurity",
            "name": "Google Cybersecurity Professional Certificate",
            "issuer": "Google / Coursera",
            "category": "Free Basic (A1)",
            "domain": "General / Foundation",
            "format": "8-Course Series (~170 hrs)",
            "cost": "Free to Audit (or Financial Aid)",
            "isFree": true,
            "worthRating": "\u2605\u2605\u2605",
            "time": "~6 months (self-paced)",
            "notes": "Covers Python, SQL, Linux, SIEM, and IDS. Completely free to audit; cert requires subscription or approved Financial Aid.",
            "url": "https://www.coursera.org/professional-certificates/google-cybersecurity"
      },
      {
            "id": "cert-paloalto-fundamentals",
            "name": "Cybersecurity / Network Security Fundamentals",
            "issuer": "Palo Alto Networks",
            "category": "Free Basic (A1)",
            "domain": "General / Foundation",
            "format": "Online Course Modules",
            "cost": "100% Free",
            "isFree": true,
            "worthRating": "\u2605\u2605",
            "time": "Self-paced",
            "notes": "Free online learning modules covering next-generation firewalls and AI in security fundamentals.",
            "url": "https://www.paloaltonetworks.com"
      },
      {
            "id": "cert-isc2-cc-training",
            "name": "Certified in Cybersecurity (CC) \u2014 Free Training",
            "issuer": "ISC2",
            "category": "Free Basic (A1)",
            "domain": "General / Foundation",
            "format": "Self-Paced Course",
            "cost": "Free Training (Exam is ~$199)",
            "isFree": true,
            "worthRating": "\u2605\u2605",
            "time": "~15\u201330 hrs",
            "notes": "Course materials remain free on ISC2. The free exam voucher program ended in May 2026; exam now costs ~$199.",
            "url": "https://www.isc2.org"
      },
      {
            "id": "cert-ms-sc900-training",
            "name": "Microsoft SC-900 Learning Path",
            "issuer": "Microsoft Learn",
            "category": "Free Basic (A1)",
            "domain": "Cloud",
            "format": "Interactive Reading & Labs",
            "cost": "Free Training (Exam is $99)",
            "isFree": true,
            "worthRating": "\u2605\u2605",
            "time": "~10\u201316 hrs",
            "notes": "Free official training for Security, Compliance, and Identity Fundamentals. Microsoft Virtual Training Days give 50% exam discounts.",
            "url": "https://learn.microsoft.com"
      },
      {
            "id": "cert-thm-pre-security",
            "name": "TryHackMe Pre-Security Path",
            "issuer": "TryHackMe",
            "category": "Free Basic (A1)",
            "domain": "General / Foundation",
            "format": "Interactive Browser Labs",
            "cost": "100% Free (Free Tier)",
            "isFree": true,
            "worthRating": "\u2605\u2605\u2605",
            "time": "~40 hrs",
            "notes": "The absolute best hands-on introduction to networking, Linux, web concepts, and basic exploits.",
            "url": "https://tryhackme.com"
      },
      {
            "id": "cert-attackiq-academy",
            "name": "AttackIQ Academy Foundations Series",
            "issuer": "AttackIQ",
            "category": "Free Intermediate (A2)",
            "domain": "Defensive",
            "format": "6 Modular Courses + Badges",
            "cost": "100% Free",
            "isFree": true,
            "worthRating": "\u2605\u2605\u2605",
            "time": "~15 hrs",
            "notes": "Covers breach & attack simulation (BAS), purple teaming, MITRE ATT&CK, threat-informed defense, and AI security with CPE credits.",
            "url": "https://academy.attackiq.com"
      },
      {
            "id": "cert-centri-btja",
            "name": "Blue Team Junior Analyst (BTJA) Pathway",
            "issuer": "Centri (ex-Security Blue Team)",
            "category": "Free Intermediate (A2)",
            "domain": "Defensive",
            "format": "6 Hands-On Tool Courses",
            "cost": "100% Free",
            "isFree": true,
            "worthRating": "\u2605\u2605\u2605",
            "time": "~20 hrs",
            "notes": "Real defensive investigations using Wireshark, CyberChef, Redline, and Steghide. Most authentic free blue-team training available.",
            "url": "https://centri.org"
      },
      {
            "id": "cert-qualys-training",
            "name": "Qualys Free Training & Labs",
            "issuer": "Qualys",
            "category": "Free Intermediate (A2)",
            "domain": "Defensive",
            "format": "Self-Paced Training + Labs",
            "cost": "100% Free",
            "isFree": true,
            "worthRating": "\u2605\u2605",
            "time": "Self-paced",
            "notes": "Free hands-on enterprise labs in vulnerability management and web application scanning with completion certificates.",
            "url": "https://www.qualys.com/training/"
      },
      {
            "id": "cert-mandiant-academy",
            "name": "Mandiant Academy Free Cyber Defense Training",
            "issuer": "Google Cloud / Mandiant",
            "category": "Free Intermediate (A2)",
            "domain": "Defensive",
            "format": "Self-Paced On-Demand",
            "cost": "100% Free (Free Tier)",
            "isFree": true,
            "worthRating": "\u2605\u2605\u2605",
            "time": "~10 hrs",
            "notes": "Elite threat defense training from Mandiant frontline analysts covering incident response and intelligence analysis.",
            "url": "https://cloud.google.com"
      },
      {
            "id": "cert-gc-skillsboost",
            "name": "Google Cloud Skills Boost Security Badges",
            "issuer": "Google Cloud",
            "category": "Free Intermediate (A2)",
            "domain": "Cloud",
            "format": "Hands-On Lab Quests",
            "cost": "Free Badges (Free Tier)",
            "isFree": true,
            "worthRating": "\u2605\u2605",
            "time": "Self-paced",
            "notes": "Free digital skill badges earned by completing live hands-on Google Cloud console security labs.",
            "url": "https://www.cloudskillsboost.google"
      },
      {
            "id": "cert-ms-applied-skills",
            "name": "Microsoft Applied Skills (Live Lab Credentials)",
            "issuer": "Microsoft",
            "category": "Free Intermediate (A2)",
            "domain": "Cloud",
            "format": "Live Sandboxed Lab Exams",
            "cost": "100% Free",
            "isFree": true,
            "worthRating": "\u2605\u2605\u2605",
            "time": "~2 hrs per assessment",
            "notes": "Interactive live-environment assessments (e.g. securing Azure Defender for Cloud). The only 100% free Microsoft credentials.",
            "url": "https://learn.microsoft.com"
      },
      {
            "id": "cert-aws-skillbuilder",
            "name": "AWS Skill Builder Digital Training",
            "issuer": "AWS",
            "category": "Free Intermediate (A2)",
            "domain": "Cloud",
            "format": "Interactive Courses & Badges",
            "cost": "100% Free",
            "isFree": true,
            "worthRating": "\u2605\u2605",
            "time": "Self-paced",
            "notes": "Free official training modules from Amazon covering AWS IAM, CloudTrail, S3 bucket encryption, and security baselines.",
            "url": "https://skillbuilder.aws"
      },
      {
            "id": "cert-htb-academy-free",
            "name": "Hack The Box Academy Free Tier Modules",
            "issuer": "Hack The Box",
            "category": "Free Intermediate (A2)",
            "domain": "Offensive",
            "format": "Interactive Guided Modules",
            "cost": "100% Free Tier",
            "isFree": true,
            "worthRating": "\u2605\u2605\u2605",
            "time": "Self-paced",
            "notes": "Hands-on entry-tier modules in Linux fundamentals, networking, and web requests with completion certificates.",
            "url": "https://academy.hackthebox.com"
      },
      {
            "id": "cert-letsdefend-free",
            "name": "LetsDefend & CyberDefenders Free Tiers",
            "issuer": "LetsDefend / CyberDefenders",
            "category": "Free Intermediate (A2)",
            "domain": "Defensive",
            "format": "SOC Simulation & PCAP Labs",
            "cost": "100% Free Tier",
            "isFree": true,
            "worthRating": "\u2605\u2605\u2605",
            "time": "Self-paced",
            "notes": "Simulated SOC alert ticket handling, log triage, and blue-team artifact investigations.",
            "url": "https://letsdefend.io"
      },
      {
            "id": "cert-portswigger-academy",
            "name": "PortSwigger Web Security Academy Labs",
            "issuer": "PortSwigger",
            "category": "Free Advanced (A3)",
            "domain": "Offensive",
            "format": "Interactive Browser Labs",
            "cost": "100% Free",
            "isFree": true,
            "worthRating": "\u2605\u2605\u2605",
            "time": "~100+ hrs",
            "notes": "Hundreds of free web-security labs from apprentice to expert level; the direct training ground for the BSCP exam.",
            "url": "https://portswigger.net/web-security"
      },
      {
            "id": "cert-htb-thm-advanced-free",
            "name": "Hack The Box & TryHackMe Advanced Free Content",
            "issuer": "HTB / TryHackMe",
            "category": "Free Advanced (A3)",
            "domain": "Offensive",
            "format": "Retired Machines & AD Labs",
            "cost": "100% Free",
            "isFree": true,
            "worthRating": "\u2605\u2605\u2605",
            "time": "Ongoing",
            "notes": "Retired machines and community rooms practicing Active Directory lateral movement and privilege escalation.",
            "url": "https://www.hackthebox.com"
      },
      {
            "id": "cert-cisa-ics-training",
            "name": "CISA Industrial Control Systems (ICS/OT) Training",
            "issuer": "CISA (US Government)",
            "category": "Free Advanced (A3)",
            "domain": "Specialist",
            "format": "Virtual Training Modules",
            "cost": "100% Free",
            "isFree": true,
            "worthRating": "\u2605\u2605",
            "time": "Self-paced",
            "notes": "Official US Cybersecurity and Infrastructure Security Agency training on operational technology and SCADA defense.",
            "url": "https://www.cisa.gov"
      },
      {
            "id": "cert-sans-scholarships",
            "name": "SANS Cyber Academy & Diversity Scholarships",
            "issuer": "SANS Institute",
            "category": "Free Advanced (A3)",
            "domain": "General / Foundation",
            "format": "Funded Academy Programs",
            "cost": "100% Funded (Competitive)",
            "isFree": true,
            "worthRating": "\u2605\u2605\u2605",
            "time": "Cohorts vary",
            "notes": "Competitive scholarship programs that fully fund $9,000+ SANS courses and GIAC certifications for accepted applicants.",
            "url": "https://www.sans.org"
      },
      {
            "id": "cert-ms-training-days",
            "name": "Microsoft Virtual Training Days (50% Off Vouchers)",
            "issuer": "Microsoft",
            "category": "Free Advanced (A3)",
            "domain": "Cloud",
            "format": "Live Webinars",
            "cost": "50% Off Exams",
            "isFree": true,
            "worthRating": "\u2605\u2605",
            "time": "1\u20132 days",
            "notes": "Attend free Microsoft training days to receive 50% discount vouchers for SC-900, SC-200, and SC-500 exams.",
            "url": "https://events.microsoft.com"
      },
      {
            "id": "cert-coursera-aid",
            "name": "Coursera Financial Aid Program",
            "issuer": "Coursera",
            "category": "Free Advanced (A3)",
            "domain": "General / Foundation",
            "format": "Full Paid Course Access",
            "cost": "100% Free if Approved",
            "isFree": true,
            "worthRating": "\u2605\u2605\u2605",
            "time": "14-day approval",
            "notes": "Apply for financial aid on Coursera to gain 100% free access to verified Google/IBM certificates.",
            "url": "https://www.coursera.org"
      },
      {
            "id": "cert-comptia-secplus",
            "name": "CompTIA Security+ (SY0-701)",
            "issuer": "CompTIA",
            "category": "Paid Foundation (B1)",
            "domain": "General / Foundation",
            "format": "MCQ + Performance Items (90 mins)",
            "cost": "$439",
            "isFree": false,
            "worthRating": "\u2605\u2605\u2605",
            "notes": "The #1 most requested entry-level security cert in job postings; meets US DoD 8140 baseline. Study free with Professor Messer.",
            "url": "https://www.comptia.org/certifications/security"
      },
      {
            "id": "cert-comptia-netplus",
            "name": "CompTIA Network+ (N10-009)",
            "issuer": "CompTIA",
            "category": "Paid Foundation (B1)",
            "domain": "General / Foundation",
            "format": "MCQ + Performance Items (90 mins)",
            "cost": "$399",
            "isFree": false,
            "worthRating": "\u2605\u2605",
            "notes": "Solid networking validation. Take only if networking is your weak spot; otherwise study the material free and skip straight to Security+.",
            "url": "https://www.comptia.org/certifications/network"
      },
      {
            "id": "cert-comptia-aplus",
            "name": "CompTIA A+ (220-1201 & 220-1202)",
            "issuer": "CompTIA",
            "category": "Paid Foundation (B1)",
            "domain": "General / Foundation",
            "format": "2 Exams (MCQ + Labs)",
            "cost": "$274 \u00d7 2 = $548",
            "isFree": false,
            "worthRating": "\u2605",
            "notes": "Help-desk/IT support foundation. Skip if you already understand basic computer hardware, operating systems, and virtualization.",
            "url": "https://www.comptia.org/certifications/a"
      },
      {
            "id": "cert-isc2-cc-paid",
            "name": "ISC2 Certified in Cybersecurity (CC)",
            "issuer": "ISC2",
            "category": "Paid Foundation (B1)",
            "domain": "General / Foundation",
            "format": "100 MCQ (2 hours)",
            "cost": "~$199 (+$50/yr AMF)",
            "isFree": false,
            "worthRating": "\u2605\u2605",
            "notes": "Cheaper than Security+ and offers a clean stepping stone to SSCP/CISSP. Less recognized in commercial enterprise hiring than Security+.",
            "url": "https://www.isc2.org/certifications/cc"
      },
      {
            "id": "cert-cisco-ccst",
            "name": "Cisco CCST Cybersecurity",
            "issuer": "Cisco",
            "category": "Paid Foundation (B1)",
            "domain": "General / Foundation",
            "format": "MCQ (50 mins)",
            "cost": "~$125 (Entry Pricing)",
            "isFree": false,
            "worthRating": "\u2605\u2605",
            "notes": "Cisco entry-level support technician credential; pairs naturally with the free Cisco Networking Academy courses.",
            "url": "https://www.cisco.com"
      },
      {
            "id": "cert-ms-sc900-paid",
            "name": "Microsoft SC-900",
            "issuer": "Microsoft",
            "category": "Paid Foundation (B1)",
            "domain": "Cloud",
            "format": "MCQ (60 mins)",
            "cost": "$99 (50% off with Training Days)",
            "isFree": false,
            "worthRating": "\u2605\u2605",
            "notes": "Security, compliance, and identity fundamentals. Excellent affordable validation if you will be working in Microsoft/Entra environments.",
            "url": "https://learn.microsoft.com"
      },
      {
            "id": "cert-aws-cloud-practitioner",
            "name": "AWS Certified Cloud Practitioner (CLF-C02)",
            "issuer": "AWS",
            "category": "Paid Foundation (B1)",
            "domain": "Cloud",
            "format": "MCQ (90 mins)",
            "cost": "~$100",
            "isFree": false,
            "worthRating": "\u2605\u2605",
            "notes": "Validates cloud fundamentals, shared responsibility model, and AWS billing. Free training available on AWS Skill Builder.",
            "url": "https://aws.amazon.com/certification"
      },
      {
            "id": "cert-giac-gfact",
            "name": "GIAC GFACT / GSEC",
            "issuer": "GIAC (SANS)",
            "category": "Paid Foundation (B1)",
            "domain": "General / Foundation",
            "format": "MCQ (Open Book)",
            "cost": "~$999 exam (~$8,500+ with course)",
            "isFree": false,
            "worthRating": "\u2605",
            "notes": "Outstanding technical course, but far too expensive to self-fund at entry level. Security+ delivers comparable hiring signal for ~5% of the cost.",
            "url": "https://www.giac.org"
      },
      {
            "id": "cert-ine-ejpt",
            "name": "INE Security eJPT (v2)",
            "issuer": "INE Security",
            "category": "Entry Practical (B2)",
            "domain": "Offensive",
            "format": "48-hour practical (35 questions in live network)",
            "cost": "$249 (or ~$299/yr INE subscription)",
            "isFree": false,
            "worthRating": "\u2605\u2605\u2605",
            "notes": "Best first offensive security certification. Fully practical, beginner-friendly, and very affordable.",
            "url": "https://ine.com/learning/certifications/ejpt"
      },
      {
            "id": "cert-thm-pt1",
            "name": "TryHackMe PT1 \u2013 Junior Penetration Tester",
            "issuer": "TryHackMe",
            "category": "Entry Practical (B2)",
            "domain": "Offensive",
            "format": "48-hour practical + report submission",
            "cost": "$297 (includes 3 mo Premium + 1 retake)",
            "isFree": false,
            "worthRating": "\u2605\u2605\u2605",
            "notes": "Covers web exploitation, network pivoting, Active Directory, and report writing. Highly realistic.",
            "url": "https://tryhackme.com"
      },
      {
            "id": "cert-comptia-pentest",
            "name": "CompTIA PenTest+ (PT0-003)",
            "issuer": "CompTIA",
            "category": "Entry Practical (B2)",
            "domain": "Offensive",
            "format": "MCQ + Performance Items",
            "cost": "$439",
            "isFree": false,
            "worthRating": "\u2605\u2605",
            "notes": "Vendor-neutral pentesting credential useful for government/DoD requirements. Less hands-on than eJPT or PT1.",
            "url": "https://www.comptia.org/certifications/pentest"
      },
      {
            "id": "cert-centri-cpta",
            "name": "Certified Penetration Testing Associate (CPTA)",
            "issuer": "Centri",
            "category": "Entry Practical (B2)",
            "domain": "Offensive",
            "format": "Practical live exam",
            "cost": "Check Centri (~$350\u2013$450)",
            "isFree": false,
            "worthRating": "\u2605\u2605",
            "notes": "Newer offensive practical cert from the creators of BTL1 focusing on practical exploitation mechanics.",
            "url": "https://centri.org"
      },
      {
            "id": "cert-centri-btl1",
            "name": "Centri BTL1 \u2013 Blue Team Level 1",
            "issuer": "Centri (ex-Security Blue Team)",
            "category": "Entry Practical (B2)",
            "domain": "Defensive",
            "format": "24-hour practical incident response exam",
            "cost": "~\u00a3399 (\u2248 $500 includes course + 2 attempts)",
            "isFree": false,
            "worthRating": "\u2605\u2605\u2605",
            "notes": "Strongest practitioner recognition among junior blue-team credentials. Tests real SIEM, forensics, phishing, and threat intel.",
            "url": "https://centri.org"
      },
      {
            "id": "cert-thm-sal1",
            "name": "TryHackMe SAL1 \u2013 Security Analyst Level 1",
            "issuer": "TryHackMe",
            "category": "Entry Practical (B2)",
            "domain": "Defensive",
            "format": "Live SOC simulator scenarios + MCQ",
            "cost": "$349 (includes 3 mo Premium + 1 retake)",
            "isFree": false,
            "worthRating": "\u2605\u2605\u2605",
            "notes": "Cheapest realistic SOC exam; built with industry input from Accenture and Salesforce.",
            "url": "https://tryhackme.com"
      },
      {
            "id": "cert-cyberdefenders-ccdl1",
            "name": "CyberDefenders CCDL1 \u2013 Certified CyberDefender Level 1",
            "issuer": "CyberDefenders",
            "category": "Entry Practical (B2)",
            "domain": "Defensive",
            "format": "Practical incident response investigation",
            "cost": "~$500 (training + labs + exam)",
            "isFree": false,
            "worthRating": "\u2605\u2605",
            "notes": "Great hands-on practical cert if you already train regularly on CyberDefenders artifact challenges.",
            "url": "https://cyberdefenders.org"
      },
      {
            "id": "cert-htb-cdsa",
            "name": "HTB CDSA \u2013 Certified Defensive Security Analyst",
            "issuer": "Hack The Box",
            "category": "Entry Practical (B2)",
            "domain": "Defensive",
            "format": "7-day practical + commercial incident report",
            "cost": "~$210 voucher / ~$490 with Academy",
            "isFree": false,
            "worthRating": "\u2605\u2605",
            "notes": "Rigorous SOC investigation and reporting exam. Technically deep; excellent if you use HTB Academy.",
            "url": "https://academy.hackthebox.com"
      },
      {
            "id": "cert-comptia-cysa",
            "name": "CompTIA CySA+ (CS0-004)",
            "issuer": "CompTIA",
            "category": "Entry Practical (B2)",
            "domain": "Defensive",
            "format": "MCQ + Performance Items",
            "cost": "$439",
            "isFree": false,
            "worthRating": "\u2605\u2605",
            "notes": "Best-known defensive cert on job postings; more theory-heavy than BTL1 or SAL1. CS0-004 launched June 2026.",
            "url": "https://www.comptia.org/certifications/cybersecurity-analyst"
      },
      {
            "id": "cert-ine-esoc",
            "name": "INE eSOC / eCIR / eCTHP",
            "issuer": "INE Security",
            "category": "Entry Practical (B2)",
            "domain": "Defensive",
            "format": "Hands-on practical exams",
            "cost": "~$450 each (or subscription)",
            "isFree": false,
            "worthRating": "\u2605\u2605",
            "notes": "Modular practical exams covering Security Operations, Incident Response, and Threat Hunting.",
            "url": "https://ine.com"
      },
      {
            "id": "cert-htb-cpts",
            "name": "HTB CPTS \u2013 Certified Penetration Testing Specialist",
            "issuer": "Hack The Box",
            "category": "Intermediate Professional (B3)",
            "domain": "Offensive",
            "format": "10-day practical + commercial-grade report",
            "cost": "$490 (Silver Annual) or ~$210 voucher",
            "isFree": false,
            "worthRating": "\u2605\u2605\u2605",
            "notes": "Best value practical pentesting cert in 2026. Technically deeper than most competitors and teaches professional reporting.",
            "url": "https://academy.hackthebox.com"
      },
      {
            "id": "cert-tcm-pnpt",
            "name": "TCM Security PNPT \u2013 Practical Network Pentester",
            "issuer": "TCM Security",
            "category": "Intermediate Professional (B3)",
            "domain": "Offensive",
            "format": "5-day practical + 15-min live debrief",
            "cost": "$499 (training + exam + 1 free retake)",
            "isFree": false,
            "worthRating": "\u2605\u2605\u2605",
            "notes": "Simulates a real commercial engagement: OSINT, Active Directory compromise, external/internal pivoting, written report, and live debrief.",
            "url": "https://tcm-sec.com"
      },
      {
            "id": "cert-offsec-oscp",
            "name": "OffSec OSCP+ (PEN-200)",
            "issuer": "OffSec",
            "category": "Intermediate Professional (B3)",
            "domain": "Offensive",
            "format": "24-hour practical + 24-hour report",
            "cost": "$1,749 (course + exam) / $1,699 standalone",
            "isFree": false,
            "worthRating": "\u2605\u2605\u2605",
            "notes": "The most recognized offensive security cert by HR filters and recruiters. Sold as OSCP+ (3-year validity). Expensive; consider CPTS/PNPT first.",
            "url": "https://www.offsec.com"
      },
      {
            "id": "cert-alteredsec-crtp",
            "name": "Altered Security CRTP (Certified Red Team Professional)",
            "issuer": "Altered Security",
            "category": "Intermediate Professional (B3)",
            "domain": "Offensive",
            "format": "24-hour Active Directory practical exam",
            "cost": "$249 (30-day course + lab)",
            "isFree": false,
            "worthRating": "\u2605\u2605\u2605",
            "notes": "Best-value Active Directory attack certification. Taught by Nikhil Mittal; indispensable for aspiring red teamers.",
            "url": "https://www.alteredsecurity.com"
      },
      {
            "id": "cert-portswigger-bscp",
            "name": "PortSwigger BSCP (Burp Suite Certified Practitioner)",
            "issuer": "PortSwigger",
            "category": "Intermediate Professional (B3)",
            "domain": "Offensive",
            "format": "4-hour live web practical",
            "cost": "~$99 exam (+ Burp Suite Pro license)",
            "isFree": false,
            "worthRating": "\u2605\u2605",
            "notes": "Training on the Web Security Academy is 100% free. The premier hands-on web application exploit certification.",
            "url": "https://portswigger.net/web-security"
      },
      {
            "id": "cert-ms-sc200",
            "name": "Microsoft SC-200 \u2013 Security Operations Analyst",
            "issuer": "Microsoft",
            "category": "Intermediate Professional (B3)",
            "domain": "Cloud",
            "format": "Hands-on & Scenario Exam",
            "cost": "$165",
            "isFree": false,
            "worthRating": "\u2605\u2605\u2605",
            "notes": "Defender XDR + Microsoft Sentinel SOC engineering. High market demand; training is 100% free on Microsoft Learn.",
            "url": "https://learn.microsoft.com"
      },
      {
            "id": "cert-ms-sc500",
            "name": "Microsoft SC-500 \u2013 Cloud & AI Security Engineer Associate",
            "issuer": "Microsoft",
            "category": "Intermediate Professional (B3)",
            "domain": "Cloud",
            "format": "Scenario & Architecture Exam",
            "cost": "$165",
            "isFree": false,
            "worthRating": "\u2605\u2605\u2605",
            "notes": "Replaced AZ-500 on August 31, 2026. Covers Azure infrastructure security and securing generative AI enterprise workloads.",
            "url": "https://learn.microsoft.com"
      },
      {
            "id": "cert-aws-security-specialty",
            "name": "AWS Certified Security \u2013 Specialty (SCS-C03)",
            "issuer": "AWS",
            "category": "Intermediate Professional (B3)",
            "domain": "Cloud",
            "format": "MCQ + Scenario Items (170 mins)",
            "cost": "$300",
            "isFree": false,
            "worthRating": "\u2605\u2605\u2605",
            "notes": "Highest-volume cloud security cert in US job postings. Replaced SCS-C02 in Dec 2025; tests IAM, KMS, and CloudTrail deep.",
            "url": "https://aws.amazon.com/certification"
      },
      {
            "id": "cert-giac-gcih",
            "name": "GIAC GCIH \u2013 Certified Incident Handler",
            "issuer": "GIAC (SANS)",
            "category": "Intermediate Professional (B3)",
            "domain": "Defensive",
            "format": "CyberLive Practical + MCQ",
            "cost": "$999 exam (~$9,000+ course bundle)",
            "isFree": false,
            "worthRating": "\u2605\u2605",
            "notes": "DoD 8140 baseline for incident responders. \u2605\u2605\u2605 value if employer pays; do not self-fund.",
            "url": "https://www.giac.org"
      },
      {
            "id": "cert-cisco-ccna-cyber",
            "name": "Cisco CCNA Cybersecurity (200-201)",
            "issuer": "Cisco",
            "category": "Intermediate Professional (B3)",
            "domain": "Defensive",
            "format": "MCQ + Simulation Items",
            "cost": "~$300",
            "isFree": false,
            "worthRating": "\u2605\u2605",
            "notes": "Formerly CyberOps Associate; refreshed to v1.2 with AI-driven security operations objectives.",
            "url": "https://www.cisco.com"
      },
      {
            "id": "cert-isc2-cissp",
            "name": "ISC2 CISSP (Certified Information Systems Security Professional)",
            "issuer": "ISC2",
            "category": "Advanced / Expert (B4)",
            "domain": "GRC / Leadership",
            "format": "Adaptive CAT Exam (100\u2013150 questions)",
            "cost": "$749 (+ $135/yr AMF)",
            "isFree": false,
            "worthRating": "\u2605\u2605\u2605",
            "notes": "The senior-security benchmark worldwide. Requires 5 years of cumulative paid experience in 2+ domains.",
            "url": "https://www.isc2.org/certifications/cissp"
      },
      {
            "id": "cert-isaca-cism",
            "name": "ISACA CISM (Certified Information Security Manager)",
            "issuer": "ISACA",
            "category": "Advanced / Expert (B4)",
            "domain": "GRC / Leadership",
            "format": "150 MCQ (4 hours)",
            "cost": "$575 (member) / $760 (non-member)",
            "isFree": false,
            "worthRating": "\u2605\u2605\u2605",
            "notes": "Top credential for security management, governance, and the executive CISO track. Exam outline updates Nov 3, 2026.",
            "url": "https://www.isaca.org/credentialing/cism"
      },
      {
            "id": "cert-isaca-cisa",
            "name": "ISACA CISA (Certified Information Systems Auditor)",
            "issuer": "ISACA",
            "category": "Advanced / Expert (B4)",
            "domain": "GRC / Leadership",
            "format": "150 MCQ (4 hours)",
            "cost": "$575 (member) / $760 (non-member)",
            "isFree": false,
            "worthRating": "\u2605\u2605\u2605",
            "notes": "The gold standard globally for IT audit, assurance, and enterprise governance compliance.",
            "url": "https://www.isaca.org/credentialing/cisa"
      },
      {
            "id": "cert-zeropoint-crto",
            "name": "Zero-Point Security CRTO (Certified Red Team Operator)",
            "issuer": "Zero-Point Security",
            "category": "Advanced / Expert (B4)",
            "domain": "Offensive",
            "format": "48-hour practical red-team engagement",
            "cost": "~\u00a3399",
            "isFree": false,
            "worthRating": "\u2605\u2605\u2605",
            "notes": "Best-value red-team operations certification in the industry (Cobalt Strike, C2 operations, OPSEC, and Active Directory).",
            "url": "https://www.zeropointsecurity.co.uk"
      },
      {
            "id": "cert-offsec-osep",
            "name": "OffSec OSEP (PEN-300 \u2013 Evasion Techniques)",
            "issuer": "OffSec",
            "category": "Advanced / Expert (B4)",
            "domain": "Offensive",
            "format": "48-hour practical exam",
            "cost": "~$1,649\u2013$1,749",
            "isFree": false,
            "worthRating": "\u2605\u2605",
            "notes": "Advanced evasion of modern endpoint protection (AV/EDR), process injection, and hardened Active Directory environments.",
            "url": "https://www.offsec.com"
      },
      {
            "id": "cert-comptia-secai",
            "name": "CompTIA SecAI+ (CY0-001)",
            "issuer": "CompTIA",
            "category": "Specialist / Niche",
            "domain": "Specialist",
            "format": "MCQ + Scenario Items",
            "cost": "$359",
            "isFree": false,
            "worthRating": "\u2605\u2605",
            "notes": "New AI-security expansion cert launched Feb 17, 2026. Strongest as an add-on after Security+, CySA+, or PenTest+.",
            "url": "https://www.comptia.org"
      }
]
  },

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
