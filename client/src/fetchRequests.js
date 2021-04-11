const backEnd = "http://localhost:5000/";
const entApi =
  "https://ivaee-internet-video-archive-entertainment-v1.p.rapidapi.com/";

export const loginRequest = (email, password) => {
  return fetch(backEnd + "api/auth", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email,
      password,
    }),
  }).then((res) => res.json());
};

export const entRequest = (title, programType) => {
  return fetch(
    entApi + "entertainment/match/",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-rapidapi-key": "529528fe49mshb79e1f661d36214p1d26d5jsn10cb7da958c2",
      },
    }.then((data) => data.json())
  );
};
