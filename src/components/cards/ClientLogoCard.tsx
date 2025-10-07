import Image from "next/image";

const ClientLogoCard = ({ image, name }: { image: string; name: string }) => {
  return (
    <div
      className="
      flex items-center justify-center 
      rounded-xl 
      border border-black-10
      p-5
    "
    >
      <Image
        src={image}
        alt={"Beloved Clients Logo"}
        width={150}
        height={80}
        layout="responsive"
        className="object-contain min-h-8 max-h-[44px] w-auto"
      />
    </div>
  );
};

export default ClientLogoCard;
