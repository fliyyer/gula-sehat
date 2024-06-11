import React from 'react';
import CardAktivitas from '../components/CardAktivitas';
import Blood from '../assets/blood.png';
import AK1 from '../assets/makanan1.png';
import AK2 from '../assets/makanan2.png';
import AK3 from '../assets/makanan3.png';
import AK4 from '../assets/makanan4.png';
import AK5 from '../assets/makanan5.png';
import AK6 from '../assets/makanan6.png';
import AK7 from '../assets/makanan7.png';
import AK8 from '../assets/makanan8.png';

const Foods = () => {
  return (
    <div className="flex flex-col px-10 w-full">
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <h1 className="text-[32px] font-bold">Dashboard</h1>
          <p className="text-[#a3a3a3] font-medium">
            Hi, Farhan. Welcome back to GulaSehat!
          </p>
        </div>
        <div>
          <div className="flex bg-[#FF5B5B] bg-opacity-25 max-w-[293px] rounded-lg cursor-pointer py-1 px-6 items-center gap-6">
            <img src={Blood} alt="Blood" />
            <p className="text-lg font-bold text-[#DA1515]">Input Gula Darah</p>
          </div>
        </div>
      </div>
      <main className="w-full flex mt-9">
        <div className="grid grid-cols-4  gap-8">
          <CardAktivitas
            img={AK1}
            title="STEAK"
            desc="Kalori: 324 kkal. Protein 24 gram. Jumlah lemak 25 gram. Lemak jenuh 10 gram. Kolesterol 85 miligram. Natrium 57 miligram. Kalium: 331 miligram. Zat besi: 3,1 miligram."
          />
          <CardAktivitas
            img={AK2}
            title="SANDWICH"
            desc="Kalori: 361. Lemak: 16,7. Natrium: 1320 mg. Karbohidrat: 32,5 gr. Serat: 2.3 gr. Gula: 5.13 gr. Protein: 19,3 gr."
          />
          <CardAktivitas
            img={AK3}
            title="SALAD"
            desc="Serat. Vitamin A. Vitamin B1.  Vitamin B5.  Vitamin B6. Vitamin C. Vitamin E. Kalsium."
          />
          <CardAktivitas
            img={AK4}
            title="PIZZA "
            desc="Kalori 275. Karbohidrat: 30-40 gram Protein: 10-15 gram Lemak: 10-15 gram. Serat: 2-3 gram. Vitamin A, C, D, B"
          />
          <CardAktivitas
            img={AK5}
            title="CAKE"
            desc="Kalori: Sekitar 300-400 kalori per potong. Karbohidrat: 40-50 gram Protein: 3-5 gram Lemak: 15-20 gram. Serat: 1-2 gram. Vitamin C. Vitamin E. Kalsium. "
          />
          <CardAktivitas
            img={AK6}
            title="FRIED CHIKEN"
            desc="Kalori: Sekitar 250-300 kalori per potong. Karbohidrat: 8-12 gram (terutama dari tepung yang digunakan untuk membalut ayam) Protein: 20-25 gram Lemak: 15-20 gram."
          />
          <CardAktivitas
            img={AK7}
            title="CHIKEN VEGETABLE SOUP"
            desc="Kalori: 40-60 kalori Karbohidrat: 5-10 gram Protein: 2-5 gram Lemak: 1-3 gram Serat: 1-2 gram Vitamin A: 10-20%. Vitamin C: 5-10%. Vitamin B kompleks."
          />
          <CardAktivitas
            img={AK8}
            title="SPAGHETTI"
            desc="Kalori: 180-220 kalori (tergantung pada jumlah dan jenis daging serta saus yang digunakan) Karbohidrat: 20-25 gram Protein: 8-10 gram Lemak: 8-10 gram Serat: 2-3 gram."
          />
        </div>
      </main>
    </div>
  );
};

export default Foods;
