// Russian section: mark the document language for browsers and screen readers.
export default function RuLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: "document.documentElement.lang='ru'" }} />
      {children}
    </>
  );
}
