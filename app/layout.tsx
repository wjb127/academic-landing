import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "부산 디지털금융·블록체인 아카데미 제1기",
  description: "부산일보·비온미디어·쟁글이 함께하는 디지털금융·블록체인 전문가 양성 프로그램",
  keywords: "부산, 디지털금융, 블록체인, 아카데미, CEO과정, 임원교육",
  openGraph: {
    title: "부산 디지털금융·블록체인 아카데미 제1기",
    description: "글로벌 금융 중심지 부산의 디지털 전환을 이끌 리더 양성 프로그램",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}