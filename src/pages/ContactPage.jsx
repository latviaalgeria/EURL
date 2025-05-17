import React from 'react';

const ContactPage = () => {
  return (
    <div className="p-6" data-aos="fade-up">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-green-700">اتصل بنا</h1>
      </header>
      <div className="text-gray-700 space-y-4">
        <p><strong>العنوان:</strong> RN 04 ,DHAYA SUD / AIN DEFLA, 'Aïn Defla, Algeria</p>
        <p>
          <strong>الهاتف:</strong>{' '}
          <span dir="ltr" className="inline-block">+213 550 17 25 60</span>
        </p>
        <p>
          <strong>البريد الإلكتروني:</strong>{' '}
          <span dir="ltr" className="inline-block">phyto.safety25@gmail.com</span>
        </p>
      </div>
    </div>
  );
};

export default ContactPage;
