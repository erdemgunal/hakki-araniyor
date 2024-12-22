import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const ErrorAlert = ({ error }) => {
    const router = useRouter();

    const handleRedirect = () => {
        router.push('/');
    };

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <main className="container mx-auto px-4 py-16 flex-grow flex flex-col items-center justify-center gap-6">
                <Alert variant="destructive">
                    <AlertDescription>{error || "Game not found"}</AlertDescription>
                </Alert>
                <Button onClick={handleRedirect} variant="outline">
                    Ana Sayfaya Dön
                </Button>
            </main>
        </div>
    );
};

export default ErrorAlert;