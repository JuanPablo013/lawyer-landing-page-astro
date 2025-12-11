import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'Inicio', href: getPermalink('/') },
    { text: 'Servicios', href: getPermalink('/#servicios') },
    { text: 'Sobre mí', href: getPermalink('/#sobre-mi') },
    { text: 'Preguntas Frecuentes', href: getPermalink('/#preguntas') },
    { text: 'Ubicación', href: getPermalink('/#ubicacion') },
    { text: 'Contacto', href: getPermalink('/#contacto') },
  ],
  /* actions: [
    //{
    //  text: 'Agenda una consulta',
    //  href: getPermalink('/#contacto'),
    //},
    {
      text: 'Agenda una consulta',
      href: 'https://wa.me/573227601479?text=Hola,%20necesito%20asesoría%20legal',
      icon: 'tabler:brand-whatsapp', // Si el componente lo soporta
      // variant: 'secondary', // Para diferenciarlo visualmente
    },
  ], */
};

export const footerData = {
  links: [
    {
      title: 'Servicios Legales',
      links: [
        { text: 'Características que nos diferencian', href: getPermalink('/#caracteristicas') },
        { text: 'Áreas de práctica', href: getPermalink('/#servicios') },
        { text: 'Perfil profesional', href: getPermalink('/#sobre-mi') },
        { text: '¿Cómo trabajamos tu caso?', href: getPermalink('/#como-trabajamos') },
      ],
    },
    {
      title: 'Contacto',
      links: [
        { text: 'Formulario', href: getPermalink('/#contacto') },
        { text: 'Teléfono: +57 322 760 1479', href: 'tel:+573227601479' },
        { text: 'Correo: hdortizv@ut.edu.co', href: 'mailto:hdortizv@ut.edu.co' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Aviso de privacidad', href: getPermalink('/privacy') },
    { text: 'Términos del servicio', href: getPermalink('/terms') },
  ],
  socialLinks: [
    { ariaLabel: 'WhatsApp', icon: 'tabler:brand-whatsapp', href: 'https://wa.me/573227601479' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://instagram.com/davidortiz.edil' },
    {
      ariaLabel: 'Facebook',
      icon: 'tabler:brand-facebook',
      href: 'https://www.facebook.com/profile.php?id=61581684031861',
    },
  ],
  footNote: `
    © ${new Date().getFullYear()} HDO Abogados — Todos los derechos reservados.
  `,
};
