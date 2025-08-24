import { BookLock, CircleUserRound, Cross, PersonStanding } from "lucide-react";
import heroImg from '../assets/img3.jpg';

export default function Why() {



  return (
    <div className="bg-white rounded-lg px-2 py-2 lg:px-12 lg:py-18">
      <h1 className="text-4xl lg:text-5xl font-semibold text-center mb-8 mt-12 lg:mt-0">Why Choose Us?</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
        <div className="space-y-4">
            <div className="flex flex-col items-center justify-center space-y-4 p-4">
                <div className="rounded-full size-12 bg-primary flex justify-center items-center text-white">
                  <CircleUserRound />
                </div>
                <h3 className="text-xl font-semibold">Experienced Professionals</h3>
                <p>
                    Our doctors have years of expertise from leading hospitals, ensuring you get top-tier medical care.
                </p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-4 p-4">
                <div className="rounded-full size-12 bg-primary flex justify-center items-center text-white">
                  <Cross /> 
                </div>
                <h3 className="text-xl font-semibold">Care at Your Convenience</h3>
                <p>
                    No waiting rooms or stressful trips — we come to your home or office when it suits you.
                </p>
            </div>
        </div>
        <div className="hidden lg:block">
            <img src={heroImg} alt="Hero Image" className='object-cover rounded-lg shadow-lg h-full' />
        </div>
        <div className="space-y-4">
            <div className="flex flex-col items-center justify-center space-y-4 p-4">
                <div className="rounded-full size-12 bg-primary flex justify-center items-center text-white">
                  <BookLock />
                </div>
                <h3 className="text-xl font-semibold">Complete Privacy & Comfort</h3>
                <p>
                    Receive treatment in a setting where you feel safe, relaxed, and at ease.
                </p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-4 p-4">
                <div className="rounded-full size-12 bg-primary flex justify-center items-center text-white">
                  <PersonStanding />
                </div>
                <h3 className="text-xl font-semibold">Personalized Attention</h3>
                <p>
                    Every consultation is tailored to your needs, with the time and focus you deserve.
                </p>
            </div>
        </div>
      </div>
    </div>
  );
}
