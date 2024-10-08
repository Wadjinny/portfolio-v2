import SectionHeading from "../components/section-heading";
import { motion } from "framer-motion";
import { useActiveSection } from "../signals/active-section-signal";
export default function Contact() {
    const ref = useActiveSection("Contact");
    
  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:ilyas.wadjinny@gmail.com">
          ilyas.wadjinny@gmail.com
        </a><br></br> Or {""}
        <a className="underline"
        href="#" onClick={() => {(globalThis as any).Calendly.initPopupWidget({url: 'https://calendly.com/ilyasswadjinny?hide_landing_page_details=1&hide_gdpr_banner=1'});return false;}}>
          click here</a> to schedule a meeting on Calendly !
      </p>
    </motion.section>
  );
}
