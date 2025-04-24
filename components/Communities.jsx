'use client';

import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

const Communities = () => {
  const whatsappGroups = [
    {
      name: 'AGI House Pune',
      link: 'https://chat.whatsapp.com/ILwgW5ml34fENJRviwYJM3',
    },
    {
      name: 'AGI House Gurgaon',
      link: 'https://chat.whatsapp.com/ENfKhxnpb2XB8FDm0ovjwj',
    },
    {
      name: 'AGI House Delhi',
      link: 'https://chat.whatsapp.com/IEaoD1AK2s10BjoakzN9RF',
    },
    {
      name: 'AGI House Noida',
      link: 'https://chat.whatsapp.com/J8rfe1rWdHb0A4d1w5FcXZ',
    },
    {
      name: 'AGI House Bangalore',
      link: 'https://chat.whatsapp.com/L5DBcokbb7H4kRTI3wMH8z',
    },
    {
      name: 'AGI House Hyderabad',
      link: 'https://chat.whatsapp.com/LTzWTglYod4ERilcGzDQqJ',
    },
    {
      name: 'AGI House Bhubaneswar',
      link: 'https://chat.whatsapp.com/EU9ISul5ekg8vPd0ReVytg',
    },
    {
      name: 'AGI House Bombay',
      link: 'https://chat.whatsapp.com/BExGcemqkyBFtp5anCAGjt',
    },
    {
      name: 'AGI House Ahmedabad',
      link: 'https://chat.whatsapp.com/KxjDjaGO5U61M3zA4jtcOI',
    }
  ];

  const upcomingEvents = [
    {
      city: 'Gurgaon',
      link: 'https://lu.ma/agihouse-gurgaon'
    },
    {
      city: 'Bombay',
      link: 'https://lu.ma/agihousebombay'
    },
    {
      city: 'Bhubaneswar',
      link: 'https://lu.ma/agihousebhubaneswar'
    },
    {
      city: 'Hyderabad',
      link: 'https://lu.ma/agihousehyderabad'
    }
  ];

  return (
    <motion.div
      variants={fadeIn('up', 'spring', 0.5, 1)}
      initial="hidden"
      whileInView="show"
      className="max-w-4xl mx-auto px-6 py-12"
    >
      <h2 className="text-4xl font-bold text-white mb-16 text-center">
        Join Our Local Communities
      </h2>

      <div className="space-y-6">
        {whatsappGroups.map((group) => (
          <motion.div
            key={group.name}
            variants={fadeIn('up', 'spring', 0.2, 0.75)}
            className="flex items-center justify-between p-6 border border-white/10 rounded-xl hover:border-white/30 transition-all bg-white/5"
          >
            <div className="flex items-center gap-4">
              <img
                src="/whatsapp2.png"
                alt="WhatsApp"
                className="w-10 h-10"
              />
              <span className="text-white text-xl font-medium">{group.name}</span>
            </div>
            
            <a
              href={group.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 text-white bg-white/10 rounded-full hover:bg-white/20 transition-all flex items-center gap-2"
            >
              Join Group
              <span className="text-lg">→</span>
            </a>
          </motion.div>
        ))}
      </div>

      <motion.div
        variants={fadeIn('up', 'spring', 0.8, 1)}
        className="mt-16"
      >
        <h3 className="text-3xl font-bold text-white mb-8 text-center">
          Upcoming Events This Weekend
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {upcomingEvents.map((event) => (
            <motion.a
              key={event.city}
              href={event.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeIn('up', 'spring', 0.2, 0.75)}
              className="flex items-center justify-between p-6 border border-white/10 rounded-xl hover:border-white/30 transition-all bg-white/5"
            >
              <span className="text-white text-xl font-medium">AGI House {event.city}</span>
              <span className="text-white/70 text-lg">→</span>
            </motion.a>
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={fadeIn('up', 'spring', 0.8, 1)}
        className="mt-12 space-y-4 text-center"
      >
        <p className="text-white/70 text-lg mb-12">
          Connect with AI enthusiasts in your city and be part of the growing AGI House community.
        </p>
        <p className="text-white/50 text-base italic">
          We're rapidly expanding! More cities coming soon - stay tuned for AGI House communities near you.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Communities;
