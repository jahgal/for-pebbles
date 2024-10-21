import Card from "@components/photo/Card";

export default function Page() {
  const photos = Array.from({ length: 6 }, (_, i) => i + 1);

  return (
    <section className="grid grid-cols-[200px_200px_200px] gap-4 justify-center items-center p-4">
      {photos.map((id) => (
        <Card key={id} id={id} />
      ))}
    </section>
  );
}
