import { Mail, MapPin, Phone } from "lucide-react";

export const Informations = () => {
  return (
    <section className="section pb-28">
      <div>
        <div className="max-w-3xl mx-auto mb-14 yl:text-center">
          <p className="label">Contact</p>
          <h2 className="headline mt-1">Nossas informações</h2>
        </div>
        <ul className="flex flex-col gap-10 dy:gap-7 dy:items-center dy:flex-row justify-around mb-12">
          <li className="flex gap-7 items-center flex-wrap">
            <div className="bg-shark-100 rounded-2xl shadow-lg drop-shadow-md h-16 w-16">
              <Mail className="text-silverTree-500 h-7 w-7 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2" />
            </div>
            <p className="body">info@gmail.com</p>
          </li>
          <li className="flex gap-7 items-center flex-wrap">
            <div className="bg-shark-100 rounded-2xl shadow-lg drop-shadow-md h-16 w-16">
              <Phone className="text-silverTree-500 h-7 w-7 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2" />
            </div>
            <p className="body">info@gmail.com</p>
          </li>
          <li className="flex gap-7 items-center flex-wrap">
            <div className="bg-shark-100 rounded-2xl shadow-lg drop-shadow-md h-16 w-16">
              <MapPin className="text-silverTree-500 h-7 w-7 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2" />
            </div>
            <p className="body">info@gmail.com</p>
          </li>
        </ul>
        <div className="max-w-full h-[36rem] bg-shark-300 rounded-3xl shadow-lg drop-shadow-md mx-auto"></div>
      </div>
    </section>
  );
};
