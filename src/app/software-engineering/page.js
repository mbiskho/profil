import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DATA } from "./data";
import { GlobeIcon } from "lucide-react";
import Link from "next/link";
import { BlurFade } from "@/components/hacky-fade";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-12 py-12 px-6 mx-auto w-full max-w-7xl">
      
      {/* 1. HERO SECTION (Stays Full Width) */}
      <section id="hero" className="grid grid-cols-1 gap-8 md:grid-cols-[2fr_1fr] items-center">
        <div className="space-y-4">
          <BlurFade delay={BLUR_FADE_DELAY}>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-7xl/none">
              {DATA.name}
            </h1>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 2}>
            <p className="max-w-[800px] text-lg font-light text-muted-foreground md:text-2xl">
              {DATA.description}
            </p>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
             <div className="flex items-center gap-2 text-sm text-muted-foreground md:text-base">
                  <GlobeIcon className="size-4" />
                  {DATA.location}
             </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 3.5}>
              <div className="flex gap-2">
                  {Object.entries(DATA.contact.social).map(([name, social]) => (
                  <Link key={name} href={social.url} target="_blank">
                      <Button variant="outline" size="icon" className="size-10 rounded-full">
                          <social.icon className="size-4" />
                      </Button>
                  </Link>
                  ))}
              </div>
          </BlurFade>
        </div>
        <BlurFade delay={BLUR_FADE_DELAY}>
          <div className="flex justify-center md:justify-end">
            <Avatar className="size-40 border-4 border-white shadow-xl md:size-64">
              <AvatarImage alt={DATA.name} src={DATA.avatarUrl} className="object-cover" />
              <AvatarFallback className="text-4xl font-bold">{DATA.initials}</AvatarFallback>
            </Avatar>
          </div>
        </BlurFade>
      </section>

      {/* 2. SPLIT LAYOUT: LEFT (Work) & RIGHT (Skills/Education) */}
      <div className="grid grid-cols-1 gap-10 md:grid-cols-[2fr_1fr]">
        
        {/* === LEFT COLUMN === */}
        <div className="space-y-12">
            
            {/* ABOUT */}
            <section id="about">
                <BlurFade delay={BLUR_FADE_DELAY * 4}>
                    <h2 className="text-2xl font-bold mb-4">About</h2>
                    <div className="prose max-w-full text-pretty font-sans text-base text-muted-foreground dark:prose-invert md:text-lg">
                    <p>
                        I am a developer who loves building things that live on the internet.
                        I specialize in building accessible, inclusive products and digital
                        experiences.
                    </p>
                    </div>
                </BlurFade>
            </section>

            {/* WORK EXPERIENCE */}
            <section id="work" className="space-y-4">
                <BlurFade delay={BLUR_FADE_DELAY * 5}>
                    <h2 className="text-2xl font-bold">Work Experience</h2>
                </BlurFade>
                {DATA.work.map((work, id) => (
                    <BlurFade key={work.company} delay={BLUR_FADE_DELAY * 6 + id * 0.1}>
                    <Card className="border-l-4 border-l-black border-t-0 border-r-0 border-b-0 shadow-sm hover:shadow-md transition-all pl-2 bg-white/50 backdrop-blur-sm">
                        <CardHeader className="p-4">
                        <div className="flex items-center justify-between">
                            <h3 className="font-semibold text-lg">
                            {work.company}
                            </h3>
                            <div className="text-sm text-muted-foreground tabular-nums">
                            {work.start} - {work.end}
                            </div>
                        </div>
                        <h4 className="font-mono text-sm leading-none text-muted-foreground mt-1">
                            {work.title}
                        </h4>
                        </CardHeader>
                        <CardContent className="p-4 pt-0 text-sm text-muted-foreground md:text-base">
                        {work.description}
                        </CardContent>
                    </Card>
                    </BlurFade>
                ))}
            </section>
        </div>

        {/* === RIGHT COLUMN (SIDEBAR) === */}
        <div className="space-y-10">
            
            {/* SKILLS - Moved to the right as requested */}
            <section id="skills">
                <BlurFade delay={BLUR_FADE_DELAY * 9}>
                    <h2 className="text-2xl font-bold mb-4">Skills</h2>
                    <div className="flex flex-wrap gap-2">
                    {DATA.skills.map((skill, id) => (
                        <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                        <Badge variant="outline" className="px-3 py-1.5 text-sm hover:bg-black hover:text-white transition-colors cursor-default">
                            {skill}
                        </Badge>
                        </BlurFade>
                    ))}
                    </div>
                </BlurFade>
            </section>

            {/* EDUCATION - Moved to right to balance layout */}
            <section id="education" className="space-y-4">
                <BlurFade delay={BLUR_FADE_DELAY * 7}>
                    <h2 className="text-2xl font-bold">Education</h2>
                </BlurFade>
                {DATA.education.map((education, id) => (
                    <BlurFade key={education.school} delay={BLUR_FADE_DELAY * 8 + id * 0.1}>
                    <Card className="bg-transparent shadow-none border-none">
                        <CardHeader className="p-0">
                        <div className="flex flex-col">
                            <h3 className="font-semibold text-base">
                            {education.school}
                            </h3>
                            <div className="text-sm text-muted-foreground tabular-nums">
                            {education.start} - {education.end}
                            </div>
                        </div>
                        </CardHeader>
                        <CardContent className="mt-2 p-0 text-sm text-muted-foreground">
                        {education.degree}
                        </CardContent>
                    </Card>
                    </BlurFade>
                ))}
            </section>
        </div>
      </div>

      {/* 3. PROJECTS (Full Width Bottom) */}
      <section id="projects" className="space-y-6">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <h2 className="text-2xl font-bold">Selected Projects</h2>
        </BlurFade>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DATA.projects.map((project, id) => (
            <BlurFade key={project.title} delay={BLUR_FADE_DELAY * 12 + id * 0.1}>
              <Link href={project.href} target="_blank">
                  <Card className="flex flex-col h-full overflow-hidden border hover:border-black/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-white">
                  <div className="w-full h-40 bg-gray-100 border-b flex items-center justify-center text-muted-foreground text-xs font-mono">
                      PROJECT IMAGE
                  </div>
                  <CardHeader className="p-4">
                      <CardTitle className="text-base font-bold">
                          {project.title}
                      </CardTitle>
                      <time className="font-mono text-xs text-muted-foreground mt-1">
                          {project.dates}
                      </time>
                      <p className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground mt-2 dark:prose-invert">
                      {project.description}
                      </p>
                  </CardHeader>
                  <CardContent className="mt-auto flex p-4 pt-0">
                      <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tag) => (
                          <Badge
                          className="px-1 py-0 text-[10px] font-normal"
                          variant="secondary"
                          key={tag}
                          >
                          {tag}
                          </Badge>
                      ))}
                      </div>
                  </CardContent>
                  </Card>
              </Link>
            </BlurFade>
          ))}
        </div>
      </section>
      
      {/* CONTACT */}
      <BlurFade delay={BLUR_FADE_DELAY * 13}>
          <section id="contact" className="flex flex-col items-center justify-center gap-4 py-12 text-center md:py-24">
              <h2 className="text-2xl font-bold">Get in Touch</h2>
              <Link href={DATA.contact.social.email.url} className="inline-flex h-10 items-center justify-center rounded-md bg-black px-8 text-sm font-medium text-white shadow transition-colors hover:bg-black/90">
                  Contact Me
              </Link>
          </section>
      </BlurFade>

    </main>
  );
}