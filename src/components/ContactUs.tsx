import { contactUs } from "@/lib/data";
import Whatsapp from "./Whatsapp";
import FormContaactUs from "@/components/FormContaactUs";

const SectionContactUs = () => {
  return (
    <section className="contact-us">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-4 lg:gap-16">
          <div className="col-span-12 lg:col-span-6">
            <div>
              <div className="flex items-center gap-4">
                <p className="text-primary-soft font-bold lg:text-base">
                  {contactUs.title}
                </p>
                <svg
                  width={200}
                  height={3}
                  viewBox="0 0 200 3"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect y="0.5" width={200} height={2} fill="#AA99FF" />
                </svg>
              </div>
              <h2 className="text-neutral-700 font-medium mt-4 font-raleway">
                {contactUs.title2}
              </h2>
              <p className="mt-2 text-neutral-600 mb-2 lg:mb-4">
                {contactUs.desc}
              </p>
              <div className="mt-4 lg:mt-6">
                <Whatsapp />
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <div className="mt-6 lg:mt-0">
              <FormContaactUs />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionContactUs;
