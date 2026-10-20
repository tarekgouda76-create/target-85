خطوات بناء الـ APK (من غير كود)

1) اعمل حساب مجاني على github.com
2) اضغط New repository واكتب أي اسم (مثلا target85) واختار Public ثم Create repository
3) اضغط uploading an existing file وارفع كل محتويات الفولدر ده (www و package.json و capacitor.config.json و فولدر .github)
   لو فولدر .github مش ظاهر عندك: اضغط Add file ثم Create new file، اكتب الاسم: .github/workflows/build-apk.yml
   وانسخ جواه محتوى الملف build-apk.yml، ثم Commit changes
4) ادخل تبويب Actions، استنى حوالي 5 دقايق لحد ما يظهر علامة صح خضرا
5) افتح العملية الأخيرة، ونزّل من Artifacts ملف target85-apk (zip)، فكه، هتلاقي app-debug.apk
6) انقل الـ APK للموبايل وافتحه، وفعّل السماح بالتثبيت من مصدر غير معروف لو طلب منك

ملاحظة: بياناتك داخل التطبيق محفوظة على الموبايل نفسه.
