import HeroSectionDesktop from "./HeroDestop";
import HeroSectionMobile from "./HeroMobile";

const HeroSection: React.FC = () => {
    return (
        <section className="relative overflow-hidden bg-white dark:bg-white">

            <div className="block md:hidden">
                <HeroSectionMobile />
            </div>

            <div className="hidden md:block">
                <HeroSectionDesktop />
            </div>

        </section>
    );
}

export default HeroSection;
