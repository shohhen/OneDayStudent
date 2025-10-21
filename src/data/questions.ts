import type {Lang, Question} from '../types';

export const quizQuestionsData: Record<Lang, Question[]> = {
    en: [{
        id: 'ambition',
        q: "When you imagine your ideal career, what excites you the most?",
        o: [{v: 'build', l: "Building something new from scratch, maybe my own company."}, {
            v: 'expert',
            l: "Solving complex problems and becoming a top expert in a field."
        }, {v: 'global', l: "Working in a major international company and having a global career."}, {
            v: 'impact',
            l: "Making a direct impact, helping people, or expressing my creativity."
        }]
    }, {
        id: 'learningStyle',
        q: "Which 'One Day Student' experience sounds most like you?",
        o: [{
            v: 'project',
            l: "Give me a real-world project. I want to build an app or create a marketing plan."
        }, {
            v: 'theory',
            l: "Let me shadow a brilliant professor and sit in on a deep, theoretical lecture."
        }, {v: 'social', l: "I want to join a student club debate, network, and feel the campus 'vibe'."}]
    }, {
        id: 'environment',
        q: "What kind of university environment do you think you'd thrive in?",
        o: [{
            v: 'modern',
            l: "A modern, 'glass-and-steel' campus. International, fast-paced, and focused on technology."
        }, {
            v: 'traditional',
            l: "A large, traditional campus with history. Big libraries and a 'classic' feel."
        }, {
            v: 'community',
            l: "A smaller, tight-knit community. More like a 'business school' where I know my professors."
        }]
    }, {
        id: 'field',
        q: "And finally, which general field are you leaning towards?",
        o: [{v: 'tech', l: "Technology & Engineering"}, {v: 'business', l: "Business & Finance"}, {
            v: 'social',
            l: "Social Sciences & Law"
        }, {v: 'science', l: "Science & Medicine"}, {v: 'arts', l: "Arts & Humanities"}]
    }],
    ru: [{
        id: 'ambition',
        q: "Представляя свою идеальную карьеру, что вас больше всего вдохновляет?",
        o: [{v: 'build', l: "Создавать что-то новое с нуля, возможно, свою собственную компанию."}, {
            v: 'expert',
            l: "Решать сложные проблемы и стать ведущим экспертом в своей области."
        }, {v: 'global', l: "Работать в крупной международной компании и строить глобальную карьеру."}, {
            v: 'impact',
            l: "Оказывать прямое влияние, помогать людям или выражать свое творчество."
        }]
    }, {
        id: 'learningStyle',
        q: "Какой опыт 'Студента на один день' вам больше всего подходит?",
        o: [{
            v: 'project',
            l: "Дайте мне реальный проект. Я хочу создать приложение или разработать маркетинговый план."
        }, {
            v: 'theory',
            l: "Позвольте мне стать тенью блестящего профессора и посетить глубокую теоретическую лекцию."
        }, {
            v: 'social',
            l: "Я хочу присоединиться к дебатам в студенческом клубе, общаться и почувствовать 'атмосферу' кампуса."
        }]
    }, {
        id: 'environment',
        q: "В какой университетской среде, по вашему мнению, вы бы преуспели?",
        o: [{
            v: 'modern',
            l: "Современный кампус из 'стекла и стали'. Международный, динамичный и ориентированный на технологии."
        }, {
            v: 'traditional',
            l: "Большой, традиционный кампус с историей. Большие библиотеки и 'классическая' атмосфера."
        }, {
            v: 'community',
            l: "Небольшое, сплоченное сообщество. Больше похожее на 'бизнес-школу', где я знаю своих профессоров."
        }]
    }, {
        id: 'field',
        q: "И, наконец, к какой общей области вы склоняетесь?",
        o: [{v: 'tech', l: "Технологии и инженерия"}, {v: 'business', l: "Бизнес и финансы"}, {
            v: 'social',
            l: "Социальные науки и право"
        }, {v: 'science', l: "Наука и медицина"}, {v: 'arts', l: "Искусство и гуманитарные науки"}]
    }],
    uz: [{
        id: 'ambition',
        q: "Ideal martabangizni tasavvur qilganingizda, sizni nima eng ko'p hayajonga soladi?",
        o: [{v: 'build', l: "Noldan yangi narsa qurish, ehtimol o'z kompaniyamni."}, {
            v: 'expert',
            l: "Murakkab muammolarni hal qilish va sohada yetakchi mutaxassis bo'lish."
        }, {v: 'global', l: "Yirik xalqaro kompaniyada ishlash va global martabaga ega bo'lish."}, {
            v: 'impact',
            l: "To'g'ridan-to'g'ri ta'sir ko'rsatish, odamlarga yordam berish yoki ijodimni namoyon etish."
        }]
    }, {
        id: 'learningStyle',
        q: "Qaysi 'Bir kunlik talaba' tajribasi sizga ko'proq yoqadi?",
        o: [{
            v: 'project',
            l: "Menga haqiqiy loyiha bering. Men ilova yaratmoqchiman yoki marketing rejasini ishlab chiqmoqchiman."
        }, {
            v: 'theory',
            l: "Ajoyib professorning soyasi bo'lishga va chuqur nazariy ma'ruzada qatnashishga ruxsat bering."
        }, {
            v: 'social',
            l: "Men talabalar klubidagi munozaralarga qo'shilishni, muloqot qilishni va kampus 'muhitini' his qilishni xohlayman."
        }]
    }, {
        id: 'environment',
        q: "Sizningcha, qanday universitet muhitida siz muvaffaqiyat qozonasiz?",
        o: [{
            v: 'modern',
            l: "'Shisha va po'lat'dan yasalgan zamonaviy kampus. Xalqaro, tez sur'atli va texnologiyaga yo'naltirilgan."
        }, {
            v: 'traditional',
            l: "Tarixga ega bo'lgan katta, an'anaviy kampus. Katta kutubxonalar va 'klassik' muhit."
        }, {v: 'community', l: "Kichikroq, ahil jamoa. Professorlarimni taniydigan 'biznes maktabi'ga o'xshaydi."}]
    }, {
        id: 'field',
        q: "Va nihoyat, qaysi umumiy sohaga ko'proq qiziqasiz?",
        o: [{v: 'tech', l: "Texnologiya va muhandislik"}, {v: 'business', l: "Biznes va moliya"}, {
            v: 'social',
            l: "Ijtimoiy fanlar va huquq"
        }, {v: 'science', l: "Fan va tibbiyot"}, {v: 'arts', l: "San'at va gumanitar fanlar"}]
    }]
};
