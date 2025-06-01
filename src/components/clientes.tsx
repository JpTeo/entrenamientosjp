import CardSlider from "./card-slider";

export default function Clientes() {
  const clients = {
    title: "Nuestros clientes",
  };

  return (
    <>
      <div
        className="flex flex-row justify-center pb-[100px] pt-[150px]"
        id="clientes"
        style={{ color: "#4877D6" }}
      >
        <span className="text-4xl font-bold text-center">{clients.title}</span>
      </div>
      <section
        className="flex flex-row py-8 md:pt-20 md:pb-20 h-600 justify-center overflow-visible"
        style={{ backgroundColor: "#F6F5F2", marginBottom: "10vw" }}
      >
        <CardSlider />
      </section>
    </>
  );
}
