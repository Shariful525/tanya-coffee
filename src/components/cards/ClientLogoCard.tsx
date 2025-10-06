import Image from "next/image";

const ClientLogoCard = ({ image, name }: { image: string; name: string }) => {
  return (
    <div
      className="
      flex items-center justify-center 
      rounded-xl 
      border border-black-10
      hover:shadow-md 
      transition-shadow 
      duration-300 
      p-2
    "
    >
      <Image
        src={image}
        alt={"Beloved Clients Logo"}
        width={160}
        height={80}
        className="object-contain min-h-16 max-h-20 w-auto"
      />
    </div>
  );
};

export default ClientLogoCard;
