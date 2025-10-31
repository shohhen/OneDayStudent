import type { Lang, TranslationSet } from '../types';

// Text emojis (monochrome version for consistency)
const textFire = '🔥\uFE0E';
const textRocket = '🚀\uFE0E';
const textThinking = '🤔\uFE0E';
const textHeadphones = '🎧\uFE0E';
const textWin = '💯\uFE0E';
const textSparkles = '✨\uFE0E';
const textDownArrow = '👇\uFE0E';
const textCompass = '🧭\uFE0E';
const textMap = '🗺️\uFE0E';
const textTarget = '🎯\uFE0E';
const textCelebration = '🎉\uFE0E';
const textHeart = '💚\uFE0E';
const textSkull = '💀\uFE0E';
const textCrown = '👑\uFE0E';
const textPizza = '🍕\uFE0E';
const textThumbsUp = '👍\uFE0E';

export const translations: Record<Lang, TranslationSet> = {
    en: {
        // ═══════════════════════════════════════════════════════════
        // SLIDE 1: HOOK - THE INTRO
        // ═══════════════════════════════════════════════════════════
        hookTitle: `Is This Even Your Future Tho? ${textThinking}`,
        hookSubtitle: `Spend a day living the uni life before you yeet away 4 years + tuition money. We'll show you the tea ☕ — real lectures, real students, real vibes. No regrets, just facts.`,
        hookButton: `Let Me Cook ${textRocket}`,

        // ═══════════════════════════════════════════════════════════
        // SLIDE 2: ADVANTAGES - WHY THIS SLAPS
        // ═══════════════════════════════════════════════════════════
        advantagesTitle: `Why This Actually Hits Different ${textFire}`,

        advantage1Title: `Experience the ACTUAL Vibe ${textHeadphones}`,
        advantage1Desc: `Sit in on a real lecture (it might be mind-bending, might be a total snooze 🥱). Walk the campus. Chat with students who actually go there. Get the real dealio, not the marketing video version.`,

        advantage2Title: `Don't Get Stuck in a Bad Relationship ${textSkull}`,
        advantage2Desc: `Picking a uni for 4 years is like dating — you NEED to test the chemistry first. We're basically speed dating you with your potential future. You're welcome.`,

        advantage3Title: `We Do the Boring Stuff So You Don't Have To ${textSparkles}`,
        advantage3Desc: `No scheduling nightmares. No "umm which professor should I sit with?" stress. We've got it all locked in. You just show up and vibe.`,

        advantagesButton: `Find My Vibe ${textTarget}`,

        // ═══════════════════════════════════════════════════════════
        // SLIDE 3: CROSSROADS - CHOOSE YOUR ADVENTURE
        // ═══════════════════════════════════════════════════════════
        crossroadsTitle: `Choose Your Adventure, Main Character ${textDownArrow}`,

        discoveryPathTitle: `I'm Lost Ngl ${textCompass}`,
        discoveryPathSubtitle: `My brain is scrambled. Run me through a quick vibe check (2 min) and I'll vibe with my perfect uni match. Show me the magic ${textWin}`,

        researcherPathTitle: `I Got This, I Know What's Good ${textCrown}`,
        researcherPathSubtitle: `Already picked my uni crush. Just show me what the day looks like and let me book that W.`,

        // ═══════════════════════════════════════════════════════════
        // QUIZ - QUESTIONS & VIBES
        // ═══════════════════════════════════════════════════════════
        quizInstructions: `Alright, let's vibe check real quick ${textThinking}`,

        // ═══════════════════════════════════════════════════════════
        // UNIVERSITY BROWSER - THE SELECTION SCREEN
        // ═══════════════════════════════════════════════════════════
        uniBrowserTitle: `Slide Into Your Future Uni ${textMap}`,
        uniBrowserSubtitle: `Explore all the moves we got available. Pick one that hits different.`,
        uniBrowserSearchPlaceholder: `Type that uni name... we got the tea ☕`,

        // ═══════════════════════════════════════════════════════════
        // UNIVERSITY PROFILE & OFFER PAGE
        // ═══════════════════════════════════════════════════════════
        experienceTitle: (universityName: string) => `Spend a Day Living That ${universityName} Life ${textSparkles}`,

        experienceOfferText: (price: string) => `For the price of a boba, you get a full day of that uni life. Fair trade? We think so. ${textThumbsUp} Just ${price} and you're in.`,

        experienceBookingButton: (universityName: string) => `Let's Do This at ${universityName} ${textFire}`,

        whatsIncludedTitle: `Here's What You're Getting ${textPizza}`,
        whatsIncluded1: `Catch a real lecture (might be fire 🔥, might be a nap substitute — you decide)`,
        whatsIncluded2: `Get the campus tour from someone who actually goes there (not a robot in a suit)`,
        whatsIncluded3: `Vibe with a real student over coffee — ask them the questions you're too scared to ask ${textSparkles}`,

        studentTestimonial: `Honestly I was SO close to just applying based on vibes, but this day sealed the deal for me. Saved me from making a huge mistake ngl.`,
        testimonialAuthor: `- A. Alimov, future version of you (but like, the cooler one)`,

        // ═══════════════════════════════════════════════════════════
        // RESULTS SLIDE - THE MATCH
        // ═══════════════════════════════════════════════════════════
        resultsTitle: `Yo, We Cooked ${textFire}`,
        resultsSubtitle: `Based on your answers, this is literally the one. We're not even joking. This university gets you. Let's set you up for a day and prove us right (or wrong lol).`,
        topMatch: `🔥 TOP MATCH 🔥`,
        seeOtherMatchesButton: `Also Kinda Fire ${textFire}`,

        // ═══════════════════════════════════════════════════════════
        // GENERAL UI & NAVIGATION
        // ═══════════════════════════════════════════════════════════
        headerTitle: `One Day Student`,
        backButton: `Nah, Wrong Turn ${textDownArrow}`,
        footerText: `Made with ${textHeart} & too much coffee ☕`,

        // ═══════════════════════════════════════════════════════════
        // STATES & FEEDBACK
        // ═══════════════════════════════════════════════════════════
        calculatingTitle: `We're Cooking Up Your Match...`,
        calculatingSubtitle: `Our AI is doing its thing. Hang tight ${textRocket}`,

        thankYouTitle: `You're on the List! ${textCelebration}`,
        thankYouSubtitle: `Thanks for the vibes! We'll hit you up when your experience is ready. Keep your phone on 📱`,

        // ═══════════════════════════════════════════════════════════
        // ERROR STATES
        // ═══════════════════════════════════════════════════════════
        formError: `Yo, you forgot something! Fill those in first ${textThinking}`,
        devError: `Our bad, the gremlins got to us. Developer gotta set up the Google Sheet URL first!`,
        submitError: `Oof, something went wrong. Try again?`,
        consentError: `We gotta get your consent to keep it moving.`,

        // ═══════════════════════════════════════════════════════════
        // BOOKING & FORMS
        // ═══════════════════════════════════════════════════════════
        reserveTitle: `Secure Your Spot`,
        reserveSubtitle: `Spots are limited fr fr. Lock in your experience.`,
        choosePrompt: `First things first — which uni is calling your name?`,
        yourName: `Your Name (no cap)`,
        yourContact: `Your Telegram or Phone Number`,
        submitButton: `LOCK IT IN ${textThumbsUp}`,
        submittingButton: `Locking in...`,
        formFinePrint: `Only 50k sum. You'll be first to get invited. Terms & conditions apply (yes, actually read them).`,
        consentText: `Bet, hit me up about this uni experience.`,
        clickToSelect: `Pick a uni to book your day.`,

        // ═══════════════════════════════════════════════════════════
        // LEGACY KEYS (Keep for compatibility)
        // ═══════════════════════════════════════════════════════════
        heroTitle: `Don't Get Finessed by Your University Choice`,
        heroSubtitle: `You know that feeling when you buy something online and it hits different? We don't want that to be your uni. Slide through for a day, see if it's actually fire or just mid.`,
        heroButton: `Sign Me Up, No Cap ${textWin}`,

        seo: {
            homeTitle: `One Day Student - Test Drive Your Future Uni`,
            homeDescription: `Spend a day at your dream university before you commit. Real lectures, real students, real vibes. No regrets.`,
            quizTitle: `Find Your Uni Match - 2 Min Vibe Check`,
            quizDescription: `Answer quick questions to find the university that actually gets you. Free quiz, no BS.`,
            resultsTitle: `Your Uni Match Results - One Day Student`,
            resultsDescription: `We found your perfect uni match. Book a day and see why you're gonna love it.`,
        }
    },

    ru: {
        // ═══════════════════════════════════════════════════════════
        // SLIDE 1: HOOK - INTRO
        // ═══════════════════════════════════════════════════════════
        hookTitle: `Это Точно Твоё Будущее? ${textThinking}`,
        hookSubtitle: `Проведи день как настоящий студент, прежде чем потратить 4 года и кучу денег. Покажем тебе настоящую информацию ☕ — реальные лекции, реальные студенты, реальная атмосфера. Без разочарований.`,
        hookButton: `Поехали ${textRocket}`,

        // ═══════════════════════════════════════════════════════════
        // SLIDE 2: ADVANTAGES
        // ═══════════════════════════════════════════════════════════
        advantagesTitle: `Почему Это На Самом Деле Крутого ${textFire}`,

        advantage1Title: `Почувствуй Реальный Вайб ${textHeadphones}`,
        advantage1Desc: `Посетишь настоящую лекцию (может быть огненной 🔥, может быть скучной 🥱). Пройдёшься по кампусу. Поговоришь со студентами которые там учатся. Узнаешь правду, а не маркетинговые обещания.`,

        advantage2Title: `Не Попадись На Неправильный Выбор ${textSkull}`,
        advantage2Desc: `Выбирать университет на 4 года — это как выбирать партнёра. Нужно проверить химию! Мы организуем вам скоростное свидание с вашим потенциальным будущим.`,

        advantage3Title: `Мы Сделаем Всю Скучную Работу ${textSparkles}`,
        advantage3Desc: `Никаких проблем с расписанием. Никаких "а с каким профессором мне сидеть?" Всё уже организовано. Ты просто приходишь и наслаждаешься.`,

        advantagesButton: `Найти Свой Вайб ${textTarget}`,

        // ═══════════════════════════════════════════════════════════
        // SLIDE 3: CROSSROADS
        // ═══════════════════════════════════════════════════════════
        crossroadsTitle: `Выбери Свой Путь, Главный Персонаж ${textDownArrow}`,

        discoveryPathTitle: `Я Потерялся ${textCompass}`,
        discoveryPathSubtitle: `Голова кружится. Дай мне пройти быструю проверку вайба (2 минуты) и я найду свой идеальный университет. Покажи мне магию ${textWin}`,

        researcherPathTitle: `Я Знаю Что Мне Нужно ${textCrown}`,
        researcherPathSubtitle: `Уже выбрал свой любимый университет. Просто покажи мне как выглядит этот день.`,

        // ═══════════════════════════════════════════════════════════
        // QUIZ
        // ═══════════════════════════════════════════════════════════
        quizInstructions: `Давай проверим твой вайб ${textThinking}`,

        // ═══════════════════════════════════════════════════════════
        // UNIVERSITY BROWSER
        // ═══════════════════════════════════════════════════════════
        uniBrowserTitle: `Выбери Свой Университет ${textMap}`,
        uniBrowserSubtitle: `Посмотри на все варианты. Выбери то, что тебе по душе.`,
        uniBrowserSearchPlaceholder: `Введи название университета... у нас есть вся информация ☕`,

        // ═══════════════════════════════════════════════════════════
        // UNIVERSITY PROFILE
        // ═══════════════════════════════════════════════════════════
        experienceTitle: (universityName: string) => `Один День В ${universityName} ${textSparkles}`,

        experienceOfferText: (price: string) => `За цену пузырькового чая — целый день студента. Честная сделка? Наверное ${textThumbsUp} Всего ${price}`,

        experienceBookingButton: (universityName: string) => `Поехали в ${universityName} ${textFire}`,

        whatsIncludedTitle: `Что Входит ${textPizza}`,
        whatsIncluded1: `Посещение реальной лекции (может быть огненной 🔥 или скучной 🥱 — ты решаешь)`,
        whatsIncluded2: `Экскурсия по кампусу от реального студента (не робот в костюме)`,
        whatsIncluded3: `Кофе-чат со студентом — задай все вопросы которые стеснялся спросить ${textSparkles}`,

        studentTestimonial: `Честно, я чуть не подал заявку просто на ощущения, но этот день всё решил. Спас меня от огромной ошибки.`,
        testimonialAuthor: `- А. Алимов, твоя будущая версия (но круче)`,

        // ═══════════════════════════════════════════════════════════
        // RESULTS
        // ═══════════════════════════════════════════════════════════
        resultsTitle: `Мы Нашли Твой Матч ${textFire}`,
        resultsSubtitle: `Это точно то что нужно. Мы серьёзно. Этот университет тебе подходит. Забронируй день и убедись сам.`,
        topMatch: `🔥 ИДЕАЛЬНОЕ СОВПАДЕНИЕ 🔥`,
        seeOtherMatchesButton: `Тоже Неплохие Варианты ${textFire}`,

        // ═══════════════════════════════════════════════════════════
        // GENERAL UI
        // ═══════════════════════════════════════════════════════════
        headerTitle: `Один День Студента`,
        backButton: `Неправильный Поворот ${textDownArrow}`,
        footerText: `Сделано с ${textHeart} и слишком большим количеством кофе ☕`,

        // ═══════════════════════════════════════════════════════════
        // STATES
        // ═══════════════════════════════════════════════════════════
        calculatingTitle: `Ищем Твой Идеальный Матч...`,
        calculatingSubtitle: `Наш ИИ работает. Подожди ${textRocket}`,

        thankYouTitle: `Ты В Списке! ${textCelebration}`,
        thankYouSubtitle: `Спасибо за интерес! Напишем тебе когда всё будет готово. Проверяй телефон 📱`,

        // ═══════════════════════════════════════════════════════════
        // ERRORS
        // ═══════════════════════════════════════════════════════════
        formError: `Эй, ты что-то забыл! Заполни пожалуйста ${textThinking}`,
        devError: `У нас случилась ошибка. Разработчик должен сначала настроить ссылку Google Sheet!`,
        submitError: `Упс, что-то пошло не так. Попробуй ещё раз? ${textThinking}`,
        consentError: `Нам нужно твоё согласие.`,

        // ═══════════════════════════════════════════════════════════
        // BOOKING & FORMS
        // ═══════════════════════════════════════════════════════════
        reserveTitle: `Забронируй Своё Место`,
        reserveSubtitle: `Мест мало. Заблокируй свой опыт сейчас.`,
        choosePrompt: `Сначала выбери университет который тебе нравится.`,
        yourName: `Твоё Имя`,
        yourContact: `Твой Telegram Или Номер Телефона`,
        submitButton: `ЗАБРОНИРОВАТЬ ${textThumbsUp}`,
        submittingButton: `Бронируем...`,
        formFinePrint: `Всего 50 тысяч сум. Ты будешь первым кто получит приглашение. Ознакомься с условиями.`,
        consentText: `Согласен получать обновления об этом университете.`,
        clickToSelect: `Выбери университет для бронирования.`,

        // ═══════════════════════════════════════════════════════════
        // LEGACY KEYS
        // ═══════════════════════════════════════════════════════════
        heroTitle: `Не Попадись На Неудачный Выбор Университета`,
        heroSubtitle: `Знаешь это чувство когда покупаешь в интернете и ожидание не совпадает с реальностью? Мы не хотим чтобы так было с университетом. Приходи на день, понимай хороший ли это вариант или так себе.`,
        heroButton: `Записать Меня ${textWin}`,

        seo: {
            homeTitle: `Один День Студента - Тест Твоего Будущего`,
            homeDescription: `Проведи день в университете мечты перед тем как поступать. Реальные лекции, реальные студенты, реальная жизнь.`,
            quizTitle: `Найди Свой Университет - Быстрый Тест`,
            quizDescription: `Ответь на вопросы и найди университет который тебе подходит. Быстро и честно.`,
            resultsTitle: `Результаты Теста - Один День Студента`,
            resultsDescription: `Мы нашли твой идеальный университет. Забронируй день и убедись почему тебе там понравится.`,
        }
    },

    uz: {
        // ═══════════════════════════════════════════════════════════
        // SLIDE 1: HOOK
        // ═══════════════════════════════════════════════════════════
        hookTitle: `Bu Haqiqatan Senin Kelajagi? ${textThinking}`,
        hookSubtitle: `Universitetga 4 yil sarf qilishdan oldin, bir kun talaba bo'lib o'tka. Haqiqiy ma'ruza, haqiqiy talabalar, haqiqiy atmofera. Afsuslanma.`,
        hookButton: `Ketayli ${textRocket}`,

        // ═══════════════════════════════════════════════════════════
        // SLIDE 2: ADVANTAGES
        // ═══════════════════════════════════════════════════════════
        advantagesTitle: `Nega Bu Shu Qadar Zo'r ${textFire}`,

        advantage1Title: `Haqiqiy Atmoferani His Qil ${textHeadphones}`,
        advantage1Desc: `Haqiqiy ma'ruzaga qatnash (yaxshi bo'lishi mumkin 🔥, yoki yumshoq bo'lishi mumkin 🥱). Kampusni aylanib ko'r. Haqiqiy talabalar bilan gaplash. Reklama emas, haqiqiy ma'lumot.`,

        advantage2Title: `Noto'g'ri Tanlovdan Qut Topa Ol ${textSkull}`,
        advantage2Desc: `Universitetni 4 yilga tanlash shunga o'xshaydi - birinchi kengilashtirib ko'rish kerak! Biz seni o'z kelajagingiz bilan tanishtiramiz.`,

        advantage3Title: `Biz Hammasini Qilamiz {{textSparkles}}`,
        advantage3Desc: `Jadvalni biz o'rnatamiz. Qaysi professorning bilan o'tirish kerak, biz bilamiz. Sen faqat kel va zavqlan.`,

        advantagesButton: `O'z Vaybimni Topish ${textTarget}`,

        // ═══════════════════════════════════════════════════════════
        // SLIDE 3: CROSSROADS
        // ═══════════════════════════════════════════════════════════
        crossroadsTitle: `O'zingning Yo'lingni Tanlang, Asosiy Qahramonimiz ${textDownArrow}`,

        discoveryPathTitle: `Men Adashib Qoldim {{textCompass}}`,
        discoveryPathSubtitle: `Aqlim chamdirdi. Menga tez tekshiruv qil (2 daqiqa) va meni mening ideyal universitetimga moslang. Menga sehrni ko'rsat ${textWin}`,

        researcherPathTitle: `Men Bilaman Nima Kerakligini {{textCrown}}`,
        researcherPathSubtitle: `Universitetni allaqachon tanladim. Faqat menga bu kunning qanday o'tishini ko'rsat.`,

        // ═══════════════════════════════════════════════════════════
        // QUIZ
        // ═══════════════════════════════════════════════════════════
        quizInstructions: `Tez tekshiruv o'tkaymiz {{textThinking}}`,

        // ═══════════════════════════════════════════════════════════
        // UNIVERSITY BROWSER
        // ═══════════════════════════════════════════════════════════
        uniBrowserTitle: `O'z Universitetingni Tanla {{textMap}}`,
        uniBrowserSubtitle: `Barcha variantlarni ko'r. Sening yoqiganini tanlang.`,
        uniBrowserSearchPlaceholder: `Universitetning nomini yoz... Bizda bar ☕`,

        // ═══════════════════════════════════════════════════════════
        // UNIVERSITY PROFILE
        // ═══════════════════════════════════════════════════════════
        experienceTitle: (universityName: string) => `${universityName}da Bir Kun {{textSparkles}}`,

        experienceOfferText: (price: string) => `Chavandozning narxiga — talaba kunining barchasini. Adolatli, shunday emasmi? {{textThumbsUp}} Faqat ${price}`,

        experienceBookingButton: (universityName: string) => `${universityName}ga Borayli {{textFire}}`,

        whatsIncludedTitle: `Nima Kiritilgan {{textPizza}}`,
        whatsIncluded1: `Haqiqiy ma'ruzaga qatnashish (yaxshi bo'lishi mumkin 🔥 yoki yumshoq 🥱 — sen tanla)`,
        whatsIncluded2: `Haqiqiy talaba bilan kampus ekskursiyasi (robot emas 🤖)`,
        whatsIncluded3: `Xojaliygan so'rash uchun qo'rqadigan barcha savollarni bir talaba bilan muhokama qil {{textSparkles}}`,

        studentTestimonial: `Voqeiga o'xshash, men uni faqat hiss qilgan holda ariza topshirishdim, lekin bu kun hammani halol qildi. Mening katta xatolardan qutqardu.`,
        testimonialAuthor: `- A. Alimov, senning kelajakdagi nusxasi (lekin zo'r)`,

        // ═══════════════════════════════════════════════════════════
        // RESULTS
        // ═══════════════════════════════════════════════════════════
        resultsTitle: `Biz Sening Matchni Tapdik {{textFire}}`,
        resultsSubtitle: `Bu yo'l! Biz jiddiy. Bu universitetni sen yoqtirasan. Bir kunni bron qil va o'zin ishontiir.`,
        topMatch: `🔥 PERFEKT MOSLIK 🔥`,
        seeOtherMatchesButton: `Boshqa Ham Yaxshi Variantlar {{textFire}}`,

        // ═══════════════════════════════════════════════════════════
        // GENERAL UI
        // ═══════════════════════════════════════════════════════════
        headerTitle: `Bir Kun Talaba`,
        backButton: `Noto'g'ri Burilish {{textDownArrow}}`,
        footerText: `Qilgan {{textHeart}} va ko'p qahva bilan ☕`,

        // ═══════════════════════════════════════════════════════════
        // STATES
        // ═══════════════════════════════════════════════════════════
        calculatingTitle: `Sening Match Qidirilmoqda...`,
        calculatingSubtitle: `Bizning AI ishlanmoqda. Kutib tur {{textRocket}}`,

        thankYouTitle: `Siz Ro'yxatdasiz! {{textCelebration}}`,
        thankYouSubtitle: `Rahmat! Biz tayyoq bo'lganda siz bilan bog'lanamiz. Telefoningni tekshir 📱`,

        // ═══════════════════════════════════════════════════════════
        // ERRORS
        // ═══════════════════════════════════════════════════════════
        formError: `Ey, siz nimadir unutdingiz! Iltimos to'ldiring {{textThinking}}`,
        devError: `Bizda xatolik bo'ldi. Dasturchiga Google Sheet URL manzilini sozlashi kerak!`,
        submitError: `Oops, nimadir noto'g'ri ketdi. Qayta urinib ko'ring? {{textThinking}}`,
        consentError: `Bizga sizning roziligiingiz kerak.`,

        // ═══════════════════════════════════════════════════════════
        // BOOKING & FORMS
        // ═══════════════════════════════════════════════════════════
        reserveTitle: `O'zingning Joyingni Bronlang {{textLock}}`,
        reserveSubtitle: `Joylar kam. Hozir bloki.`,
        choosePrompt: `Birinchi universitetni tanlang.`,
        yourName: `Sizning Ismingiz`,
        yourContact: `Sizning Telegram yoki Telefon Raqami`,
        submitButton: `BRON QILISH {{textThumbsUp}}`,
        submittingButton: `Bron qilinmoqda...`,
        formFinePrint: `Faqat 50 ming so'm. Siz birinchi bo'lasiz. Shartlarni o'qing.`,
        consentText: `Ushbu universitetning experientsiasi bo'yicha bog'lanishga roziman.`,
        clickToSelect: `Kuningni bronlash uchun universitetni tanlang.`,

        // ═══════════════════════════════════════════════════════════
        // LEGACY KEYS
        // ═══════════════════════════════════════════════════════════
        heroTitle: `Universitetni Noto'g'ri Tanlash Alatida Qolmang`,
        heroSubtitle: `Olinadigan mahsulot bilan qanday farq qilganda ekanligingizni bilasiz? Biz universitetga ham shunday bo'lishini xohlamaymiz. Bir kuni aylanib ko'r va yaxshi ekanligini ko'rasan.`,
        heroButton: `Meni Yozib Ol {{textWin}}`,

        seo: {
            homeTitle: `Bir Kun Talaba - O'zingning Kelajagingni Sinab Ko'r`,
            homeDescription: `Universitetga borishdan oldin bir kuni o'tka. Haqiqiy ma'ruza, haqiqiy talabalar, haqiqiy hayot.`,
            quizTitle: `O'zingning Universitetingni Top - Tez Test`,
            quizDescription: `Savollarga javob ber va o'zingga mos universitetni top. Tez va halol.`,
            resultsTitle: `Natijalar - Bir Kun Talaba`,
            resultsDescription: `Biz sening ideal universitetingni tapdik. Bir kunni bron qil va o'zingning nemalarga yoqtirilishini ko'r.`,
        }
    }
};