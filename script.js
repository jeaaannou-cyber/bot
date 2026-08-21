// Replace these values with the agency's real contact destinations.
const CONTACT_LINKS = {
  whatsapp: 'https://wa.me/+9647707001912',
  discord: 'https://discord.gg/KbRtWqx6c',
  telegram: 'https://t.me/+K444U2GuuoRjN2Iy'
};

const translations = {
  en: {
    pageTitle: 'LV — Digital systems, built sharp',
    navServices: 'Services', navWork: 'Work', navApproach: 'Approach', navContact: 'Start a project', langLabel: 'AR',
    eyebrow: 'Independent digital studio · 2024—now', heroTitle: 'Make your|digital move.', heroLead: 'We design and build bots, websites, and digital systems that feel as good as they perform.', explore: 'Explore services', orderNow: 'Order now', signal: 'Signal found', signalNote: 'Turning rough|ideas into real things.', marquee: 'Discord bots|✳|Telegram systems|✳|Web experiences|✳',
    servicesEyebrow: '01 / What we do', servicesTitle: 'Small team.|Serious output.', servicesLead: 'One focused partner for the digital layer of your business.', workEyebrow: '02 / Selected work', workTitle: 'Built for|the real world.', workHint: 'Scroll to explore ↗', approachEyebrow: '03 / Why LV', approachTitle: 'No fluff.|Just momentum.', contactEyebrow: '04 / Let’s talk', contactTitle: 'Have a|good idea?', contactLead: 'Tell us what you’re building. We’ll tell you how we can make it sharper.',
    discordTitle: 'Discord|bots', discordText: 'Custom communities with moderation, economy, tickets and more.', telegramTitle: 'Telegram|systems', telegramText: 'Automation, APIs, interactive buttons and storefronts that convert.', webTitle: 'Web design|& dev', webText: 'Landing pages, portfolios and custom web apps with a point of view.', otherTitle: 'Other digital|services', otherText: 'Hosting, configuration, integrations and the helpful stuff in between.', from120: 'From $5', from150: 'From $5', from300: 'From $5', letsTalk: 'Let’s talk',
    arcadeType: 'Bot ecosystem / 2024', arcadeTitle: 'Arcade Club', nocturneType: 'Web platform / 2023', nocturneTitle: 'Nocturne FM', reliable: 'Reliable by design', reliableText: 'Solid foundations, clean handoffs and systems that keep their promises.', fast: 'Fast, not rushed', fastText: 'Clear scope and tight communication keep good work moving.', support: 'Always in your corner', supportText: 'Questions at 2AM? We offer ongoing support when it matters.',
    nameLabel: 'Your name', emailLabel: 'Email address', briefLabel: 'A little about the project', namePlaceholder: 'Jane Doe', emailPlaceholder: 'jane@company.com', briefPlaceholder: 'What are we making?', send: 'Send enquiry', formSuccess: 'Thanks. We will be in touch shortly.', footer: '© 2024 LV Studio. Made with intent.',
    modalTitle: 'Order service', modalLead: 'Choose the channel that works best. We usually reply within a few hours.', whatsapp: 'WhatsApp', discord: 'Discord', telegram: 'Telegram', close: 'Close'
  },
  ar: {
    pageTitle: 'LV — أنظمة رقمية مصممة بدقة', navServices: 'الخدمات', navWork: 'أعمالنا', navApproach: 'منهجيتنا', navContact: 'ابدأ مشروعك', langLabel: 'EN',
    eyebrow: 'استوديو رقمي مستقل · 2024—الآن', heroTitle: 'حرّك|حضورك الرقمي.', heroLead: 'نصمم ونطوّر البوتات والمواقع والأنظمة الرقمية التي تجمع بين الجمال والأداء.', explore: 'استكشف الخدمات', orderNow: 'اطلب الآن', signal: 'الإشارة متصلة', signalNote: 'نحوّل الأفكار|البسيطة إلى واقع.', marquee: 'بوتات ديسكورد|✳|أنظمة تيليجرام|✳|تجارب ويب|✳',
    servicesEyebrow: '01 / ماذا نقدم', servicesTitle: 'فريق صغير.|نتائج كبيرة.', servicesLead: 'شريك واحد يعتني بالطبقة الرقمية من مشروعك.', workEyebrow: '02 / أعمال مختارة', workTitle: 'مصممة|للعالم الحقيقي.', workHint: 'استكشف أعمالنا ↗', approachEyebrow: '03 / لماذا LV', approachTitle: 'بلا تعقيد.|فقط تقدّم.', contactEyebrow: '04 / لنتحدث', contactTitle: 'لديك|فكرة جيدة؟', contactLead: 'أخبرنا بما تبنيه، وسنخبرك كيف نجعلها أكثر تميزاً.',
    discordTitle: 'بوتات|ديسكورد', discordText: 'مجتمعات مخصصة مع أدوات الإشراف والاقتصاد والتذاكر والمزيد.', telegramTitle: 'أنظمة|تيليجرام', telegramText: 'أتمتة وواجهات API وأزرار تفاعلية ومتاجر تحقق النتائج.', webTitle: 'تصميم وتطوير|المواقع', webText: 'صفحات هبوط ومواقع شخصية وتطبيقات ويب برؤية واضحة.', otherTitle: 'خدمات رقمية|أخرى', otherText: 'إعداد الاستضافة والتهيئة والربط بين الأنظمة.', from120: 'ابتداءً من $5', from150: 'ابتداءً من $5', from300: 'ابتداءً من $5', letsTalk: 'لنتحدث',
    arcadeType: 'منظومة بوتات / 2024', arcadeTitle: 'Arcade Club', nocturneType: 'منصة ويب / 2023', nocturneTitle: 'Nocturne FM', reliable: 'موثوقية من البداية', reliableText: 'أساس متين وتسليم واضح وأنظمة تفي بوعودها.', fast: 'سرعة بلا استعجال', fastText: 'نطاق واضح وتواصل مستمر يحافظان على تقدم المشروع.', support: 'دعم دائم', supportText: 'نجيب عن أسئلتك ونبقى بجانبك عندما تحتاجنا.',
    nameLabel: 'الاسم', emailLabel: 'البريد الإلكتروني', briefLabel: 'حدثنا عن مشروعك', namePlaceholder: 'محمد أحمد', emailPlaceholder: 'name@company.com', briefPlaceholder: 'ماذا سنبني؟', send: 'إرسال الطلب', formSuccess: 'شكراً. سنتواصل معك قريباً.', footer: '© 2024 LV Studio. صُنع بعناية.',
    modalTitle: 'اطلب الخدمة', modalLead: 'اختر القناة المناسبة لك. نرد عادةً خلال ساعات قليلة.', whatsapp: 'واتساب', discord: 'ديسكورد', telegram: 'تيليجرام', close: 'إغلاق'
  }
};

