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
            name: 'MDIS Tashkent',
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
            name: 'National University of Uzbekistan',
            tags: [
                'expert', 'theory', 'traditional', 'science', 'social', // Ambition, Learning, Env, Field
                'solo', 'balanced',                                     // Study Style
                'certain', 'exploring',                                 // Certainty
                'analytical', 'thinker',                                // Problem Solving
                'steady',                                               // Pace
                'fulfillment', 'prestige',                              // Motivation
                'thinker', 'solo'                                       // Team Role
            ],
            reason: "Its deep academic roots and focus on theory are excellent for someone wanting to become a true expert in their field."
        }
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
            name: 'MDIS в Ташкенте',
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
            name: 'Университет Вебстера в Ташкенте',
            tags: ['global', 'social', 'community', 'arts', 'business', 'impact', 'group', 'balanced', 'clueless', 'exploring', 'creative', 'collaborative', 'steady', 'variety', 'fulfillment', 'balance', 'thinker', 'collaborative'],
            reason: "Его американская модель гуманитарного образования идеально подходит для изучения творческих и социально-значимых профессий, даже если вы еще не уверены."
        },
        {
            id: 'nuu',
            name: 'Национальный университет Узбекистана',
            tags: ['expert', 'theory', 'traditional', 'science', 'social', 'solo', 'balanced', 'certain', 'exploring', 'analytical', 'thinker', 'steady', 'fulfillment', 'prestige', 'thinker', 'solo'],
            reason: "Его глубокие академические корни и фокус на теории отлично подходят для тех, кто хочет стать настоящим экспертом в своей области."
        }
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
            name: 'Toshkentdagi MDIS',
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
            name: "O'zbekiston Milliy Universiteti",
            tags: ['expert', 'theory', 'traditional', 'science', 'social', 'solo', 'balanced', 'certain', 'exploring', 'analytical', 'thinker', 'steady', 'fulfillment', 'prestige', 'thinker', 'solo'],
            reason: "Uning chuqur ilmiy ildizlari va nazariyaga e'tibor qaratishi o'z sohasida haqiqiy mutaxassis bo'lishni istaganlar uchun a'lo darajada."
        }
    ]
};

