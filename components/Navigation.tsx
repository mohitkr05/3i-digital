"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="#"
            className="text-2xl font-bold text-gray-900 hover:text-gray-600 transition-colors"
          >
            3I Digital
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            <Link
              href="#problems"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-medium"
            >
              Services
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-medium"
            >
              How It Works
            </Link>
            <Link
              href="#about"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-medium"
            >
              About
            </Link>
            <Link
              href="#contact"
              className="bg-gray-900 text-white px-6 py-2.5 rounded-full hover:bg-gray-800 transition-all text-sm font-medium"
            >
              Get in touch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600 hover:text-gray-900"
            aria-label="Menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              <Link
                href="#problems"
                className="text-gray-600 hover:text-gray-900 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="#how-it-works"
                className="text-gray-600 hover:text-gray-900 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link
                href="#about"
                className="text-gray-600 hover:text-gray-900 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="#contact"
                className="bg-gray-900 text-white px-6 py-2.5 rounded-full hover:bg-gray-800 transition-all text-sm font-medium text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Get in touch
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
