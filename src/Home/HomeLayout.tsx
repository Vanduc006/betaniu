import { useEffect, useState } from "react"
import { Mail, Phone, MapPin, Download, MessageSquare, CheckCircle2, Linkedin, FileText, ExternalLink, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import person from "../constants/person.json"
import exp from "../constants/experiences.json"
import skills from "../constants/skills.json"
import stacks from "../constants/stacks.json"

interface Experience {
    company: string
    role: string
    peroid: string
    description?: string
    descriptions?: string[]
}

export default function Portfolio() {
    const [mounted, setMounted] = useState(false)
    const [expandedExp, setExpandedExp] = useState<number | null>(null)

    useEffect(() => {
        setMounted(true)
    }, [])

    const toggleExp = (idx: number) => {
        setExpandedExp(expandedExp === idx ? null : idx)
    }

    const projects = [
        {
            title: "Unity Fitness - ERP System",
            description: "A system is a web-based solution designed to optimize and streamline all aspects of gym operations.",
            link: "#",
        },
        {
            title: "Unity Fitness - Mobile App",
            description: "The mobile app is designed for club members to provide a convenient experience. Key features include purchasing PT packages, booking PT sessions, and more.",
            link: "#",
        },
        {
            title: "Teller App",
            description: "It is an advanced technological solution designed to enhance customer experience in branch transactions of Eximbank.",
            link: "#",
        },
        {
            title: "Online Bank Account Opening Feature",
            description: "Work as a BA trainee to collect and analyze user requirements to enhance convenience by allowing them to open bank accounts directly through the mobile app, eliminating to visit a physical branch.",
            link: "#",
        },
        {
            title: "Rental House - Mobile App",
            description: "This application is designed to help students and office workers easily search for rental rooms. It also serves as a platform for landlords to post rental listings.",
            link: "#",
        },
        {
            title: "UEH Student Activities and Psychology Counseling System",
            description: "A system designed to support psychological sharing and counseling by providing articles and topics for UEH students, helping them maximize their potential.",
            link: "#",
        },
    ]


    return (
        <div className="min-h-screen bg-white">
            <div className={`hidden lg:block fixed left-0 top-0 w-80 h-screen bg-gray-50 border-r border-gray-200 overflow-y-auto transition-opacity duration-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
                <div className="p-8">
                    <div className="mb-6">
                        <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-gray-200">
                            <img
                                src={person.avatar || "/anhtan.jpg"}
                                alt={person.name}
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>

                    <div className="mb-6">
                        <h1 className="text-xl font-bold text-gray-900 mb-1">Hello I'm</h1>
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">{person.name}</h2>
                        <p className="text-gray-700 font-medium">{person.current_carrer}</p>
                    </div>

                    <div className="space-y-2 mb-6">
                        {person.ability_work && (
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                                <span className="text-sm text-gray-700">Available for work</span>
                            </div>
                        )}
                        <div className="flex items-start gap-2">
                            <MapPin className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-gray-700">{person.address}</span>
                        </div>
                    </div>

                    <div className="space-y-3 mb-6 text-sm">
                        <div className="flex items-center gap-3">
                            <Phone className="w-4 h-4 text-gray-500 flex-shrink-0" />
                            <a href={`tel:${person.phone}`} className="text-gray-700 hover:text-gray-900">{person.phone}</a>
                        </div>
                        <div className="flex items-center gap-3">
                            <Mail className="w-4 h-4 text-gray-500 flex-shrink-0" />
                            <a href={`mailto:${person.email}`} className="text-gray-700 hover:text-gray-900 break-all">{person.email}</a>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-3">
                        <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white">
                            <Download className="w-4 h-4" />
                            Download CV
                        </Button>
                        <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white">
                            <MessageSquare className="w-4 h-4" />
                            Contact Me
                        </Button>
                    </div>
                </div>
            </div>

            <div className={`lg:ml-80 transition-opacity duration-1000 delay-300 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
                <div className="px-4 sm:px-6 lg:px-12 py-8 max-w-4xl mx-auto">
                    <div className="lg:hidden mb-8 bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                        <div className="flex gap-4 mb-4">
                            <div className="w-24 h-24 rounded-lg overflow-hidden bg-gray-200 flex-shrink-0">
                                <img
                                    src={person.avatar || "/anhtan.jpg"}
                                    alt={person.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="flex-1">
                                <h1 className="text-lg font-bold text-gray-900 mb-1">Hello I'm {person.name}</h1>
                                <p className="text-gray-700 font-medium text-sm mb-2">{person.current_carrer}</p>
                                {person.ability_work && (
                                    <div className="flex items-center gap-2 mb-2">
                                        <CheckCircle2 className="w-3 h-3 text-green-500" />
                                        <span className="text-xs text-gray-700">Available for work</span>
                                    </div>
                                )}
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-3 h-3 text-red-500" />
                                    <span className="text-xs text-gray-700">{person.address}</span>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-2 text-sm mb-4">
                            <div className="flex items-center gap-3">
                                <Phone className="w-4 h-4 text-gray-500" />
                                <a href={`tel:${person.phone}`} className="text-gray-700">{person.phone}</a>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="w-4 h-4 text-gray-500" />
                                <a href={`mailto:${person.email}`} className="text-gray-700 break-all">{person.email}</a>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <Button className="flex-1 bg-gray-900 hover:bg-gray-800 text-white text-sm">
                                <Download className="w-4 h-4" />
                                Download CV
                            </Button>
                            <Button className="flex-1 bg-gray-900 hover:bg-gray-800 text-white text-sm">
                                <MessageSquare className="w-4 h-4" />
                                Contact Me
                            </Button>
                        </div>
                    </div>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 tracking-wide">About</h2>
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            {person.about && person.about.map((content, idx) => (
                                <p key={idx}>{content.content}</p>
                            ))}
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 tracking-wide">Skills</h2>
                        <div className="flex flex-wrap gap-3">
                            {skills.map((skill) => (
                                <div
                                    key={skill}
                                    className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-md text-gray-700 text-sm transition-colors"
                                >
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 tracking-wide">Experience</h2>
                        <div className="space-y-6">
                            {(exp as Experience[]).map((expItem, idx) => (
                                <div key={idx} className="border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-shadow">
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 rounded-lg bg-blue-600 flex-shrink-0 flex items-center justify-center">
                                            <span className="text-white font-bold text-xs">{expItem.company.charAt(0)}</span>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div 
                                                className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1" 
                                                onClick={() => toggleExp(idx)}
                                            >
                                                <div className="flex-1">
                                                    <h3 className="font-bold text-gray-900">{expItem.company}</h3>
                                                    <p className="text-sm text-gray-600">{expItem.role}</p>
                                                </div>
                                                <div className="flex gap-2 justify-content-center items-center" >
                                                    <p className="text-sm text-gray-500 flex-shrink-0">{expItem.peroid}</p>
                                                    {(expItem.description || expItem.descriptions) && (
                                                        <button>
                                                            {expandedExp === idx ? (
                                                                <>
                                                                    <ChevronUp className="w-4 h-4" />
                                                                </>
                                                            ) : (
                                                                <>
                                                                    <ChevronDown className="w-4 h-4" />
                                                                </>
                                                            )}
                                                        </button>
                                                    )}

                                                </div>

                                            </div>


                                            {expandedExp === idx && (expItem.description || expItem.descriptions) && (
                                                <div className="mt-4 pt-4 border-t border-gray-200">
                                                    {expItem.description && (
                                                        <p className="text-sm text-gray-700 leading-relaxed">{expItem.description}</p>
                                                    )}
                                                    {expItem.descriptions && Array.isArray(expItem.descriptions) && (
                                                        <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
                                                            {expItem.descriptions.map((desc: string, descIdx: number) => (
                                                                <li key={descIdx} className="leading-relaxed">{desc}</li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 tracking-wide">Tech stack</h2>
                        <div className="relative h-30 overflow-hidden bg-gray-50 rounded-lg border border-gray-200">
                            <div className="absolute inset-0 flex flex-row items-center gap-6 px-6 animate-slide-left">
                                {stacks.map((tech) => (
                                    <div
                                        key={tech.name}
                                        className="flex flex-col items-center justify-center gap-2 bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow flex-shrink-0 w-20"
                                    >
                                        <img src={tech.path}></img>
                                        <span className="text-xs text-gray-700 font-medium text-center">{tech.name}</span>
                                    </div>
                                ))}
                                {stacks.map((tech) => (
                                    <div
                                        key={`${tech.name}-dup`}
                                        className="flex flex-col items-center justify-center gap-2 bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow flex-shrink-0 w-20"
                                    >
                                        <img src={tech.path}></img>
                                        <span className="text-xs text-gray-700 font-medium text-center">{tech.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>


                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 tracking-wide">Education</h2>
                        <div className="space-y-6">
                            {person.education.map((edu, idx) => (
                                <div key={idx} className="flex gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-blue-600 flex-shrink-0 flex items-center justify-center">
                                        <span className="text-white font-bold text-xs">UEH</span>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-bold text-gray-900">{edu.school}</h3>
                                        <p className="text-sm text-gray-700 font-medium mt-1">{edu.degree}</p>
                                        <p className="text-sm text-gray-600 mt-1">{edu.details}</p>
                                        <p className="text-sm text-gray-500 mt-2">{edu.period}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Language Section */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 tracking-wide">Language</h2>
                        <div className="space-y-3">
                            {person.languages.map((lang, idx) => (
                                <div key={idx} className="flex items-center gap-2">
                                    <span className="font-semibold text-gray-900">{lang.name}</span>
                                    <span className="text-gray-500">-</span>
                                    <span className="text-gray-700">{lang.level}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 tracking-wide">Links</h2>
                        <div className="flex flex-wrap gap-3">
                            {person.cv && (
                                <Button variant="outline" className="gap-2" asChild>
                                    <a href={person.cv} target="_blank" rel="noopener noreferrer">
                                        <FileText className="w-4 h-4" />
                                        View my résume
                                    </a>
                                </Button>
                            )}
                            {person.linkedin && (
                                <Button variant="outline" className="gap-2" asChild>
                                    <a href={person.linkedin} target="_blank" rel="noopener noreferrer">
                                        <Linkedin className="w-4 h-4" />
                                        LinkedIn
                                    </a>
                                </Button>
                            )}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}
