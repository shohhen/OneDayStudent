import type {Lang, University} from '../types';

// These tags now correspond to all the new question values from 'questions.ts'
export const universitiesData: Record<Lang, University[]> = {
    // --- English Universities ---
    en: [
        {
            id: 'inha',
            name: 'Inha University in Tashkent',
            tags: [
                'build', 'project', 'modern', 'tech', // Ambition, Learning, Env, Field
                'group', 'balanced',                 // Study Style
                'certain', 'exploring',              // Certainty
                'analytical', 'creative',            // Problem Solving
                'fast', 'variety',                   // Pace
                'prestige', 'fulfillment',           // Motivation
                'leader', 'doer'                     // Team Role
            ],
            reason: "Its hands-on coding projects and startup culture make it a perfect fit for an ambitious builder like you."
        },
        {
            id: 'westminster',
            name: 'Westminster International University in Tashkent',
            tags: [
                'global', 'social', 'community', 'business', 'social', // Ambition, Learning, Env, Field
                'group', 'balanced',                                  // Study Style
                'exploring', 'certain',                               // Certainty
                'collaborative', 'analytical',                        // Problem Solving
                'variety', 'fast',                                    // Pace
                'prestige', 'balance',                                // Motivation
                'leader', 'thinker'                                   // Team Role
            ],
            reason: "With its strong international community and focus on business, it's ideal for someone with a global career mindset."
        },
        {
            id: 'mdist',
            name: 'Management Development Institute of Singapore in Tashkent',
            tags: [
                'global', 'project', 'community', 'business', // Ambition, Learning, Env, Field
                'group', 'balanced',                          // Study Style
                'certain', 'exploring',                       // Certainty
                'collaborative', 'analytical',                // Problem Solving
                'variety', 'fast',                            // Pace
                'prestige', 'balance',                        // Motivation
                'leader', 'doer'                              // Team Role
            ],
            reason: "Known for its practical business programs and tight-knit student community, it's great for future entrepreneurs."
        },
        {
            id: 'amity',
            name: 'Amity University in Tashkent',
            tags: [
                'build', 'modern', 'tech', 'business', // Ambition, Learning, Env, Field
                'balanced', 'group',                   // Study Style
                'certain',                             // Certainty
                'analytical', 'creative',              // Problem Solving
                'fast', 'variety',                     // Pace
                'prestige',                            // Motivation
                'leader', 'thinker'                    // Team Role
            ],
            reason: "Its focus on technology and management aligns well with your desire to build and innovate in a modern setting."
        },
        {
            id: 'webster',
            name: 'Webster University in Tashkent',
            tags: [
                'global', 'social', 'community', 'arts', 'business', 'impact', // Ambition, Learning, Env, Field
                'group', 'balanced',                                          // Study Style
                'clueless', 'exploring',                                      // Certainty (Good for undecided)
                'creative', 'collaborative',                                  // Problem Solving
                'steady', 'variety',                                          // Pace
                'fulfillment', 'balance',                                     // Motivation
                'thinker', 'collaborative'                                    // Team Role
            ],
            reason: "Its American-style liberal arts education is perfect for exploring creative and social impact careers, even if you're not sure yet."
        },
        {
            id: 'nuu',
            name: 'New Uzbekistan University',
            tags: [
                'build', 'impact', 'modern', 'tech',  // Ambition, Learning, Env, Field
                'balanced', 'group',                  // Study Style
                'certain',                            // Certainty
                'analytical', 'creative',             // Problem Solving
                'fast',                               // Pace
                'prestige', 'fulfillment',            // Motivation
                'leader', 'thinker'                   // Team Role
            ],
            reason: "As a flagship modern university, its focus on STEM and research is perfect for ambitious thinkers ready to build cutting-edge technology."
        },
        {
            id: 'cau',
            name: 'Central Asian University',
            tags: [
                'global', 'project', 'community', 'business', 'tech', // Ambition, Learning, Env, Field
                'group', 'balanced',                                  // Study Style
                'exploring', 'certain',                               // Certainty
                'collaborative', 'analytical',                        // Problem Solving
                'variety', 'fast',                                    // Pace
                'prestige', 'balance',                                // Motivation
                'leader', 'doer'                                      // Team Role
            ],
            reason: "Its focus on regional business and technology with international partnerships is ideal for a collaborative leader aiming for a global career."
        },
        {
            id: 'bmu',
            name: 'British Management University',
            tags: [
                'global', 'social', 'community', 'business', // Ambition, Learning, Env, Field
                'group', 'balanced',                         // Study Style
                'certain',                                   // Certainty
                'collaborative', 'analytical',               // Problem Solving
                'fast', 'variety',                           // Pace
                'prestige', 'balance',                       // Motivation
                'leader', 'thinker'                          // Team Role
            ],
            reason: "With a specialized focus on British business education, it's perfect for those certain they want to become analytical leaders in finance and management."
        },
        // --- TTPU and TEAM Added Below ---
        {
            id: 'ttpu',
            name: 'Turin Polytechnic University in Tashkent',
            tags: [
                'build', 'project', 'modern', 'tech', // Ambition, Learning, Env, Field
                'balanced', 'group',                  // Study Style
                'certain',                            // Certainty
                'analytical', 'doer',                 // Problem Solving
                'fast',                               // Pace
                'prestige',                           // Motivation
                'doer', 'thinker'                     // Team Role
            ],
            reason: "Its strong focus on engineering, automotive, and IT, combined with Italian standards, makes it perfect for a hands-on builder who is certain about a technical career."
        },
        {
            id: 'team',
            name: 'TEAM University',
            tags: [
                'build', 'global', 'project', 'business', // Ambition, Learning, Env, Field
                'group', 'balanced',                      // Study Style
                'exploring', 'certain',                   // Certainty
                'creative', 'collaborative',              // Problem Solving
                'fast', 'variety',                        // Pace
                'fulfillment', 'prestige',                // Motivation
                'leader', 'doer'                          // Team Role
            ],
            reason: "With its unique focus on entrepreneurship and innovation, it's the ideal place for a creative leader looking to build their own venture from the ground up."
        },
    ],

    // --- Russian Universities (Same tags, translated names/reasons) ---
    ru: [
        {
            id: 'inha',
            name: 'Университет Инха в Ташкенте',
            tags: ['build', 'project', 'modern', 'tech', 'group', 'balanced', 'certain', 'exploring', 'analytical', 'creative', 'fast', 'variety', 'prestige', 'fulfillment', 'leader', 'doer'],
            reason: "Его практические проекты по программированию и стартап-культура делают его идеальным выбором для амбициозного создателя."
        },
        {
            id: 'westminster',
            name: 'Международный Вестминстерский университет в Ташкенте',
            tags: ['global', 'social', 'community', 'business', 'social', 'group', 'balanced', 'exploring', 'certain', 'collaborative', 'analytical', 'variety', 'fast', 'prestige', 'balance', 'leader', 'thinker'],
            reason: "С его сильным международным сообществом и фокусом на бизнесе, он идеален для тех, кто стремится к глобальной карьере."
        },
        {
            id: 'mdist',
            name: 'Сингапурский Институт Развития Менеджмента в Ташкенте',
            tags: ['global', 'project', 'community', 'business', 'group', 'balanced', 'certain', 'exploring', 'collaborative', 'analytical', 'variety', 'fast', 'prestige', 'balance', 'leader', 'doer'],
            reason: "Известен своими практическими бизнес-программами и сплоченным студенческим сообществом, отлично подходит для будущих предпринимателей."
        },
        {
            id: 'amity',
            name: 'Университет Амити в Ташкенте',
            tags: ['build', 'modern', 'tech', 'business', 'balanced', 'group', 'certain', 'analytical', 'creative', 'fast', 'variety', 'prestige', 'leader', 'thinker'],
            reason: "Его фокус на технологиях и менеджменте хорошо сочетается с вашим желанием создавать и внедрять инновации в современной среде."
        },
        {
            id: 'webster',
            name: 'Вебстерский Университет в Ташкенте',
            tags: ['global', 'social', 'community', 'arts', 'business', 'impact', 'group', 'balanced', 'clueless', 'exploring', 'creative', 'collaborative', 'steady', 'variety', 'fulfillment', 'balance', 'thinker', 'collaborative'],
            reason: "Его американская модель гуманитарного образования идеально подходит для изучения творческих и социально-значимых профессий, даже если вы еще не уверены."
        },
        {
            id: 'nuu',
            name: 'Университет "Новый Узбекистан"',
            tags: ['build', 'impact', 'modern', 'tech', 'balanced', 'group', 'certain', 'analytical', 'creative', 'fast', 'prestige', 'fulfillment', 'leader', 'thinker'],
            reason: "Как флагманский современный университет, его фокус на STEM и исследованиях идеален для амбициозных мыслителей, готовых создавать передовые технологии."
        },
        {
            id: 'cau',
            name: 'Центрально-Азиатский Университет',
            tags: ['global', 'project', 'community', 'business', 'tech', 'group', 'balanced', 'exploring', 'certain', 'collaborative', 'analytical', 'variety', 'fast', 'prestige', 'balance', 'leader', 'doer'],
            reason: "Его фокус на региональном бизнесе и технологиях с международными партнерствами идеален для лидера, стремящегося к сотрудничеству и глобальной карьере."
        },
        {
            id: 'bmu',
            name: 'Британский Университет Менеджмента',
            tags: ['global', 'social', 'community', 'business', 'group', 'balanced', 'certain', 'collaborative', 'analytical', 'fast', 'variety', 'prestige', 'balance', 'leader', 'thinker'],
            reason: "Благодаря cпециализированному фокусу на британском бизнес-образовании, он идеально подходит для тех, кто уверен, что хочет стать аналитическим лидером в области финансов и менеджмента."
        },
        // --- TTPU and TEAM Added Below ---
        {
            id: 'ttpu',
            name: 'Туринский политехнический университет в Ташкенте',
            tags: ['build', 'project', 'modern', 'tech', 'balanced', 'group', 'certain', 'analytical', 'doer', 'fast', 'prestige', 'doer', 'thinker'],
            reason: "Его сильный фокус на инженерии, автомобилестроении и ИТ в сочетании с итальянскими стандартами делает его идеальным для практика-строителя, уверенного в своей технической карьере."
        },
        {
            id: 'team',
            name: 'Университет TEAM',
            tags: ['build', 'global', 'project', 'business', 'group', 'balanced', 'exploring', 'certain', 'creative', 'collaborative', 'fast', 'variety', 'fulfillment', 'prestige', 'leader', 'doer'],
            reason: "Благодаря своему уникальному фокусу на предпринимательстве и инновациях, это идеальное место для креативного лидера, желающего создать собственное предприятие с нуля."
        },
    ],

    // --- Uzbek Universities (Same tags, translated names/reasons) ---
    uz: [
        {
            id: 'inha',
            name: 'Toshkentdagi Inha Universiteti',
            tags: ['build', 'project', 'modern', 'tech', 'group', 'balanced', 'certain', 'exploring', 'analytical', 'creative', 'fast', 'variety', 'prestige', 'fulfillment', 'leader', 'doer'],
            reason: "Amaliy kodlash loyihalari va startap madaniyati siz kabi shuhratparast quruvchi uchun uni mukammal tanlovga aylantiradi."
        },
        {
            id: 'westminster',
            name: 'Toshkentdagi Xalqaro Vestminster Universiteti',
            tags: ['global', 'social', 'community', 'business', 'social', 'group', 'balanced', 'exploring', 'certain', 'collaborative', 'analytical', 'variety', 'fast', 'prestige', 'balance', 'leader', 'thinker'],
            reason: "Kuchli xalqaro hamjamiyati va biznesga e'tibor qaratishi bilan global martabaga intilayotganlar uchun idealdir."
        },
        {
            id: 'mdist',
            name: 'Toshkentdagi Singapur Menejmentni Rivojlantirish Instituti',
            tags: ['global', 'project', 'community', 'business', 'group', 'balanced', 'certain', 'exploring', 'collaborative', 'analytical', 'variety', 'fast', 'prestige', 'balance', 'leader', 'doer'],
            reason: "Amaliy biznes dasturlari va ahil talabalar hamjamiyati bilan tanilgan, kelajakdagi tadbirkorlar uchun ajoyib."
        },
        {
            id: 'amity',
            name: 'Toshkentdagi Amity Universiteti',
            tags: ['build', 'modern', 'tech', 'business', 'balanced', 'group', 'certain', 'analytical', 'creative', 'fast', 'variety', 'prestige', 'leader', 'thinker'],
            reason: "Texnologiya va menejmentga e'tibor qaratishi zamonaviy muhitda yaratish va innovatsiya qilish istagingizga mos keladi."
        },
        {
            id: 'webster',
            name: 'Toshkentdagi Vebster Universiteti',
            tags: ['global', 'social', 'community', 'arts', 'business', 'impact', 'group', 'balanced', 'clueless', 'exploring', 'creative', 'collaborative', 'steady', 'variety', 'fulfillment', 'balance', 'thinker', 'collaborative'],
            reason: "Uning Amerika uslubidagi gumanitar ta'limi ijodiy va ijtimoiy ahamiyatga ega kasblarni o'rganish uchun juda mos keladi, hatto hali ishonchingiz komil bo'lmasa ham."
        },
        {
            id: 'nuu',
            name: '"Yangi O\'zbekiston" Universiteti',
            tags: ['build', 'impact', 'modern', 'tech', 'balanced', 'group', 'certain', 'analytical', 'creative', 'fast', 'prestige', 'fulfillment', 'leader', 'thinker'],
            reason: "Flagman zamonaviy universitet sifatida uning STEM va tadqiqotlarga e'tibor qaratishi ilg'or texnologiyalarni yaratishga tayyor bo'lgan intiluvchan mutafakkirlar uchun juda mos keladi."
        },
        {
            id: 'cau',
            name: 'Markaziy Osiyo Universiteti',
            tags: ['global', 'project', 'community', 'business', 'tech', 'group', 'balanced', 'exploring', 'certain', 'collaborative', 'analytical', 'variety', 'fast', 'prestige', 'balance', 'leader', 'doer'],
            reason: "Xalqaro hamkorlikka ega mintaqaviy biznes va texnologiyalarga e'tibor qaratishi global martabaga intilayotgan hamkorlikdagi yetakchi uchun idealdir."
        },
        {
            id: 'bmu',
            name: 'Britaniya Menejment Universiteti',
            tags: ['global', 'social', 'community', 'business', 'group', 'balanced', 'certain', 'collaborative', 'analytical', 'fast', 'variety', 'prestige', 'balance', 'leader', 'thinker'],
            reason: "Britaniya biznes ta'limiga ixtisoslashgan holda, moliya va menejment sohasida tahlilchi yetakchi bo'lishni aniq istaganlar uchun juda mos keladi."
        },
        // --- TTPU and TEAM Added Below ---
        {
            id: 'ttpu',
            name: 'Toshkentdagi Turin Politexnika Universiteti',
            tags: ['build', 'project', 'modern', 'tech', 'balanced', 'group', 'certain', 'analytical', 'doer', 'fast', 'prestige', 'doer', 'thinker'],
            reason: "Muhandislik, avtomobilsozlik va ITga qaratilgan kuchli e'tibor, Italiya standartlari bilan birgalikda, texnik martaba yo'lida qat'iy qaror qilgan amaliyotchi-quruvchi uchun uni mukammal qiladi."
        },
        {
            id: 'team',
            name: 'TEAM Universiteti',
            tags: ['build', 'global', 'project', 'business', 'group', 'balanced', 'exploring', 'certain', 'creative', 'collaborative', 'fast', 'variety', 'fulfillment', 'prestige', 'leader', 'doer'],
            reason: "Tadbirkorlik va innovatsiyalarga qaratilgan o'ziga xos e'tibori bilan, bu o'z loyihasini noldan boshlamoqchi bo'lgan ijodiy yetakchi uchun ideal joy."
        },
    ]
};