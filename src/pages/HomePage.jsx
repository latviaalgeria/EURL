import React from 'react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-green-50 text-gray-800 p-6 font-sans">
      <header
        className="bg-green-700 text-white p-8 rounded-lg shadow-md mb-6 text-center"
        data-aos="fade-down"
      >
        <h1 className="text-4xl font-bold">فيتو سيفتي</h1>
        <p className="mt-2 text-lg">لحماية الزراعة بشكل طبيعي</p>
      </header>

      <main className="text-right">
        <section className="mb-10" data-aos="fade-up" data-aos-delay="100">
          <h2 className="text-2xl font-semibold mb-4 text-green-700">
            مرحبًا بكم في فيتو سيفتي
          </h2>
          <p className="text-gray-700 max-w-3xl leading-relaxed">
            نحن متخصصون في تقديم حلول زراعية صديقة للبيئة، لحماية النباتات وتعزيز الإنتاج الزراعي المستدام. مهمتنا هي مساعدة الفلاحين على زيادة الإنتاج دون التأثير السلبي على البيئة، من خلال الدعم التقني والاستشارات الميدانية.
          </p>
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          <div
            className="border rounded-lg p-6 shadow hover:shadow-lg transition"
            data-aos="fade-right"
          >
            <h3 className="font-bold text-lg text-green-700">حماية النباتات</h3>
            <p className="text-sm text-gray-600 mt-2">
              حلول فعالة وآمنة لحماية محاصيلكم من الأمراض والآفات.
            </p>
          </div>

          <div
            className="border rounded-lg p-6 shadow hover:shadow-lg transition"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <h3 className="font-bold text-lg text-green-700">منتجات صديقة للبيئة</h3>
            <p className="text-sm text-gray-600 mt-2">
              نعتمد على تركيبات طبيعية تحترم التوازن البيئي.
            </p>
          </div>

          <div
            className="border rounded-lg p-6 shadow hover:shadow-lg transition"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <h3 className="font-bold text-lg text-green-700">استشارات تقنية</h3>
            <p className="text-sm text-gray-600 mt-2">
              فريقنا يقدم نصائح وإرشادات مباشرة للفلاحين حسب حاجاتهم.
            </p>
          </div>
        </section>
      </main>

      <footer className="mt-12 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} فيتو سيفتي. جميع الحقوق محفوظة.
      </footer>
    </div>
  );
};

export default HomePage;
