"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import CountNumber from "../CountNumper/CountNumber";



const MunawaraHero = () => {
    const router = useRouter();

    const handleClick = () => {
        router.push("/solutions");
    };

    return (
        <section className="relative py-20 md:py-28">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
                {/* Left Side - Text Content */}
                <div className="flex-1 space-y-8 text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                        Empowering <span className="text-blue-600">Small Businesses</span> in the Digital Age
                    </h1>

                    <p className="text-lg md:text-xl max-w-2xl mx-auto md:mx-0">
                        Custom digital solutions to help your business grow online with AI-powered tools,
                        SEO optimization, and culturally relevant strategies.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <button
                            onClick={handleClick}
                            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105"
                        >
                            Explore Solutions
                        </button>
                        <button
                            onClick={() => router.push("/contact")}
                            className="px-8 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-medium rounded-lg transition-all duration-300"
                        >
                            Contact Us
                        </button>
                    </div>

                    {/* Stats Section */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12 max-w-2xl">
                        {[
                            { name: "Small Businesses", count: 50, suffix: "M+" },
                            { name: "Need Online Presence", count: 80, suffix: "%" },
                            { name: "Market Value", count: 2.3, suffix: "T+" },
                        ].map((stat, index) => (
                            <div
                                key={index}
                                className="p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="text-blue-600 text-2xl md:text-3xl font-bold">
                                    <CountNumber endValue={stat.count} duration={2} />
                                    {stat.suffix}
                                </div>
                                <div className="text-sm mt-1">
                                    {stat.name}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Side - Image */}
                <div className="flex-1 relative">
                    <div className="relative w-full h-60 md:h-[500px] -mt-20 rounded-xl overflow-hidden shadow-xl">
                        <Image
                            src={"https://media.istockphoto.com/id/2160502739/photo/working-day-in-office.jpg?s=1024x1024&w=is&k=20&c=9YM_d6DlBE38d7fdk7zeQAfODMIIbI8tbC2RSbma7Bs="}
                            alt="Small business owner using digital tools"
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    </div>

                    {/* Floating testimonial card */}
                    <div className="absolute -bottom-6 -left-6 p-4 rounded-lg shadow-lg max-w-xs bg-black/80 text-white">
                        <p className="text-sm italic">
                            "Munawara helped us establish our online presence and grow our customer base."
                        </p>
                        <p className="text-sm font-medium mt-2 text-blue-600">
                            — Happy Business Owner
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MunawaraHero;
