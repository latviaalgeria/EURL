import React from 'react';

const AboutPage = () => {
  return (
    <div className="p-6" data-aos="fade-up">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-green-700">عن الشركة</h1>
      </header>
      <p className="text-gray-700 max-w-3xl">
        تولي شركة فيتو سايفتي للخدمات والتطوير الفلاحي أهمية بالغة للتكوين المستمر ونقل المعرفة.
        نحن نؤمن بأن الفلاحة الحديثة لا تكتمل إلا بفلاح واعٍ ومُكوَّن، قادر على التعامل مع المستجدات التقنية والعلمية الحديثة.
        يهدف برنامجنا التقني إلى:
        <ul className="list-disc list-inside mt-4">
          <li>رفع الكفاءة المهنية للفلاح الجزائري.</li>
          <li>نقل المعارف العلمية إلى الواقع الميداني عبر شركائنا ومهندسينا.</li>
          <li>مواكبة التطورات العلمية بتحديث محتوى التكوين المستمر.</li>
          <li>تنظيم ورشات ودورات تكوينية حول:
            <ul className="list-disc list-inside ml-6">
              <li>مكافحة الأمراض والآفات.</li>
              <li>تقنيات التسميد والتغذية.</li>
              <li>طرق الري والتسيير الذكي للموارد.</li>
              <li>التعامل الآمن مع المنتجات والمبيدات.</li>
            </ul>
          </li>
        </ul>
      </p>
    </div>
  );
};

export default AboutPage;
