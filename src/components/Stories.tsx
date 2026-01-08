'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { useState, useEffect } from 'react';

interface Story {
  id: number;
  situation: string;
  preview: string;
  full: string;
  color: string;
  accent: string;
}

export default function Stories() {
  const { language } = useLanguage();
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);

  // Handle Escape key to close modal
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && selectedStory) {
        setSelectedStory(null);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [selectedStory]);

  const stories: Story[] = [
    // Interview 1: Prefers natural remedies, father was heart patient
    {
      id: 1,
      situation: language === 'es' ? 'Prefiere remedios naturales' : 'Prefers natural remedies',
      preview: language === 'es'
        ? 'Si puedo esperar, lo haré. O si es un resfriado común, usaré remedios naturales. No quiero ir al médico por todo.'
        : 'If I can wait it out, I will. Or like a common cold, I\'ll just use natural remedies. I don\'t want to go to the doctor for everything.',
      full: language === 'es'
        ? 'Mi padre era paciente del corazón, así que íbamos al hospital general cercano. Él tenía Medicare. Para mí personalmente, no voy al doctor. Si puedo esperar, lo haré. O para un resfriado común, solo uso remedios naturales. No quiero ir al doctor por todo. El costo de la atención médica definitivamente nos detiene a mí o a mi familia de obtener atención. Me mudé recientemente aquí desde Maryland, así que soy nueva en el área. Usualmente estoy trabajando, así que generalmente tengo seguro médico, pero no tengo seguro médico ahora mismo porque no estoy trabajando. Tuve un pediatra en Maryland que seguí viendo después de ser adulta porque me sentía cómoda con él. Era un buen doctor. No trataba de prescribir medicinas. Nos decía, esto es lo que está pasando contigo. Puedes tomar una medicina o beber más agua o té de jengibre o algo más natural. La conveniencia, las barreras del idioma y el costo son importantes para mí.'
        : 'My father was a heart patient, so we would just go to the nearby general hospital. He had Medicare. For me personally, I don\'t go to the doctor. If I can wait it out, I will. Or like a common cold, I\'ll just use natural remedies. I don\'t want to go to the doctor for everything. The cost of healthcare definitely stops me or my family from getting care. I recently moved down here from Maryland, so I\'m new to the area. I usually am working, so I usually have health insurance, but I don\'t have health insurance right now because I\'m not working. I had a pediatrician in Maryland that I kept seeing even as an adult because I felt comfortable with him. He was a good doctor. He didn\'t try to prescribe medicines. He would tell us, this is what\'s happening with you. You can take a medicine or drink more water or ginger tea or something more natural. Convenience, language barriers, and cost are important to me.',
      color: 'from-emerald-50 to-teal-50',
      accent: 'bg-emerald-500'
    },
    // Interview 2: Pregnant with asthmatic son
    {
      id: 2,
      situation: language === 'es' ? 'Embarazada sin seguro' : 'Pregnant without insurance',
      preview: language === 'es'
        ? 'Como estoy embarazada y no tengo seguro, todavía no he ido al médico. No quiero recibir una factura.'
        : 'Since I\'m pregnant and don\'t have insurance, I haven\'t gone to the doctor yet. I don\'t want to get a bill.',
      full: language === 'es'
        ? 'Mi hijo es asmático, así que usualmente voy al ER. En Nueva York él tenía Medicaid y era gratis para él. Ahora, como estoy embarazada y no tengo seguro, todavía no he ido al médico. No quiero recibir una factura. El costo de la atención médica definitivamente nos detiene. Usualmente busco en Google para encontrar clínicas y llamo para preguntar cuáles aceptan mi seguro o el de él y si tienen disponibilidad. Busco las reseñas, si son buenas, el servicio al cliente, si te tratan bien, si te atienden rápido o si tardan mucho. El tiempo de espera es importante para mí. Tengo auto, así que el transporte no es problema.'
        : 'My son is asthmatic, so I usually just go to the ER. In New York he had Medicaid and it was free for him. Now, since I\'m pregnant and don\'t have insurance, I haven\'t gone to the doctor yet. I don\'t want to get a bill. The cost of healthcare definitely stops us. I usually use Google to find clinics and call to ask which ones accept my insurance or his insurance and if they\'re available. I look for reviews, if they\'re good, customer service, if they treat you nicely, if they take care of you fast or if they take long. Wait time is important for me. I have a car, so transportation isn\'t a problem.',
      color: 'from-cyan-50 to-blue-50',
      accent: 'bg-cyan-500'
    },
    // Interview 3: College student, trusts clinic because mom goes there
    {
      id: 3,
      situation: language === 'es' ? 'Estudiante universitaria' : 'College student',
      preview: language === 'es'
        ? 'Como mi mamá viene aquí, sé que estaré bien. Los doctores han sido amables y todos son confiables.'
        : 'Because my mom goes here, I know I\'ll be okay. The doctors have been nice and everybody\'s trustworthy.',
      full: language === 'es'
        ? 'He estado viniendo aquí por como un año porque mi mamá vino aquí primero. El costo no nos ha detenido porque si es caro, no importa, si lo necesitas, lo pagas. No es difícil encontrar clínicas para mí porque vengo aquí. Como mi mamá viene aquí, sé que estaré bien. Los doctores aquí han sido amables y todos son confiables. Estoy en la universidad, así que no es tan difícil para mí. Puedo escoger mis días, así que es bastante flexible. No he tenido problemas para entender las instrucciones médicas. Me lo explican todo. Explican qué medicamentos estoy tomando y cómo me afectarán.'
        : 'I\'ve been coming here for like a year because my mom came here first. Cost hasn\'t stopped us because if it\'s expensive, it doesn\'t matter, if you need it, you pay. It\'s not hard to find clinics for me because I come here. Because my mom goes here, I know I\'ll be okay. The doctors here have been nice and everybody\'s trustworthy. I\'m in college, so it\'s not that hard for me. I get to pick my days, so it\'s pretty flexible. I haven\'t had trouble understanding medical instructions. They break it down for me. They explain what medications I\'m taking and how they\'ll affect me.',
      color: 'from-purple-50 to-pink-50',
      accent: 'bg-purple-500'
    },
    // Interview 4: Lost father to heart conditions
    {
      id: 4,
      situation: language === 'es' ? 'Perdió a su padre' : 'Lost father to heart conditions',
      preview: language === 'es'
        ? 'La última vez que estuve en un hospital fue cuando mi padre murió frente a mí.'
        : 'The last time I was in a hospital was when my dad died in front of me.',
      full: language === 'es'
        ? 'La última vez que estuve en un hospital fue cuando mi padre murió frente a mí. Tenía muchos problemas. Estaba muy estresado y enojado. No quería ir a terapia. El estrés puede matar. Tenía muchas condiciones del corazón. Intentaron diálisis en el último minuto, pero su cuerpo no lo soportó. Por más de diez años, cada mañana y cada noche, tomaba entre nueve y doce medicamentos. Usualmente vamos a urgencias. Para casos reales, vas a un hospital grande. Necesitaba ir al ICU, y las urgencias no tienen ICUs.'
        : 'The last time I was in a hospital was when my dad died in front of me. He had a lot of issues. He was very stressed and angry. He didn\'t want to go to therapy. Stress can kill you. He had a lot of heart conditions. They tried dialysis at the last minute, but his body couldn\'t take it. For more than ten years, every morning and every night, he took around nine to twelve medications. We usually go to urgent care. For real issues, you go to a big hospital. He had to go to the ICU, and urgent care doesn\'t have ICUs.',
      color: 'from-green-50 to-lime-50',
      accent: 'bg-green-500'
    },
    // Interview 5: FIU student, was uninsured for a month
    {
      id: 5,
      situation: language === 'es' ? 'Estudiante universitaria' : 'University student',
      preview: language === 'es'
        ? 'Durante un mes sin seguro, no fui al dentista porque no podía pagarlo. El Centro de Salud de FIU fue increíble porque es gratis.'
        : 'During a month without insurance, I didn\'t go to the dentist because I couldn\'t afford it. FIU\'s Student Health Center was amazing because it\'s free.',
      full: language === 'es'
        ? 'Sí, el costo de la atención médica nos ha detenido. Hubo momentos específicos donde queríamos hacer cosas médicamente, procedimientos donde tuvimos que esperar más tiempo para ahorrar dinero. Personalmente, hubo un período cuando estuve sin seguro por un mes. Durante ese tiempo, no fui al dentista porque no podía pagarlo. El Centro de Salud estudiantil de FIU fue realmente increíble porque es gratis o está incluido en la matrícula. Fue asombroso, súper fácil y súper rápido. Mi única crítica es que no hay formulario en línea. Lo más difícil es encontrar uno que acepte mi seguro. Mi mamá y yo tenemos un seguro muy básico. Funciona, pero es limitado. Me siento más cómoda con doctoras mujeres. Tienden a ser más pacientes, maternales, y me hacen sentir más tranquila. La limpieza importa mucho. El servicio al cliente también es enorme.'
        : 'Yes, the cost of healthcare has stopped us. There have been specific times where there were things we wanted to do medically, procedures where we had to wait longer to save money. Speaking personally, there was a period when I was uninsured for about a month. During that time, I didn\'t go to the dentist because I couldn\'t afford it. FIU\'s Student Health Center was really great because it\'s free or included through tuition. It was amazing, super easy and super-fast. My only critique is that there\'s no online form. The hardest part is finding one that accepts my insurance. My mom and I have very basic insurance. It works, but it\'s limited. I feel more comfortable with female doctors. They tend to be more patient, motherly, and make me feel more at ease. Cleanliness matters a lot. Customer service is also huge.',
      color: 'from-amber-50 to-orange-50',
      accent: 'bg-amber-500'
    },
    // Interview 6: Lost Medicaid at 21, needs root canal
    {
      id: 6,
      situation: language === 'es' ? 'Sin seguro después de los 21' : 'Uninsured after 21',
      preview: language === 'es'
        ? 'Hay veces que tienes algún problema y dices: "No voy a ir al médico, mejor me quedo en casa y que se me pase".'
        : 'Sometimes you have a problem and you say: "I\'m not going to the doctor, I\'ll just stay home and let it pass".',
      full: language === 'es'
        ? 'En mi familia siempre hemos tenido Medicaid y otras ayudas. Yo ahora, como ya cumplí 21 años, ya no tengo Medicaid. Tuve un empaste. Ahora me tengo que hacer un tratamiento de conducto y eso sí tengo que pagarlo. Mi familia es de bajos recursos, por eso nos lo daban. Ahora tengo que buscar un seguro por mi cuenta. Sí, el costo de la atención médica nos ha impedido recibir atención. Hay veces que tienes algún problema y dices: "No voy a ir al médico, mejor me quedo en casa y que se me pase". Hemos visto mucha gente que hace eso. Hay personas que se ponen muy graves y algunas incluso mueren por no ir al médico, porque se endeudan de por vida. Conozco casos como Jorge que tiene mucha deuda con los hospitales.'
        : 'In my family we\'ve always had Medicaid and other assistance. Now that I turned 21, I no longer have Medicaid. I had a filling. Now I have to get a root canal and I have to pay for that. My family is low-income, that\'s why they gave it to us. Now I have to find insurance on my own. Yes, the cost of healthcare has prevented us from getting care. Sometimes you have a problem and you say: "I\'m not going to the doctor, I\'ll just stay home and let it pass". We\'ve seen a lot of people who do that. There are people who get very sick and some even die from not going to the doctor, because they go into debt for life. I know cases like Jorge who has a lot of debt with hospitals.',
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
                  P{story.id}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#0F766E]">
                    {language === 'es' ? 'Participante' : 'Participant'} {story.id}
                  </h3>
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
                  P{selectedStory.id}
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#0F766E] mb-2">
                    {language === 'es' ? 'Participante' : 'Participant'} {selectedStory.id}
                  </h2>
                  <p className="text-lg text-[#475569] font-medium">
                    {selectedStory.situation}
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
