import { motion } from 'framer-motion'
import { Camera, Instagram, Facebook } from 'lucide-react'
import TechBackground from './TechBackground'

const RedesSociales = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  }

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Tech Background */}
      <TechBackground />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="max-w-7xl mx-auto"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Lado Izquierdo - Texto y Botones */}
            <motion.div variants={itemVariants} className="text-center lg:text-left">
              {/* Camera Icon */}
              <motion.div
                className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto lg:mx-0 mb-6 shadow-lg"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <Camera className="w-10 h-10 text-white" />
              </motion.div>

              {/* Title */}
              <motion.h2
                variants={itemVariants}
                className="text-3xl sm:text-4xl font-bold text-white mb-4"
              >
                ¿Quieres ver más trabajos?
              </motion.h2>

              {/* Description */}
              <motion.p
                variants={itemVariants}
                className="text-gray-400 text-lg mb-8 leading-relaxed"
              >
                Síguenos en nuestras redes sociales para ver actualizaciones constantes de nuestros mantenimientos
              </motion.p>

              {/* Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                {/* Instagram Button */}
                <motion.a
                  href="https://www.instagram.com/rodri_rq7?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-gradient-to-r from-pink-500 via-purple-500 to-pink-600 hover:from-pink-600 hover:via-purple-600 hover:to-pink-700 text-white px-6 py-3 rounded-lg font-semibold text-base transition-all duration-300 shadow-lg shadow-pink-500/50 flex items-center justify-center gap-2 overflow-hidden whitespace-nowrap"
                  whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(236, 72, 153, 0.5)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Instagram className="w-5 h-5" />
                  <span>Ver en Instagram</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>

                {/* Facebook Button */}
                <motion.a
                  href="https://www.facebook.com/pcstylecol/?locale=es_LA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold text-base transition-all duration-300 shadow-lg shadow-blue-500/50 flex items-center justify-center gap-2 overflow-hidden whitespace-nowrap"
                  whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(59, 130, 246, 0.5)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Facebook className="w-5 h-5" />
                  <span>Ver en Facebook</span>
                  <motion.div
                    className="absolute inset-0 bg-blue-700"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Lado Derecho - Facebook Post Embed */}
            <motion.div variants={itemVariants} className="lg:h-full flex items-center justify-center w-full">
              <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-700/50 overflow-hidden shadow-2xl w-full max-w-md">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-3 sm:p-4 flex items-center gap-2 sm:gap-3 shadow-lg">
                  <Facebook className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  <h3 className="text-white font-semibold text-base sm:text-lg">Última Publicación</h3>
                </div>
                
                {/* Facebook Page Plugin */}
                <div className="p-0 w-full overflow-x-auto">
                  <div className="w-full" style={{ minWidth: '280px' }}>
                    <iframe
                      src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fpcstylecol&tabs=timeline&width=340&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                      width="100%"
                      height="600"
                      style={{ border: 'none', overflow: 'hidden', width: '100%', maxWidth: '100%', minWidth: '280px' }}
                      scrolling="no"
                      frameBorder="0"
                      allowFullScreen={true}
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                      title="Facebook PCStyle"
                      className="w-full"
                    />
                  </div>
                </div>
                
                {/* Link para ver más */}
                <div className="p-3 sm:p-4 border-t border-slate-700 text-center">
                  <motion.a
                    href="https://www.facebook.com/pcstylecol/?locale=es_LA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 text-xs sm:text-sm font-semibold transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    Ver más publicaciones →
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default RedesSociales

