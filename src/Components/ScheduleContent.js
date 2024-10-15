import React from 'react';
import { useLocation } from 'react-router-dom';
import DataTable from 'react-data-table-component';
import '../assets/Css/Schedule.css';


function ScheduleContent() {
  const location = useLocation();
  const { filteredHotels } = location.state;

  const columns = [
    {
      name: 'Tên Khách Sạn',
      selector: row => row.name,
      sortable: true,
    },
    {
      name: 'Thành Phố',
      selector: row => row.city,
      sortable: true,
    },
    {
      name: 'Số Đêm',
      selector: row => row.nights,
      sortable: true,
    },
    {
      name: 'Giá Mỗi Đêm ($)',
      selector: row => row.pricePerNight,
      sortable: true,
    },
    {
      name: 'Xếp Hạng',
      selector: row => row.rating,
      sortable: true,
    }
  ];
  return (
  <div className="Schedule">
    <h2>Kết quả tìm kiếm</h2>
    <DataTable
      columns={columns}
      data={filteredHotels}
      pagination
      highlightOnHover
    />
  </div>
  )
}

export default ScheduleContent