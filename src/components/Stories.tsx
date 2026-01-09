'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { useState, useEffect } from 'react';

interface Story {
  id: number;
  name?: string;
  age?: string;
  situation: string;
  preview: string;
  full: string;
  transcript: string; // New field for original script
  color: string;
  accent: string;
}

export default function Stories() {
  const { language, setLanguage } = useLanguage();
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);
  const [showFullTranscript, setShowFullTranscript] = useState(false);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && selectedStory) {
        setSelectedStory(null);
        setShowFullTranscript(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [selectedStory]);

  const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSfT2FpxHL6k0ijmawaJmSLG2M56J_M2zxPR7mKxZH0IQYUNvw/viewform?embedded=true';
  const SHARE_STORY_ID = 9;
  const handleShareStory = () => {
    window.open(GOOGLE_FORM_URL, '_blank');
  };
  const stories: Story[] = [
    {
      id: 1,
    situation: language === 'es' ? 'Actualmente desempleada y sin seguro médico' : 'Currently Unemployed and currently uninsured',
    preview: language === 'es' ? 'Si puedo esperar, lo haré.' : 'If I can wait it out, I will.',
    full: language === 'es' ? 
      'Crecí viendo a mi padre, un paciente del corazón, ir siempre al hospital general cercano porque tenía Medicare. Pero para mí, ir al doctor nunca ha sido la primera opción. El costo de la atención médica definitivamente nos detiene a mí y a mi familia de buscar atención, así que prefiero esperar, escuchar a mi cuerpo y tratar lo simple de manera natural. Me mudé recientemente desde Maryland y ahora, sin estar trabajando ni tener seguro médico, esta realidad se siente aún más fuerte. En Maryland tenía un pediatra al que seguí viendo incluso de adulta porque me hacía sentir cómoda: no empujaba medicamentos, explicaba lo que pasaba y ofrecía opciones como agua, descanso o té de jengibre. Por eso, para mí la confianza, la conveniencia, el costo y evitar barreras del idioma son clave al buscar atención médica: quiero sentirme entendida, no medicada por rutina.' : 
      'I grew up watching my father, a heart patient, always go to the nearby general hospital because he had Medicare. But for me, going to the doctor has never been the first option. The cost of healthcare definitely stops me and my family from seeking care, so I prefer to wait, listen to my body, and treat simple things naturally. I recently moved from Maryland and now, without working or having health insurance, this reality feels even stronger. In Maryland, I had a pediatrician I continued to see even as an adult because they made me feel comfortable: they didn’t push medications, explained what was happening, and offered options like water, rest, or ginger tea. That’s why, for me, trust, convenience, cost, and avoiding language barriers are key when seeking medical care: I want to feel understood, not routinely medicated.',
      transcript: `Nile: You’re English, right?
  Interviewee: Yeah.
  Nile: Okay. Like, the first question is something like, what was the last time you or someone in your family needed healthcare? Like, how did you manage it? Like, you were like, oh, let’s go to a hospital, let’s go to this clinic, let’s look what’s best.
  Interviewee: Probably my father, but he was a heart patient, so we would just go to the hospital.
  Nile: And you guys have, like, a hospital you guys always go?
  Interviewee: Yeah, just the general hospital nearby.
  Nile: Okay. Because do you have Medicaid, Medicare?
  Interviewee: I don’t. I think he did.
  Nile: Okay. So, he straight go to a hospital because of the Medicare?
  Interviewee: Honestly, I’m not… I don’t really handle his medical stuff. So for me, honestly, for me personally, I don’t go to the doctor.
  Nile: Even if you suffer, you stay home?
  Interviewee: I mean, if I’m like suffering, I’m sure. But fortunately, I haven’t really been in that situation. But anything sort of like medically, like long-term, something happening like that, I would go to a doctor or something we’ve always been going to.
  Nile: Do you think that cost of healthcare, like, it stops you or your family from getting healthcare?
  Interviewee: Yes, definitely.
  Nile: Yeah, right? Like it’s not suffering, but like if you have any…
  Interviewee: Right. If I can wait it out, I will. Yeah. Or like a common cold or something, I’ll just use natural remedies. I don’t want to go to the doctor for everything.
  Nile: Will you trust this place also for a big thing, or is this more like a small thing?
  Interviewee: Well, this is my first time here.
  Nile: Okay. How did you hear about this?
  Interviewee: From a friend. I recently moved down here, so I’m new to the area. I usually am working, so I usually have health insurance, but I don’t have health insurance right now because I’m not working. So it’s a very new process for me.
  Nile: Okay. And what would you say, like, are you from Florida?
  Interviewee: No, not originally. I’m from Maryland.
  Nile: Ah, okay, that’s cool. So yeah, that’s fine. Why would you say that it’s the hardest thing for someone when you’re here to find a clinic that you really like? I mean, you don’t go a lot to the doctor, you say, but like…
  Interviewee: I guess I would say it would be a factor of how much it costs and how I feel with the doctor. We had a doctor when I was in Maryland. He was actually… what is it for… when is your children’s doctor called?
  Nile: Pediatrician.
  Interviewee: Yeah. So he was my pediatrician, but I kept going to him after I was an adult because I felt comfortable with him. He was a good doctor. He didn’t really try to prescribe medicines. He would tell us, okay, this is what’s going on with you. You can either take a medicine or drink more water or ginger tea or something more natural. He would give you both options. It wasn’t very cost effective either. And convenience was another thing. It was right across the street from my college.
  Nile: Okay, so that’s what you look for when you want to go to a clinic? Close to your place?
  Interviewee: Yes. Convenience, language barriers, and cost. And for me personally, I don’t like to be on medications.
  Nile: Yeah, no, we’re saying the exact same thing right now.
  Interviewee: So I would avoid medications at all costs, and he was very open to that.
  Nile: So that’s what makes you trust a clinic. What makes you unsure about going to one?
  Interviewee: I guess I would go off of someone that has been there. If they have negative or positive reviews.
  Nile: Yeah, you trust what other people say. How do your work schedule, transportation, or others impact your ability to get care?
  Interviewee: For me right now, I’m not working, so it’s easier to have morning schedules and things like that. But I think that does contribute a lot.
  Nile: Yeah. How is transportation also?
  Interviewee: Transportation is a big thing as well, because this was a 45-minute drive for me. But I go to school nearby.
  Nile: Where do you go?
  Interviewee: Miramar.
  Nile: Okay, that’s cool. Have you ever had trouble understanding medical instructions or documents because of language or other issues?
  Interviewee: Not so much. I mean, they do use medical lingo sometimes. So some things are harder to understand. Or they’ll tell you that you have some condition, but how am I supposed to know what that means? And sometimes they don’t explain it.
  Nile: Yeah.
  Interviewee: They just tell you what it is. And that kind of goes into doctors that push medications. They say you have some condition, you need this medicine, but they don’t explain it.
  Nile: Yeah, you’re like, why would I take it?
  Interviewee: Exactly.
  Nile: In an ideal world, what would make healthcare easier or give your family calmness?
  Interviewee: I think just transparency. If a doctor tells you you have something going on, instead of saying you need medical attention immediately, they explain that it could be diet, exercise, sunlight, things like that. It helps you understand. It’s more individual care, not just a broad statement.
  Nile: Okay. I wasn’t expecting people to say things like free healthcare, but that’s nice too. Thank you so much. You answered everything really easily and clearly.`,
  color: 'from-blue-50 to-cyan-50',
  accent: 'bg-blue-500'
  
    },
  {
    id: 2,
    situation: language === 'es' ? 'Embarazada y sin seguro médico' : 'Pregnant and currently uninsured',
    preview: language === 'es' ? 'Como estoy embarazada y no tengo seguro, todavía no he ido al médico. No quiero recibir una factura.' : 'Since I’m pregnant and I don’t have insurance, I haven’t gone to the doctor yet. I don’t want to get a bill.',
    full: language === 'es' ? 
      'Mi hijo es asmático, así que usualmente voy al ER. [cite_start]En Nueva York él tenía Medicaid y era gratis para él[cite: 80, 84, 86]. Ahora, como estoy embarazada y no tengo seguro, todavía no he ido al médico. [cite_start]No quiero recibir una factura[cite: 88, 89]. [cite_start]El costo de la atención médica definitivamente nos detiene[cite: 89]. [cite_start]Usualmente busco en Google para encontrar clínicas y llamo para preguntar cuáles aceptan mi seguro o el de él y si tienen disponibilidad[cite: 96, 98]. [cite_start]Busco las reseñas, si son buenas, el servicio al cliente, si te tratan bien, si te atienden rápido o si tardan mucho[cite: 100]. [cite_start]El tiempo de espera es importante para mí[cite: 102]. [cite_start]Tengo auto, así que el transporte no es problema[cite: 104].' : 
      'My son is asthmatic, so I usually go to the ER. [cite_start]In New York he had Medicaid and it was free for him[cite: 80, 84, 86]. Now, since I’m pregnant and I don’t have insurance, I haven’t gone to the doctor yet. [cite_start]I don’t want to get a bill[cite: 88, 89]. [cite_start]The cost of healthcare definitely stops us[cite: 89]. [cite_start]I usually search Google to find clinics and call to ask which ones accept my insurance or his and if they are available[cite: 96, 98]. [cite_start]I look for reviews, if they are good, the customer service, if they treat you well, if they take care of you fast or if they take long[cite: 100]. [cite_start]Wait time is important to me[cite: 102]. [cite_start]I have a car, so transportation is not a problem[cite: 104].',
    transcript: `Nile: So the first thing, I know that your little boy has asthma, but what was the last time you or your family had a health issue? How did you handle it medically? Did you go to the hospital, stay home, something else?
    Interviewee: Well, since he’s asthmatic, I usually just go to the ER.
    Nile: To the emergency room?
    Interviewee: That’s right.
    Nile: Do you have to pay for the ER as well?
    Interviewee: Well, over there he had Medicaid in New York.
    Nile: How much was it in New York?
    Interviewee: It was free for him.
    Nile: Okay. Has the cost of healthcare ever stopped you or your family from getting healthcare?
    Interviewee: Well, right now, since I’m pregnant and I don’t have insurance, I haven’t gone to the doctor yet. I don’t want to get a bill. So I think maybe yes.
    Nile: Yeah, because even with insurance it can be expensive, and without insurance it’s expensive too. If you had insurance, would cost still be an issue for you?
    Interviewee: Yeah.
    Nile: What’s the hardest part for you about finding a clinic or doctor here in South Florida?
    Interviewee: I don’t know.
    Nile: How do you usually look for one? Do you Google it or ask a friend?
    Interviewee: Usually Google.
    Nile: You use Google to find a clinic and go with whatever is closest?
    Interviewee: Yeah. I usually call and ask which one takes my insurance or his insurance and if they’re available.
    Nile: What do you look for when choosing a clinic? Location, transportation, language?
    Interviewee: Usually the reviews. If they’re good, the customer service, if they treat you nicely, if they take care of you fast or if they take long.
    Nile: So, wait time is important for you?
    Interviewee: Yes.
    Nile: How do your work schedule, transportation, or other responsibilities impact your ability to get care?
    Interviewee: Not really. I have a car.
    Nile: Have you ever had trouble understanding medical instructions or documents because of language?
    Interviewee: No. Usually it’s easy. There aren’t really words I don’t understand.
    Nile: What about insurance or healthcare paperwork? Sometimes the wording is technical.
    Interviewee: If I don’t understand, I usually look it up on Google.
    Nile: Last question. In an ideal world, if you had a magic wand, what would make getting healthcare easier or give your family peace of mind?
    Interviewee: Making it more accessible and easier to apply, instead of waiting for all this paperwork.
    Nile: All the paperwork?
    Interviewee: Yes.
    Nile: Okay. Awesome. Thank you. That’s all.
    Interviewee: Thank you so much. Appreciate it. Bye.`,
    color: 'from-purple-50 to-pink-50',
    accent: 'bg-purple-500'
  },
  {
    id: 3,
    situation: language === 'es' ? 'Estudiante universitaria y dependiente' : 'College student and dependent',
    preview: language === 'es' ? 'Como mi mamá viene aquí, sé que estaré bien. Los doctores han sido amables y todos son confiables.' : 'Because my mom goes here, I know I’ll be okay. The doctors here have been nice, and everybody’s trustworthy.',
    full: language === 'es' ? 
      'He estado viniendo aquí por como un año porque mi mamá vino aquí primero. El costo no nos ha detenido porque si es caro, no importa, si lo necesitas, lo pagas. No es difícil encontrar clínicas para mí porque vengo aquí. Como mi mamá viene aquí, sé que estaré bien. Los doctores aquí han sido amables y todos son confiables. Estoy en la universidad, así que no es tan difícil para mí. Puedo escoger mis días, así que es bastante flexible. No he tenido problemas para entender las instrucciones médicas. Me lo explican todo. Explican qué medicamentos estoy tomando y cómo me afectarán.' : 
      'I’ve been coming here for about a year because my mom came here first. Cost hasn’t stopped us because if it’s expensive, it doesn’t matter—if you need it, you pay for it. It’s not hard for me to find clinics because I come here. Since my mom comes here, I know I’ll be okay. The doctors here have been nice, and everyone is trustworthy. I’m in college, so it’s not that hard for me; I get to pick my days, so it’s quite flexible. I haven’t had trouble understanding medical instructions. They break everything down for me, explaining what medications I’m taking and how they will affect me.',
    transcript: `Nile: Okay, are you ready? The first question is: you’re here right now, but if you remember, when was the last time you came and what was the issue? Or the last time you or someone in your family needed medical care. What happened, and how did you manage it? Did you come to this clinic, go to a hospital, or not go at all?
        Interviewee: I came here last night.
        Nile: That works too. So if you or someone in your family has an issue, you come to this clinic?
        Interviewee: Mm-hmm (yeah).
        Nile: That’s great. Has the cost of healthcare ever stopped you or your family from getting healthcare?
        Interviewee: No.
        Nile: Because you’ve always been coming here?
        Interviewee: I’ve been here for like a year because my mom came here first. And then I came after that.
        Nile: How did she find out about this place?
        Interviewee: I don’t know. She was trying to figure out what was wrong with her or something.
        Nile: So cost didn’t really matter?
        Interviewee: If it’s expensive, it doesn’t matter. If you need it, you pay.
        Nile: What’s the hardest part of finding a clinic or doctor in South Florida? Or finding a good hospital?
        Interviewee: I don’t really know how to answer that, because it’s not that hard.
        Nile: It’s not hard for you?
        Interviewee: No. I come here, so it’s not hard.
        Nile: Even if you had to look online?
        Interviewee: Yeah, I could do that too.
        Nile: What makes you trust a clinic, and what makes you nervous about going to one?
        Interviewee: Because my mom goes here, I know I’ll be okay. The doctors here have been nice, and everybody’s trustworthy.
        Nile: How do your work schedule, transportation, or other responsibilities impact your ability to get care?
        Interviewee: I’m in college, so it’s not that hard. I get to pick my days.
        Nile: So, it’s pretty flexible for you?
        Interviewee: Yeah.
        Nile: Have you ever had trouble understanding medical instructions or documents because of language?
        Interviewee: No. They break it down for me. They explain everything, like what I’m taking and how it’s going to affect me.
        Nile: That’s really good. Last question: in an ideal world, if you could change something, what would make getting healthcare easier or give your family peace of mind? Or do you think it’s already good as it is?
        Interviewee: I have no complaints. I really like how it is right now.
        Nile: Even in general, in the American healthcare system?
        Interviewee: Maybe hospitals could be better. Sometimes they’re grumpy because they work 24/7, I get that. But they could be more helpful. Here, they take their time and accommodate me. In hospitals, it’s more waiting, and if your case isn’t severe but you’re still in pain, it’s harder.
        Nile: Thank you so much. That was everything.`,
        color: 'from-fuchsia-50 to-purple-50',
        accent: 'bg-fuchsia-500'
  },
  {
    id: 4,
    situation: language === 'es' ? 'Experiencia traumática reciente' : 'Recent traumatic experience',
    preview: language === 'es' ? 'La última vez que estuve en un hospital fue cuando mi padre murió frente a mí.' : 'The last time I was in a hospital was when my dad died in front of me.',
    full: language === 'es' ? 
      'La última vez que estuve en un hospital fue cuando mi padre murió frente a mí. Tenía muchos problemas; estaba muy estresado y no quería ir a terapia. El estrés puede matar. Tenía muchas condiciones del corazón e intentaron diálisis en el último minuto, pero su cuerpo no lo soportó. Por más de diez años, cada mañana y cada noche, tomaba entre nueve y doce medicamentos. Usualmente vamos a urgencias, pero para casos reales, vas a un hospital grande. Él necesitaba ir al ICU, y las urgencias no tienen unidades de cuidados intensivos.' : 
      'The last time I was in a hospital was when my dad died in front of me. He had a lot of issues; he was very stressed and didn’t want to go to therapy. Stress can kill you. He had several heart conditions and they tried dialysis at the last minute, but his body couldn’t take it. For more than ten years, every morning and every night, he took between nine and twelve medications. We usually go to urgent care, but for real cases, you go to a big hospital. He needed the ICU, and urgent care centers don’t have intensive care units.',
    transcript: `Nile: What was the last time you or any family members had to go to a hospital or had access to healthcare?
    Interviewee: The last time I was in a hospital was when my dad died in front of me.
    Nile: Really?
    Interviewee: Yes.
    Nile: You took him to the hospital?
    Interviewee: Not me. My family did. I met up with them, and then he died.
    Nile: What happened? Is this part of the interview?
    Interviewee: He had a lot of issues. He was very stressed and angry. He didn’t want to go to therapy. My mom was bad at emotional support, which probably added to the stress. Stress can kill you.
    Nile: Yeah.
    Interviewee: He had a lot of heart conditions. They tried dialysis at the last minute, but his body couldn’t take it. They put him on a drip, but it wasn’t enough. There were too many toxins in his body.
    Interviewee: For more than ten years, every morning and every night, he took around nine to twelve medications.
    Nile: Was that the hospital you usually go to?
    Interviewee: No. That was the first time I went to that hospital. We usually go to urgent care.
    Nile: Why that hospital?
    Interviewee: Because that’s where they take care of serious cases. He had to go to the ICU, and urgent care doesn’t have ICUs.
    Nile: Right.
    Interviewee: For real issues, you go to a big hospital.
    Interviewee: He died on April 21st, 2024, at 12:50 p.m. He died while I Will Always Love You by Dolly Parton was playing.
    Interviewee: This interview went south.`,
    color: 'from-orange-50 to-amber-50',
    accent: 'bg-orange-500'
  },
  {
    id: 5,
    situation: language === 'es' ? 'Estudiante universitaria con seguro limitado' : 'College student with limited insurance',
    preview: language === 'es' ? 'Durante un mes sin seguro, no fui al dentista porque no podía pagarlo. El Centro de Salud de FIU fue increíble porque es gratis.' : 'During a month without insurance, I didn’t go to the dentist because I couldn’t afford it. The FIU Student Health Center was amazing because it’s free.',
    full: language === 'es' ? 
      'Sí, el costo de la atención médica nos ha detenido. Hubo momentos específicos donde tuvimos que esperar más tiempo para ahorrar dinero para procedimientos. Durante un mes estuve sin seguro y no fui al dentista por el costo. El Centro de Salud de FIU fue asombroso, fácil y rápido, aunque me gustaría que tuvieran formularios en línea. Lo más difícil es encontrar doctores que acepten mi seguro básico. Me siento más cómoda con doctoras mujeres porque tienden a ser más pacientes y maternales. La limpieza y el servicio al cliente importan mucho; si el personal es rudo, no confío en ellos con mi salud.' : 
      'Yes, the cost of healthcare has stopped us. There were specific times where we had to wait longer to save money for procedures. For a month I was uninsured and didn’t go to the dentist because of the cost. FIU’s Student Health Center was amazing, easy, and fast, though I wish they had online forms. The hardest part is finding doctors who accept my basic insurance. I feel more comfortable with female doctors because they tend to be more patient and motherly. Cleanliness and customer service matter a lot; if the staff is rude, I don’t trust them with my health.',
    transcript: `Andres: Has the cost of healthcare ever stopped you or your family from getting care? Can you tell me more about that?
    Interviewee: Yes. Actually, yes. There have been specific times where there were things we wanted to do medically. Not surgery, but procedures where we had to wait longer to save money.
    Interviewee: Speaking personally, there was a period when I was uninsured for about a month. During that time, I didn’t go to the dentist because I couldn’t afford it.
    Andress: What did you do instead?
    Interviewee: FIU’s Student Health Center was really great because it’s free or included through tuition.
    Andres: How was navigating that free clinic?
    Interviewee: It was amazing. Super easy and super-fast. My only critique is that there’s no online form. You have to call to make an appointment or go in person, which doesn’t work well off hours. So basically, don’t get injured or be uninsured on the weekends.
    Andres: Overall, though, positive experience?
    Interviewee: Very positive. That’s why I love it. You’re surrounded by young people, there aren’t long lines, and it feels safer and more comfortable.
    Nile: What’s the hardest part of finding a clinic or doctor in South Florida?
    Interviewee: Finding one that accepts my insurance.
    Interviewee: My mom and I have very basic insurance. It works, but it’s limited. For example, I wanted to see a dermatologist close to my house that had great reviews, but they didn’t take my insurance, so that option was gone.
    Andres: What makes you trust a clinic, and what makes you nervous about going to one?
    Interviewee: I feel more comfortable with female doctors. They tend to be more patient, motherly, and make me feel more at ease.
    Interviewee: In general, cleanliness matters a lot. I don’t want to go to a sketchy or poorly maintained clinic. Customer service is also huge. If people are rude or act like they don’t care, I don’t trust them with my health.
    Interviewee: Caring should be the baseline in healthcare. If someone is clearly only there for a paycheck, that makes me uncomfortable.
    Andres: How do work, schedule, transportation, or other responsibilities impact your ability to get care?
    Interviewee: It hasn’t been a major issue. Before I could drive, it was harder, but I relied heavily on the Student Health Center.
    Interviewee: Sometimes specialists that take my insurance are far away, like across town. For example, plasma donation centers are mostly located in North Miami or Homestead, which are very far from me.
    Andres: Have you ever had trouble understanding medical instructions or documents because of language?
    Interviewee: Sometimes. As a “no sabo” kid, there have been times where nurses spoke only Spanish.
    Interviewee: One time I took a friend to urgent care for a head injury. She was bleeding from her forehead, and even though it was serious, she was left waiting for a long time. Communicating urgency across language barriers was difficult.
    Interviewee: In those cases, you have to find other ways to communicate, like translation apps or finding someone else who speaks your language.
    Interviewee: I’m not afraid to ask questions, even if my parents discourage it. They tend to believe doctors should not be questioned, but I don’t agree with blindly accepting medical advice. I keep asking until I understand the full picture.
    Andres: Last question. In an ideal world, if you could wave a magic wand, what would make getting healthcare easier or give your family peace of mind?
    Interviewee: Everyone says free healthcare, but realistically, I think transparency would make the biggest difference.
    Interviewee: Especially transparency around wait times. Even something like knowing how many patients are ahead of you would reduce frustration.
    Interviewee: Instead of saying “the doctor will be with you soon,” it would help to say, “there are three patients ahead of you.” Even if the wait is long, knowing what to expect makes it easier.`,
     color: 'from-rose-50 to-red-50',
    accent: 'bg-rose-500'
  },
  {
    id: 6,
    situation: language === 'es' ? 'Recién salida de Medicaid por edad' : 'Recently aged out of Medicaid',
    preview: language === 'es' ? 'Hay veces que tienes algún problema y dices: No voy a ir al médico, mejor me quedo en casa y que se me pase.' : 'There are times when you have a problem and you say: I’m not going to the doctor, I’ll just stay home and hope it passes.',
    full: language === 'es' ? 
      'En mi familia siempre hemos tenido Medicaid por ser de bajos recursos, pero al cumplir 21 años quedé fuera. Ahora tengo que enfrentar un tratamiento de conducto por mi cuenta. El costo definitivamente nos detiene; he visto gente ponerse grave o morir por evitar deudas médicas de por vida, como le pasó a conocidos con facturas de hospital impagables. Actualmente pago mucho por un seguro privado y estoy aprendiendo que hay opciones más económicas a través de recomendaciones familiares. Elijo mis clínicas por cercanía, como el Jackson o el Palmetto, y aunque hablo ambos idiomas, la barrera del costo es lo que más pesa al decidir si buscar ayuda o esperar en casa.' : 
      'My family always had Medicaid due to low income, but since I turned 21, I am no longer covered. Now I have to pay for a root canal on my own. Cost definitely stops us; I’ve seen people get seriously ill or even die to avoid lifelong medical debt, like acquaintances with unpayable hospital bills. I’m currently paying a lot for private insurance and learning there are cheaper options through family recommendations. I choose clinics based on proximity, like Jackson or Palmetto, and although I speak both languages, the cost barrier is what weighs most when deciding whether to seek help or just wait at home.',
    transcript: `Andres: La última vez que usted o alguien en su familia necesitó atención médica, ¿cómo fue el proceso? ¿Fue muy difícil o fácil?
    Interviewee: Bueno, en mi familia siempre hemos tenido Medicaid y otras ayudas. Yo ahora, como ya cumplí 21 años, ya no tengo Medicaid. Hasta ahora no he tenido ningún problema grave sin médico.
    Andres: ¿Tuviste algún problema reciente?
    Interviewee: Sí, la muela.
    Nile: ¿La muela del juicio?
    Interviewee: No, no. Tuve un empaste. Ahora me tengo que hacer un tratamiento de conducto y eso sí tengo que pagarlo. Pero hasta ahora nunca he tenido problemas con la atención.
    Nile: ¿El Medicaid era para toda la familia?
    Interviewee: Sí, era familiar. Mi familia es de bajos recursos, por eso nos lo daban.
    Nile: ¿Hablas español también?
    Interviewee: Sí. Y mi familia también tiene su servicio médico normal.
    Nile: O sea que tu familia sí tiene seguro médico.
    Interviewee: Sí. Yo, como ahora no tengo seguro, vine aquí a recibir la atención.
    Nile: Entonces ya no estás cubierta por Medicaid.
    Interviewee: No, ya estoy fuera de eso. Ahora tengo que buscar un seguro por mi cuenta o pagar uno mensual, y eso lo puedo hacer fácilmente.
    Andres: La siguiente pregunta es: ¿el costo de la atención médica alguna vez le ha impedido a usted o a su familia recibir atención?
    Interviewee: Sí. Hay veces que tienes algún problema, una enfermedad, una muela, algo en la piel o cualquier cosa, y dices: “No voy a ir al médico, mejor me quedo en casa y que se me pase”.
    Nile: Eso pasa mucho.
    Interviewee: Sí. Hemos visto mucha gente que hace eso. Hay personas que se ponen muy graves y algunas incluso mueren por no ir al médico, porque se endeudan de por vida. Es muy fuerte.
    Andres: ¿Conoces algún caso cercano?
    Interviewee: Sí, por ejemplo Jorge. Él tiene mucha deuda con los hospitales, sobre todo por emergencias.
    Nile: ¿Y cómo funciona eso?
    Interviewee: En Estados Unidos mucha gente tiene deudas, ya sea por la universidad o por médicos. Incluso teniendo seguro, también puede pasar.
    Nile: ¿Se puede pagar poco a poco?
    Interviewee: Creo que hay lugares que hacen acuerdos de pago.
    Nile: ¿Prefieren endeudarse antes que pagar un seguro médico?
    Interviewee: Depende. Las veces que yo he tenido que ir ha sido por emergencias. Hasta ahora estoy viendo el proceso de conseguir un seguro.
    Nile: ¿Te replanteas qué seguro elegir?
    Interviewee: Sí, porque hay mucha diferencia. Algunos seguros son mucho más baratos. Yo ahora estoy pagando muchísimo y luego una amiga me dijo que hay otros mucho más económicos. Hay que informarse mucho.
    Nile: ¿Confías más en lo que te recomiendan familiares?
    Interviewee: Sí, porque ellos ya los usan. Por ejemplo, me recomendaron uno muy barato. El marido de mi mamá paga como 8 dólares al mes.
    Nile: ¿Y eso cubre todo?
    Interviewee: Sí. Y yo pago muchísimo, así que cada vez que lo digo me siento fatal, porque pago un montón.
    Andres: ¿Qué es lo más difícil de encontrar una clínica o un médico en el sur de Florida? ¿Cómo eligen a dónde ir?
    Interviewee: Normalmente, si escucho que mi familia va al Jackson, yo también voy.
    Nile: ¿Por qué Jackson?
    Interviewee: Porque queda cerca de la casa.
    Andres: ¿Y el idioma? ¿Prefieres un lugar donde hablen español?
    Interviewee: Hablo inglés y español. Siempre he ido al Palmetto.
    (Interrupción breve durante la entrevista)
    Nile: Tranquilo, no pasa nada, que te atiendan.`,
    color: 'from-indigo-50 to-blue-50',
    accent: 'bg-indigo-500'
  },
  {
    id: 7,
    situation: language === 'es' ? 'Trabajadora de educación que perdió Medicaid' : 'School board employee who lost Medicaid',
    preview: language === 'es' ? 'Hay momentos en los que estás enferma y aún así dudas en quedarte en el hospital porque sabes que no puedes pagar lo que vendrá después.' : 'There are times when you’re sick and you still hesitate to stay in the hospital because you know you can’t afford what comes next.',
    full: language === 'es' ? 
      'Durante años estuve cubierta por Medicaid y nunca me preocupé por ver a mi médico de cabecera o especialistas. Eso cambió cuando mi hija cumplió 18 años y fue a la universidad: Medicaid me dio de baja, a pesar de que todavía tenía problemas de salud graves y continuos. Trabajo para la Junta Escolar del Condado de Broward, tengo una licenciatura y dos maestrías, y aun así no puedo pagar la atención médica, especialmente después de perder el período de inscripción abierta y pasar un año completo sin seguro. Durante el COVID, Medicaid me salvó la vida cuando estuve hospitalizada por insuficiencia renal y neumonía, pero ahora cada visita al hospital viene con facturas constantes que no puedo pagar. Incluso me di de alta del hospital antes de tiempo por temor al costo. Elijo clínicas basadas en la asequibilidad, la transparencia y la accesibilidad: lugares sin tarifas sorpresa, que dependan de análisis de laboratorio claros y ofrezcan horarios flexibles como los sábados.' : 
      'For years, I was covered by Medicaid and never worried about seeing my primary care doctor or specialists. That changed when my daughter turned 18 and went to college—Medicaid dropped me, even though I still had serious, ongoing health conditions. I work for the Broward County School Board, have a bachelor’s degree and two master’s degrees, and yet I still can’t afford healthcare, especially after missing open enrollment and going a full year uninsured. During COVID, Medicaid saved my life when I was hospitalized for kidney failure, pneumonia, and dialysis, but now every hospital visit comes with constant bills I cannot pay. I even discharged myself early from the hospital out of fear of the cost. I choose clinics based on affordability, transparency, and accessibility—places without surprise fees, that rely on clear lab work, and offer flexible hours like Saturdays. Cost doesn’t just influence care for me; it determines whether I stay, leave, or avoid treatment altogether.',
      transcript: `Andres: From start to finish, when you or someone in your family needed medical care, what happened? How did the process go?
      Interviewee: Prior to this, I had some medical conditions. Up until my daughter turned 18, which was just this past year, I always had Medicaid, regardless of my work.
      Interviewee: I was on regular visits with my primary care physician. But when my daughter turned 18 and went to college, even though she’s still in my care, they cut my Medicaid.
      Nile: Why did they cut it?
      Interviewee: Because Medicaid said that since my daughter is now 18 and graduated from high school, she could stay on Medicaid, but I could not.
      Interviewee: I work for the Broward County School Board. I have a bachelor’s degree and two master’s degrees, and I still can’t afford healthcare. I started working for the school board last year around October, but that was after open enrollment. They offer great benefits, but because I missed open enrollment, I went an entire year without coverage. Now that I’ve figured out all my benefits with them, my benefits don’t start until January. 
      Interviewee: During COVID, I was on Medicaid, thankfully. I ended up with kidney failure, pneumonia, and had to go on dialysis. I was in the hospital for 13 days. After my daughter graduated, I began working from home out of fear of getting sick again. 
      Interviewee: I found out about this clinic through my college friends and colleagues who are very involved in Miami Gardens. The mayor and other local leaders talked about it, and I found out it was opening. I also follow them on Facebook and social media, and I see what they post and talk about. 
      Interviewee: I got in just in time, because a few months back I got very sick again and ended up in the hospital. I can’t pay those bills, they’re sending me bills constantly. I actually discharged myself from the hospital. Luckily, I had already made an appointment here before getting sick. 
      Interviewee: Even with this clinic, I didn’t have to explain my personal situation. It was more like a friend of a friend situation, and I kept seeing pictures of this new, groundbreaking facility. I thought, you know what, I need to check this place out because I don’t have the healthcare I need right now. So I came.
      Nile: Was it difficult to get your medical records?
      Interviewee: No, not really. I went to the hospital, showed my ID, and they gave them to me. 
      Interviewee: You pay a fee for LabCorp, about $33, and the blood tells everything. That’s why I’m back today. Here, though, I haven’t had any surprise costs. They’re also open on Saturday mornings, which is huge. Scheduling during the week is always a problem with work.
      Nile: What about hidden fees at other clinics?
      Interviewee: If you ask the right questions, they’ll tell you. Medicaid doesn’t really cover dentistry for adults unless you’re getting a tooth pulled. Preventative dental care isn’t considered essential.
      Interviewee: I’m just trying to live long enough to see my children succeed. I don’t know if that fully answered the question, but that’s my experience.`,
          color:'from-lime-50 to-green-50',
        accent: 'bg-lime-500'
        },
        {
          id: 8,
          situation: language === 'es' ? 'Recuperando la salud tras perder el seguro' : 'Regaining health after losing insurance',
          preview: language === 'es' ? 'Casi no voy al hospital porque no tenía seguro médico. Afortunadamente, ya había pedido una cita en esta clínica y eso lo cambió todo.' : 'I almost didn’t take myself to the hospital because I had no health insurance. Fortunately, I had already made an appointment with this clinic, and it changed everything.',
          full: language === 'es' ? 
            'Casi no voy al hospital porque no tenía seguro médico, pero me dije a mí misma: "no se puede sacar sangre de un nabo" y que era mejor saber qué pasaba que morir sin saberlo. Afortunadamente, ya había pedido una cita en esta clínica y eso lo cambió todo. En lugar de ser enviada a otros lugares, la mayoría de mis medicamentos para la diabetes y la salud mental me los dan allí mismo; solo voy a la farmacia por uno para la presión arterial. Ser recursiva siempre ha sido importante para mí; siempre pensé en alternativas en caso de perder mi seguro, porque mucha gente simplemente se queda estancada. Lugares como esta clínica hacen que la atención médica sea posible sin deudas de por vida, y ya había decidido que incluso si el seguro no funcionaba, seguiría viniendo aquí, porque alguien te ayudará, en algún lugar, de alguna manera.' : 
            'I almost didn’t take myself to the hospital because I had no health insurance. Fortunately, I had already made an appointment with this clinic, and it changed everything. Instead of being sent elsewhere, most of my diabetes and mental health medications are given to me right there—I only go to the pharmacy for one blood pressure medication. Being resourceful has always mattered to me; I’ve always thought about alternatives in case I ever lost my healthcare, because so many people “just get stuck.” Even without insurance, I still made myself go to the hospital, telling myself, “You can’t get blood from a turnip,” and that it was better to know what was going on than “die without knowing.” Places like this clinic make healthcare possible without lifelong debt, and I had already decided that even if insurance didn’t work out, I would keep coming here—because someone will help you, somewhere, somehow.',
          transcript: `Interviewee: And just fortunately, I had already made an appointment with this clinic.
      Interviewee: Another thing is, with this clinic, and I’m going to be honest with you, most of my medications, like my diabetes medication and my mental health medication, I walk out the door with them.
      Nile: Really?
      Interviewee: Yes. The only thing I still have to go to the pharmacy for is maybe Losartan or my blood pressure medication.
      Nile: So just one medication?
      Interviewee: Yeah. They give you the rest here. I literally walk out the door with them.
      Nile: That’s amazing. Not even in Spain. Spain is free, but you still have to go to the pharmacy.
      Interviewee: Exactly. When they put me on the medication, everything came from right there. After I met with the mental health doctor and we talked, he learned about my anxiety and everything, and the medication came straight from there.
      Interviewee: I’ve always been resourceful in that way, because for some reason I always thought of alternatives in case I ever lost my healthcare.
      Nile: Yeah, you were smart, but not a lot of people are.
      Interviewee: Yeah, most people don’t. Some people just get stuck.
      Nile: That’s why we started looking for information. We saw a lot of people who died before getting healthcare because of the cost or because they didn’t know how to get it.
      Interviewee: Even for me, I’m recently out of school, and they keep sending me bills, like $1,000, trying to negotiate. I’m ignoring all of that because let me tell you something: a year from now, I may come up with $1,000, I may come up with $1,500.
      Interviewee: But I really had to think about it, because I almost didn’t take myself to the hospital since I had no health insurance. There were some hospitals that were like, “No, we don’t see you without insurance.” But that’s not right. You have to see the patient. You have to treat the patient, and you worry about the money later.
      Interviewee: That’s what made me go. I said, I don’t care about $1,000 or $1,500. You can’t get blood from a turnip, like old people say. I went to the hospital. I didn’t get bad news, but at least I went. At least you know what’s going on. You don’t die without knowing.
      Interviewee: You can get healthcare and get better thanks to places like this. I can’t believe this place exists. That’s the thing. A lot of people don’t even know this is a possibility. That’s why it’s important to make sure people know these places exist, so they don’t have to be in debt forever.
      Interviewee: I had already made up my mind that if I didn’t get healthcare through the insurance company, I was still going to keep coming here. I said, somebody will fix it or get me somewhere or something.`,
          color: 'from-blue-50 to-cyan-50',
          accent: 'bg-blue-500'
        },
        {
          id: 9,
          situation: language === 'es' ? 'Comparte tu historia' : 'Share your story',
          preview: language === 'es' ? 'Comparte tu historia con nosotros para contribuir a nuestra investigación.' : 'Share your story with us to contribute to our research.',
          full: language === 'es' ? 
            'Estamos recopilando experiencias reales para entender mejor los desafíos del sistema de salud en el sur de Florida. Tu voz puede ayudar a generar un cambio y a visibilizar las barreras que enfrentan muchas personas en nuestra comunidad.' : 
            'We are gathering real experiences to better understand the challenges of the healthcare system in South Florida. Your voice can help drive change and bring visibility to the barriers many people in our community face.',
          transcript: language === 'es' ? 
            'Haz clic en el botón para compartir tu experiencia con nosotros.' : 
            'Click the button to share your experience with us.',
          color: 'from-slate-100 to-slate-200',
          accent: 'bg-slate-800'
        }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#D1FAE5] to-[#A7F3D0] pt-32 pb-20 px-[5%]">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-[#0F766E] text-center flex-1">
            {language === 'es' ? 'Historias Reales' : 'Real Stories'}
          </h1>
          <button
            onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
            className="px-4 py-2 bg-[#0F766E] text-white rounded-lg font-bold hover:bg-[#0D5A52] transition-colors"
          >
            {language === 'en' ? 'ES' : 'EN'}
          </button>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {stories.map((story) => {
            const isShareCard = story.id === SHARE_STORY_ID;
            const cardClassName = `bg-gradient-to-br ${story.color} rounded-3xl shadow-xl p-8 ${
              isShareCard 
                ? 'cursor-default border-4 border-[#0F766E]' 
                : 'cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border-2 border-white/50 group'
            } overflow-hidden relative`;
            
            return (
            <div
              key={story.id}
              onClick={() => {
                if (isShareCard) return;
                setSelectedStory(story);
                setShowFullTranscript(false);
              }}
              className={cardClassName}
            >
              {isShareCard ? (
                <>
                  <div className="mb-6">
                    <h3 className="text-3xl font-bold text-[#0F766E] mb-3">
                      {story.situation}
                    </h3>
                    <p className="text-gray-700 text-base leading-relaxed">{story.full}</p>
                  </div>
                  <button 
                    onClick={handleShareStory}
                    className="w-full bg-[#0F766E] text-white py-4 px-6 rounded-xl font-bold text-lg hover:bg-[#0D5A52] transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    {language === 'es' ? 'Compartir mi historia' : 'Share my story'}
                  </button>
                </>
              ) : (
                <>
                  {/* Darker overlay on hover */}
                  <div className="absolute inset-0 group-hover:bg-black/20 transition-all duration-300" />
                  
                  {/* Content with higher z-index */}
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="inline-block px-4 py-1 bg-[#0F766E] text-white text-sm font-bold rounded-full">
                        {language === 'es' ? 'Entrevista' : 'Interview'} {story.id}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-[#0F766E] mb-4 leading-tight">
                      {story.situation}
                    </h3>
                    <p className="text-gray-600 text-base italic leading-relaxed border-l-4 border-[#0F766E] pl-4 mb-4">
                      &ldquo;{story.preview}&rdquo;
                    </p>
                    
                    {/* Read More indicator */}
                    <div className="flex items-center gap-2 text-[#0F766E] font-bold text-sm mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span>{language === 'es' ? 'Leer más' : 'Read more'}</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </>
              )}
            </div>
            );
          })}
        </div>

        {selectedStory && selectedStory.id !== 9 && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedStory(null)}>
            <div className="bg-white rounded-3xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden flex flex-col" onClick={(e) => e.stopPropagation()}>
              <div className="p-8 bg-gradient-to-r from-[#0F766E] to-[#059669] text-white flex justify-between items-center">
                <div>
                  <span className="inline-block px-3 py-1 bg-white/20 text-white text-sm font-bold rounded-full mb-2">
                    {language === 'es' ? 'Entrevista' : 'Interview'} {selectedStory.id}
                  </span>
                  <h2 className="text-3xl font-bold">
                    {selectedStory.situation}
                  </h2>
                </div>
                <button onClick={() => setSelectedStory(null)} className="text-white hover:bg-white/20 rounded-full w-10 h-10 flex items-center justify-center text-2xl transition-colors">
                  ✕
                </button>
              </div>

              <div className="flex border-b border-gray-200 bg-gray-50">
                <button 
                    onClick={() => setShowFullTranscript(false)}
                    className={`flex-1 py-4 px-6 font-bold text-base transition-all ${!showFullTranscript ? 'bg-white text-[#0F766E] border-b-4 border-[#0F766E]' : 'text-gray-500 hover:text-gray-700'}`}
                >
                    {language === 'es' ? 'Resumen' : 'Summary'}
                </button>
                <button 
                    onClick={() => setShowFullTranscript(true)}
                    className={`flex-1 py-4 px-6 font-bold text-base transition-all ${showFullTranscript ? 'bg-white text-[#0F766E] border-b-4 border-[#0F766E]' : 'text-gray-500 hover:text-gray-700'}`}
                >
                    {language === 'es' ? 'Entrevista Original' : 'Original Interview'}
                </button>
              </div>

              <div className="p-10 overflow-y-auto flex-1 bg-white">
                {!showFullTranscript ? (
                  <div className="animate-fadeIn max-w-3xl mx-auto">
                    <p className="text-2xl text-gray-700 italic mb-8 leading-relaxed border-l-4 border-[#0F766E] pl-6">
                      &ldquo;{selectedStory.preview}&rdquo;
                    </p>
                    <p className="text-lg text-gray-800 leading-relaxed">
                      {selectedStory.full}
                    </p>
                  </div>
                ) : (
                  <div className="animate-fadeIn bg-gray-50 p-8 rounded-2xl border border-gray-200 max-w-3xl mx-auto">
                    <pre className="font-mono text-sm whitespace-pre-wrap text-gray-700 leading-relaxed">
                      {selectedStory.transcript}
                    </pre>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
 }

