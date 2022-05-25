import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const MyWeek = (props) => {
  const history = useHistory();
  const day_text_dict = ["일", "월", "화", "수", "목", "금", "토"]

  console.log(
    Object.keys(day_text_dict).map((_d, idx) => day_text_dict[_d])
  );

  const week_days = Object.keys(day_text_dict).map((_d, idx) => {
    let today = new Date().getDay();
    let d =
      today + parseInt(_d) > 6
        ? today + parseInt(_d) - 7
        : today + parseInt(_d);

    return day_text_dict[d];
  });

  console.log(week_days);

  let rate_sum = 0;
  const week_rates = week_days.map((w, idx) => {
    const random =
      Math.floor(Math.random() * (Math.floor(5) - Math.ceil(1) + 1)) +
      Math.ceil(1);
    rate_sum += random;

    return {
      day: w,
      rate: random,
    };
  });

  console.log(
    week_rates,
    week_rates.length
  );

  const rate_avg = (rate_sum / week_rates.length).toFixed(1);
  const [avg, setAvg] = useState(rate_avg);

  return (
    <>
      <div
        style={{
          maxWidth: "350px",
          width: "80vw",
          height: "90vh",
          margin: "5vh auto",
          padding: "5vh 0",
          border: "1px solid #ddd",
          boxSizing: "border-box",
          borderRadius: "5px",
        }}
      >
        <h3 style={{ textAlign: "center" ,color:"rgb(65, 65, 65)"}}>내 일주일은?</h3>

        {week_rates.map((w, idx) => {
          return (
            <div
              key={`week_day_${idx}`}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "1rem 0",
                width: "100%",
              }}
            >
              <p style={{ margin: "0 0.5rem 0 0", fontWeight: "bold" }}>
                {w.day}
              </p>

              {Array.from({ length: 5 }, (item, idx) => {
                return (
                  <div
                    key={idx}
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "30px",
                      margin: "5px",
                      backgroundColor: w.rate < idx ? "#ddd" : "rgb(115, 52, 250)",
                    }}
                  ></div>
                );
              })}

              <div
                style={{
                  appearance: "none",
                  backgroundColor: "transparent",
                  borderColor: "puple",
                  width: "0",
                  height: "0",
                  borderTop: "1rem solid transparent",
                  borderBottom: "1rem solid transparent",
                  borderLeft: "1.6rem solid gray",
                  color: "#fff",
                  cursor: "pointer",
                  
                }}
                onClick={() => {
                  history.push(`/review/${w.day}`);
                }}
              ></div>
            </div>
          );
        })}
        <div
          style={{
            width: "8rem",
            margin: "1rem auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            textAlign: "center",
            color: "rgb(91, 74, 128)",
            padding: "9px",
            fontSize: "25px",
            fontWeight: "bold",
          }}
        >
          평균 평점 {avg}
          <div
            style={{
              width: "inherit",
              height: "fit-content",
              backgroundColor: "none",
              borderColor:"dodgerblue",
              borderRadius: "6px",
              textAlign: "center",
              margin: "10px 0 0 0",
            }}
            onClick={() => {
              setAvg(parseInt(0).toFixed(1));
            }}
          >
            <p style={{ color: "dodgerblue", fontSize: "18px" }}>Reset</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyWeek;
