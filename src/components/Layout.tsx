import { useEffect, useState } from "react"
import { Mail, Phone, MapPin, Download, MessageSquare, CheckCircle2, Linkedin, FileText, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link, useLocation } from "react-router-dom"
import person from "../constants/person.json"

interface LayoutProps {
    children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
    const [mounted, setMounted] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const location = useLocation()

    useEffect(() => {
        setMounted(true)
    }, [])

    const navItems = [
        { path: "/me", label: "Home" },
        { path: "/about", label: "About" },
        { path: "/experience", label: "Experience" },
        { path: "/skills", label: "Skills" },
        { path: "/tech-stack", label: "Tech Stack" },
        { path: "/education", label: "Education" },
        { path: "/language", label: "Language" },
        { path: "/links", label: "Links" },
    ]

    return (
        <div className="min-h-screen bg-white">
            {/* Desktop Sidebar */}
            <div className={`hidden lg:block fixed left-0 top-0 w-80 h-screen bg-gray-50 border-r border-gray-200 overflow-y-auto transition-opacity duration-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
                <div className="p-8">
                    {/* Profile Image */}
                    <div className="mb-6">
                        <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-gray-200">
                            <img
                                src={person.avatar || "/anhtan.jpg"}
                                alt={person.name}
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>

                    {/* Name and Title */}
                    <div className="mb-6">
                        <h1 className="text-xl font-bold text-gray-900 mb-1">Hello I'm</h1>
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">{person.name}</h2>
                        <p className="text-gray-700 font-medium">{person.current_carrer}</p>
                    </div>

                    {/* Status and Location */}
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

                    {/* Contact Info */}
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

                    {/* Navigation */}
                    <div className="mb-6">
                        <nav className="space-y-2">
                            {navItems.map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className={`block px-4 py-2 rounded-md text-sm transition-colors ${
                                        location.pathname === item.path
                                            ? "bg-gray-900 text-white font-medium"
                                            : "text-gray-700 hover:bg-gray-100"
                                    }`}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </nav>
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

            {/* Mobile Navigation */}
            <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
                <div className="flex items-center justify-between p-4">
                    <h1 className="text-lg font-bold text-gray-900">{person.name}</h1>
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="p-2 text-gray-700 hover:bg-gray-100 rounded-md"
                    >
                        {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
                {mobileMenuOpen && (
                    <div className="border-t border-gray-200 bg-white">
                        <nav className="p-4 space-y-2">
                            {navItems.map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`block px-4 py-2 rounded-md text-sm transition-colors ${
                                        location.pathname === item.path
                                            ? "bg-gray-900 text-white font-medium"
                                            : "text-gray-700 hover:bg-gray-100"
                                    }`}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </nav>
                    </div>
                )}
            </div>

            {/* Main Content */}
            <div className={`lg:ml-80 pt-16 lg:pt-0 transition-opacity duration-1000 delay-300 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
                {children}
            </div>
        </div>
    )
}

