import QRCode from "react-qr-code";
import { Apple, Smartphone, Truck, Download, ChevronRight } from "lucide-react";

const DownloadPage = () => {
    const apps = [
        {
            id: "passenger",
            name: "Drop",
            tagline: "Ride & Errand",
            description: "Book trusted rides and errands in seconds.",
            iosLink: "https://apps.apple.com/ng/app/drop-ride-errand/id6752516591",
            androidLink: "#",
            iosAvailable: true,
            androidAvailable: false,
            icon: Apple,
            gradient: "from-primary-500 to-primary-700",
            iconBg: "bg-primary-50",
            iconColor: "text-primary-500"
        },
        {
            id: "driver",
            name: "Drop Driver",
            tagline: "Drive, Deliver, and Earn with Drop",
            description: "Earn more while driving — join Drop to connect with nearby passengers, complete deliveries, and grow your income safely and reliably.",
            iosLink: "#",
            androidLink: "#",
            iosAvailable: false,
            androidAvailable: false,
            icon: Truck,
            gradient: "from-secondary-400 to-secondary-500",
            iconBg: "bg-secondary-50",
            iconColor: "text-secondary-400"
        },
    ];

    return (
        <div className="min-h-screen bg-neutral-50">
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-transparent"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
                    <div className="inline-flex items-center gap-2 bg-primary-100 from-secondary-400 to-secondary-500 px-4 py-2 rounded-full text-sm font-medium mb-6">
                        <Download className="h-4 w-4" />
                        Available Now
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                        Get Started with <span className="text-secondary-400">Drop</span>
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Download our apps to experience seamless rides and deliveries, or start earning as a driver
                    </p>
                </div>
            </section>

            {/* Apps Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {apps.map(app => (
                        <div
                            key={app.id}
                            id={app.id}
                            className="group relative bg-white rounded-2xl shadow-lg overflow-hidden border border-neutral-200 hover:shadow-xl transition-all duration-300"
                        >
                            {/* Gradient Header */}
                            <div className={`h-2 bg-gradient-to-r ${app.gradient}`}></div>

                            <div className="p-8 md:p-10">
                                {/* Icon and Title */}
                                <div className="flex items-start gap-4 mb-6">
                                    <div className={`${app.iconBg} p-4 rounded-2xl`}>
                                        <app.icon className={`h-8 w-8 ${app.iconColor}`} />
                                    </div>
                                    <div className="flex-1">
                                        <h2 className="text-3xl font-bold text-primary-500 mb-1">{app.name}</h2>
                                        <p className={`text-sm font-semibold bg-gradient-to-r ${app.gradient} bg-clip-text text-transparent`}>
                                            {app.tagline}
                                        </p>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-neutral-600 leading-relaxed mb-8">
                                    {app.description}
                                </p>

                                {/* Download Section */}
                                <div className="space-y-6">
                                    {/* iOS */}
                                    <div className="bg-neutral-50 rounded-xl p-6 border border-neutral-100">
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="flex items-center gap-3">
                                                <div className="bg-white p-2 rounded-lg shadow-sm border border-neutral-200">
                                                    <Apple className="h-5 w-5 text-neutral-700" />
                                                </div>
                                                <span className="font-semibold text-primary-500">iOS App</span>
                                            </div>
                                            {app.iosAvailable && (
                                                <span className="text-xs font-medium text-secondary-400 bg-secondary-50 px-3 py-1 rounded-full">
                                                    Available
                                                </span>
                                            )}
                                        </div>

                                        {app.iosAvailable ? (
                                            <div className="flex flex-col sm:flex-row items-center gap-4">
                                                <div className="bg-white p-3 rounded-xl shadow-sm border border-neutral-200">
                                                    <QRCode value={app.iosLink} size={100} />
                                                </div>
                                                <div className="flex-1 text-center sm:text-left">
                                                    <p className="text-sm text-neutral-600 mb-3">Scan QR or click to download</p>
                                                    <a
                                                        href={app.iosLink}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-2 bg-neutral-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-neutral-800 transition-all duration-200 hover:gap-3"
                                                    >
                                                        App Store
                                                        <ChevronRight className="h-4 w-4" />
                                                    </a>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="text-center py-4">
                                                <p className="text-neutral-400 font-medium">Coming Soon</p>
                                            </div>
                                        )}
                                    </div>

                                    {/* Android */}
                                    <div className="bg-neutral-50 rounded-xl p-6 border border-neutral-100">
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="flex items-center gap-3">
                                                <div className="bg-white p-2 rounded-lg shadow-sm border border-neutral-200">
                                                    <Smartphone className="h-5 w-5 text-neutral-700" />
                                                </div>
                                                <span className="font-semibold text-primary-500">Android App</span>
                                            </div>
                                            {app.androidAvailable && (
                                                <span className="text-xs font-medium text-secondary-400 bg-secondary-50 px-3 py-1 rounded-full">
                                                    Available
                                                </span>
                                            )}
                                        </div>

                                        {app.androidAvailable ? (
                                            <div className="flex flex-col sm:flex-row items-center gap-4">
                                                <div className="bg-white p-3 rounded-xl shadow-sm border border-neutral-200">
                                                    <QRCode value={app.androidLink} size={100} />
                                                </div>
                                                <div className="flex-1 text-center sm:text-left">
                                                    <p className="text-sm text-neutral-600 mb-3">Scan QR or click to download</p>
                                                    <a
                                                        href={app.androidLink}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-2 bg-secondary-400 text-white px-6 py-3 rounded-lg font-semibold hover:bg-secondary-500 transition-all duration-200 hover:gap-3"
                                                    >
                                                        Play Store
                                                        <ChevronRight className="h-4 w-4" />
                                                    </a>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="text-center py-4">
                                                <p className="text-neutral-400 font-medium">Coming Soon</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DownloadPage;