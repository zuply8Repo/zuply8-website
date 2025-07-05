import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      welcome: "Welcome to our website!",
      collaborate: "Collaborate with Us!",
      manuel_profile:
        "I am the founder of this entrepreneurial venture, helping <span>Small medium enterprise (SME), Direct to customer brands and distributors</span> unlock the full potential of their operations. With over a decade of experience across global markets — including the <span>U.S., Mexico, and Germany </span>— I specialize in streamlining complex operations, enhancing responsiveness, and aligning systems for growth. From deploying WMS, to integrating SAP APO with ERP platforms, my approach combines deep technical expertise with real-world agility. I have worked with industry leaders such as <span>AB InBev, Essity, DHL, and Too Good To Go</span>, delivering scalable solutions that drive performance and profitability. Backed by a Master’s degree in Operations Management, I build robust supply chain infrastructures that keep pace with demand.",
    },
  },
  de: {
    translation: {
      manuel_profile:
        "Ich bin der Gründer dieses unternehmerischen Vorhabens und unterstütze kleine und mittelständische Unternehmen (KMU), Direct-to-Consumer-Marken sowie Distributoren dabei, das volle Potenzial ihrer Betriebsabläufe zu entfalten. Mit über einem Jahrzehnt Erfahrung in internationalen Märkten – darunter die USA, Mexiko und Deutschland – habe ich mich auf die Optimierung komplexer Prozesse, die Steigerung der Reaktionsfähigkeit sowie die systemische Ausrichtung auf Wachstum spezialisiert.Von der Einführung von Lagerverwaltungssystemen (WMS) bis hin zur Integration von SAP APO in bestehende ERP-Plattformen: Mein Ansatz verbindet tiefgehendes technisches Know-how mit praxisorientierter Flexibilität. Ich habe mit führenden Unternehmen wie AB InBev, Essity, DHL und Too Good To Go zusammengearbeitet und skalierbare Lösungen geliefert, die Leistung und Profitabilität steigern. Gestützt auf einen Masterabschluss im Bereich Operations Management biete ich nicht nur Beratung – ich baue leistungsstarke Supply-Chain-Infrastrukturen auf, die mit der Nachfrage Schritt halten.",
    },
  },
  es: {
    translation: {
      manuel_profile:
        "Soy el fundador de esta iniciativa empresarial, que ayuda a pequeñas y medianas empresas (PYME), marcas de venta directa al consumidor y distribuidores a aprovechar todo el potencial de sus operaciones. Con más de una década de experiencia en mercados internacionales, incluidos EE.UU., México y Europa, estoy especializado en optimizar procesos complejos, aumentar la capacidad de respuesta y alinear sistemáticamente para el crecimiento, desde la implantación de sistemas de gestión de almacenes (ERP) hasta la integración de SAP APO con plataformas ERP existentes: Mi enfoque combina conocimientos técnicos con flexibilidad práctica. He trabajado con organizaciones líderes como AB InBev, Essity, DHL y Too Good To Go, ofreciendo soluciones escalables que impulsan el rendimiento y la rentabilidad. Respaldado por un máster en Gestión de Operaciones, no me limito a ofrecer asesoramiento: construyo infraestructuras de alto rendimiento para la cadena de suministro que siguen el ritmo de la demanda",
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
