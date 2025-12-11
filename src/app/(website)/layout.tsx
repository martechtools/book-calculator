import { SiteHeader } from '@/components/layout/SiteHeader';
import { Footer } from '@/components/marketing/Footer';

export default function WebsiteLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <SiteHeader />
            <main className="flex-1">
                {children}
            </main>
            <Footer />
        </div>
    );
}
