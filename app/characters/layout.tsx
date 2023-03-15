export default function CharactersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      Characters - here
      <nav></nav>
      {children}
    </section>
  );
}
