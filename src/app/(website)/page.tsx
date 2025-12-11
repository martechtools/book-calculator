import { LandingHero } from "@/components/marketing/LandingHero";
import { TrustBar } from "@/components/marketing/TrustBar";
import { HowItWorks } from "@/components/marketing/HowItWorks";
import { BookTypes } from "@/components/marketing/BookTypes";
import { Features } from "@/components/marketing/Features";
import { WhyUs } from "@/components/marketing/WhyUs";
import { Testimonials } from "@/components/marketing/Testimonials";
import { PricingPreview } from "@/components/marketing/PricingPreview";
import { FAQ } from "@/components/marketing/FAQ";
import { Footer } from "@/components/marketing/Footer";

export default function LandingPage() {
    return (
        <main>
            <LandingHero />
            <TrustBar />
            <HowItWorks />
            <BookTypes />
            <Features />
            <WhyUs />
            <Testimonials />
            <PricingPreview />
            <FAQ />
            <Footer />
        </main>
    );
}
