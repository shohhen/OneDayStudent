import type { Question, Lang } from '../types';

export const quizQuestionsData: Record<Lang, Question[]> = {
    // --- English Questions ---
    en: [
        {
            id: 'ambition',
            q: "When you imagine your ideal career, what excites you the most?",
            o: [
                { v: 'build', l: "Building something new from scratch, maybe my own company." },
                { v: 'expert', l: "Solving complex problems and becoming a top expert in a field." },
                { v: 'global', l: "Working in a major international company and having a global career." },
                { v: 'impact', l: "Making a direct impact, helping people, or expressing my creativity." }
            ]
        },
        {
            id: 'learningStyle',
            q: "Which university experience sounds most like you?",
            o: [
                { v: 'project', l: "Give me a real-world project. I want to build an app or create a marketing plan." },
                { v: 'theory', l: "Let me shadow a brilliant professor and sit in on a deep, theoretical lecture." },
                { v: 'social', l: "I want to join a student club debate, network, and feel the campus 'vibe'." }
            ]
        },
        {
            id: 'studyStyle',
            q: "How do you prefer to study?",
            o: [
                { v: 'group', l: "In a group, bouncing ideas off others." },
                { v: 'solo', l: "Alone, with deep focus and zero distractions." },
                { v: 'balanced', l: "A mix of both: learn alone, then review with a group." }
            ]
        },
        {
            id: 'environment',
            q: "What kind of university environment do you think you'd thrive in?",
            o: [
                { v: 'modern', l: "A modern, 'glass-and-steel' campus. International, fast-paced, and focused on technology." },
                { v: 'traditional', l: "A large, traditional campus with history. Big libraries and a 'classic' feel." },
                { v: 'community', l: "A smaller, tight-knit community. More like a 'business school' where I know my professors." }
            ]
        },
        {
            id: 'certainty',
            q: "How certain are you about your future major?",
            o: [
                { v: 'certain', l: "100% certain. I know exactly what I want to do." },
                { v: 'exploring', l: "I have a few ideas, but I'm open to exploring." },
                { v: 'clueless', l: "Honestly, I have no idea. I need to see my options." }
            ]
        },
        // --- NEW QUESTIONS START HERE ---
        {
            id: 'problemSolving',
            q: "When you face a really tough problem, what's your first instinct?",
            o: [
                { v: 'analytical', l: "Break it down into small, logical steps and analyze the data." },
                { v: 'creative', l: "Brainstorm wild, out-of-the-box ideas and try something new." },
                { v: 'collaborative', l: "Ask a friend or mentor for their opinion and work together." }
            ]
        },
        {
            id: 'pace',
            q: "What kind of work pace do you prefer?",
            o: [
                { v: 'fast', l: "High-energy and fast-paced, with clear deadlines and pressure." },
                { v: 'steady', l: "Calm and steady. I like to take my time and get it right." },
                { v: 'variety', l: "A mix of both – some quiet work and some high-pressure 'sprints'." }
            ]
        },
        {
            id: 'motivation',
            q: "What's a more important motivator for your future career?",
            o: [
                { v: 'prestige', l: "Prestige, a high salary, and a clear path for advancement." },
                { v: 'fulfillment', l: "Personal fulfillment and making a positive impact on the world." },
                { v: 'balance', l: "Work-life balance, low stress, and a friendly, supportive team." }
            ]
        },
        {
            id: 'teamRole',
            q: "In a group project, what role do you naturally take?",
            o: [
                { v: 'leader', l: "The leader. I like to organize the plan and assign tasks." },
                { v: 'doer', l: "The doer/supporter. I'm happy to help out and get the work done." },
                { v: 'thinker', l: "The thinker/analyst. I like to double-check the details and ask critical questions." }
            ]
        },
        // --- NEW QUESTIONS END HERE ---
        {
            id: 'field',
            q: "Finally, which general field are you leaning towards?",
            o: [
                { v: 'tech', l: "Technology & Engineering" },
                { v: 'business', l: "Business & Finance" },
                { v: 'social', l: "Social Sciences & Law" },
                { v: 'science', l: "Science & Medicine" },
                { v: 'arts', l: "Arts & Humanities" }
            ]
        }
    ],
    // --- Russian Questions ---
    ru: [
        {
            id: 'ambition',
            q: "Представляя свою идеальную карьеру, что вас больше всего вдохновляет?",
            o: [
                { v: 'build', l: "Создавать что-то новое с нуля, возможно, свою собственную компанию." },
                { v: 'expert', l: "Решать сложные проблемы и стать ведущим экспертом в своей области." },
                { v: 'global', l: "Работать в крупной международной компании и строить глобальную карьеру." },
                { v: 'impact', l: "Оказывать прямое влияние, помогать людям или выражать свое творчество." }
            ]
        },
        {
            id: 'learningStyle',
            q: "Какой вы представляете свой опыт в университете?",
            o: [
                { v: 'project', l: "Дайте мне реальный проект. Я хочу создать приложение или разработать маркетинговый план." },
                { v: 'theory', l: "Позвольте мне работать вместе с блестящим профессором и посетить глубокую теоретическую лекцию." },
                { v: 'social', l: "Я хочу присоединиться к дебатам в студенческом клубе, общаться и почувствовать 'атмосферу' кампуса." }
            ]
        },
        {
            id: 'studyStyle',
            q: "Как вы предпочитаете учиться?",
            o: [
                { v: 'group', l: "В группе, обмениваясь идеями с другими." },
                { v: 'solo', l: "В одиночку, с глубокой концентрацией и без отвлекающих факторов." },
                { v: 'balanced', l: "Смешанно: учусь один, затем обсуждаю в группе." }
            ]
        },
        {
            id: 'environment',
            q: "В какой кампусе, по вашему мнению, вы бы преуспели?",
            o: [
                { v: 'modern', l: "Современный кампус. Международный, динамичный и ориентированный на технологии." },
                { v: 'traditional', l: "Большой, традиционный кампус с историей. Большие библиотеки и 'классическая' атмосфера." },
                { v: 'community', l: "Небольшое, сплоченное сообщество. Больше похожее на 'бизнес-школу', где я знаю своих профессоров." }
            ]
        },
        {
            id: 'certainty',
            q: "Насколько вы уверены в своей будущей специальности?",
            o: [
                { v: 'certain', l: "На 100% уверен. Я точно знаю, чем хочу заниматься." },
                { v: 'exploring', l: "У меня есть несколько идей, но я открыт для изучения." },
                { v: 'clueless', l: "Честно говоря, понятия не имею. Мне нужно увидеть варианты." }
            ]
        },
        // --- NEW QUESTIONS START HERE ---
        {
            id: 'problemSolving',
            q: "Когда вы сталкиваетесь с действительно сложной проблемой, каков ваш первый шаг к его выполнению?",
            o: [
                { v: 'analytical', l: "Разбить ее на мелкие логические шаги и проанализировать данные." },
                { v: 'creative', l: "Провести мозговой штурм, придумать нестандартные идеи и попробовать что-то новое." },
                { v: 'collaborative', l: "Спросить мнения друга или наставника и работать вместе." }
            ]
        },
        {
            id: 'pace',
            q: "Какой темп работы вы предпочитаете?",
            o: [
                { v: 'fast', l: "Высокоэнергичный и быстрый, с четкими сроками и давлением." },
                { v: 'steady', l: "Спокойный и размеренный. Я люблю не торопиться и делать все правильно." },
                { v: 'variety', l: "Смесь того и другого – немного спокойной работы и немного 'спринтов' под давлением." }
            ]
        },
        {
            id: 'motivation',
            q: "Что является более важным мотиватором для вашей будущей карьеры?",
            o: [
                { v: 'prestige', l: "Престиж, высокая зарплата и четкий путь для продвижения." },
                { v: 'fulfillment', l: "Личная реализация и оказание положительного влияния на мир." },
                { v: 'balance', l: "Баланс между работой и личной жизнью, низкий уровень стресса и дружная, поддерживающая команда." }
            ]
        },
        {
            id: 'teamRole',
            q: "Какую роль вы обычно берете на себя в групповом проекте?",
            o: [
                { v: 'leader', l: "Лидер. Мне нравится организовывать план и распределять задачи." },
                { v: 'doer', l: "Исполнитель/помощник. Я рад помочь и выполнить работу." },
                { v: 'thinker', l: "Мыслитель/аналитик. Мне нравится перепроверять детали и задавать критические вопросы." }
            ]
        },
        // --- NEW QUESTIONS END HERE ---
        {
            id: 'field',
            q: "И, наконец, к какому общему направлению вы склоняетесь?",
            o: [
                { v: 'tech', l: "Технологии и инженерия" },
                { v: 'business', l: "Бизнес и финансы" },
                { v: 'social', l: "Социальные науки и право" },
                { v: 'science', l: "Наука и медицина" },
                { v: 'arts', l: "Искусство и гуманитарные науки" }
            ]
        }
    ],
    // --- Uzbek Questions ---
    uz: [
        {
            id: 'ambition',
            q: "Ideal karyerangizni tasavvur qilganingizda, sizni nima ko‘proq hayajonga soladi?",
            o: [
                { v: 'build', l: "Noldan yangi narsa qurish, ehtimol o'z kompaniyamni." },
                { v: 'expert', l: "Murakkab muammolarni hal qilish va sohada yetakchi mutaxassis bo'lish." },
                { v: 'global', l: "Yirik xalqaro kompaniyada ishlash va global martabaga ega bo'lish." },
                { v: 'impact', l: "To'g'ridan-to'g'ri ta'sir ko'rsatish, odamlarga yordam berish yoki ijodimni namoyon etish." }
            ]
        },
        {
            id: 'learningStyle',
            q: "Qaysi universitet tajribasi sizga ko‘proq yoqadi?",
            o: [
                { v: 'project', l: "Menga haqiqiy loyiha bering. Men ilova yaratmoqchiman yoki marketing rejasini ishlab chiqmoqchiman." },
                { v: 'theory', l: "Ajoyib professorning soyasi bo'lishga va chuqur nazariy ma'ruzada qatnashishga ruxsat bering." },
                { v: 'social', l: "Men talabalar klubidagi munozaralarga qo'shilishni, muloqot qilishni va kampus 'muhitini' his qilishni xohlayman." } // <-- Fixed typo here
            ]
        },
        {
            id: 'studyStyle',
            q: "Siz qanday o‘qishni afzal ko‘rasiz?",
            o: [
                { v: 'group', l: "Guruhda, boshqalar bilan fikr almashish." },
                { v: 'solo', l: "Yolg'iz, chuqur diqqat bilan va chalg'itadigan narsalarsiz." },
                { v: 'balanced', l: "Aralash: yolg'iz o'rganib, keyin guruh bilan muhokama qilish." }
            ]
        },
        {
            id: 'environment',
            q: "Sizningcha, qanday universitet muhitida muvaffaqiyatga erishingiz mumkin?",
            o: [
                { v: 'modern', l: "Zamonaviy kampus. Xalqaro, tez sur'atli va texnologiyaga yo'naltirilgan." },
                { v: 'traditional', l: "Tarixga ega bo'lgan katta, an'anaviy kampus. Katta kutubxonalar va klassik muhit." },
                { v: 'community', l: "Kichikroq, ahil jamoa. Professorlarimni taniydigan, biznes maktabga o'xshaydigan." }
            ]
        },
        {
            id: 'certainty',
            q: "Kelajakdagi mutaxassisligingiz qanchalik aniq?",
            o: [
                { v: 'certain', l: "100% aniq. Men nima qilishni bilaman." },
                { v: 'exploring', l: "Menda bir nechta g'oyalar bor, lekin men yangi narsalarni o'rganishga ochiqman." },
                { v: 'clueless', l: "Rostini aytsam, hech qanday tasavvurga ega emasman. Variantlarni ko'rishim kerak." } // <-- Fixed typo here
            ]
        },
        // --- NEW QUESTIONS START HERE ---
        {
            id: 'problemSolving',
            q: "Qiyin muammoga duch kelganingizda, birinchi reaksiyangiz qanday bo'ladi?",
            o: [
                { v: 'analytical', l: "Uni kichik, mantiqiy bosqichlarga bo'lib, ma'lumotlarni tahlil qilaman." },
                { v: 'creative', l: "Noodatiy, yangi g'oyalar uchun aqliy hujum qilaman va yangi narsani sinab ko'raman." },
                { v: 'collaborative', l: "Do'stimdan yoki ustozimdan fikrini so'rayman va birga ishlayman." }
            ]
        },
        {
            id: 'pace',
            q: "Siz qanday ish tempini afzal ko‘rasiz?",
            o: [
                { v: 'fast', l: "Yuqori energiyali va tez sur'atli, aniq muddatlar va bosim bilan." },
                { v: 'steady', l: "Xotirjam va barqaror. Men shoshilmasdan, to'g'ri bajarishni yoqtiraman." },
                { v: 'variety', l: "Ikkalasining aralashmasi - biroz sokin ish va biroz yuqori bosimli 'sprintlar'." }
            ]
        },
        {
            id: 'motivation',
            q: "Kelajakdagi karyerangiz uchun qaysi biri muhimroq?",
            o: [
                { v: 'prestige', l: "Obro'-e'tibor, yuqori maosh va aniq o'sish yo'li." },
                { v: 'fulfillment', l: "Shaxsiy qoniqish va dunyoga ijobiy ta'sir ko'rsatish." },
                { v: 'balance', l: "Ish va shaxsiy hayot muvozanati, past darajadagi stress va do'stona, qo'llab-quvvatlovchi jamoa." } // <-- Fixed typo here
            ]
        },
        {
            id: 'teamRole',
            q: "Guruh loyihasida siz odatda qanday rolni bajarasiz?",
            o: [
                { v: 'leader', l: "Lider. Men rejani tuzishni va vazifalarni taqsimlashni yaxshi ko'raman." },
                { v: 'doer', l: "Bajaruvchi/yordamchi. Men yordam berishdan va ishni bajarishdan mamnunman." },
                { v: 'thinker', l: "Fikrlovchi/tahlilchi. Men tafsilotlarni ikki marta tekshirishni va tanqidiy savollar berishni yaxshi ko'raman." }
            ]
        },
        // --- NEW QUESTIONS END HERE ---
        {
            id: 'field',
            q: "Nihoyat, siz qaysi umumiy yo‘nalishga engashyapsiz?",
            o: [
                { v: 'tech', l: "Texnologiya va muhandislik" },
                { v: 'business', l: "Biznes va moliya" },
                { v: 'social', l: "Ijtimoiy fanlar va huquq" },
                { v: 'science', l: "Fan va tibbiyot" },
                { v: 'arts', l: "San'at va gumanitar fanlar" }
            ]
        }
    ]
};


