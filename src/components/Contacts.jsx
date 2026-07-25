import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-24">
      {/* Heading */}
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -80 }}
        transition={{ duration: 0.8 }}
        className="my-16 text-center text-5xl font-bold tracking-wide"
      >
        Get <span className="text-cyan-400">In Touch</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="mx-auto mb-12 max-w-2xl text-center text-lg leading-8 text-neutral-400 text-justify"
      >
        I'm always open to discussing new opportunities, collaborations,
        research, or innovative projects in AI, Computer Vision, Machine
        Learning, and Remote Sensing.
      </motion.p>

      {/* Contact Card */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 80 }}
        transition={{ duration: 1 }}
        className="mx-auto max-w-xl rounded-3xl border border-neutral-800 bg-neutral-900/40 p-8 shadow-xl"
      >
        {/* Address */}
        <div className="mb-6 flex items-center gap-4">
          <FaMapMarkerAlt className="text-2xl text-cyan-400" />
          <p className="text-lg text-neutral-300">{CONTACT.address}</p>
        </div>

        {/* Phone */}
        {/* <div className="mb-6 flex items-center gap-4">
          <FaPhoneAlt className="text-2xl text-green-400" />
          <a
            href={`tel:${CONTACT.phoneNo}`}
            className="text-lg text-neutral-300 transition hover:text-white"
          >
            {CONTACT.phoneNo}
          </a>
        </div> */}

        {/* Email */}
        <div className="flex items-center gap-4">
          <FaEnvelope className="text-2xl text-red-400" />
          <a
            href={`mailto:${CONTACT.email}`}
            className="text-lg text-neutral-300 transition hover:text-white"
          >
            {CONTACT.email}
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;