import React from 'react';
import CardAktivitas from '../components/CardAktivitas';
import Blood from '../assets/blood.png';
import AK1 from '../assets/yoga.png';
import AK2 from '../assets/ak2.png';
import AK3 from '../assets/ak3.png';
import AK4 from '../assets/ak4.png';
import AK5 from '../assets/ak5.png';
import AK6 from '../assets/ak6.png';
import AK7 from '../assets/ak7.png';
import AK8 from '../assets/ak8.png';

const Aktivitas = () => {
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
            title="Yoga"
            desc="Manfaat yoga bisa dirasakan baik secara fisik maupun mental, seperti menjaga kesehatan jantung dan paru-paru, mengatasi stres, depresi, hingga gangguan cemas."
          />
          <CardAktivitas
            img={AK2}
            title="RENANG"
            desc="Manfaat renang dapat membantu menurunkan berat badan dan menyehatkan jantung."
          />
          <CardAktivitas
            img={AK3}
            title="JOGING"
            desc="Joging secara teratur akan membuat tubuh memiliki respons yang lebih baik terhadap penyakit dan gangguan kesehatan."
          />
          <CardAktivitas
            img={AK4}
            title="BULU TANGKIS"
            desc="Joging secara teratur akan membuat tubuh memiliki respons yang lebih baik terhadap penyakit dan gangguan kesehatan."
          />
          <CardAktivitas
            img={AK5}
            title="GYM"
            desc="Manfaat pertama dari fitness yang sangat signifikan adalah peningkatan kesehatan jantung."
          />
          <CardAktivitas
            img={AK6}
            title="GOLF"
            desc="Olahraga ini membantu melatih otot-otot di seluruh tubuh, meningkatkan kekuatan, fleksibilitas, dan keseimbangan."
          />
          <CardAktivitas
            img={AK7}
            title="BOXING"
            desc="Tidak hanya melatih koordinasi tubuh, olahraga tinju juga bermanfaat untuk membantu meningkatkan keseimbangan."
          />
          <CardAktivitas
            img={AK8}
            title="FUTSAL"
            desc="Futsal memiliki sederet manfaat untuk kesehatan tubuh maupun mental."
          />
        </div>
      </main>
    </div>
  );
};

export default Aktivitas;
