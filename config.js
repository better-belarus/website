/* Логіка сайта (script.js)
   Тут знаходзяцца пераклады, ініцыялізацыя іконак і пераключэнне тэм.
*/

// Initialize Icons
// Lucide is loaded globally via CDN in index.html
document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
});

// --- Translations ---
const translations = {
    'cyr': {
        'hero_title_1': 'Тэлеграм па-беларуску.',
        'hero_title_2': 'Клясычным правапісам.',
        'hero_desc': 'Далучайцеся да стварэньня і тэставаньня лякалізацыі Better Belarusian. Зробім наш улюбёны мэсэнджар родным разам.',
        'btn_install': 'Усталяваць мову',
        'btn_help': 'Дапамагчы перакладу',
        'stats_title': 'Статус перакладу',
        'label_platform': 'Плятформа',
        'label_lang_name': 'Назва лякалізацыі',
        'status_process': 'У працэсе',
        'label_done': 'Гатова',
        'count_phrases': '93 фраз',
        'count_total': 'з 10 207',
        'progress_desc': 'Гэта толькі пачатак вялікага шляху. Дапамажыце нам перакласьці астатнія 10 тысяч радкоў, каб кожны беларус мог карыстацца зручным інтэрфэйсам.',
        'status_soon': 'Хутка',
        'status_later': 'Пазьней',
        'vocab_title': 'Жывая мова',
        'vocab_subtitle': 'Мы спрашчаем грувасткія канструкцыі і дадаем інтэрфэйсу беларускага калярыту.',
        'cat_text': 'Тэкст',
        'word_msg_old': 'Паведамленьні',
        'word_msg_new': 'Паведы',
        'word_msg_desc': 'Каротка, трапна і без лішніх складоў.',
        'cat_video': 'Відэа',
        'word_video_old': 'Відэапаведамленьне',
        'word_video_new': 'Калабок',
        'word_video_desc': 'Круглае відэа? Значыць, гэта калабок!',
        'cat_audio': 'Гук',
        'word_audio_old': 'Галасавое паведамленьне',
        'word_audio_new': 'Галасок',
        'word_audio_desc': 'Мілагучнае слова для вашага голасу.',
        'vocab_more': '...і многае іншае, што робіць карыстаньне праграмай прыемнейшым.',
        'feat_classic_title': 'Клясычны правапіс',
        'feat_classic_desc': 'Мы прытрымліваемся граматыкі Браніслава Тарашкевіца, каб захаваць аўтэнтычнасьць мовы.',
        'feat_open_title': 'Адкрыты код',
        'feat_open_desc': 'Плятформа перакладаў адкрытая для кожнага. Вы можаце прапаноўваць свае варыянты.',
        'feat_adapt_title': 'Адаптыўнасьць',
        'feat_adapt_desc': 'Наш сайт і пераклад выглядаюць ідэальна як у сьветлай, так і ў цёмнай тэме.',
        'cta_title': 'Шукаем аднадумцаў!',
        'cta_desc': 'Мы актыўна набіраем каманду для паскарэньня перакладу. Калі вы добра валодаеце мовай, умееце рэдагаваць або проста хочаце дапамагчы тэставаньнем — далучайцеся да нас!',
        'cta_btn': 'Запоўніць анкету',
        'cta_note': 'Гэта зойме ня больш за 2 хвіліны',
        'footer_note': 'Неафіцыйны праект.',
        'footer_channel': 'Telegram-канал',
        'footer_support': 'Падтрымаць'
    },
    'lat': {
        'hero_title_1': 'Telehram pa-biełarusku.',
        'hero_title_2': 'Klasyčnym pravapisam.',
        'hero_desc': 'Dałučajciesia da stvareńnia i testavańnia lakalizacyi Better Belarusian. Zrobim naš uliubiony mesendžar rodnym razam.',
        'btn_install': 'Ustaliavać movu',
        'btn_help': 'Dapamahčy pierakładu',
        'stats_title': 'Status pierakładu',
        'label_platform': 'Pliatforma',
        'label_lang_name': 'Nazva lakalizacyi',
        'status_process': 'U pracesie',
        'label_done': 'Hatova',
        'count_phrases': '93 fraz',
        'count_total': 'z 10 207',
        'progress_desc': 'Heta tolki pačatak vialikaha šlachu. Dapamažycie nam pierakłaści astatnija 10 tysiač radkoŭ, kab kožny biełarus moh karystacca zručnym interfejsam.',
        'status_soon': 'Chutka',
        'status_later': 'Paźniej',
        'vocab_title': 'Žyvaja mova',
        'vocab_subtitle': 'My spraščajem hruvastkija kanstrukcyi i dadajem interfejsu biełaruskaha kalarytu.',
        'cat_text': 'Tekst',
        'word_msg_old': 'Paviedamleńni',
        'word_msg_new': 'Paviedy',
        'word_msg_desc': 'Karotka, trapna i biez lišnich składoŭ.',
        'cat_video': 'Videa',
        'word_video_old': 'Videapaviedamleńnie',
        'word_video_new': 'Kałabok',
        'word_video_desc': 'Kruhłaje videa? Značyć, heta kałabok!',
        'cat_audio': 'Huk',
        'word_audio_old': 'Hałasavoje paviedamleńnie',
        'word_audio_new': 'Hałasok',
        'word_audio_desc': 'Miłahučnaje słova dla vašaha hołasu.',
        'vocab_more': '...i mnohaje inšaje, što robić karystańnie prahramaj pryjemniejšym.',
        'feat_classic_title': 'Klasyčny pravapis',
        'feat_classic_desc': 'My prytrymlivajemsia hramatyki Branisłava Taraškievica, kab zachavać aŭtentyčnaść movy.',
        'feat_open_title': 'Adkryty kod',
        'feat_open_desc': 'Pliatforma pierakładaŭ adkrytaja dla kožnaha. Vy možacie prapanoŭvać svaje varyjanty.',
        'feat_adapt_title': 'Adaptyŭnaść',
        'feat_adapt_desc': 'Naš sajt i pierakład vyhladajuć ideaльна jak u śvietłaj, tak i ŭ ciomnaj temie.',
        'cta_title': 'Šukajem adnadumcaŭ!',
        'cta_desc': 'My aktyŭna nabirajem kamandu dla paskareńnia pierakładu. Kali vy dobra vałodajecie movaj, umiejecie redahavać abo prosta chočacie dapamahčy testavańniem — dałučajciesia da nas!',
        'cta_btn': 'Zapoŭnić ankietu',
        'cta_note': 'Heta zojmie nia bolš za 2 chviliny',
        'footer_note': 'Neaficyjny prajekt.',
        'footer_channel': 'Telegram-kanał',
        'footer_support': 'Padtrymać'
    }
};

