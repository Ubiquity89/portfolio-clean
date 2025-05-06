import Image from "next/image";

const Avatar = ({ size = 200 }) => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image
        src="/image_copy_14-removebg-preview.png"
        width={size}
        height={size} // Assuming you want the avatar to be square
        alt="Avatar Image"
        className="translate-z-0 w-full h-full"
      />
    </div>
  );
};

export default Avatar;
