import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Send, MapPin, Clock, Phone, Mail, CheckCircle, AlertCircle } from 'lucide-react'
import TechBackground from './TechBackground'

const Contacto = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  const [formStatus, setFormStatus] = useState({ type: '', message: '' })
  const [isPreSelected, setIsPreSelected] = useState(false)

  // Leer el servicio seleccionado del portafolio
  useEffect(() => {
    const selectedService = localStorage.getItem('selectedService')
    if (selectedService) {
      setFormData(prev => ({ ...prev, service: selectedService }))
      setIsPreSelected(true)
      localStorage.removeItem('selectedService')
    }
  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Validación básica
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailPattern.test(formData.email)) {
      setFormStatus({ type: 'error', message: 'Por favor, ingresa un email válido.' })
      return
    }

    // Crear mensaje para WhatsApp
    const serviceNames = {
      'reparacion': 'Reparación de Hardware',
      'mantenimiento': 'Mantenimiento Preventivo',
      'actualizacion': 'Actualización de Componentes',
      'virus': 'Eliminación de Virus',
      'recuperacion': 'Recuperación de Datos',
      'remoto': 'Soporte Técnico Remoto',
      'otros': 'Otros'
    }

    const serviceName = serviceNames[formData.service] || formData.service

    const whatsappMessage = `¡Hola PCStyle! Me interesa su servicio:

👤 *Nombre:* ${formData.name}
📧 *Email:* ${formData.email}
📱 *Teléfono:* ${formData.phone}
🔧 *Servicio:* ${serviceName}
💬 *Mensaje:* ${formData.message}

¡Gracias!`

    // Codificar el mensaje para URL
    const encodedMessage = encodeURIComponent(whatsappMessage)
    const whatsappUrl = `https://wa.me/573225934970?text=${encodedMessage}`

    // Mostrar mensaje de éxito primero
    setFormStatus({ type: 'success', message: '¡Redirigiendo a WhatsApp...' })
    
    // Abrir WhatsApp después de un pequeño delay para mostrar el mensaje
    setTimeout(() => {
      window.location.href = whatsappUrl
    }, 300)
    
    // Limpiar formulario después de un breve delay
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', service: '', message: '' })
      setFormStatus({ type: '', message: '' })
    }, 2000)
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Ubicación',
      content: 'Urbanización Monterosso, Manzana E #casa 28 2AN-60\nCúcuta, Norte de Santander, Colombia',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Clock,
      title: 'Horario',
      content: 'Abierto ⋅ Cierra a las 8 p.m.',
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: Phone,
      title: 'Teléfono',
      content: '322 5934970',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'contacto@pcstyle.com',
      color: 'from-orange-500 to-orange-600'
    },
  ]

  return (
    <section id="contacto" className="py-24 bg-slate-900 relative overflow-hidden">
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
            <span className="text-gradient">Contáctanos</span>
          </motion.h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Estamos aquí para ayudarte. ¡Agenda tu servicio ahora!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-slate-800/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50"
          >
            {isPreSelected && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg"
              >
                <p className="text-blue-400 text-sm">
                  ✓ Servicio pre-seleccionado. Por favor, completa los datos restantes.
                </p>
              </motion.div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="322 5934970"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                  Servicio
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="reparacion">Reparación de Hardware</option>
                  <option value="mantenimiento">Mantenimiento Preventivo</option>
                  <option value="actualizacion">Actualización de Componentes</option>
                  <option value="virus">Eliminación de Virus</option>
                  <option value="recuperacion">Recuperación de Datos</option>
                  <option value="remoto">Soporte Técnico Remoto</option>
                  <option value="otros">Otros</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all"
                  placeholder="Describe tu problema o solicitud..."
                />
              </div>

              {formStatus.message && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-lg flex items-center gap-3 ${
                    formStatus.type === 'success'
                      ? 'bg-green-500/20 text-green-400 border border-green-500/50'
                      : 'bg-red-500/20 text-red-400 border border-red-500/50'
                  }`}
                >
                  {formStatus.type === 'success' ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    <AlertCircle className="w-5 h-5" />
                  )}
                  <p>{formStatus.message}</p>
                </motion.div>
              )}

              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg shadow-blue-500/50 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02, boxShadow: '0 10px 30px rgba(59, 130, 246, 0.5)' }}
                whileTap={{ scale: 0.98 }}
              >
                <Send className="w-5 h-5" />
                Enviar Solicitud
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-800/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 group"
                  whileHover={{ scale: 1.02, x: 10 }}
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      className={`w-14 h-14 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="font-semibold text-white mb-2">{info.title}</h3>
                      <p className="text-gray-400 whitespace-pre-line">{info.content}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        {/* Google Maps */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto mt-12"
        >
          <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-700/50 overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.457637421174!2d-72.50682212542341!3d7.951568704923795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e6645bfd93b47ed%3A0x6d2d74af0c20ccdf!2sPCStyle%20-%20Servicio%20t%C3%A9cnico%20en%20computadores%20y%20port%C3%A1tiles%20a%20domicilio!5e0!3m2!1ses-419!2sco!4v1762020627275!5m2!1ses-419!2sco"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación PCStyle - Urbanización Monterosso, Manzana E #casa 28 2AN-60, Cúcuta"
              className="w-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contacto

