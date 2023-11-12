import React, { useState, useEffect } from 'react'
import { fetchLastUpdatedTime } from '../apis'

const Footer = () => {
  const [lastUpdatedTime, setLastUpdatedTime] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchLastUpdatedTime() // Gọi hàm lấy thời gian cập nhật bất đồng bộ ở đây
        if (data !== undefined) {
          setLastUpdatedTime(data)
        }
      } catch (error) {
        console.error('Lỗi khi tải dữ liệu:', error)
      }
    }

    fetchData()
  }, []) // Truyền một mảng rỗng để chỉ chạy một lần khi component được tạo

  return (
    <>
      <div className='bg-[#0D0D0D] pt-3 py-1 flex flex-col gap-2 text-base not-italic leading-6 text-[#FFFAF5] font-normal text-center capitalize'>
        <p>
          Thiết kế và phát triển bởi
          <a className='animation-todo-text font-bold' href='http://duogbachdev.me'>
            {' '}
            DuogBachDev
          </a>
        </p>
        <p>Cập nhật lần cuối: {lastUpdatedTime}</p>
        <p>
          copyright &#169; 2023 | All rights reserved
        </p>
      </div>
    </>
  )
}

export default Footer