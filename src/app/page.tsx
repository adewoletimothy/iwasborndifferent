"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Crown,
  Flame,
  GraduationCap,
  Quote,
  Sparkles,
  Star,
  ShieldCheck,
  Users,
  Menu,
  Book,
} from "lucide-react";

const SELAR_LINK = "https://selar.com/w44440h644";

const reviews = [
  {
    name: "Pastor / Leader",
    role: "Book reviewer",
    quote:
      "This book does not just inform you. It confronts you, refines you, and helps you see your life with fresh clarity.",
  },
  {
    name: "Young Professional",
    role: "Reader",
    quote:
      "The message feels personal, but it also feels bigger than one person. It carries direction, depth, and conviction.",
  },
  {
    name: "Mentor",
    role: "Early reader",
    quote:
      "A timely work for anyone who knows there is more to their life than survival. It is both practical and deeply inspiring.",
  },
];

const bookPillars = [
  {
    title: "Purpose and identity",
    description:
      "For anyone asking what their life is really meant to become.",
  },
  {
    title: "Clarity and direction",
    description:
      "A guide for those ready to move from confusion to conviction.",
  },
  {
    title: "Execution with grace",
    description:
      "Not just inspiration, but the mindset to live intentionally.",
  },
];

const stats = [
  { value: "01", label: "Powerful message" },
  { value: "03", label: "Core life themes" },
  { value: "100%", label: "Purpose driven" },
];

const gallery = [
  {
    src: "/1.jpg",
    alt: "Author speaking at an event",
  },
  {
    src: "/2.jpg",
    alt: "Author with audience at a live programme",
  },
  {
    src: "/3.jpg",
    alt: "Author on stage during a ministry or leadership session",
  },
  {
    src: "/4.jpg",
    alt: "Author on stage during a ministry or leadership session",
  },
  {
    src: "/5.jpg",
    alt: "Author on stage during a ministry or leadership session",
  },
  {
    src: "/6.jpg",
    alt: "Author on stage during a ministry or leadership session",
  },
];

function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="max-w-2xl">
      <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-red-200 bg-white/80 px-4 py-1 text-sm font-medium text-red-700 shadow-sm backdrop-blur">
        <Sparkles className="h-4 w-4" />
        {eyebrow}
      </div>
      <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-zinc-600 sm:text-lg">
        {subtitle}
      </p>
    </div>
  );
}

function SectionLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="rounded-full px-4 py-2 text-sm font-medium text-zinc-700 transition duration-300 hover:bg-white/70 hover:text-zinc-950 active:scale-95"
    >
      {children}
    </a>
  );
}

function ActionButton({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  const isExternal = href.startsWith("http");
  const base =
    "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 active:scale-95";
  const styles =
    variant === "primary"
      ? "bg-red-600 text-white shadow-lg shadow-red-600/20 hover:-translate-y-1 hover:scale-[1.03] hover:bg-red-700 hover:shadow-2xl hover:shadow-red-600/30"
      : "border border-zinc-300 bg-white text-zinc-900 shadow-sm hover:-translate-y-1 hover:scale-[1.03] hover:border-zinc-400 hover:bg-zinc-50 hover:shadow-lg";

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className={`${base} ${styles}`}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-1" />
    </a>
  );
}

