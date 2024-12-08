import React from 'react'

const AboutAchievement = () => {
  return (
    <div className='flex items-center justify-around bg-white p-5 rounded-lg mt-10 max-sm:flex-col max-sm:gap-y-5 shadow-md'>
      <div className='flex flex-col items-center gap-3'>
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="40" viewBox="0 0 50 40" fill="none">
                <path d="M9.28125 0.933333C9.57465 0.640626 9.93887 0.405629 10.3489 0.24451C10.7588 0.0833909 11.2049 -2.53351e-05 11.6562 5.77196e-09H38.3438C38.7951 -2.53351e-05 39.2412 0.0833909 39.6511 0.24451C40.0611 0.405629 40.4254 0.640626 40.7188 0.933333L48.8719 9.05067C49.5998 9.77555 50 10.6987 50 11.6533V12.3333C50.0002 13.6533 49.5171 14.9403 48.6182 16.0145C47.7193 17.0886 46.4496 17.8963 44.9865 18.3247C43.5234 18.753 41.94 18.7805 40.4577 18.4034C38.9754 18.0263 37.6682 17.2634 36.7188 16.2213C36.0256 16.9835 35.1372 17.6002 34.1215 18.0241C33.1059 18.4479 31.99 18.6677 30.8594 18.6667C29.7288 18.6677 28.6129 18.4479 27.5972 18.0241C26.5816 17.6002 25.6931 16.9835 25 16.2213C24.3069 16.9835 23.4184 17.6002 22.4028 18.0241C21.3871 18.4479 20.2712 18.6677 19.1406 18.6667C18.01 18.6677 16.8941 18.4479 15.8785 18.0241C14.8628 17.6002 13.9744 16.9835 13.2812 16.2213C12.3318 17.2634 11.0246 18.0263 9.5423 18.4034C8.05997 18.7805 6.47661 18.753 5.01351 18.3247C3.55041 17.8963 2.2807 17.0886 1.38182 16.0145C0.482943 14.9403 -0.000170621 13.6533 4.52017e-08 12.3333V11.6533C3.93986e-05 10.6987 0.400177 9.77555 1.12812 9.05067L9.28125 0.933333ZM14.8438 12.3333C14.8438 13.3058 15.2965 14.2384 16.1023 14.9261C16.9081 15.6137 18.001 16 19.1406 16C20.2802 16 21.3732 15.6137 22.179 14.9261C22.9848 14.2384 23.4375 13.3058 23.4375 12.3333C23.4375 11.9797 23.6021 11.6406 23.8951 11.3905C24.1882 11.1405 24.5856 11 25 11C25.4144 11 25.8118 11.1405 26.1049 11.3905C26.3979 11.6406 26.5625 11.9797 26.5625 12.3333C26.5625 13.3058 27.0152 14.2384 27.821 14.9261C28.6268 15.6137 29.7198 16 30.8594 16C31.999 16 33.0919 15.6137 33.8977 14.9261C34.7035 14.2384 35.1562 13.3058 35.1562 12.3333C35.1562 11.9797 35.3209 11.6406 35.6139 11.3905C35.9069 11.1405 36.3043 11 36.7188 11C37.1332 11 37.5306 11.1405 37.8236 11.3905C38.1166 11.6406 38.2812 11.9797 38.2812 12.3333C38.2812 13.3058 38.734 14.2384 39.5398 14.9261C40.3456 15.6137 41.4385 16 42.5781 16C43.7177 16 44.8107 15.6137 45.6165 14.9261C46.4223 14.2384 46.875 13.3058 46.875 12.3333V11.6533C46.875 11.3355 46.742 11.0282 46.5 10.7867L38.3438 2.66667H11.6562L3.5 10.7867C3.25796 11.0282 3.12497 11.3355 3.125 11.6533V12.3333C3.125 13.3058 3.57771 14.2384 4.38353 14.9261C5.18935 15.6137 6.28227 16 7.42188 16C8.56148 16 9.6544 15.6137 10.4602 14.9261C11.266 14.2384 11.7188 13.3058 11.7188 12.3333C11.7188 11.9797 11.8834 11.6406 12.1764 11.3905C12.4694 11.1405 12.8668 11 13.2812 11C13.6957 11 14.0931 11.1405 14.3861 11.3905C14.6791 11.6406 14.8438 11.9797 14.8438 12.3333ZM4.6875 20C5.1019 20 5.49933 20.1405 5.79235 20.3905C6.08538 20.6406 6.25 20.9797 6.25 21.3333V37.3333H9.375V24C9.375 23.2928 9.70424 22.6145 10.2903 22.1144C10.8763 21.6143 11.6712 21.3333 12.5 21.3333H21.875C22.7038 21.3333 23.4987 21.6143 24.0847 22.1144C24.6708 22.6145 25 23.2928 25 24V37.3333H43.75V21.3333C43.75 20.9797 43.9146 20.6406 44.2076 20.3905C44.5007 20.1405 44.8981 20 45.3125 20C45.7269 20 46.1243 20.1405 46.4174 20.3905C46.7104 20.6406 46.875 20.9797 46.875 21.3333V37.3333H48.4375C48.8519 37.3333 49.2493 37.4738 49.5424 37.7239C49.8354 37.9739 50 38.313 50 38.6667C50 39.0203 49.8354 39.3594 49.5424 39.6095C49.2493 39.8595 48.8519 40 48.4375 40H1.5625C1.1481 40 0.750671 39.8595 0.457646 39.6095C0.16462 39.3594 4.52017e-08 39.0203 4.52017e-08 38.6667C4.52017e-08 38.313 0.16462 37.9739 0.457646 37.7239C0.750671 37.4738 1.1481 37.3333 1.5625 37.3333H3.125V21.3333C3.125 20.9797 3.28962 20.6406 3.58265 20.3905C3.87567 20.1405 4.2731 20 4.6875 20ZM12.5 37.3333H21.875V24H12.5V37.3333ZM28.125 24C28.125 23.2928 28.4542 22.6145 29.0403 22.1144C29.6263 21.6143 30.4212 21.3333 31.25 21.3333H37.5C38.3288 21.3333 39.1237 21.6143 39.7097 22.1144C40.2958 22.6145 40.625 23.2928 40.625 24V32C40.625 32.7072 40.2958 33.3855 39.7097 33.8856C39.1237 34.3857 38.3288 34.6667 37.5 34.6667H31.25C30.4212 34.6667 29.6263 34.3857 29.0403 33.8856C28.4542 33.3855 28.125 32.7072 28.125 32V24ZM37.5 24H31.25V32H37.5V24Z" fill="#753F21"/>
            </svg>
        </div>
        <div className='text-[#753F21]'>Years Of Shop</div>
        <hr className='border border-[#753F21] w-full'/>
        <div className='text-[#753F21] text-[30px] font-bold'>45+</div>
      </div>
      <div className='flex flex-col items-center gap-3'>
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="51" height="41" viewBox="0 0 51 41" fill="none">
                <path d="M33.3125 6.36574C33.3125 8.05404 32.4894 9.67319 31.0243 10.867C29.5591 12.0608 27.572 12.7315 25.5 12.7315C23.428 12.7315 21.4409 12.0608 19.9757 10.867C18.5106 9.67319 17.6875 8.05404 17.6875 6.36574C17.6875 4.67744 18.5106 3.05829 19.9757 1.86448C21.4409 0.670674 23.428 0 25.5 0C27.572 0 29.5591 0.670674 31.0243 1.86448C32.4894 3.05829 33.3125 4.67744 33.3125 6.36574ZM48.9375 7.63889C48.9375 8.98953 48.279 10.2849 47.1069 11.2399C45.9348 12.1949 44.3451 12.7315 42.6875 12.7315C41.0299 12.7315 39.4402 12.1949 38.2681 11.2399C37.096 10.2849 36.4375 8.98953 36.4375 7.63889C36.4375 6.28825 37.096 4.99293 38.2681 4.03788C39.4402 3.08284 41.0299 2.5463 42.6875 2.5463C44.3451 2.5463 45.9348 3.08284 47.1069 4.03788C48.279 4.99293 48.9375 6.28825 48.9375 7.63889ZM8.3125 12.7315C9.9701 12.7315 11.5598 12.1949 12.7319 11.2399C13.904 10.2849 14.5625 8.98953 14.5625 7.63889C14.5625 6.28825 13.904 4.99293 12.7319 4.03788C11.5598 3.08284 9.9701 2.5463 8.3125 2.5463C6.6549 2.5463 5.06518 3.08284 3.89308 4.03788C2.72098 4.99293 2.0625 6.28825 2.0625 7.63889C2.0625 8.98953 2.72098 10.2849 3.89308 11.2399C5.06518 12.1949 6.6549 12.7315 8.3125 12.7315ZM13 18.4606C13 16.7037 14.75 15.2778 16.9062 15.2778H34.0938C36.25 15.2778 38 16.7037 38 18.4606V30.5556C38 33.2568 36.683 35.8475 34.3388 37.7576C31.9946 39.6677 28.8152 40.7407 25.5 40.7407C22.1848 40.7407 19.0054 39.6677 16.6612 37.7576C14.317 35.8475 13 33.2568 13 30.5556V18.4606ZM9.875 18.4606C9.875 17.2817 10.3125 16.1894 11.0594 15.2778H4.40625C2.25 15.2778 0.5 16.7037 0.5 18.4606V28.0093C0.499854 29.0994 0.786058 30.1769 1.33938 31.1694C1.8927 32.1619 2.70033 33.0465 3.70798 33.7635C4.71564 34.4806 5.89999 35.0137 7.18146 35.3269C8.46292 35.6401 9.81181 35.7262 11.1375 35.5794C10.3028 33.9919 9.87329 32.2826 9.875 30.5556V18.4606ZM41.125 30.5556C41.125 32.338 40.675 34.0389 39.8625 35.5794C40.275 35.6252 40.6958 35.6481 41.125 35.6481C43.6114 35.6481 45.996 34.8433 47.7541 33.4108C49.5123 31.9782 50.5 30.0352 50.5 28.0093V18.4606C50.5 16.7037 48.75 15.2778 46.5938 15.2778H39.9406C40.6906 16.1894 41.125 17.2817 41.125 18.4606V30.5556Z" fill="#753F21"/>
            </svg>
        </div>
        <div className='text-[#753F21]'>Chef</div>
        <hr className='border border-[#753F21] w-full'/>
        <div className='text-[#753F21] text-[30px] font-bold'>30+</div>
      </div>
      <div className='flex flex-col items-center gap-3'>
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="51" height="40" viewBox="0 0 51 40" fill="none">
                <path d="M12.2508 40H0.5V22H5.50033L12.2508 40ZM45.5004 14H30.502V6C30.502 4.4087 29.7117 2.88258 28.3051 1.75736C26.8985 0.632141 24.9907 0 23.0015 0H20.5013V8L13.2508 15.25C11.471 17.0297 10.5012 19.2409 10.5007 21.52V24L15.751 38H36.5949C38.8254 38.0002 40.992 37.4038 42.7501 36.3058C44.5083 35.2078 45.7571 33.671 46.298 31.94L50.3507 18.97C50.535 18.3803 50.5488 17.7648 50.3912 17.1702C50.2336 16.5757 49.9087 16.0176 49.4411 15.5385C48.9736 15.0594 48.3757 14.6719 47.6929 14.4053C47.01 14.1387 46.2602 14.0001 45.5004 14Z" fill="#753F21"/>
            </svg>
        </div>
        <div className='text-[#753F21]'>Customers Satisfactions</div>
        <hr className='border border-[#753F21] w-full'/>
        <div className='text-[#753F21] text-[30px] font-bold'>2K+</div>
      </div>
    </div>
  )
}

export default AboutAchievement;