function setLanguage(lang) {
    const elements = document.querySelectorAll('[data-key]');
    
    elements.forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    // Update UI buttons
    const btnCyr = document.getElementById('btn-cyr');
    const btnLat = document.getElementById('btn-lat');
    
    if (lang === 'cyr') {
        btnCyr.classList.add('bg-white', 'dark:bg-tg-cardDark', 'shadow-sm', 'text-tg-text', 'dark:text-white');
        btnCyr.classList.remove('text-tg-hint', 'dark:text-tg-hintDark');
        btnLat.classList.remove('bg-white', 'dark:bg-tg-cardDark', 'shadow-sm', 'text-tg-text', 'dark:text-white');
        btnLat.classList.add('text-tg-hint', 'dark:text-tg-hintDark');
    } else {
        btnLat.classList.add('bg-white', 'dark:bg-tg-cardDark', 'shadow-sm', 'text-tg-text', 'dark:text-white');
        btnLat.classList.remove('text-tg-hint', 'dark:text-tg-hintDark');
        btnCyr.classList.remove('bg-white', 'dark:bg-tg-cardDark', 'shadow-sm', 'text-tg-text', 'dark:text-white');
        btnCyr.classList.add('text-tg-hint', 'dark:text-tg-hintDark');
    }

    localStorage.setItem('lang', lang);
}

// --- Theme Logic ---
const themeToggleBtn = document.getElementById('theme-toggle');
const html = document.documentElement;

function updateTheme(isDark) {
    if (isDark) {
        html.classList.add('dark');
        localStorage.theme = 'dark';
    } else {
        html.classList.remove('dark');
        localStorage.theme = 'light';
    }
}

if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        const isDark = !html.classList.contains('dark');
        updateTheme(isDark);
    });
}

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    // Init Theme
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        updateTheme(true);
    } else {
        updateTheme(false);
    }

    // Init Language
    const savedLang = localStorage.getItem('lang') || 'cyr';
    setLanguage(savedLang);
});