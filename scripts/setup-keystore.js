// يستخدم مفتاح التوقيع الثابت (debug.keystore) على GitHub Actions فقط،
// عشان كل نسخة جديدة من التطبيق تتثبت فوق القديمة من غير ما بياناتك تتمسح.
const fs = require('fs'), os = require('os'), path = require('path');
if (process.env.CI === 'true') {
  try {
    const dir = path.join(os.homedir(), '.android');
    fs.mkdirSync(dir, { recursive: true });
    fs.copyFileSync(path.join(__dirname, '..', 'debug.keystore'), path.join(dir, 'debug.keystore'));
    console.log('fixed signing key installed');
  } catch (e) { console.log('signing key step skipped:', e.message); }
}
