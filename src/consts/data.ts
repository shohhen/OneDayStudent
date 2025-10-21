import type { Quiz, University } from '@/types'

export const quizQuestionsData: Record<string, Quiz[]> = {
    en: [
        {
            id: 'ambition',
            q: 'When you imagine your ideal career, what excites you the most?',
            o: [
                { v: 'build', l: 'Building something new from scratch, maybe my own company.' },
                { v: 'expert', l: 'Solving complex problems and becoming a top expert in a field.' },
                { v: 'global', l: 'Working in a major international company and having a global career.' },
                { v: 'impact', l: 'Making a direct impact, helping people, or expressing my creativity.' },
            ],
        },
        {
            id: 'learningStyle',
            q: "Which 'One Day Student' experience sounds most like you?",
            o: [
                { v: 'project', l: 'Give me a real-world project. I want to build an app or create a marketing plan.' },
                { v: 'theory', l: 'Let me shadow a brilliant professor and sit in on a deep, theoretical lecture.' },
                { v: 'social', l: "I want to join a student club debate, network, and feel the campus 'vibe'." },
            ],
        },
        {
            id: 'environment',
            q: "What kind of university environment do you think you'd thrive in?",
            o: [
                { v: 'modern', l: "A modern, 'glass-and-steel' campus. International, fast-paced, and focused on technology." },
                { v: 'traditional', l: "A large, traditional campus with history. Big libraries and a 'classic' feel." },
                { v: 'community', l: "A smaller, tight-knit community. More like a 'business school' where I know my professors." },
            ],
        },
        {
            id: 'field',
            q: 'And finally, which general field are you leaning towards?',
            o: [
                { v: 'tech', l: 'Technology & Engineering' },
                { v: 'business', l: 'Business & Finance' },
                { v: 'social', l: 'Social Sciences & Law' },
                { v: 'science', l: 'Science & Medicine' },
                { v: 'arts', l: 'Arts & Humanities' },
            ],
        },
    ],
    ru: [
        {
            id: 'ambition',
            q: 'Представляя свою идеальную карьеру, что вас больше всего вдохновляет?',
            o: [
                { v: 'build', l: 'Создавать что-то новое с нуля, возможно, свою собственную компанию.' },
                { v: 'expert', l: 'Решать сложные проблемы и стать ведущим экспертом в своей области.' },
                { v: 'global', l: 'Работать в крупной международной компании и строить глобальную карьеру.' },
                { v: 'impact', l: 'Оказывать прямое влияние, помогать людям или выражать свое творчество.' },
            ],
        },
        {
            id: 'learningStyle',
            q: "Какой опыт 'Студента на один день' вам больше всего подходит?",
            o: [
                { v: 'project', l: 'Дайте мне реальный проект. Я хочу создать приложение или разработать маркетинговый план.' },
                { v: 'theory', l: 'Позвольте мне стать тенью блестящего профессора и посетить глубокую теоретическую лекцию.' },
                { v: 'social', l: 'Я хочу присоединиться к дебатам в студенческом клубе, общаться и почувствовать \'атмосферу\' кампуса.' },
            ],
        },
        {
            id: 'environment',
            q: 'В какой университетской среде, по вашему мнению, вы бы преуспели?',
            o: [
                { v: 'modern', l: 'Современный кампус из \'стекла и стали\'. Международный, динамичный и ориентированный на технологии.' },
                { v: 'traditional', l: 'Большой, традиционный кампус с историей. Большие библиотеки и \'классическая\' атмосфера.' },
                { v: 'community', l: 'Небольшое, сплоченное сообщество. Больше похожее на \'бизнес-школу\', где я знаю своих профессоров.' },
            ],
        },
        {
            id: 'field',
            q: 'И, наконец, к какой общей области вы склоняетесь?',
            o: [
                { v: 'tech', l: 'Технологии и инженерия' },
                { v: 'business', l: 'Бизнес и финансы' },
                { v: 'social', l: 'Социальные науки и право' },
                { v: 'science', l: 'Наука и медицина' },
                { v: 'arts', l: 'Искусство и гуманитарные науки' },
            ],
        },
    ],
    uz: [
        {
            id: 'ambition',
            q: 'Ideal martabangizni tasavvur qilganingizda, sizni nima eng ko\'p hayajonga soladi?',
            o: [
                { v: 'build', l: 'Noldan yangi narsa qurish, ehtimol o\'z kompaniyamni.' },
                { v: 'expert', l: 'Murakkab muammolarni hal qilish va sohada yetakchi mutaxassis bo\'lish.' },
                { v: 'global', l: 'Yirik xalqaro kompaniyada ishlash va global martabaga ega bo\'lish.' },
                { v: 'impact', l: 'To\'g\'ridan-to\'g\'ri ta\'sir ko\'rsatish, odamlarga yordam berish yoki ijodimni namoyon etish.' },
            ],
        },
        {
            id: 'learningStyle',
            q: 'Qaysi \'Bir kunlik talaba\' tajribasi sizga ko\'proq yoqadi?',
            o: [
                { v: 'project', l: 'Menga haqiqiy loyiha bering. Men ilova yaratmoqchiman yoki marketing rejasini ishlab chiqmoqchiman.' },
                { v: 'theory', l: 'Ajoyib professorning soyasi bo\'lishga va chuqur nazariy ma\'ruzada qatnashishga ruxsat bering.' },
                { v: 'social', l: 'Men talabalar klubidagi munozaralarga qo\'shilishni, muloqot qilishni va kampus \'muhitini\' his qilishni xohlayman.' },
            ],
        },
        {
            id: 'environment',
            q: 'Sizningcha, qanday universitet muhitida siz muvaffaqiyat qozonasiz?',
            o: [
                { v: 'modern', l: '\'Shisha va po\'lat\'dan yasalgan zamonaviy kampus. Xalqaro, tez sur\'atli va texnologiyaga yo\'naltirilgan.' },
                { v: 'traditional', l: 'Tarixga ega bo\'lgan katta, an\'anaviy kampus. Katta kutubxonalar va \'klassik\' muhit.' },
                { v: 'community', l: 'Kichikroq, ahil jamoa. Professorlarimni taniydigan \'biznes maktabi\'ga o\'xshaydi.' },
            ],
        },
        {
            id: 'field',
            q: 'Va nihoyat, qaysi umumiy sohaga ko\'proq qiziqasiz?',
            o: [
                { v: 'tech', l: 'Texnologiya va muhandislik' },
                { v: 'business', l: 'Biznes va moliya' },
                { v: 'social', l: 'Ijtimoiy fanlar va huquq' },
                { v: 'science', l: 'Fan va tibbiyot' },
                { v: 'arts', l: 'San\'art va gumanitar fanlar' },
            ],
        },
    ],
}

