export default function NotFound() {
  return (
    <main style={{ minHeight: '70vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16, fontFamily: "'Manrope', 'Noto Sans Armenian', sans-serif", color: '#0B2236', padding: 24, textAlign: 'center' }}>
      <div style={{ fontSize: 72, fontWeight: 800 }}>404</div>
      <div style={{ fontSize: 20 }}>Էջը չի գտնվել · Страница не найдена</div>
      <a href="/" style={{ background: '#F28A2E', color: '#0B2236', padding: '14px 26px', borderRadius: 999, fontWeight: 800, textDecoration: 'none' }}>Գլխավոր էջ</a>
      <a href="/ru/" style={{ color: '#0A6FB0', fontWeight: 700 }}>На главную (RU)</a>
    </main>
  );
}
