"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Mail, Terminal } from "lucide-react";
import Link from "next/link";
import { BeamsBackground } from "@/components/ui/beams-background";

export default function Hero() {
    return (
        <BeamsBackground intensity="strong" className="min-h-[90vh] justify-center pt-32 pb-20 md:pt-40 md:pb-32">
            <div className="container mx-auto px-6 lg:px-12 xl:px-16">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Text Content */}
                    <div className="flex-1 space-y-8 text-center lg:text-left">
                        <div className="space-y-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-sm text-zinc-400 font-mono">
                                <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                                Available for hire
                            </div>

                            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.1]">
                                Building <span className="text-zinc-300">Robust</span> <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">
                                    Digital Systems
                                </span>
                            </h1>

                            <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                                I&apos;m <span className="text-white font-semibold">Bravian Nyatoro</span>, a Full-stack Developer.
                                I craft scalable solutions using <span className="text-accent font-mono">Go</span>,
                                <span className="text-accent font-mono"> Laravel</span>, and <span className="text-accent font-mono">Next.js</span>.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                            <Link href="#projects">
                                <Button className="h-12 px-8 text-base bg-white text-black hover:bg-zinc-200 rounded-xl font-bold transition-all hover:scale-105">
                                    View Projects
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            </Link>

                            <div className="flex gap-3">
                                <Button
                                    variant="outline"
                                    className="h-12 px-6 border-zinc-700 text-zinc-300 hover:text-white hover:bg-zinc-800 rounded-xl"
                                    onClick={() => window.open('mailto:nyatorobravian@gmail.com', '_blank')}
                                >
                                    <Mail className="w-5 h-5 mr-2" />
                                    Let&apos;s Connect
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Visual/Terminal Content */}
                    <div className="hidden lg:block flex-1 w-full max-w-xl lg:max-w-none">
                        <div className="relative rounded-xl bg-[#09090b] border border-zinc-800 shadow-2xl overflow-hidden">
                            <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-800 bg-zinc-900/50">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                                </div>
                                <div className="ml-4 flex items-center gap-2 text-xs font-mono text-zinc-500">
                                    <Terminal className="w-3 h-3" />
                                    <span>bravian.dev — zsh</span>
                                </div>
                            </div>

                            <div className="p-6 font-mono text-sm space-y-4">
                                <div className="flex gap-2">
                                    <span className="text-accent">➜</span>
                                    <span className="text-purple-400">~</span>
                                    <span className="text-zinc-400 animate-typing">whoami</span>
                                </div>

                                <div className="space-y-1 text-zinc-300">
                                    <p><span className="text-zinc-500">name:</span> &quot;Bravian Nyatoro&quot;</p>
                                    <p><span className="text-zinc-500">role:</span> &quot;System Designer&quot;</p>
                                    <p><span className="text-zinc-500">stack:</span> [&quot;Go&quot;, &quot;Laravel&quot;, &quot;React&quot;, &quot;Next.js&quot;]</p>
                                    <p><span className="text-zinc-500">location:</span> &quot;Kisumu, Kenya&quot;</p>
                                    <p><span className="text-zinc-500">status:</span> <span className="text-green-400">&quot;Building cool stuff&quot;</span></p>
                                </div>

                                <div className="flex gap-2 pt-2">
                                    <span className="text-accent">➜</span>
                                    <span className="text-purple-400">~</span>
                                    <span className="animate-pulse w-2 h-5 bg-zinc-500 block"></span>
                                </div>
                            </div>
                        </div>

                        {/* Background decorative elements */}
                        <div className="absolute -top-10 -right-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
                        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
                    </div>
                </div>
            </div>
        </BeamsBackground>
    );
}