export default function BookLaunchLandingPage() {

  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <main className="min-h-screen scroll-smooth bg-[radial-gradient(circle_at_top,_rgba(220,38,38,0.10),_transparent_28%),linear-gradient(to_bottom,_#ffffff,_#fafafa,_#f4f4f5)] text-zinc-950">
      <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 rounded-full border border-white/40 bg-white/20 px-4 py-3 shadow-2xl shadow-zinc-950/10 backdrop-blur-xl backdrop-saturate-150 sm:px-6">
          <a href="#top" className="flex items-center gap-3" onClick={() => setMobileOpen(false)}>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-white shadow-lg shadow-red-600/20">
              <Book className="h-5 w-5" />
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
                I Was Born Different
              </p>
              <p className="text-xs text-zinc-500">Book launch</p>
            </div>
          </a>

          <nav className="hidden items-center gap-1 md:flex cursor-pointer">
            <SectionLink href="#about">About</SectionLink>
            <SectionLink href="#vision">Vision</SectionLink>
            <SectionLink href="#gallery">Gallery</SectionLink>
            <SectionLink href="#reviews">Reviews</SectionLink>
          </nav>

          <div className="relative flex items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              className="rounded-full border border-zinc-200 bg-white/70 px-3 py-2 text-zinc-600 shadow-sm backdrop-blur transition hover:bg-white hover:text-zinc-950 md:hidden"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              <Menu className="h-4 w-4" />
            </button>

            <ActionButton href={SELAR_LINK} variant="primary">
              Buy now
            </ActionButton>

            {mobileOpen && (
              <div className="absolute right-0 top-full mt-3 w-64 overflow-hidden rounded-3xl border border-white/40 bg-white/90 p-3 shadow-2xl backdrop-blur-xl md:hidden">
                <a
                  href="#about"
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-2xl px-4 py-3 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100 hover:text-zinc-950"
                >
                  About
                </a>
                <a
                  href="#vision"
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-2xl px-4 py-3 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100 hover:text-zinc-950"
                >
                  Vision
                </a>
                <a
                  href="#gallery"
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-2xl px-4 py-3 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100 hover:text-zinc-950"
                >
                  Gallery
                </a>
                <a
                  href="#reviews"
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-2xl px-4 py-3 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100 hover:text-zinc-950"
                >
                  Reviews
                </a>
              </div>
            )}
          </div>
        </div>
      </header>

      <section id="top" className="relative overflow-hidden pt-20 border-b border-gray-300">
        {/* <div className="absolute inset-0 -z-0">
          <div className="absolute left-[-8rem] top-[-6rem] h-72 w-72 rounded-full bg-red-500/10 blur-3xl" />
          <div className="absolute right-[-7rem] top-32 h-80 w-80 rounded-full bg-zinc-400/10 blur-3xl" />
        </div> */}

        <div className="mx-auto max-w-7xl px-6  sm:px-8 lg:px-10 lg:pb-28">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-2xl"
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/80 px-4 py-2 text-sm text-zinc-700 shadow-sm backdrop-blur">
                <Flame className="h-4 w-4 text-red-600" />
                A message for people called to stand out
              </div>

              <h1 className="text-5xl font-semibold tracking-tight text-zinc-950 sm:text-6xl lg:text-7xl">
                <span className="block">I Was</span>
                <span className="block text-red-600">Born Different</span>
              </h1>

              <p className="mt-6 text-lg leading-8 text-zinc-600 sm:text-xl">
                In a world full of many identicals and copies, this is your guide to becoming #1—not in comparison to another but #1 in your own world.
              </p>

              <div className="mt-8 flex flex-wrap gap-4 cursor-pointer">
                <ActionButton href={SELAR_LINK} variant="primary">
                  Get the book
                </ActionButton>
                <ActionButton href="#vision" variant="secondary">
                  See the vision
                </ActionButton>
              </div>

              <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="text-3xl font-semibold text-red-600">
                      {stat.value}
                    </div>
                    <p className="mt-2 text-sm text-zinc-600">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="relative"
            >
              {/* Authors side */}
              <div className="rounded-[2rem] border border-zinc-200 bg-white p-5 shadow-2xl shadow-zinc-950/5 sm:p-6">
                <div className="rounded-[1.75rem] border border-zinc-200 bg-zinc-950 p-5 text-white sm:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.28em] text-zinc-300">
                        Author spotlight
                      </p>
                      <p className="mt-1 text-lg font-semibold">Timothy Adewole</p>
                    </div>
                    <Users className="h-6 w-6 text-red-400" />
                  </div>

                  <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5 p-3">
                    <img
                      src="/author2.png"
                      alt="Author portrait"
                      className="aspect-[4/5] w-full rounded-[1.2rem] object-cover object-top grayscale transition duration-500 hover:grayscale-0"
                    />
                  </div>

                  <div className="mt-5 rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                    <div className="flex items-start gap-3">
                      <Quote className="mt-0.5 h-5 w-5 shrink-0 text-red-400" />
                      <p className="text-sm leading-6 text-zinc-200">
                        “This is not just a book. It is a declaration of identity, a rerouting and a renavigaton back to original design.”
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="About the author"
          title="More than an author, a voice with a burden"
          subtitle=""
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] border border-zinc-200 bg-white p-8 shadow-sm">
            <p className="text-base leading-8 text-zinc-700">
              {/* Hi, I am <span className="font-semibold text-zinc-950">Timothy Adewole</span>. */}
              My life has been shaped by a strong sense of purpose, a burden to see people live fully, and a conviction that no one should leave their life to chance or live as a mere product of chance and circumstances..
            </p>
            <p className="mt-5 text-base leading-8 text-zinc-700">
              Through years of teaching, mentoring, speaking, and leadership, I have come to believe that people flourish when they understand who they are, why they are here, and what they are called to build. No one can fully take responsiblity when <span className="font-semibold text-zinc-950"> identity</span> is misplaced. This book is a reflection of that burden.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-zinc-50 p-5 transition duration-300 hover:-translate-y-1 hover:shadow-md">
                <p className="text-sm font-semibold text-zinc-950">The burden</p>
                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  To help people rise above confusion and step into clarity beginning at <span className="font-semibold text-zinc-950">Purpose Discovery</span>.
                </p>
              </div>
              <div className="rounded-2xl bg-zinc-50 p-5 transition duration-300 hover:-translate-y-1 hover:shadow-md">
                <p className="text-sm font-semibold text-zinc-950">The goal</p>
                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  To supply non-negotiable truths that reveal identity and inspire action.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-zinc-200 bg-gradient-to-br from-zinc-950 to-zinc-800 p-8 text-white shadow-sm">
            <p className="text-sm uppercase tracking-[0.24em] text-zinc-300">
              What shapes this work
            </p>
            <div className="mt-6 space-y-4">
              {[
                "Real conversations with people searching for direction",
                "Years of speaking, mentoring, and helping others grow",
                "A deep desire to see lives become intentional and fruitful",
              ].map((item) => (
                <div key={item} className="flex gap-3 rounded-2xl bg-white/5 p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-red-400" />
                  <p className="text-sm leading-6 text-zinc-200">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
              <p className="text-sm leading-7 text-zinc-200">
                "I Was Born Different" is for the person who knows their life is not random, and who is ready to live like it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-6 sm:px-8 lg:px-10">
        <div className="grid gap-6 rounded-[2rem] border border-zinc-200 bg-white p-8 shadow-sm md:grid-cols-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
              About the book
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950">
              A book that carries Direction
            </h3>
          </div>
          <div className="md:col-span-2">
            <p className="text-base leading-8 text-zinc-700">
              The experience of getting lost following descriptions provided by a map in a place you have never been is one of the most terrifing eperiences one could ever have. But we see young men and women live their lives in such manner.
              Life becomes reduced to trial and <span className="font-semibold text-red-700">error</span>, leaving indidvuals with no choice but to conform; following those who look like something is happening in their lives, meanwhile they also have that quiet but present confusion as to what their lives are about.
              <span className="font-semibold text-red-700">I Was Born Different</span>, rewires your mind out of conformity and stirs a boldness to go after <span className="font-semibold text-red-700">Originality</span>. It is easy to conform, but it takes <span className="font-semibold text-red-700">Boldness</span> to stand out.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {["Identity", "Purpose", "Clarity", "Execution", "Legacy"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 text-sm font-medium text-zinc-700 transition duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="vision" className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="The vision"
          title="Why this book exists"
          subtitle="This is not a random attempt. It was written specifically for a purpose."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[2rem] border border-zinc-200 bg-white p-8 shadow-sm">
            <div className="flex items-center gap-3 text-red-600">
              <Flame className="h-5 w-5" />
              <p className="text-sm font-semibold uppercase tracking-[0.2em]">
                Vision statement
              </p>
            </div>
            <p className="mt-5 text-lg leading-8 text-zinc-700">
              I believe there are people who already carry greatness but have not yet found the language, structure, or confidence to live it out. This book is written to awaken that clarity and give direction to the calling that has always been there.
            </p>
            <p className="mt-5 text-lg leading-8 text-zinc-700">
              The vision is to help readers move from mere existence into a life of conviction, contribution, and visible fruit.
            </p>
          </div>

          <div className="rounded-[2rem] border border-zinc-200 bg-zinc-950 p-8 text-white shadow-sm">
            <p className="text-sm uppercase tracking-[0.2em] text-zinc-300">
              What you receive when you read
            </p>
            <div className="mt-6 space-y-4">
              {[
                "A renewed way of seeing personal identity",
                "Practical clarity for purposeful living",
                "A sense of courage to do life differently",
                "A stronger commitment to intentional growth",
              ].map((item) => (
                <div key={item} className="flex gap-3 rounded-2xl bg-white/5 p-4">
                  <Star className="mt-0.5 h-5 w-5 shrink-0 text-red-400" />
                  <p className="text-sm leading-6 text-zinc-200">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 border-b border-gray-300">
        <SectionHeading
          eyebrow="Pictures"
          title="Moments that build trust"
          subtitle="Building purposeful young men and women for lasting impact.">
        </SectionHeading>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {gallery.map((image, index) => (
            <div
              key={image.alt}
              className="group overflow-hidden rounded-[2rem] border border-zinc-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-zinc-100">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/45 via-transparent to-transparent" />
                <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-zinc-900 backdrop-blur">
                  0{index + 1}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="reviews" className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Reviews"
          title="What early readers say"
          subtitle="Don't take my words alone for it."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="rounded-[2rem] border border-zinc-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center gap-1 text-red-600">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-5 text-base leading-7 text-zinc-700">{review.quote}</p>
              <div className="mt-6 border-t border-zinc-200 pt-5">
                <p className="font-semibold text-zinc-950">{review.name}</p>
                <p className="text-sm text-zinc-500">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
        <div className="overflow-hidden rounded-[2.25rem] bg-zinc-950 px-8 py-14 text-white shadow-2xl shadow-zinc-950/15 sm:px-10 lg:px-14">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-zinc-300">
                Ready to preorder?
              </p>
              <h3 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Secure your copy and step into the message.
              </h3>
              <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-300">
                The more purposeful version of you exists on the other side of this material. You are more than one in the number. You were born Different!
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <ActionButton href={SELAR_LINK} variant="primary">
                  Buy on Selar
                </ActionButton>
                <ActionButton href="#about" variant="secondary">
                  Learn more
                </ActionButton>
              </div>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-600 text-white">
                  <BookOpen className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-zinc-300">
                    Price
                  </p>
                  <p className="mt-1 text-lg font-semibold">Available in 3 currencies</p>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <div className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3">
                  <span className="text-sm text-zinc-300">Nigeria</span>
                  <span className="text-base font-semibold text-white">₦5,000</span>
                </div>

                <div className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3">
                  <span className="text-sm text-zinc-300">United Kingdom</span>
                  <span className="text-base font-semibold text-white">£5</span>
                </div>

                <div className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3">
                  <span className="text-sm text-zinc-300">International</span>
                  <span className="text-base font-semibold text-white">$5</span>
                </div>
              </div>

              <p className="mt-5 text-sm leading-7 text-zinc-300 italic">
                *50% discount till August 10th.
              </p>
            </div>

            {/* <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-600 text-white">
                  <BookOpen className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-zinc-300">
                    Final note
                  </p>
                  <p className="mt-1 text-lg font-semibold">One page. One message.</p>
                </div>
              </div>
              <p className="mt-5 text-sm leading-7 text-zinc-300">
                Use this landing page to present your authority, communicate the book’s purpose, and make buying feel natural and credible.
              </p>
            </div> */}
          </div>
        </div>
      </section>

      <footer className="border-t border-zinc-200 bg-white/80">
        <div className="mx-auto max-w-7xl px-6 py-8 sm:px-8 lg:px-10">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <p className="text-sm text-zinc-600">
              © {new Date().getFullYear()} I Was Born Different. All rights reserved.
            </p>
            <div className="flex items-center gap-3 text-sm text-zinc-600">
              <span className="inline-flex items-center gap-2 italic">
                <ShieldCheck className="h-4 w-4 text-red-600 " />
                Reconciling you to God's Plan for you.
              </span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