export const universitiesData: Record<string, University[]> = {
    en: [
        {
            id: 'inha',
            name: 'Inha University in Tashkent',
            tags: ['build', 'project', 'modern', 'tech'],
            reason:
                'Its hands-on coding projects and startup culture make it a perfect fit for an ambitious builder like you.',
        },
        {
            id: 'westminster',
            name: 'Westminster International University in Tashkent',
            tags: ['global', 'social', 'community', 'business', 'social'],
            reason:
                'With its strong international community and focus on business, it\'s ideal for someone with a global career mindset.',
        },
        {
            id: 'mdist',
            name: 'MDIS Tashkent',
            tags: ['global', 'project', 'community', 'business'],
            reason: 'Known for its practical business programs and tight-knit student community, it\'s great for future entrepreneurs.',
        },
        {
            id: 'amity',
            name: 'Amity University in Tashkent',
            tags: ['build', 'modern', 'tech', 'business'],
            reason:
                'Its focus on technology and management aligns well with your desire to build and innovate in a modern setting.',
        },
        {
            id: 'webster',
            name: 'Webster University in Tashkent',
            tags: ['global', 'social', 'community', 'arts', 'business'],
            reason: 'Its American-style liberal arts education is perfect for exploring creative and social impact careers.',
        },
        {
            id: 'nuu',
            name: 'National University of Uzbekistan',
            tags: ['expert', 'theory', 'traditional', 'science', 'social'],
            reason:
                'Its deep academic roots and focus on theory are excellent for someone wanting to become a true expert in their field.',
        },
    ],
    ru: [
        {
            id: 'inha',
            name: 'Университет Инха в Ташкенте',
            tags: ['build', 'project', 'modern', 'tech'],
            reason:
                'Его практические проекты по программированию и стартап-культура делают его идеальным выбором для амбициозного создателя.',
        },
        {
            id: 'westminster',
            name: 'Международный Вестминстерский университет в Ташкенте',
            tags: ['global', 'social', 'community', 'business', 'social'],
            reason:
                'С его сильным международным сообществом и фокусом на бизнесе, он идеален для тех, кто стремится к глобальной карьере.',
        },
        {
            id: 'mdist',
            name: 'MDIS в Ташкенте',
            tags: ['global', 'project', 'community', 'business'],
            reason:
                'Известен своими практическими бизнес-программами и сплоченным студенческим сообществом, отлично подходит для будущих предпринимателей.',
        },
        {
            id: 'amity',
            name: 'Университет Амити в Ташкенте',
            tags: ['build', 'modern', 'tech', 'business'],
            reason:
                'Его фокус на технологиях и менеджменте хорошо сочетается с вашим желанием создавать и внедрять инновации в современной среде.',
        },
        {
            id: 'webster',
            name: 'Университет Вебстера в Ташкенте',
            tags: ['global', 'social', 'community', 'arts', 'business'],
            reason:
                'Его американская модель гуманитарного образования идеально подходит для изучения творческих и социально-значимых профессий.',
        },
        {
            id: 'nuu',
            name: 'Национальный университет Узбекистана',
            tags: ['expert', 'theory', 'traditional', 'science', 'social'],
            reason:
                'Его глубокие академические корни и фокус на теории отлично подходят для тех, кто хочет стать настоящим экспертом в своей области.',
        },
    ],
    uz: [
        {
            id: 'inha',
            name: 'Toshkentdagi Inha Universiteti',
            tags: ['build', 'project', 'modern', 'tech'],
            reason:
                'Amaliy kodlash loyihalari va startap madaniyati siz kabi shuhratparast quruvchi uchun uni mukammal tanlovga aylantiradi.',
        },
        {
            id: 'westminster',
            name: 'Toshkentdagi Xalqaro Vestminster Universiteti',
            tags: ['global', 'social', 'community', 'business', 'social'],
            reason:
                'Kuchli xalqaro hamjamiyati va biznesga e\'tibor qaratishi bilan global martabaga intilayotganlar uchun idealdir.',
        },
        {
            id: 'mdist',
            name: 'Toshkentdagi MDIS',
            tags: ['global', 'project', 'community', 'business'],
            reason:
                'Amaliy biznes dasturlari va ahil talabalar hamjamiyati bilan tanilgan, kelajakdagi tadbirkorlar uchun ajoyib.',
        },
        {
            id: 'amity',
            name: 'Toshkentdagi Amity Universiteti',
            tags: ['build', 'modern', 'tech', 'business'],
            reason:
                'Texnologiya va menejmentga e\'tibor qaratishi zamonaviy muhitda yaratish va innovatsiya qilish istagingizga mos keladi.',
        },
        {
            id: 'webster',
            name: 'Toshkentdagi Vebster Universiteti',
            tags: ['global', 'social', 'community', 'arts', 'business'],
            reason:
                'Uning Amerika uslubidagi gumanitar ta\'limi ijodiy va ijtimoiy ahamiyatga ega kasblarni o\'rganish uchun juda mos keladi.',
        },
        {
            id: 'nuu',
            name: "O'zbekiston Milliy Universiteti",
            tags: ['expert', 'theory', 'traditional', 'science', 'social'],
            reason:
                'Uning chuqur ilmiy ildizlari va nazariyaga e\'tibor qaratishi o\'z sohasida haqiqiy mutaxassis bo\'lishni istaganlar uchun a\'lo darajada.',
        },
    ],
}