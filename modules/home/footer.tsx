import Link from "next/link";
import { Github, Linkedin, X, Instagram } from "lucide-react";

export function Footer() {
  const socialLinks = [
    {
      href: "https://github.com/davidudeji",
      label: "GitHub",
      icon: <Github className="w-5 h-5" />,
    },
    {
      href: "https://www.linkedin.com/davidcudeji",
      label: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
    },
    {
      href: "https://x.com/",
      label: "X",
      icon: <X className="w-5 h-5" />,
    },
    {
      href: "https://www.instagram.com/",
      label: "Instagram",
      icon: <Instagram className="w-5 h-5" />,
    },
  ];

  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 flex flex-col items-center gap-4">
        {/* Social Links */}
        <div className="flex items-center gap-4">
          {socialLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-300 transition-colors"
            >
              {link.icon}
              <span className="sr-only">{link.label}</span>
            </Link>
          ))}
        </div>

        {/* copyright */}
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          &copy; {new Date().getFullYear()} VibeCoder. All rights reserved.
        </p>
      </div>
    </footer>
  );
}