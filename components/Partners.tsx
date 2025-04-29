"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

interface Partner {
    id: number
    name: string
    logo: string
}

interface AnimatedPartnersProps {
    title?: string
    subtitle?: string
}

const partners: Partner[] = [
    { id: 1, name: "Nvidia", logo: "/images/partners/nvidia.webp" },
    { id: 3, name: "Intel", logo: "/images/partners/intel.webp" },
    { id: 4, name: "Amazon", logo: "/images/partners/amazon.png" },
    { id: 5, name: "OpenAI", logo: "/images/partners/openai.png" },
    { id: 6, name: "Anthropic", logo: "/images/partners/anthropic.png" },
    { id: 7, name: "Google", logo: "/images/partners/google.png" },
    { id: 8, name: "Microsoft", logo: "/images/partners/microsoft.webp" },
    { id: 9, name: "Mistral AI", logo: "/images/partners/mistral.png" },
]

export default function Partners({
    title = "Our Partners",
    subtitle = "Our members come from trusted organizations. ",
}: AnimatedPartnersProps) {
    const containerRef = useRef<HTMLDivElement>(null)

    // Infinite scroll animation for logos
    const logoVariants = {
        animate: {
            x: [0, -1920],
            transition: {
                x: {
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop" as const,
                    duration: 50,
                    ease: "linear",
                },
            },
        },
    }

    return (
        <section className="w-full pt-16 pb-32 overflow-hidden  text-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-3">{title}</h2>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">{subtitle}</p>
                </div>

                <div className="relative w-full overflow-hidden" ref={containerRef}>
                    {/* First row of logos */}
                    <motion.div className="flex items-center gap-12 mb-8" variants={logoVariants} animate="animate">
                        {[...partners, ...partners].map((partner, index) => (
                            <div
                                key={`${partner.id}-${index}`}
                                className="flex-shrink-0 bg-opacity-10 bg-white backdrop-filter backdrop-blur-sm rounded-lg p-6 hover:bg-opacity-20 transition-all duration-300 w-[180px] h-[100px] flex items-center justify-center"
                            >
                                <Image
                                    src={partner.logo || "/placeholder.svg"}
                                    alt={partner.name}
                                    width={160}
                                    height={80}
                                    className="object-contain max-h-16"
                                />
                            </div>
                        ))}
                    </motion.div>

                    {/* Second row of logos (reversed direction) */}
                    <motion.div
                        className="flex items-center gap-12"
                        variants={{
                            animate: {
                                x: [-1920, 0],
                                transition: {
                                    x: {
                                        repeat: Number.POSITIVE_INFINITY,
                                        repeatType: "loop" as const,
                                        duration: 50,
                                        ease: "linear",
                                    },
                                },
                            },
                        }}
                        animate="animate"
                    >
                        {[...partners.reverse(), ...partners].map((partner, index) => (
                            <div
                                key={`${partner.id}-rev-${index}`}
                                className="flex-shrink-0 bg-opacity-10 bg-white backdrop-filter backdrop-blur-sm rounded-lg p-6 hover:bg-opacity-20 transition-all duration-300 w-[180px] h-[100px] flex items-center justify-center"
                            >
                                <Image
                                    src={partner.logo || "/placeholder.svg"}
                                    alt={partner.name}
                                    width={160}
                                    height={80}
                                    className="object-contain max-h-16"
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
