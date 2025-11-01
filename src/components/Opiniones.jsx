import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import TechBackground from './TechBackground'

const Opiniones = () => {
  const testimonios = [
    {
      name: 'María Camila',
      location: 'Cúcuta',
      rating: 5,
      comment: 'Excelente servicio, muy profesionales. Mi computadora quedó como nueva después del mantenimiento. Totalmente recomendado.',
      avatar: 'MC',
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Juan Sebastián',
      location: 'Cúcuta',
      rating: 5,
      comment: 'Rápido, eficiente y con excelente atención al cliente. Solucionaron mi problema en el mismo día.',
      avatar: 'JS',
      color: 'from-green-500 to-green-600'
    },
    {
      name: 'Ana Rodríguez',
      location: 'Cúcuta',
      rating: 5,
      comment: 'Profesionales de verdad. Me ayudaron a actualizar mi PC y ahora funciona perfectamente. Muchas gracias.',
      avatar: 'AR',
      color: 'from-purple-500 to-purple-600'
    },
    {
      name: 'Carlos González',
      location: 'Cúcuta',
      rating: 5,
      comment: 'El mejor servicio técnico de la ciudad. Precios justos y trabajo de calidad. Definitivamente volveré.',
      avatar: 'CG',
      color: 'from-orange-500 to-orange-600'
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  }

  return (
    <section id="opiniones" className="py-24 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-800 relative overflow-hidden">
      {/* Tech Background */}
      <TechBackground />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Lo que dicen <span className="text-gradient">nuestros clientes</span>
          </motion.h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            La satisfacción de nuestros clientes es nuestra prioridad
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {testimonios.map((testimonio, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-slate-800/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-yellow-500/50 transition-all duration-300"
              whileHover={{ y: -10, scale: 1.02 }}
            >
              {/* Quote icon */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-16 h-16 text-yellow-400" />
              </div>

              {/* Stars */}
              <div className="flex items-center mb-4 gap-1">
                {[...Array(testimonio.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 + i * 0.1 }}
                  >
                    <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  </motion.div>
                ))}
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed relative z-10">
                "{testimonio.comment}"
              </p>

              <div className="flex items-center gap-4">
                <motion.div
                  className={`w-12 h-12 bg-gradient-to-br ${testimonio.color} rounded-full flex items-center justify-center text-white font-bold shadow-lg`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {testimonio.avatar}
                </motion.div>
                <div>
                  <p className="font-semibold text-white">{testimonio.name}</p>
                  <p className="text-sm text-gray-400">{testimonio.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Google Reviews Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 max-w-2xl mx-auto bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-600/50 text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="text-4xl font-bold">G</div>
            <div>
              <p className="text-lg font-semibold text-white">Calificación en Google Reviews</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
            ))}
            <span className="text-3xl font-bold text-white ml-2">4.9</span>
            <span className="text-gray-400">de 5 estrellas</span>
          </div>
          <p className="text-gray-400">Más de 200+ reseñas verificadas</p>
        </motion.div>
      </div>
    </section>
  )
}

export default Opiniones

