import clientsLogo from "@/assets/clients-logo";
import React from "react";
import ClientLogoCard from "../cards/ClientLogoCard";

const {
  clientLogo1,
  clientLogo2,
  clientLogo3,
  clientLogo4,
  clientLogo5,
  clientLogo6,
  clientLogo7,
  clientLogo8,
  clientLogo9,
  clientLogo10,
  clientLogo11,
  clientLogo12,
  clientLogo13,
  clientLogo14,
  clientLogo15,
  clientLogo16,
  clientLogo17,
} = clientsLogo;

const CLIENT_LOGOS = [
  { id: 1, image: clientLogo1.src },
  { id: 2, image: clientLogo2.src },
  { id: 3, image: clientLogo3.src },
  { id: 4, image: clientLogo4.src },
  { id: 5, image: clientLogo5.src },
  { id: 6, image: clientLogo6.src },
  { id: 7, image: clientLogo7.src },
  { id: 8, image: clientLogo8.src },
  { id: 9, image: clientLogo9.src },
  { id: 10, image: clientLogo10.src },
  { id: 11, image: clientLogo11.src },
  { id: 12, image: clientLogo12.src },
  { id: 13, image: clientLogo13.src },
  { id: 14, image: clientLogo14.src },
  { id: 15, image: clientLogo15.src },
  { id: 16, image: clientLogo16.src },
  { id: 17, image: clientLogo17.src },
];

const BelovedClients = () => {
  return (
    <div className="py-10 max-w-[470px] mx-auto">
      <h6 className="font-bold text-xl [@media(min-width:400px)]:text-2xl text-center mb-8">
        Some Of Our <br />
        <b className="text-primary uppercase">Beloved</b> Clients
      </h6>

      <div
        className="
          grid 
          grid-cols-1 
          [@media(min-width:400px)]:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4 
          gap-5
        "
      >
        {CLIENT_LOGOS.map((logo) => (
          <ClientLogoCard
            key={logo.id}
            image={logo.image}
            name={`Client ${logo.id}`}
          />
        ))}
      </div>
    </div>
  );
};

export default BelovedClients;