let currentLanguage = localStorage.getItem('lv-language') || 'en';
let selectedService = '';
const byId = id => document.getElementById(id);
const translate = key => translations[currentLanguage][key] || key;
const lines = value => value.split('|').join('<br>');

function applyLanguage(language) {
  currentLanguage = language;
  localStorage.setItem('lv-language', language);
  document.documentElement.lang = language;
  document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  document.title = translate('pageTitle');
  document.querySelectorAll('[data-i18n]').forEach(element => { element.innerHTML = lines(translate(element.dataset.i18n)); });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(element => { element.placeholder = translate(element.dataset.i18nPlaceholder); });
  byId('language-toggle').textContent = translate('langLabel');
  byId('menu-toggle').setAttribute('aria-label', currentLanguage === 'ar' ? 'فتح القائمة' : 'Open navigation');
  byId('modal-close').setAttribute('aria-label', translate('close'));
}

function openOrderModal(serviceKey) {
  selectedService = translate(serviceKey).replaceAll('|', ' ');
  byId('modal-service').textContent = selectedService;
  byId('order-modal').classList.add('open');
  byId('order-modal').setAttribute('aria-hidden', 'false');
  byId('modal-close').focus();
}
function closeOrderModal() { byId('order-modal').classList.remove('open'); byId('order-modal').setAttribute('aria-hidden', 'true'); }

byId('language-toggle').addEventListener('click', () => applyLanguage(currentLanguage === 'en' ? 'ar' : 'en'));
byId('menu-toggle').addEventListener('click', () => { byId('mobile-menu').classList.toggle('open'); });
document.querySelectorAll('.mobile-menu a').forEach(link => link.addEventListener('click', () => byId('mobile-menu').classList.remove('open')));
document.querySelectorAll('[data-order]').forEach(button => button.addEventListener('click', () => openOrderModal(button.dataset.order)));
byId('modal-close').addEventListener('click', closeOrderModal);
byId('order-modal').addEventListener('click', event => { if (event.target === byId('order-modal')) closeOrderModal(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeOrderModal(); });
byId('contact-form').addEventListener('submit', event => { event.preventDefault(); byId('form-status').textContent = translate('formSuccess'); byId('form-status').hidden = false; event.target.reset(); });

byId('whatsapp-link').href = CONTACT_LINKS.whatsapp;
byId('discord-link').href = CONTACT_LINKS.discord;
byId('telegram-link').href = CONTACT_LINKS.telegram;
const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); }), { threshold: .12 });
document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
applyLanguage(currentLanguage);
