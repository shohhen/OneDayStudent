// src/data/i18n.ts

import type { Lang, TranslationSet } from '../types';

export const translations: Record<Lang, TranslationSet> = {
    en: {
        heroTitle: "Unsure About Your Future Major?",
        heroSubtitle:
            "Answer 10 quick questions and find out which university you can be a 'One Day Student'.",
        heroButton: "Find My Perfect University",

        calculatingTitle: "Analyzing your profile...",
        calculatingSubtitle: "Crafting your personalized recommendations!",

        // New "Gate" Page Text
        gateTitle: "Your Recommendations Are Ready!",
        gateSubtitle: "Register to see your results and to become a 'One Day Student'.",
        gateSubmitButton: "SEE RESULTS AND REGISTER",

        // New "Results & Upsell" Page Text
        resultsTitle: "Your Personalized Matches!",
        resultsSubtitle: "Here are the top universities where you'd thrive based on your answers.",
        resultsUpsellTitle: "Now, visit these universities in person!",
        resultsUpsellBody: "Become a 'One Day Student' for 170,000 UZS. Attend real classes, talk to students, and make the right choice for your next 4 years.",
        resultsTelegramButton: "RESERVE VIA TELEGRAM",

        topMatch: "TOP MATCH",
        yourName: "Your Full Name",
        yourContact: "Your Telegram or Phone",
        submittingButton: "Submitting...",
        formError: "Please fill out all fields.",
        consentError: "Please provide your consent to proceed.",
        devError: "The developer needs to set up the Google Sheet URL first!",
        submitError: "Something went wrong. Please try again.",
        formFinePrint:
            "The fee is 170,000 sum. You'll be first to receive an invitation. By registering, you agree to a consultation.",
        consentText: "I agree to be contacted about the 'One Day Student' service.",

        // Removed ThankYou page text
        thankYouTitle: "",
        thankYouSubtitle: "",

        headerTitle: "One Day Student",
        clickToSelect: "", // No longer needed
        backButton: "Back", // Simplified
        footerText: "All rights reserved.",
        seo: {
            homeTitle: "One Day Student - Find Your Perfect University",
            homeDescription:
                "Take our quick quiz to discover the university and field that fit you best in Uzbekistan.",
            quizTitle: "University Selection Quiz | One Day Student",
            quizDescription:
                "Answer 10 short questions to receive a personalized university recommendation.",
            resultsTitle: "Your Quiz Results | One Day Student",
            resultsDescription:
                "Here are the universities recommended for you. Book your 'One Day Student' experience now."
        }
    },

    ru: {
        heroTitle: "Не уверены в выборе будущей специальности?",
        heroSubtitle:
            "Ответьте на 10 быстрых вопросов и узнайте, в каком университете вы можете стать 'Студентом на Один День'.",
        heroButton: "Найти мой идеальный университет",

        calculatingTitle: "Анализируем ваш профиль...",
        calculatingSubtitle: "Готовим ваши персональные рекомендации!",

        // New "Gate" Page Text
        gateTitle: "Ваши рекомендации готовы!",
        gateSubtitle: "Зарегистрируйтесь, чтобы увидеть свои результаты и стать 'Студентом на один день'.",
        gateSubmitButton: "ПОКАЗАТЬ РЕЗУЛЬТАТЫ И ЗАРЕГИСТРИРОВАТЬСЯ",

        // New "Results & Upsell" Page Text
        resultsTitle: "Ваши персональные рекомендации!",
        resultsSubtitle: "Вот лучшие университеты, которые подходят вам на основе ваших ответов.",
        resultsUpsellTitle: "Теперь посетите эти университеты лично!",
        resultsUpsellBody: "Станьте 'Студентом на один день' за 170 000 сум. Посещайте реальные занятия, общайтесь со студентами и сделайте правильный выбор на следующие 4 года.",
        resultsTelegramButton: "ЗАБРОНИРОВАТЬ ЧЕРЕЗ TELEGRAM",

        topMatch: "ЛУЧШЕЕ СОВПАДЕНИЕ",
        yourName: "Ваше полное имя",
        yourContact: "Ваш Telegram или телефон",
        submittingButton: "Отправка...",
        formError: "Пожалуйста, заполните все поля.",
        consentError: "Пожалуйста, дайте согласие, чтобы продолжить.",
        devError: "Разработчику нужно сначала настроить URL Google Sheet!",
        submitError: "Что-то пошло не так. Пожалуйста, попробуйте снова.",
        formFinePrint:
            "Стоимость услуги 170 000 сум. Вы получите приглашение. Регистрируясь, вы соглашаетесь на консультацию.",
        consentText: "Я согласен(а) на связь по поводу услуги 'Студент на один день'.",

        // Removed ThankYou page text
        thankYouTitle: "",
        thankYouSubtitle: "",

        headerTitle: "Студент на один день",
        clickToSelect: "", // No longer needed
        backButton: "Назад", // Simplified
        footerText: "Все права защищены.",
        seo: {
            homeTitle: "Студент на один день - Найдите свой идеальный университет",
            homeDescription:
                "Пройдите короткий тест, чтобы подобрать университет и направление, которые подходят именно вам.",
            quizTitle: "Тест по выбору университета | Студент на один день",
            quizDescription:
                "Ответьте на 10 вопросов и получите персональную рекомендацию университета.",
            resultsTitle: "Результаты теста | Студент на один день",
            resultsDescription:
                "Рекомендованные для вас университеты. Забронируйте ваш опыт 'Студент на один день'."
        }
    },

    uz: {
        heroTitle: "Bo‘lajak mutaxassisingiz haqida ikkilanyapsizmi?",
        heroSubtitle:
            "10 ta tez savolga javob bering va qaysi universitetda 'Bir Kun Talaba' bo‘lishingiz mumkinligini bilib oling.",
        heroButton: "Mos universitetimni topish",

        calculatingTitle: "Sizning profilingiz tahlil qilinmoqda...",
        calculatingSubtitle: "Shaxsiy tavsiyalar tayyorlanmoqda!",

        // New "Gate" Page Text
        gateTitle: "Natijalaringiz tayyor!",
        gateSubtitle: "Natijalarni ko'rish va 'Bir Kun Talaba' bo'lish uchun ro'yxatdan o'ting.",
        gateSubmitButton: "NATIJALARNI KO'RISH",

        // New "Results & Upsell" Page Text
        resultsTitle: "Siz uchun mos tavsiyalar!",
        resultsSubtitle: "Sizning javoblaringiz asosida sizga eng mos keladigan universitetlar:",
        resultsUpsellTitle: "Endi bu universitetlarga shaxsan tashrif buyuring!",
        resultsUpsellBody: "170,000 so'm evaziga 'Bir Kun Talaba' bo'ling. Haqiqiy darslarga kiring, talabalar bilan gaplashing va 4 yillik kelajagingizni to'g'ri tanlang.",
        resultsTelegramButton: "TELEGRAM ORQALI BAND QILISH",

        topMatch: "ENG YAXSHI MOSLIK",
        yourName: "To'liq Ismingiz",
        yourContact: "Telegram yoki telefon raqamingiz",
        submittingButton: "Yuborilmoqda...",
        formError: "Iltimos, barcha maydonlarni to'ldiring.",
        consentError: "Iltimos, davom etish uchun roziligingizni bering.",
        devError: "Dasturchi avvalo Google Sheet URL manzilini sozlashi kerak!",
        submitError: "Xatolik yuz berdi. Iltimos, qayta urinib ko‘ring.",
        formFinePrint:
            "Xizmat narxi 170 000 so'm. Taklifnomani birinchi bo'lib olasiz. Ro'yxatdan o'tish orqali siz maslahat olishga rozilik bildirasiz.",
        consentText: "'Bir Kun Talaba' xizmati bo'yicha men bilan bog'lanishlariga roziman.",

        // Removed ThankYou page text
        thankYouTitle: "",
        thankYouSubtitle: "",

        headerTitle: "Bir Kun Talaba",
        clickToSelect: "", // No longer needed
        backButton: "Orqaga", // Simplified
        footerText: "Barcha huquqlar himoyalangan.",
        seo: {
            homeTitle: "Bir Kun Talaba - O'zingizga mos universitetni toping",
            homeDescription:
                "10 ta savolni javoblab, O'zbekistondagi sizga mos universitet va yo‘nalishni toping.",
            quizTitle: "Universitet tanlash testi | Bir Kun Talaba",
            quizDescription:
                "Kelajakdagi kasbingizni aniqlash uchun tez va sodda savollarga javob bering.",
            resultsTitle: "Test Natijalari | Bir Kun Talaba",
            resultsDescription:
                "Siz uchun tavsiya etilgan universitetlar. 'Bir Kun Talaba' tajribangizni hoziroq band qiling."
        }
    }
};