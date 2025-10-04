import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { CheckCircle, XCircle, Loader2, RefreshCcw } from "lucide-react";

const VerifyEmail: React.FC = () => {
    const [searchParams] = useSearchParams();
    const [status, setStatus] = useState<"loading" | "success" | "error">("loading");
    const [message, setMessage] = useState("Verifying your email...");
    const [errorType, setErrorType] = useState<"invalid" | "expired" | "server" | null>(null);
    const [resending, setResending] = useState(false);
    const [resendMessage, setResendMessage] = useState("");

    useEffect(() => {
        const token = searchParams.get("token");

        if (!token) {
            setStatus("error");
            setErrorType("invalid");
            setMessage("Invalid verification link.");
            return;
        }

        const url = import.meta.env.DEV ?
            `${import.meta.env.VITE_API_URL}/user/verify-email?token=${token}` :
            `${window.env?.VITE_API_URL}/user/verify-email?token=${token}`

        const verify = async () => {
            try {
                const res = await fetch(url);
                const data = await res.json();

                if (data.success) {
                    setStatus("success");
                    setMessage("Your email has been verified successfully.");
                } else {
                    setStatus("error");
                    setErrorType(data.type || "server");
                    setMessage(data.message || "Verification failed. Please try again.");
                }
            } catch (err) {
                setStatus("error");
                setErrorType("server");
                setMessage("Something went wrong. Please try again later.");
            }
        };

        verify();
    }, [searchParams]);

    const handleResend = async () => {
        setResending(true);
        setResendMessage("");

        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/user/resend-verification`, {
                method: "POST",
                credentials: "include", // Requires logged-in session or token
            });
            const data = await res.json();

            if (data.success) {
                setResendMessage("A new verification email has been sent to your inbox.");
            } else {
                setResendMessage(data.message || "Failed to resend verification email.");
            }
        } catch (err) {
            setResendMessage("Something went wrong while resending. Please try again later.");
        } finally {
            setResending(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-neutral-50 px-4">
            <div className="max-w-lg w-full bg-white rounded-2xl shadow-sm border border-neutral-100 p-10 text-center">
                {/* Status Icon */}
                <div className="mb-6 flex justify-center">
                    {status === "loading" && <Loader2 className="h-12 w-12 text-primary-500 animate-spin" />}
                    {status === "success" && <CheckCircle className="h-12 w-12 text-green-500" />}
                    {status === "error" && <XCircle className="h-12 w-12 text-red-500" />}
                </div>

                {/* Title */}
                <h1 className="text-3xl font-bold text-primary-500 mb-4">
                    {status === "loading" && "Verifying Email"}
                    {status === "success" && "Email Verified"}
                    {status === "error" && "Verification Failed"}
                </h1>

                {/* Message */}
                <p className="text-neutral-600 mb-8">{message}</p>

                {/* CTA Section */}
                {status === "success" && (
                    <a
                        href="/"
                        className="inline-block bg-secondary-400 text-white px-6 py-3 rounded-lg hover:bg-secondary-500 transition-colors font-semibold"
                    >
                        Back to Home
                    </a>
                )}

                {status === "error" && errorType === "expired" && (
                    <div className="space-y-4">
                        <button
                            onClick={handleResend}
                            disabled={resending}
                            className="flex items-center justify-center gap-2 w-full bg-secondary-400 text-white px-6 py-3 rounded-lg hover:bg-secondary-500 transition-colors font-semibold disabled:opacity-50"
                        >
                            {resending ? (
                                <Loader2 className="h-5 w-5 animate-spin" />
                            ) : (
                                <RefreshCcw className="h-5 w-5" />
                            )}
                            {resending ? "Resending..." : "Resend Verification Email"}
                        </button>
                        {resendMessage && (
                            <p className="text-sm text-neutral-600">{resendMessage}</p>
                        )}
                        <a
                            href="/"
                            className="inline-block bg-neutral-100 text-neutral-700 px-6 py-3 rounded-lg hover:bg-neutral-200 transition-colors font-semibold"
                        >
                            Back to Home
                        </a>
                    </div>
                )}

                {status === "error" && errorType !== "expired" && (
                    <a
                        href="/"
                        className="inline-block bg-secondary-400 text-white px-6 py-3 rounded-lg hover:bg-secondary-500 transition-colors font-semibold"
                    >
                        Back to Home
                    </a>
                )}
            </div>
        </div>
    );
};

export default VerifyEmail;
