import React from 'react';
import Card from './Card';
import './index.css';
// Dữ liệu giả lập cho danh sách người giúp việc

const workers = [
  {
    id: 1,
    name: 'Nguyễn Thị A',
    image: 'https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-6/470130996_8872883332828499_8218873479451668230_n.jpg?stp=cp6_dst-jpg_p526x296_tt6&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=djtLSw4EpagQ7kNvgE-grXL&_nc_zt=23&_nc_ht=scontent.fhan15-1.fna&_nc_gid=Apm_gsnwilzIaBHI1I2ek8f&oh=00_AYDiCT4tWdDzAVmU8czN9n8ltBf4xoxeuAWiaOBTR_4Y4w&oe=676B676C',
    rating: 4.8,
    location: 'Hà Nội',
    phone: "0867676305",
  },
  {
    id: 2,
    name: 'Trần Văn B',
    image: 'https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-6/470197322_457266117411101_198880084894841397_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=1&ccb=1-7&_nc_sid=127cfc&_nc_ohc=TWs5M1lVxGwQ7kNvgFmsJv8&_nc_zt=23&_nc_ht=scontent.fhan15-1.fna&_nc_gid=AT7z7ew1CaE4hf6WRT4GNIW&oh=00_AYA2ajcrDheg1HbOYdmabweCi3VsqnETJGaVIcINAv2jqQ&oe=676B73D2',
    rating: 4.5,
    location: 'TP.HCM',
    phone: "0867676305",
  },
  {
    id: 3,
    name: 'Phạm Thị C',
    image: 'https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-6/470678626_457266247411088_964370106072951472_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=1&ccb=1-7&_nc_sid=127cfc&_nc_ohc=zt1yMKif-iwQ7kNvgE3TI_M&_nc_zt=23&_nc_ht=scontent.fhan15-1.fna&_nc_gid=AT7z7ew1CaE4hf6WRT4GNIW&oh=00_AYADRuxVDRvG8-epxgYAbcJj6KKt_NvwDyK2HFjjCi4suA&oe=676B8725',
    rating: 4.9,
    location: 'Đà Nẵng',
    phone: "0867676305",
  },
];
const WorkerLish = () => {
  return (
    <div className="container mx-auto">
    <h2 className="text-2xl font-semibold text-center mb-6">Người giúp việc nổi bật</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {workers.map((worker) => (
        <Card key={worker.id} worker={worker} />
      ))}
    </div>
  </div>
  );
};

export default WorkerLish;
