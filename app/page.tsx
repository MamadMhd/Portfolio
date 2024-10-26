import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row-reverse w-full h-full justify-between select-none">
      <div className="basis-1/3 flex flex-col justify-center w-full">
        <Image
          src="/profile.png"
          className="rounded-full border-4 border-gray-500/30 mx-auto"
          height={300}
          width={300}
          alt="Profile photo"
        />
      </div>
      <div className="basis-2/3 w-full">
        <div className="flex w-full justify-between px-1 my-10">
          <h1 className="font-vazirmatn text-3xl text-white font-black drop-shadow-xl -z-10">
            محمد مهدی
          </h1>
          <h1 className="text-white text-left text-3xl font-black drop-shadow-xl -z-10">Mohammad Mahdi</h1>
        </div>
        <p className="text-right text-white font-vazirmatn text-xl my-10 leading-loose">
          برنامه‌نویس فرانت‌اند با بیش از 2 سال تجربه در توسعه و طراحی
          وب‌سایت‌های حرفه‌ای با استفاده از HTML، CSS، JavaScript و فریمورک های
          React و Next. علاقمند به یادگیری فناوری‌های جدید و بهبود رابط کاربری
          با طراحی‌های زیبا و کاربردی. دارای توانایی کار تیمی و حل مسائل به شکل
          خلاقانه.
        </p>
        <div className="flex flex-col gap-6 text-white px-2 my-10">
          <p className="text-2xl font-vazirmatn font-bold">مهارت ها: </p>
          <div className="flex flex-wrap gap-4">
            <span className="border rounded-lg py-1 px-3 bg-gray-500/30">
              HTML
            </span>
            <span className="border rounded-lg py-1 px-3 bg-gray-500/30">
              Css
            </span>
            <span className="border rounded-lg py-1 px-3 bg-gray-500/30">
              JavaScript
            </span>
            <span className="border rounded-lg py-1 px-3 bg-gray-500/30">
              React
            </span>
            <span className="border rounded-lg py-1 px-3 bg-gray-500/30">
              Next
            </span>
            <span className="border rounded-lg py-1 px-3 bg-gray-500/30">
              Tailwind
            </span>
            <span className="border rounded-lg py-1 px-3 bg-gray-500/30">
              Sass
            </span>
            <span className="border rounded-lg py-1 px-3 bg-gray-500/30">
              Bootstrap
            </span>
            <span className="border rounded-lg py-1 px-3 bg-gray-500/30">
              Redux
            </span>
            <span className="border rounded-lg py-1 px-3 bg-gray-500/30">
              TypeScript
            </span>
            <span className="border rounded-lg py-1 px-3 bg-gray-500/30">
              Leaflet
            </span>
            <span className="border rounded-lg py-1 px-3 bg-gray-500/30">
              Git
            </span>
            <span className="border rounded-lg py-1 px-3 bg-gray-500/30">
              GitFlow
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-6 text-white px-w">
          <p className="text-2xl font-bold font-vazirmatn">سوابق تحصیلی :</p>
          <div className="flex flex-col font-vazirmatn border-r-4 px-2">
              <p className="text-lg">مهندسی کامپیوتر | نرم افزار</p>
              <p className="text-lg">دانشگاه هرمزگان</p>
              <p className="text-lg">1398 - 1403</p>
          </div>
        </div>
      </div>
    </div>
  );
}
