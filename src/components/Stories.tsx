'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';

interface Story {
  id: number;
  name: string;
  age: number;
  situation: string;
  preview: string;
  full: string;
  color: string;
  accent: string;
}

export default function Stories() {
  const { t, language } = useLanguage();
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);

  const stories = [
    {
      id: 1,
      name: language === 'es' ? 'María' : 'Maria',
      age: 24,
      situation: language === 'es' ? 'Embarazada sin seguro' : 'Pregnant without insurance',
      preview: language === 'es' 
        ? 'Como estoy embarazada y no tengo seguro, todavía no he ido al médico. No quiero recibir una factura.'
        : 'Since I\'m pregnant and don\'t have insurance, I haven\'t gone to the doctor yet. I don\'t want to get a bill.',
      full: language === 'es'
        ? 'María tiene un hijo asmático que tenía Medicaid en Nueva York, donde la atención era gratuita. Ahora embarazada y sin seguro en Florida, evita ir al médico por miedo a las facturas. Busca clínicas por Google, llamando para preguntar cuáles aceptan su seguro y cuáles tienen disponibilidad. Para ella, lo más importante son las reseñas, el servicio al cliente y los tiempos de espera cortos. Sueña con un sistema más accesible donde no haya tanto papeleo para aplicar.'
        : 'Maria has an asthmatic son who had Medicaid in New York, where care was free. Now pregnant and uninsured in Florida, she avoids going to the doctor for fear of bills. She searches for clinics on Google, calling to ask which ones accept her insurance and have availability. For her, reviews, customer service, and short wait times matter most. She dreams of a more accessible system with less paperwork.',
      color: 'from-emerald-50 to-teal-50',
      accent: 'bg-emerald-500'
    },
    {
      id: 2,
      name: language === 'es' ? 'Ana' : 'Ana',
      age: 19,
      situation: language === 'es' ? 'Estudiante universitaria' : 'College student',
      preview: language === 'es'
        ? 'Mi mamá viene aquí, así que sé que estaré bien. Los doctores han sido amables y todos son confiables.'
        : 'Because my mom goes here, I know I\'ll be okay. The doctors have been nice and everybody\'s trustworthy.',
      full: language === 'es'
        ? 'Ana es estudiante universitaria con horarios flexibles. Su madre descubrió esta clínica y ahora ambas confían en ella. Los doctores se toman su tiempo para explicar todo: qué medicamentos toma y cómo la afectarán. A diferencia de los hospitales donde esperas mucho y el personal está agotado, aquí se sienten acomodadas y atendidas con paciencia. Para Ana, tener un lugar confiable donde la traten con respeto es lo más importante.'
        : 'Ana is a college student with flexible schedules. Her mother discovered this clinic and now both trust it. The doctors take their time to explain everything: what medications she\'s taking and how they\'ll affect her. Unlike hospitals where you wait a lot and staff are exhausted, here they feel accommodated and treated with patience. For Ana, having a reliable place where she\'s treated with respect is most important.',
      color: 'from-cyan-50 to-blue-50',
      accent: 'bg-cyan-500'
    },
    {
      id: 3,
      name: language === 'es' ? 'Laura' : 'Laura',
      age: 22,
      situation: language === 'es' ? 'Sin seguro después de los 21' : 'Uninsured after 21',
      preview: language === 'es'
        ? 'Hay veces que tienes algún problema y dices: "No voy a ir al médico, mejor me quedo en casa y que se me pase".'
        : 'Sometimes you have a problem and you say: "I\'m not going to the doctor, I\'ll just stay home and let it pass".',
      full: language === 'es'
        ? 'Laura perdió su Medicaid al cumplir 21 años. Ahora enfrenta un tratamiento de conducto que debe pagar de su bolsillo. Su familia siempre tuvo Medicaid por ser de bajos recursos, pero ella quedó fuera del sistema. Ha visto personas que se ponen muy graves, algunas incluso mueren, por no ir al médico y evitar endeudarse de por vida. Conoce casos como el de Jorge, quien tiene enormes deudas hospitalarias por emergencias. Laura está en proceso de encontrar un seguro asequible, confiando en las recomendaciones de su familia.'
        : 'Laura lost her Medicaid when she turned 21. Now she faces a root canal she must pay out of pocket. Her family always had Medicaid for being low-income, but she was left out of the system. She\'s seen people get very sick, some even die, from avoiding the doctor to prevent lifelong debt. She knows cases like Jorge\'s, who has enormous hospital debts from emergencies. Laura is in the process of finding affordable insurance, trusting her family\'s recommendations.',
      color: 'from-purple-50 to-pink-50',
      accent: 'bg-purple-500'
    },
    {
      id: 4,
      name: language === 'es' ? 'Patricia' : 'Patricia',
      age: 28,
      situation: language === 'es' ? 'Prefiere remedios naturales' : 'Prefers natural remedies',
      preview: language === 'es'
        ? 'Si puedo esperar, lo haré. O si es un resfriado común, usaré remedios naturales. No quiero ir al médico por todo.'
        : 'If I can wait it out, I will. Or like a common cold, I\'ll just use natural remedies. I don\'t want to go to the doctor for everything.',
      full: language === 'es'
        ? 'Patricia se mudó recientemente de Maryland a Florida y está entre trabajos, sin seguro médico. El costo de la atención la detiene de ir al doctor a menos que sea absolutamente necesario. Tuvo un pediatra en Maryland que mantuvo incluso de adulta porque le daba opciones naturales además de medicamentos. Busca clínicas convenientes, cerca de casa, sin barreras de idioma y con costos razonables. Valora la transparencia: doctores que explican las condiciones y ofrecen alternativas antes de prescribir medicamentos.'
        : 'Patricia recently moved from Maryland to Florida and is between jobs, without health insurance. The cost of care stops her from going to the doctor unless absolutely necessary. She had a pediatrician in Maryland she kept even as an adult because he gave her natural options alongside medications. She looks for convenient clinics, close to home, without language barriers and with reasonable costs. She values transparency: doctors who explain conditions and offer alternatives before prescribing medications.',
      color: 'from-green-50 to-lime-50',
      accent: 'bg-green-500'
    },
    {
      id: 5,
      name: language === 'es' ? 'Sofía' : 'Sofia',
      age: 25,
      situation: language === 'es' ? 'Estudiante universitaria' : 'University student',
      preview: language === 'es'
        ? 'Durante un mes sin seguro, no fui al dentista porque no podía pagarlo. El Centro de Salud de FIU fue increíble porque es gratis.'
        : 'During a month without insurance, I didn\'t go to the dentist because I couldn\'t afford it. FIU\'s Student Health Center was amazing because it\'s free.',
      full: language === 'es'
        ? 'Sofía perdió a su padre por problemas cardíacos y estrés. Ella misma ha enfrentado periodos sin seguro donde tuvo que depender del Centro de Salud estudiantil de FIU, que fue rápido y gratuito, aunque solo funciona en horario laboral. Su mayor frustración es encontrar doctores que acepten su seguro básico. Prefiere doctoras porque las siente más pacientes y comprensivas. Valora la limpieza, el servicio al cliente y que el personal realmente se preocupe. Su deseo: transparencia en los tiempos de espera.'
        : 'Sofia lost her father to heart problems and stress. She herself has faced periods without insurance where she had to rely on FIU\'s Student Health Center, which was fast and free, though only open during business hours. Her biggest frustration is finding doctors who accept her basic insurance. She prefers female doctors because she finds them more patient and understanding. She values cleanliness, customer service, and staff who genuinely care. Her wish: transparency in wait times.',
      color: 'from-amber-50 to-orange-50',
      accent: 'bg-amber-500'
    },
    {
      id: 6,
      name: language === 'es' ? 'Carmen' : 'Carmen',
      age: 45,
      situation: language === 'es' ? 'Maestra con dos maestrías' : 'Teacher with two master\'s degrees',
      preview: language === 'es'
        ? 'Trabajo para el distrito escolar de Broward. Tengo una licenciatura y dos maestrías, y aún así no puedo costear atención médica.'
        : 'I work for Broward County School Board. I have a bachelor\'s degree and two master\'s degrees, and I still can\'t afford healthcare.',
      full: language === 'es'
        ? 'Carmen es maestra con dos maestrías pero no puede costear atención médica. Perdió su Medicaid cuando su hija cumplió 18, a pesar de que ella la sigue manteniendo. Sin tiroides y con historial de insuficiencia renal, casi muere durante COVID. Pasó un año completo sin cobertura porque perdió el periodo de inscripción en el trabajo. Se hospitalizó sin seguro, ignorando las facturas porque no puede pagarlas. Esta clínica le da medicamentos directamente, incluyendo tratamiento para diabetes y salud mental. Aquí encontró atención asequible los sábados, algo imposible en otros lugares.'
        : 'Carmen is a teacher with two master\'s degrees but can\'t afford healthcare. She lost her Medicaid when her daughter turned 18, even though she still supports her. Without a thyroid and with a history of kidney failure, she almost died during COVID. She spent an entire year without coverage because she missed open enrollment at work. She was hospitalized without insurance, ignoring the bills because she can\'t pay them. This clinic gives her medications directly, including diabetes and mental health treatment. Here she found affordable care on Saturdays, impossible elsewhere.',
      color: 'from-rose-50 to-red-50',
      accent: 'bg-rose-500'
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#D1FAE5] to-[#A7F3D0] pt-32 pb-20 px-[5%]">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-[#0F766E] mb-6 text-center">
          {language === 'es' ? 'Historias Reales' : 'Real Stories'}
        </h1>
        <p className="text-xl md:text-2xl text-[#334155] mb-12 text-center font-medium max-w-3xl mx-auto">
          {language === 'es' 
            ? 'Conoce las experiencias de personas reales navegando el sistema de salud en el sur de Florida'
            : 'Meet real people navigating the healthcare system in South Florida'}
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {stories.map((story) => (
            <div
              key={story.id}
              onClick={() => setSelectedStory(story)}
              className={`bg-gradient-to-br ${story.color} rounded-2xl shadow-lg p-6 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border-2 border-white/50`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-16 h-16 ${story.accent} rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0`}>
                  {story.name[0]}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#0F766E]">{story.name}</h3>
                  <p className="text-sm text-[#475569] font-medium">{story.age} {language === 'es' ? 'años' : 'years old'}</p>
                  <p className="text-sm text-[#059669] font-semibold mt-1">{story.situation}</p>
                </div>
              </div>
              <p className="text-[#334155] italic leading-relaxed">
                "{story.preview}"
              </p>
              <button className="mt-4 text-[#0F766E] font-semibold hover:underline">
                {language === 'es' ? 'Leer historia completa →' : 'Read full story →'}
              </button>
            </div>
          ))}
        </div>

        {selectedStory && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedStory(null)}
          >
            <div
              className={`bg-gradient-to-br ${selectedStory.color} rounded-3xl shadow-2xl max-w-3xl w-full max-h-[80vh] overflow-y-auto p-8 md:p-12 border-4 border-white/50`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start gap-6 mb-6">
                <div className={`w-20 h-20 ${selectedStory.accent} rounded-full flex items-center justify-center text-white text-3xl font-bold flex-shrink-0`}>
                  {selectedStory.name[0]}
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#0F766E] mb-2">
                    {selectedStory.name}
                  </h2>
                  <p className="text-lg text-[#475569] font-medium">
                    {selectedStory.age} {language === 'es' ? 'años' : 'years old'} • {selectedStory.situation}
                  </p>
                </div>
              </div>
              
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 mb-6">
                <p className="text-xl text-[#334155] italic leading-relaxed">
                  "{selectedStory.preview}"
                </p>
              </div>

              <p className="text-lg text-[#334155] leading-relaxed mb-6">
                {selectedStory.full}
              </p>

              <button
                onClick={() => setSelectedStory(null)}
                className="w-full bg-[#0F766E] text-white font-semibold py-3 px-6 rounded-xl hover:bg-[#0d5f58] transition-colors"
              >
                {language === 'es' ? 'Cerrar' : 'Close'}
              </button>
            </div>
          </div>
        )}

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-[#0F766E] mb-4">
            {language === 'es' ? '¿Tienes una historia que compartir?' : 'Have a story to share?'}
          </h3>
          <p className="text-lg text-[#475569] leading-relaxed">
            {language === 'es'
              ? 'Tu experiencia puede ayudar a otros a encontrar el apoyo que necesitan. Cada historia importa.'
              : 'Your experience can help others find the support they need. Every story matters.'}
          </p>
        </div>
      </div>
    </section>
  );
}
