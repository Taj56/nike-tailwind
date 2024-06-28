import { offer } from "../assets/images";
import Buttton from "../components/Button";
import { arrowRight } from "../assets/icons";

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse ga-10 max-container">
      <div className="flex-1 ">
          <img src={offer} alt="" width={773} height={687} className="object-contain w-full mt-2
          "/>
      </div>
      <div className="flex flex-1 flex-col">

        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">

          <span className="text-coral-red"> Special </span> Offers

        </h2>

        <p className="mt-4 lg:max-w-lg info-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa vero ducimus non rem exercitationem enim deleniti error qui quod, aperiam incidunt sapiente id mollitia molestias.</p>

          <p className="mt-6 lg:max-w-lg info-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ad nemo dignissimos alias doloribus repudiandae repellat accusamus nisi, molestias sed!
          </p>

        <div className="mt-11 flex flex-wrap gap-4">
          <Buttton label="Shop Now" iconUrl={arrowRight}/>
          <Buttton label="Learn More" backgroundColor="bg-white" borderColor="border-slate-gray" textColor="text-slate-gray"/>
        </div>

      </div>
    </section>
  )
}

export default SpecialOffer;