import React from 'react';

const CardAktivitas = (props) => {
  const { img, title, desc } = props;
  return (
    <div className="flex flex-col gap-4 max-w-[500px] bg-[#FFFFFF] rounded-[15px] shadow-lg">
      <img src={img} alt="" className="h-[250px] rounded-t-[15px]" />
      <div className="flex flex-col px-4 mb-7 text-center">
        <h2 className="uppercase text-xl font-bold">{title}</h2>
        <p className="text-[#464255]">{desc}</p>
      </div>
    </div>
  );
};

export default CardAktivitas;
