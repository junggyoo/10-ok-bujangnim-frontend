import React from "react";
import "./Appointment.scss";

class Appointment extends React.Component {
  render() {
    return (
      <div className="Appointment">
        <div className="appointmentContent">
          <p className="apTitle">페이셜 어포인트먼트</p>
          <p className="apTitle2">피부와 심신의 안정</p>
          <p>
            균형잡힌 스킨케어 관리를 위해 이솝 페이셜어포인트먼트는 피부에
            생기와 집중적인 영양을 공급하는 맞춤관리를 제공합니다.
          </p>
          <div className="detailLink">
            <div className="detailContent">
              더 알아보기
              <svg className="linkIcon" role="img" viewBox="0 0 50 50">
                <g>
                  <path d="M30.1,5.3L50,25.1L30.1,45h-6.6l18-17.6H0v-4.8h41.5l-18-17.6h6.6V5.3z"></path>
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div className="appointmentImg">
          <img
            className="relaxImg"
            alt="relax"
            src="https://www.aesop.com/medias/GenericImages-FacialAppointment-Primary-Mid-Desktop-1690x1400px.jpg?context=bWFzdGVyfGltYWdlc3wxNjM4NDh8aW1hZ2UvanBlZ3xpbWFnZXMvaDc5L2g0Ni84ODc5NzQ1NTY0NzAyLmpwZ3wyOTBjMmVmZDk3Y2NlZmJlYWNlMjM5ODM2ZDE4MTAxYzc4YTM5MjQ3YjE4ZDQ0ZmQ2NWM1ZWU5Y2MxNTg1NmNi"
          />
        </div>
      </div>
    );
  }
}

export default Appointment;
