import Container from "@/components/Container";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gray-900 min-h-screen flex items-center">
      <Container>
        <div className="text-right rtl py-20">
          <h1 className="text-4xl font-bold text-white mb-4">
            به فروشگاه ما خوش آمدید
          </h1>
          <p className="text-gray-300 mb-8 text-lg max-w-xl leading-relaxed">
            جدیدترین محصولات دیجیتال و گجت‌های خاص را اینجا پیدا کنید.  
            قیمت‌های مناسب، ارسال سریع و تجربه خرید هوشمندانه در انتظار شماست.
          </p>

          <Link
            href="/store"
            className="inline-block bg-sky-500 text-white px-6 py-3 rounded-xl hover:bg-sky-600 transition-colors duration-300"
          >
            مشاهده فروشگاه
          </Link>
        </div>
      </Container>
    </div>
  );
}
