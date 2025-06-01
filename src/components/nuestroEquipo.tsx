import { Card, CardBody, CardHeader } from "@heroui/card";
import React from "react";
import { Chip } from "@heroui/chip";

export default function NuestroEquipo() {
  const equipos = [
    {
      id: "ezequiel_leiter",
      nombre: "Ezequiel Leiter",
      rol: "Full Stack Developer - DevOps",
    },
    {
      id: "malena_romero",
      nombre: "Malena Romero",
      rol: "Full Stack Developer",
    },
    {
      id: "matias_goffi",
      nombre: "Matias Goffi",
      rol: "Full Stack Developer",
    },
    {
      id: "juan_pablo_palacios",
      nombre: "Juan Pablo Palacios",
      rol: "Comercial - Project Manger",
    },
  ];

  function getRandomNumber(min = 5, max = 80) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <section
      className="relative flex flex-row py-8 md:pt-[150px] md:pb-1 h-600 justify-center overflow-visible bg-[#F6F5F2]"
      id="equipo"
    >
      <svg
        className="absolute top-0"
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,160L48,165.3C96,171,192,181,288,165.3C384,149,480,107,576,74.7C672,43,768,21,864,37.3C960,53,1056,107,1152,117.3C1248,128,1344,96,1392,80L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          fill="#222737"
          fillOpacity="1"
        />
      </svg>
      <div className="flex flex-col justify-center pr-10">
        <Chip
          className="font-bold text-[16px] mb-5 rounded-[8px]"
          color="warning"
          variant="bordered"
        >
          Nuestro equipo
        </Chip>
        <div className="flex flex-col md:flex-row justify-center items-center">
          {equipos.map((equipo) => (
            <Card key={equipo.id} className="py-4 bg-[#F6F5F2] mx-2">
              <CardBody className="overflow-visible py-2">
                <img
                  alt="Card background"
                  className="object-cover rounded-xl"
                  height={200}
                  src={`https://avatar.iran.liara.run/public/${getRandomNumber(5, 80)}`}
                  width={270}
                />
              </CardBody>
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="font-bold text-[20px] text-[#4877D6]">
                  {equipo.nombre}
                </p>
                <h4 className="text-[16px] text-[#919191]">{equipo.rol}</h4>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
