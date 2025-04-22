'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn } from '../utils/motion';

const JoinCard = () => {
  const socialGroups = [
    {
      name: 'WhatsApp Community',
      icon: '/whatsapp.svg',
      link: 'https://chat.whatsapp.com/your-group-link',
      description: 'Join our active WhatsApp community for daily discussions and updates',
    },
    {
      name: 'Discord Server',
      icon: '/discord.svg',
      link: 'https://discord.gg/your-server',
      description: 'Connect with fellow AI enthusiasts on our Discord server',
    },
    {
      name: 'Telegram Group',
      icon: '/telegram.svg',
      link: 'https://t.me/your-group',
      description: 'Follow announcements and chat on our Telegram group',
    },
  ];

  return (
    <motion.div
      variants={fadeIn('up', 'spring', 0.5, 1)}
      initial="hidden"
      whileInView="show"
      className="flex flex-col gap-8 px-6 py-12 md:px-12 md:py-16"
    >
      <h2 className="font-bold text-[32px] md:text-[48px] text-white text-center">
        Join Our Community
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {socialGroups.map((group, index) => (
          <motion.div
            key={group.name}
            variants={fadeIn('up', 'spring', index * 0.2, 0.75)}
            className="flex flex-col items-center p-8 glassmorphism rounded-[24px] border border-white/20"
          >
            <div className={`${styles.flexCenter} w-[60px] h-[60px] rounded-full bg-white/10 mb-4`}>
              <img
                src={group.icon}
                alt={group.name}
                className="w-1/2 h-1/2 object-contain"
              />
            </div>

            <h3 className="text-white text-[24px] font-semibold mb-4">
              {group.name}
            </h3>

            <p className="text-secondary-white text-[16px] text-center mb-6">
              {group.description}
            </p>

            <a
              href={group.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 py-3 px-6 bg-white/10 hover:bg-white/20 transition-colors rounded-full"
            >
              <span className="text-white">Join Now</span>
              <img src="/arrow.svg" alt="join" className="w-4 h-4" />
            </a>
          </motion.div>
        ))}
      </div>

      <motion.div
        variants={fadeIn('up', 'spring', 0.8, 1)}
        className="text-center mt-8"
      >
        <p className="text-secondary-white text-[18px]">
          Join us in shaping the future of AI. Connect, learn and grow together.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default JoinCard;
