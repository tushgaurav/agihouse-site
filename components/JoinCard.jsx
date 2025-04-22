'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn } from '../utils/motion';

const JoinCard = () => {
  const socialGroups = [
    {
      name: 'WhatsApp Community',
      icon: '/whatsapp2.png',
      link: 'https://chat.whatsapp.com/your-group-link',
      description: 'Join our active WhatsApp community for daily discussions and updates',
    },
    {
      name: 'Discord Server',
      icon: '/discord.png',
      link: 'https://discord.gg/your-server',
      description: 'Connect with fellow AI enthusiasts on our Discord server',
    },
    {
      name: 'Telegram Group',
      icon: '/telegram.png',
      link: 'https://t.me/your-group',
      description: 'Follow announcements and chat on our Telegram group',
    },
  ];

  return (
    <motion.div
      variants={fadeIn('up', 'spring', 0.5, 1)}
      initial="hidden"
      whileInView="show"
      className="flex flex-col gap-8 px-6 py-12 md:px-12 md:py-16 max-w-7xl mx-auto"
    >
      <h2 className="font-bold text-[32px] md:text-[48px] text-white text-center leading-tight">
        Join Our Thriving Community
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {socialGroups.map((group, index) => (
          <motion.div
            key={group.name}
            variants={fadeIn('up', 'spring', index * 0.2, 0.75)}
            className="flex flex-col items-center p-8 glassmorphism rounded-[32px] border border-white/20 hover:border-white/40 transition-all hover:scale-[1.02] cursor-pointer"
          >
            <div className={`${styles.flexCenter} w-[120px] h-[120px] mb-6`}>
              <img
                src={group.icon}
                alt={group.name}
                className="object-contain w-full h-full"
              />
            </div>

            <h3 className="text-white text-[26px] font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              {group.name}
            </h3>

            <p className="text-secondary-white text-[18px] text-center mb-8 leading-relaxed">
              {group.description}
            </p>

            <a
              href={group.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 py-4 px-8 bg-white/10 hover:bg-white/20 transition-all rounded-full hover:shadow-lg hover:shadow-white/20 group"
            >
              <span className="text-white font-semibold">Join Now</span>
              <img 
                src="/arrow.svg" 
                alt="join" 
                className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
              />
            </a>
          </motion.div>
        ))}
      </div>

      <motion.div
        variants={fadeIn('up', 'spring', 0.8, 1)}
        className="text-center mt-12"
      >
        <p className="text-secondary-white text-[20px] leading-relaxed max-w-2xl mx-auto">
          Join us in shaping the future of AI. Connect with brilliant minds, learn from industry experts, and grow together in our inclusive community.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default JoinCard;
